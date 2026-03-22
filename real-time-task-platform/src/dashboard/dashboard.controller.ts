import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { DashboardService } from './dashboard.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard'; // Nhớ import Guard của bạn

@Controller('dashboard')
export class DashboardController {
  constructor(private readonly dashboardService: DashboardService) {}

  @UseGuards(JwtAuthGuard)
  @Get('summary')
  async getSummary(@Req() req) {
    // req.user.userId được giải mã từ Token bởi JwtStrategy
    return this.dashboardService.getDashboardSummary(req.user.userId); 
  }
}