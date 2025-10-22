import type { Hono } from "hono"
import { validateRequest } from "../sbc/utils/request-validator/request-validator.js"
import { PASS_BASE_URL } from "../constants/baseUrl.js"
import { PassSchema } from "../schemas/PassSchema.js"
import { createPass, deletePass, findAllPasss, findPassById, updatePass } from "../controllers/passController.js"
import { AuthParamsSchema } from "../schemas/AuthSchema.js"

export function registerPassRoutes(app: Hono) {
    app.post(`${PASS_BASE_URL}`, validateRequest({
        body: PassSchema,
    }), createPass)
    app.get(`${PASS_BASE_URL}`, findAllPasss)
    app.get(
        `${PASS_BASE_URL}/:id`,
        validateRequest({
            params: AuthParamsSchema,
        }),
        findPassById
    );
    app.put(
        `${PASS_BASE_URL}/:id`,
        validateRequest({
            body: PassSchema.partial(),
            params: AuthParamsSchema,
        }),
        updatePass
    );
    app.delete(
        `${PASS_BASE_URL}/:id`,
        validateRequest({
            params: AuthParamsSchema,
        }),
        deletePass
    );
}