import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
// Import PrismaService của bạn (đường dẫn có thể khác tùy project)
import { PrismaService } from '../prisma/prisma.service'; 

@Injectable()
export class LoungeService {
  constructor(private prisma: PrismaService) {}

  // 1. Logic TẠO PHÒNG MỚI
  async createRoom(data: { id: string; name: string; capacity: number; password?: string }) {
    // Kiểm tra xem ID phòng này đã có ai xài chưa
    const existingRoom = await this.prisma.meeting_room.findUnique({
      where: { id: data.id }
    });

    if (existingRoom) {
      throw new BadRequestException('ID phòng này đã tồn tại, vui lòng chọn ID khác!');
    }

    // Lưu vào Database
    const newRoom = await this.prisma.meeting_room.create({
      data: {
        id: data.id,
        name: data.name,
        capacity: data.capacity,
        password: data.password || null,
      }
    });

    return { message: 'Tạo phòng thành công!', room: newRoom };
  }

  // 2. Logic KIỂM TRA PHÒNG (Dành cho chức năng Join)
  async verifyRoom(roomId: string) {
    const room = await this.prisma.meeting_room.findUnique({
      where: { id: roomId }
    });

    if (!room) {
      throw new NotFoundException('Không tìm thấy phòng họp với ID này!');
    }

    // Trả về thông tin phòng (Nhưng nhớ giấu password đi nhé)
    const { password, ...roomInfo } = room;
    return { message: 'Phòng hợp lệ!', room: roomInfo, hasPassword: !!password };
  }
}