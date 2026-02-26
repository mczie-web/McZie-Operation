import { describe, it, expect } from 'vitest';
import { buildApp } from '../src/app.js';

describe('Health and readiness routes', () => {
  it('GET /health returns 200 and status ok', async () => {
    const app = buildApp();
    const response = await app.inject({ method: 'GET', url: '/health' });

    expect(response.statusCode).toBe(200);
    const body = response.json();
    expect(body.status).toBe('ok');
    expect(body.service).toBeTypeOf('string');
    expect(body.traceId).toBeTypeOf('string');
  });

  it('GET /ready returns 200 and status ready', async () => {
    const app = buildApp();
    const response = await app.inject({ method: 'GET', url: '/ready' });

    expect(response.statusCode).toBe(200);
    const body = response.json();
    expect(body.status).toBe('ready');
    expect(body.checks.app).toBe('ok');
  });
});
