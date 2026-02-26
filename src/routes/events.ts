import { FastifyInstance } from 'fastify';
import { AuditRepository } from '../audit/repository.js';
import { log } from '../core/logger.js';

export const registerEventsRoute = async (app: FastifyInstance, repository: AuditRepository) => {
  app.post('/events', async (request, reply) => {
    const traceId = request.id;
    const body = request.body as {
      type?: string;
      status?: string;
      payload?: unknown;
      traceId?: string;
    };

    if (!body?.type || !body?.status) {
      return reply.status(400).send({
        error: 'invalid_request',
        message: 'type and status are required',
      });
    }

    const event = await repository.createExecutionEvent({
      type: body.type,
      status: body.status,
      payload: (body.payload as object | undefined) ?? undefined,
      traceId: body.traceId ?? traceId,
    });

    log('info', 'execution_event_created', {
      traceId,
      eventId: event.id,
      type: event.type,
      status: event.status,
    });

    return reply.status(201).send({
      id: event.id,
      type: event.type,
      status: event.status,
      traceId: event.traceId,
      createdAt: event.createdAt,
    });
  });
};
