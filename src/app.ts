import Fastify from 'fastify';
import { registerHealthRoute } from './routes/health.js';

export const buildApp = () => {
  const app = Fastify({ logger: false });
  void registerHealthRoute(app);
  return app;
};
