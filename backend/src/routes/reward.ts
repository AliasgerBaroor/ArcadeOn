import type { Hono } from "hono"
import { validateRequest } from "../sbc/utils/request-validator/request-validator.js"
import { REWARD_BASE_URL } from "../constants/baseUrl.js"
import { RewardSchema } from "../schemas/RewardSchema.js"
import { createReward, deleteReward, findAllRewards, findRewardById, updateReward } from "../controllers/rewardController.js"
import { AuthParamsSchema } from "../schemas/AuthSchema.js"

export function registerRewardRoutes(app: Hono) {
    app.post(`${REWARD_BASE_URL}`, validateRequest({
        body: RewardSchema,
    }), createReward)
    app.get(`${REWARD_BASE_URL}`, findAllRewards)
    app.get(
        `${REWARD_BASE_URL}/:id`,
        validateRequest({
            params: AuthParamsSchema,
        }),
        findRewardById
    );
    app.put(
        `${REWARD_BASE_URL}/:id`,
        validateRequest({
            body: RewardSchema.partial(),
            params: AuthParamsSchema,
        }),
        updateReward
    );
    app.delete(
        `${REWARD_BASE_URL}/:id`,
        validateRequest({
            params: AuthParamsSchema,
        }),
        deleteReward
    );
}