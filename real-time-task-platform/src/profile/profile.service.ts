import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProfileService {
  // Giả sử bạn inject Database Service vào đây (ví dụ PrismaService hoặc TypeORM Repository)
  constructor(private prisma: PrismaService) {}

  async getProfile(userId: number) {
    const user = await this.prisma.users.findUnique({ where: { id: userId } });
    return {
        id: user?.id,
        username: user?.username,
        email: user?.email,
        avatar: 'https://i.pravatar.cc/150',
        role: 'user',
        joinedAt: user?.created_at
    }
  }

  async updateProfile(userId: number, updateData: any) {
    // Logic cập nhật DB ở đây
    // Ví dụ: return await this.prisma.user.update({ where: { id: userId }, data: updateData });
    
    return {
      message: 'Cập nhật profile thành công!',
      updatedData: updateData
    };
  }
}