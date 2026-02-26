# Database baseline

## Engine
PostgreSQL + Prisma.

## Initial model
- `ExecutionEvent`: evento auditable de ejecución.

## Próximo paso
1. Levantar Postgres local/docker.
2. Ejecutar:
```bash
npx prisma generate
npx prisma migrate dev --name init
```
