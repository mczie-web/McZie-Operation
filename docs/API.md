# API (v0.1)

## GET /health
Retorna estado básico del servicio.

## GET /ready
Retorna estado de readiness con checks operativos mínimos.

## POST /events
Registra un evento de ejecución auditable.

### Request body
```json
{
  "type": "proposal_sent",
  "status": "success",
  "payload": {"client": "ACME"},
  "traceId": "optional-trace"
}
```

### Responses
- `201` creado
- `400` body inválido
