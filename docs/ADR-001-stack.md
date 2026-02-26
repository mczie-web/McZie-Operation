# ADR-001 — Stack tecnológico inicial

- **Estado:** Aprobado (propuesto para ejecución inmediata)
- **Fecha:** 2026-02-26
- **Owner:** @mczie-web

## Contexto
Necesitamos construir rápido una base robusta para operación de agentes con trazabilidad, seguridad y escalabilidad.

## Decisión
Adoptar stack inicial:

1. **Runtime backend:** Node.js 22 + TypeScript
2. **API:** Fastify (alto rendimiento y tipado claro)
3. **Persistencia inicial:** PostgreSQL
4. **ORM/query layer:** Prisma
5. **Queue/eventos (fase 2):** Redis + BullMQ
6. **Testing:** Vitest
7. **Lint/format:** ESLint + Prettier
8. **Observabilidad mínima:** OpenTelemetry (fase 2) + logs estructurados JSON

## Razón de negocio
- Velocidad de ejecución alta con talento ampliamente disponible.
- Excelente balance entre productividad y mantenibilidad.
- Escalable para pasar de MVP a operación real sin reescribir todo.

## Trade-offs
- Node single-thread requiere diseño cuidadoso para cargas CPU intensivas.
- Prisma abstrae mucho, pero puede limitar optimización fina en casos extremos.

## Consecuencias
- Se estandariza desarrollo full TS para reducir fricción.
- Arquitectura modular desde inicio para evitar deuda temprana.
- Migraciones de datos controladas desde día 1.

## Próximas acciones
1. Crear estructura base TypeScript.
2. Definir módulos iniciales (`core`, `orchestration`, `integrations`, `audit`).
3. Implementar health endpoint y primer flujo trazable.
