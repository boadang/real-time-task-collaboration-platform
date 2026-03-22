import { Controller, Get, Patch, Body, Req, UseGuards } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard'; 

@Controller('profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  // API lấy thông tin: GET /api/profile
  @UseGuards(JwtAuthGuard)
  @Get('get-data')
  getProfile(@Req() req: any) {
    const userId = req.user.id || req.user.userId;
    return this.profileService.getProfile(userId);
  }

  // API cập nhật thông tin: PATCH /api/profile
  @UseGuards(JwtAuthGuard)
  @Patch()
  updateProfile(@Req() req: any, @Body() updateData: any) {
    const userId = req.user.id || req.user.userId;
    return this.profileService.updateProfile(userId, updateData);
  }
}