import { Module } from '@nestjs/common';
import { DashboardController } from './dashboard.controller';
import { DashboardService } from './dashboard.service';

@Module({
  controllers: [DashboardController], // BẮT BUỘC PHẢI CÓ DÒNG NÀY
  providers: [DashboardService],
})
export class DashboardModule {}