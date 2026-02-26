import { FastifyInstance } from 'fastify';
import { log } from '../core/logger.js';

export const registerReadyRoute = async (app: FastifyInstance) => {
  app.get('/ready', async (request, reply) => {
    const traceId = request.id;
    const checks = {
      app: 'ok',
      uptimeSeconds: Math.floor(process.uptime()),
      memoryRssMb: Math.round(process.memoryUsage().rss / 1024 / 1024),
      nodeEnv: process.env.NODE_ENV ?? 'development',
    };

    const ready = checks.app === 'ok';

    log('info', 'readiness_check_requested', {
      traceId,
      route: '/ready',
      ready,
      checks,
    });

    return reply.status(ready ? 200 : 503).send({
      status: ready ? 'ready' : 'not_ready',
      service: process.env.SERVICE_NAME ?? 'mczie-operation',
      traceId,
      checks,
      timestamp: new Date().toISOString(),
    });
  });
};
