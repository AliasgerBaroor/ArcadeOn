import { env } from '../config/env.js';
import type { JwtAlg, NonEmptyArray } from '../sbc/utils/jwt-auth/jwt-auth.js';
import { promises as fs } from 'fs';
import type { Algorithm } from "jsonwebtoken";

const publicKey = await fs.readFile(env.JWT_PUBLIC_KEY, 'utf8')
const privateKey = await fs.readFile(env.JWT_PRIVATE_KEY, 'utf8')

export const JWT_CONFIG: {
    publicKey: string;
    privateKey: string;
    algorithms: Algorithm[];
    headerName: string;
    scheme: string;
    issuer: string;
    audience: string;
    expiresIn: string;
} = {
    publicKey: publicKey,
    privateKey: privateKey,
    algorithms: ['ES256'],
    headerName: 'Authorization',
    scheme: 'Bearer',
    issuer: 'https://auth.sbcws.com',
    audience: 'oddiville-user-api',
    expiresIn: '12h',
};
