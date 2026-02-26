# Executive Dashboard (v0.1)

## Objetivo
Dar visibilidad semanal de ejecución y crecimiento con métricas accionables.

## Cadencia
- **Diario (15 min):** estado operativo y bloqueos
- **Semanal (45 min):** KPIs, decisiones y re-priorización
- **Mensual (90 min):** performance, capacidad y roadmap

## KPIs núcleo

### 1) Growth
- Oportunidades calificadas activas (#)
- Propuestas enviadas (#)
- Tasa Proposal → Negotiation (%)
- Deals cerrados (# / valor)

### 2) Delivery
- SLA respuesta inicial (<10 min)
- SLA borrador (<2 h)
- SLA propuesta (<48 h)
- % oportunidades con Next Action + Fecha + Dueño

### 3) Operación
- Incidentes críticos (#)
- MTTR (tiempo medio de resolución)
- % flujos con trazabilidad completa

### 4) Calidad
- Éxito CI (%)
- Tiempo de ciclo PR (apertura → merge)
- Defectos post-release (#)

## Umbrales de alerta
- Proposal → Negotiation < 35% (alerta comercial)
- Oportunidades sin movimiento > 48h (riesgo enfriamiento)
- CI success < 95% semanal (riesgo técnico)
- Cualquier incidente crítico sin owner asignado (alerta roja)

## Formato de reporte semanal
- **Resumen ejecutivo (3 bullets)**
- **KPIs vs objetivo**
- **Bloqueos principales**
- **Decisiones requeridas del owner**
- **Plan 7 días**
