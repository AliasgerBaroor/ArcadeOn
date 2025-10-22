import z from "zod"

export const PassSchema = z.object({
    name: z.string(),
    type: z.enum(["free", "paid"]),
    season: z.string(),
    price: z.number().optional(),
    isActive: z.boolean().default(true),
    rewards: z.array(z.object({
        level: z.number(),
        reward: z.string(),
        points: z.number(),
        image: z.string(),
    })),
});

export type PassBodyTypes = z.infer<typeof PassSchema>;