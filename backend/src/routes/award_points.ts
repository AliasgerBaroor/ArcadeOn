import type { Hono } from "hono"
import { assignAwardPoints } from "../controllers/awardPointsController.js"
import { validateRequest } from "../sbc/utils/request-validator/request-validator.js"
import { AWARD_POINTS_BASE_URL } from "../constants/baseUrl.js"
import { AwardPointsSchema } from "../schemas/AwardPointsSchema.js"

export function registerAwardPointsRoutes(app: Hono) {
    app.post(`${AWARD_POINTS_BASE_URL}/award`, validateRequest({
        body: AwardPointsSchema,
    }), assignAwardPoints)
}