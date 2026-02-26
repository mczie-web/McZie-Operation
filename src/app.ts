import Fastify from 'fastify';
import { registerHealthRoute } from './routes/health.js';
import { registerReadyRoute } from './routes/ready.js';
import { registerEventsRoute } from './routes/events.js';

export const buildApp = () => {
  const app = Fastify({ logger: false });
  void registerHealthRoute(app);
  void registerReadyRoute(app);
  void registerEventsRoute(app);
  return app;
};
