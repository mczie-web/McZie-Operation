import Fastify from 'fastify';
import { registerHealthRoute } from './routes/health.js';
import { registerReadyRoute } from './routes/ready.js';

export const buildApp = () => {
  const app = Fastify({ logger: false });
  void registerHealthRoute(app);
  void registerReadyRoute(app);
  return app;
};
