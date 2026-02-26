# Roadmap 14 días (v0.2)

## Meta
Consolidar núcleo operativo auditable, con calidad de ingeniería y base lista para crecimiento comercial.

## Semana 1 (Días 1-7): Estabilidad y calidad

### Día 1-2
- Cerrar desacople API ↔ persistencia en módulos críticos.
- Estandarizar contratos de repositorio por dominio.

### Día 3-4
- Completar cobertura de tests para endpoints críticos (happy path + validaciones + fallas de infraestructura).
- Definir estrategia de mocks para servicios externos.

### Día 5
- Instrumentar métricas mínimas: latencia p95, tasa de error, throughput.
- Definir baseline de rendimiento.

### Día 6-7
- Hardening de CI: lint + test + build + chequeos de tipo obligatorios.
- Checklist de release interna (DoD técnica).

## Semana 2 (Días 8-14): Evolución funcional

### Día 8-9
- Implementar lectura de eventos (`GET /events`) con filtros básicos.
- Añadir paginación y orden por fecha.

### Día 10-11
- Diseñar módulo de casos de uso para trazabilidad operativa (separado de rutas).
- Preparar adapters para notificación asíncrona (webhook/cola).

### Día 12
- Revisar seguridad operativa: manejo de secretos, rate limits, validaciones de entrada.

### Día 13
- Prueba end-to-end en entorno staging con escenarios reales de operación.

### Día 14
- Release v0.3 candidate y retrospectiva ejecutiva:
  - qué mejoró,
  - qué bloquea crecimiento,
  - siguiente ciclo de 14 días.

## KPI del ciclo
- Build verde en main > 95%.
- Cobertura de endpoints críticos > 80%.
- MTTR de incidentes de integración < 2h.
- 0 regresiones en contratos públicos de API.
