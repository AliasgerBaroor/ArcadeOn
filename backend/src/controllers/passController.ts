import type { AuthParamsTypes } from '../schemas/AuthSchema.js';
import type { Context } from "hono";
import type { PassBodyTypes } from "../schemas/PassSchema.js";
import { passDB } from "../db/aliases.js";
import { addMonths } from '../utils/dateUtils.js';

export const createPass = async (c: Context) => {
    const { body } = c.get("validated") as { body: PassBodyTypes };

    const startDate = new Date();
    const endDate = addMonths(startDate, 2);

    try {
        const pass = await passDB.create({
            data: {
                name: body.name,
                type: body.type,
                season: body.season,
                startDate,
                endDate,
                price: body.price,
                isActive: body.isActive,
                rewards: body.rewards,
            },
        });

        return c.json({ pass }, 201);
    } catch (error) {
        return c.json({ error: "Failed to create pass", details: (error as Error).message }, 500);
    }
};

export const findAllPasss = async (c: Context) => {
    
    try {
        const passes = await passDB.findMany();
        console.log("passes", passes);
        
        return c.json({ passes }, 200);
    } catch (error) {
        return c.json({ error: "Failed to fetch passes", details: (error as Error).message }, 500);
    }
};

export const findPassById = async (c: Context) => {
    const { params: { id } } = c.get("validated") as { params: AuthParamsTypes };
    try {
        const pass = await passDB.findUnique({
            where: { id }
        });
        if (!pass) {
            return c.json({ error: "Pass not found" }, 404);
        }
        return c.json({ pass }, 200);
    } catch (error) {
        return c.json({ error: "Failed to fetch pass", details: (error as Error).message }, 500);
    }
};


export const updatePass = async (c: Context) => {
    const { body, params: { id } } = c.get("validated") as { body: Partial<PassBodyTypes>; params: AuthParamsTypes };

    try {
        const pass = await passDB.update({
            where: { id },
            data: body,
        });
        return c.json({ pass }, 200);
    } catch (error) {
        return c.json({ error: "Failed to update pass", details: (error as Error).message }, 500);
    }
};

export const deletePass = async (c: Context) => {
    const { params: { id } } = c.get("validated") as { params: AuthParamsTypes };
    try {
        const deleted = await passDB.delete({
            where: { id },
        });
        return c.json({ success: true, deleted }, 200);
    } catch (error) {
        return c.json({ error: "Failed to delete reward", details: (error as Error).message }, 500);
    }
};
