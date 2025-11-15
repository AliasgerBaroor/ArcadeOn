// Library imports
import type { Context } from "hono";

// Types and interfaces
import type { LoginBodyTypes } from "../schemas/loginUserSchema.js";

// Internal modules (db, rule engine, config)
import { userDB } from "../db/aliases.js";
import { issueToken } from "../utils/security.js";
import { verifyPassword } from "../utils/hashing.js";
import type { AuthParamsTypes } from "../schemas/AuthSchema.js";

export const loginUser = async (c: Context) => {
    const { body } = c.get("validated") as { body: LoginBodyTypes };

    const user = await userDB.findUnique({
        where: { email: body.email },
    });

    if (!user) return c.json({ error: "user not found" }, 404);

    if(!await verifyPassword(body.password, user.password)) return c.json({ error: "Invalid password" }, 401);

    const token = issueToken({ id: user.id, email: user.email, role: user.role }, c);

    return c.json({token: token}, 200);
};


export const addUser = async (c: Context) => {
    
}

export const fetchUserProfile = async (c: Context) => {
    const {
      params: { id },
    } = c.get("validated") as { params: AuthParamsTypes };

       const user = await userDB.findUnique({
         where: { id },
       });

    if (!user) return c.json({ error: "user not found" }, 404);

    return c.json({ profile: user }, 200);
};