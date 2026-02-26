# Arquitectura Base (Draft)

## Principios
- Simplicidad primero.
- Observabilidad desde el inicio.
- Seguridad por defecto.
- Diseño modular para escalar.

## Capas
1. Interface/API
2. Orquestación de tareas
3. Integraciones externas
4. Persistencia y auditoría

## Reglas operativas
- Ningún flujo sin trazabilidad.
- Ningún cambio crítico sin revisión.
- Métricas mínimas por módulo: latencia, éxito, errores.
