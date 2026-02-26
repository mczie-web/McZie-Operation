# ADR-002 — Arquitectura modular inicial

- **Estado:** Aprobado
- **Fecha:** 2026-02-26
- **Owner:** @mczie-web

## Contexto
Se requiere una base que permita crecer por capacidades sin acoplar lógica de negocio, integraciones y auditoría.

## Decisión
Adoptar estructura modular inicial:

- `core/`: utilidades transversales (logging, config, errors)
- `orchestration/`: reglas y flujos de coordinación
- `integrations/`: conectores externos (CRM, email, APIs)
- `audit/`: trazabilidad y evidencias de ejecución
- `routes/`: capa HTTP/API

## Razón
- Aísla cambios por dominio funcional.
- Facilita testing por módulo.
- Reduce deuda técnica al escalar casos de uso.

## Consecuencias
- Todo feature nuevo debe declarar módulo owner.
- Integraciones externas no entran en `core`.
- Auditoría es obligatoria para acciones críticas.
