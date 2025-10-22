import type { AuthParamsTypes } from './../schemas/AuthSchema.js';
import type { Context } from "hono";
import type { RewardBodyTypes } from "../schemas/RewardSchema.js";
import { rewardDB } from "../db/aliases.js";

export const createReward = async (c: Context) => {
    const { body } = c.get("validated") as { body: RewardBodyTypes };

    try {
        const reward = await rewardDB.create({
            data: {
                name: body.name,
                description: body.description,
                category: body.category,
                icon: body.icon,
                pointCost: body.pointCost,
                stock: body.stock,
                isActive: body.isActive ?? true,
                metadata: body.metadata,
            }
        });

        return c.json({ reward }, 201);
    } catch (error) {
        return c.json({ error: "Failed to create reward", details: (error as Error).message }, 500);
    }
};

export const findAllRewards = async (c: Context) => {
    try {
        const rewards = await rewardDB.findMany();
        return c.json({ rewards }, 200);
    } catch (error) {
        return c.json({ error: "Failed to fetch rewards", details: (error as Error).message }, 500);
    }
};

export const findRewardById = async (c: Context) => {
    const { params: { id } } = c.get("validated") as { params: AuthParamsTypes };
    try {
        const reward = await rewardDB.findUnique({
            where: { id }
        });
        if (!reward) {
            return c.json({ error: "Reward not found" }, 404);
        }
        return c.json({ reward }, 200);
    } catch (error) {
        return c.json({ error: "Failed to fetch reward", details: (error as Error).message }, 500);
    }
};


export const updateReward = async (c: Context) => {
    const { body, params: { id } } = c.get("validated") as { body: Partial<RewardBodyTypes>; params: AuthParamsTypes };

    try {
        const reward = await rewardDB.update({
            where: { id },
            data: body,
        });
        return c.json({ reward }, 200);
    } catch (error) {
        return c.json({ error: "Failed to update reward", details: (error as Error).message }, 500);
    }
};

export const deleteReward = async (c: Context) => {
    const { params: { id } } = c.get("validated") as { params: AuthParamsTypes };
    try {
        const deleted = await rewardDB.delete({
            where: { id },
        });
        return c.json({ success: true, deleted }, 200);
    } catch (error) {
        return c.json({ error: "Failed to delete reward", details: (error as Error).message }, 500);
    }
};
