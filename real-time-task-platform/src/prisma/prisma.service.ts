// src/prisma/prisma.service.ts
import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
// src/prisma/prisma.service.ts
import { PrismaClient } from '@prisma/client';
import { Pool } from 'pg';         
import { PrismaPg } from '@prisma/adapter-pg';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  constructor() {
    // Tạo connection pool (nên dùng pool thay vì kết nối đơn)
    const connectionString = process.env.DATABASE_URL;

    if (!connectionString) {
      throw new Error('DATABASE_URL is not defined in .env');
    }

    const pool = new Pool({ connectionString });

    const adapter = new PrismaPg(pool);

    // Truyền adapter vào đây ← đây là điểm mấu chốt
    super({ adapter });
  }

  async onModuleInit() {
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}