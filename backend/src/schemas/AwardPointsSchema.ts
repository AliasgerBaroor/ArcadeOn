import z from "zod";

export const AwardPointsSchema = z.object({
    userId: z.uuid(),
    points: z.number().int().positive(),
    reason: z.string().min(1),
    metadata: z.record(z.string(), z.string()).optional(),
})

export type AwardPointsBodyTypes = z.infer<typeof AwardPointsSchema>;