import type { Hono } from "hono";
import { USER_BASE_URL } from "../constants/baseUrl.js";
import { addUser, fetchUserProfile, loginUser } from "../controllers/userController.js";
import { validateRequest } from "../sbc/utils/request-validator/request-validator.js";
import { loginUserSchema } from "../schemas/loginUserSchema.js";
import { AuthParamsSchema } from "../schemas/AuthSchema.js";

export function registerUserRoutes(app: Hono) {
    app.post(`${USER_BASE_URL}/login`, validateRequest({
        body: loginUserSchema,
    }), loginUser)
    app.post(`${USER_BASE_URL}/user`, validateRequest({
        body: loginUserSchema,
    }), addUser)
    app.get(
      `${USER_BASE_URL}/user/profile/:id`,
      validateRequest({
        params: AuthParamsSchema,
      }),
      fetchUserProfile
    );
}
