// ========== 1. Framework Core ==========
import { Hono } from 'hono';
import { serveStatic } from '@hono/node-server/serve-static'
import { fileURLToPath } from 'url';
import path from 'path';

// ========== 2. Infrastructure & App Startup ==========
import { bootstrap } from './config/infra/kafka.js';

// ========== 3. Core System Middlewares ==========
import { uploader } from './middlewares/s3FileUpload.js';
import { kafkaMiddleware } from './middlewares/kafka.js';
import { prismaMiddleware } from './middlewares/prisma.js';
import { redisMiddleware } from './middlewares/redis.js';
import { jwtConfigMiddleware } from './middlewares/jwtConfig.js';

// ========== 4. Security, Logging, API Policies ==========
import { apiRateLimiter } from './middlewares/rateLimiter.js';
import { userJwtAuth } from './middlewares/jwtAuth.js';
import { errorHandler } from './sbc/utils/error-handler/error-handler.js';

// ========== 5. Business Logic & CQRS ==========

// ========== 6. Routes ==========
import { registerUserRoutes } from './routes/user.js';
import { registerAwardPointsRoutes } from './routes/award_points.js';
import { registerPassRoutes } from './routes/pass.js';

// ========== 7. Types ==========

// ========== 8. Constants ==========
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ========== 9. App Initialization ==========
const app = new Hono();

// ========== 10. Infrastructure Bootstrap (e.g., Kafka) ==========
(async () => {
    try {
        await bootstrap();
    } catch (err) {
        console.error("Kafka failed to connect, exiting!", err);
        process.exit(1);
    }
})();

// ========== 11. Core Global Middlewares ==========
app.use('*', uploader.withS3);
app.use('*', kafkaMiddleware);
app.use('*', prismaMiddleware);
app.use('*', redisMiddleware);
app.use('*', jwtConfigMiddleware);

// ========== 12. API-Specific Middlewares ==========
app.use('/api/*', apiRateLimiter);
app.use('/api/users/*', (c, next) => {
    if (c.req.path === '/api/users/login') return next();
    return userJwtAuth(c, next);
});

app.use('/assets/*', serveStatic({
    root: path.resolve(__dirname, '../'),
    onNotFound(path, c) {
        console.log("[NOT FOUND]", path);
    },
}));

app.notFound((c) => c.text("Not Found", 404));

// ========== 13. Per-request Metadata ==========
app.use('*', async (c, next) => {
    const rid = c.req.header('x-request-id') ?? crypto.randomUUID();
    c.set('requestId', rid);
    await next();
});

// ========== 14. Error Handling ==========
app.use('*', errorHandler({
    problemDetails: { typeBase: 'https://api.arcadeon.com/problems' },
    includeStack: process.env.NODE_ENV !== 'production',
}));

// ========== 15. Response Headers ==========
app.use('*', async (c, next) => {
    await next();
    c.header('X-Powered-By', 'SB Creations');
});

// ========== 16. Logging ==========

// ========== 17. Route Registration ==========
registerUserRoutes(app);
registerAwardPointsRoutes(app);
registerPassRoutes(app);

app.get('/', (c) => c.text('ArcadeOn Alive!'));
app.route('/files', uploader.router);

// ========== 18. App Export ==========
export { app };
