import { describe, it, expect, vi } from 'vitest';
import { buildApp } from '../src/app.js';
import { PrismaAuditRepository } from '../src/audit/repository.js';

describe('POST /events', () => {
  it('returns 201 and persists event using mocked Prisma', async () => {
    const createdAt = new Date('2026-02-26T17:00:00.000Z');
    const create = vi.fn().mockResolvedValue({
      id: 'evt_123',
      type: 'proposal_sent',
      status: 'success',
      traceId: 'trace_test',
      createdAt,
    });

    const repository = new PrismaAuditRepository({
      executionEvent: { create },
    });

    const app = buildApp({ auditRepository: repository });

    const response = await app.inject({
      method: 'POST',
      url: '/events',
      payload: {
        type: 'proposal_sent',
        status: 'success',
        payload: { client: 'ACME' },
        traceId: 'trace_test',
      },
    });

    expect(response.statusCode).toBe(201);
    expect(create).toHaveBeenCalledWith({
      data: {
        type: 'proposal_sent',
        status: 'success',
        payload: { client: 'ACME' },
        traceId: 'trace_test',
      },
    });

    expect(response.json()).toEqual({
      id: 'evt_123',
      type: 'proposal_sent',
      status: 'success',
      traceId: 'trace_test',
      createdAt: createdAt.toISOString(),
    });
  });

  it('returns 400 when type or status is missing', async () => {
    const create = vi.fn();
    const repository = new PrismaAuditRepository({
      executionEvent: { create },
    });

    const app = buildApp({ auditRepository: repository });

    const response = await app.inject({
      method: 'POST',
      url: '/events',
      payload: {
        type: 'proposal_sent',
      },
    });

    expect(response.statusCode).toBe(400);
    expect(create).not.toHaveBeenCalled();
    expect(response.json()).toEqual({
      error: 'invalid_request',
      message: 'type and status are required',
    });
  });
});
