import Fastify from 'fastify';
import { createAuditRepository, AuditRepository } from './audit/repository.js';
import { registerHealthRoute } from './routes/health.js';
import { registerReadyRoute } from './routes/ready.js';
import { registerEventsRoute } from './routes/events.js';

type BuildAppOptions = {
  auditRepository?: AuditRepository;
};

export const buildApp = ({ auditRepository = createAuditRepository() }: BuildAppOptions = {}) => {
  const app = Fastify({ logger: false });
  void registerHealthRoute(app);
  void registerReadyRoute(app);
  void registerEventsRoute(app, auditRepository);
  return app;
};
