import z from "zod";

export const AuthHeadersSchema = z.object({
    authorization: z.string().min(1, "Authorization header is required"),
})

export const AuthParamsSchema = z.object({
    id: z.string().min(1, "Id params required"),
})
export type AuthHeadersTypes = z.infer<typeof AuthHeadersSchema>;
export type AuthParamsTypes = z.infer<typeof AuthParamsSchema>;