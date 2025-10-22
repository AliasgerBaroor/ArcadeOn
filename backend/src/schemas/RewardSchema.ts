import z from "zod";

export const RewardSchema = z.object({
    name: z.string().min(2).max(100),
    description: z.string().optional(),
    category: z.enum(['cosmetic', 'powerup', 'currency', 'merchandise']),
    icon: z.url().optional(),      
    pointCost: z.number().int().positive().min(1),        
    stock: z.number().int().min(0).nullable(),
    isActive: z.boolean().optional(),       
    metadata: z.any().optional()      
})

export type RewardBodyTypes = z.infer<typeof RewardSchema>;