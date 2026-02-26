import { buildApp } from './app.js';
import { log } from './core/logger.js';

const start = async () => {
  const app = buildApp();
  const port = Number(process.env.PORT ?? 3000);
  const host = '0.0.0.0';

  try {
    await app.listen({ port, host });
    log('info', 'service_started', { port, host });
  } catch (error) {
    log('error', 'service_start_failed', {
      error: error instanceof Error ? error.message : 'unknown_error',
    });
    process.exit(1);
  }
};

void start();
