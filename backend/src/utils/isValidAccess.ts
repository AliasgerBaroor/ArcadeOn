import type { User } from "@prisma/client";
import { ApiError } from "../sbc/utils/error-handler/error-handler.js";

export const isValidAccess = (user: User | null) => {
    if (user?.role !== "ADMIN") throw new ApiError('You dont have access for this!', 401, 'INVALID_ACCESS');
}