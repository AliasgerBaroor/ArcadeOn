import { JWT_CONFIG } from "../constants/jwtAuth.js";
import { ApiError } from "../sbc/utils/error-handler/error-handler.js";
import type { AuthHeadersTypes } from "../schemas/AuthSchema.js";
import * as jwt from 'jsonwebtoken';

export const getAuthId = async (headers: AuthHeadersTypes) => {
    const authToken = headers.authorization.replace(/^Bearer\s+/i, "");

    const { sub } = jwt.verify(authToken, JWT_CONFIG.publicKey, {
        algorithms: [...JWT_CONFIG.algorithms],
        issuer: JWT_CONFIG.issuer,
        audience: JWT_CONFIG.audience,
    });

    const userId = typeof sub === "function" ? sub() : sub;
    if (typeof userId !== "string" || !userId) {
        throw new ApiError('Invalid userId', 400, 'INVALID_USER_ID');
    }

    return userId;
}