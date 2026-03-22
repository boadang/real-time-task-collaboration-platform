import { Controller, Post, Body, Get, Param, UseGuards } from '@nestjs/common';
import { LoungeService } from './lounge.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard'; // Bảo vệ route nếu cần

@Controller('lounge')
export class LoungeController {
  constructor(private readonly loungeService: LoungeService) {}

  // API Tạo phòng: POST /api/lounge/create
  @UseGuards(JwtAuthGuard) // Chỉ cho user đã đăng nhập tạo phòng
  @Post('create')
  async createRoom(@Body() createData: any) {
    return this.loungeService.createRoom(createData);
  }

  // API Kiểm tra phòng trước khi join: POST /api/lounge/verify
  @UseGuards(JwtAuthGuard)
  @Post('verify')
  async verifyRoom(@Body() body: { roomId: string }) {
    return this.loungeService.verifyRoom(body.roomId);
  }
}