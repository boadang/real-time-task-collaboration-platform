import { Module } from '@nestjs/common';
import { LoungeController } from './lounge.controller';
import { LoungeService } from './lounge.service';
import { PrismaModule } from '../prisma/prisma.module'; // Nếu PrismaService nằm trong PrismaModule

@Module({
  imports: [PrismaModule],
  controllers: [LoungeController],
  providers: [LoungeService],
})
export class LoungeModule {}