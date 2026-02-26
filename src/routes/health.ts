import { FastifyInstance } from 'fastify';
import { log } from '../core/logger.js';

export const registerHealthRoute = async (app: FastifyInstance) => {
  app.get('/health', async (request, reply) => {
    const traceId = request.id;

    log('info', 'health_check_requested', {
      traceId,
      route: '/health',
    });

    return reply.status(200).send({
      status: 'ok',
      service: process.env.SERVICE_NAME ?? 'mczie-operation',
      traceId,
      timestamp: new Date().toISOString(),
    });
  });
};
