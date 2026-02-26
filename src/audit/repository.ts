import { PrismaClient } from '@prisma/client';

export type CreateExecutionEventInput = {
  type: string;
  status: string;
  payload?: object;
  traceId?: string;
};

export type ExecutionEventRecord = {
  id: string;
  type: string;
  status: string;
  traceId: string | null;
  createdAt: Date;
};

type PrismaExecutionEventCreateInput = {
  data: {
    type: string;
    status: string;
    payload?: object;
    traceId?: string;
  };
};

export type PrismaLike = {
  executionEvent: {
    create: (args: PrismaExecutionEventCreateInput) => Promise<ExecutionEventRecord>;
  };
};

export interface AuditRepository {
  createExecutionEvent(input: CreateExecutionEventInput): Promise<ExecutionEventRecord>;
}

const prisma = new PrismaClient();

export class PrismaAuditRepository implements AuditRepository {
  constructor(private readonly db: PrismaLike = prisma) {}

  async createExecutionEvent(input: CreateExecutionEventInput): Promise<ExecutionEventRecord> {
    return this.db.executionEvent.create({
      data: {
        type: input.type,
        status: input.status,
        payload: input.payload,
        traceId: input.traceId,
      },
    });
  }
}

export const createAuditRepository = (): AuditRepository => new PrismaAuditRepository();
