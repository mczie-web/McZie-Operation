# Arquitectura (v0.2)

## Objetivo
Mantener una base operativa simple, trazable y escalable para flujos de ejecución con agentes.

## Módulos principales

1. **`src/routes` (API Layer)**
   - Expone endpoints HTTP (`/health`, `/ready`, `/events`).
   - Valida request/response y traduce errores de entrada.
   - No contiene lógica de persistencia directa.

2. **`src/audit` (Audit Domain + Repository Layer)**
   - Define el contrato `AuditRepository` para registrar eventos de ejecución.
   - Implementación `PrismaAuditRepository` encapsula Prisma.
   - Permite cambiar motor de datos sin tocar rutas.

3. **`src/core` (Cross-cutting)**
   - Logging estructurado (`logger.ts`).
   - Punto para observabilidad y políticas transversales.

4. **`prisma` (Persistence Schema)**
   - Modelo fuente de verdad para la base de datos (`ExecutionEvent`).
   - Migraciones y generación de cliente.

## Flujo de request de auditoría

`POST /events` → validación payload → `AuditRepository.createExecutionEvent()` → persistencia Prisma → respuesta 201 con metadata.

## Decisiones de diseño v0.2
- **Desacople de infraestructura:** rutas dependen de interfaz, no de Prisma.
- **Testabilidad:** inyección de dependencias en `buildApp` para mocks.
- **Escalabilidad modular:** dominio de auditoría preparado para nuevos adapters (ej. cola/event bus).

## Riesgos técnicos vigentes
- Aún no hay manejo explícito de errores de base de datos con mapping a códigos HTTP.
- No hay esquema de validación tipado (JSON schema/Zod) para `POST /events`.
- No hay paginación/consulta de eventos (solo escritura).
