import type { Context } from "hono";
import type { AwardPointsBodyTypes } from "../schemas/AwardPointsSchema.js";
import { pointsTransactionDB, userDB } from "../db/aliases.js";
import { prisma } from '../config/infra/prisma.js';
import { PointsTransactionAction, Prisma } from "@prisma/client";

const reasonToAction: Record<string, PointsTransactionAction> = {
    daily_login: PointsTransactionAction.DAILY_LOGIN,
    achievement: PointsTransactionAction.ACHIEVEMENT,
    match_win: PointsTransactionAction.MATCH_WIN,
    match_loss: PointsTransactionAction.MATCH_LOSS,
    match_draw: PointsTransactionAction.MATCH_DRAW,
    refer: PointsTransactionAction.REFER,
    quest_complete: PointsTransactionAction.QUEST_COMPLETE,
    level_up: PointsTransactionAction.LEVEL_UP,
    event: PointsTransactionAction.EVENT,
    penalty: PointsTransactionAction.PENALTY,
    refund: PointsTransactionAction.REFUND,
    bonus: PointsTransactionAction.BONUS,
    purchase: PointsTransactionAction.PURCHASE,
    adjust: PointsTransactionAction.ADJUST,
    consume_item: PointsTransactionAction.CONSUME_ITEM,
    redeem: PointsTransactionAction.REDEEM,
    earn: PointsTransactionAction.EARN,
};

export const assignAwardPoints = async (c: Context) => {
    const { body } = c.get("validated") as { body: AwardPointsBodyTypes };

    const action = reasonToAction[body.reason] || PointsTransactionAction.EARN;
    const pointsDelta = body.points;

    await prisma.$transaction([
        pointsTransactionDB.create({
            data: {
                userId: body.userId,
                points: pointsDelta,
                action: action,
                reason: body.reason,
                metadata: body.metadata,
            }
        }),
        userDB.update({
            where: { id: body.userId },
            data: { points: { increment: pointsDelta } },
        })
    ]);

    return c.json({ message: "success" }, 200);
};
