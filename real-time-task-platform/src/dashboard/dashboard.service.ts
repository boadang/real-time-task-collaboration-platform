import { Injectable, NotFoundException } from '@nestjs/common'; // Thêm NotFoundException
import { PrismaService } from '../prisma/prisma.service'; 

@Injectable()
export class DashboardService {
  constructor(private prisma: PrismaService) {}

  async getDashboardSummary(userId: number) {
    // 1. Lấy thông tin User
    const user = await this.prisma.users.findUnique({
      where: { id: userId },
      select: { username: true, email: true },
    });

    // SỬA LỖI 1: Bắt buộc phải có User mới làm tiếp, không thì quăng lỗi 404
    if (!user) {
      throw new NotFoundException('Không tìm thấy người dùng này trong hệ thống');
    }

    // 2. Đếm số Task đã hoàn thành
    const completedTasksCount = await this.prisma.tasks.count({
      where: { 
        assigned_to: userId,
        status: 'DONE', 
      },
    });

    // 3. Lấy 3 thông báo mới nhất
    const recentActivities = await this.prisma.notifications.findMany({
      where: { user_id: userId },
      orderBy: { created_at: 'desc' },
      take: 3,
      select: { message: true, created_at: true },
    });

    // 4. Lấy danh sách Task đang làm (Khác 'DONE')
    const activeTasks = await this.prisma.tasks.findMany({
      where: {
        assigned_to: userId,
        status: { not: 'DONE' },
      },
      orderBy: { created_at: 'desc' },
      take: 3,
      select: { id: true, title: true, status: true },
    });

    // 5. Lấy Deadline tiếp theo
    const nextDeadlineTask = await this.prisma.tasks.findFirst({
      where: {
        assigned_to: userId,
        status: { not: 'DONE' },
        due_date: { not: null, gt: new Date() },
      },
      orderBy: { due_date: 'asc' },
      select: { title: true, due_date: true },
    });

    // 6. Kiểm tra phòng họp đang diễn ra
    const now = new Date();
    const activeMeeting = await this.prisma.meeting_schedule.findFirst({
      where: {
        start_time: { lte: now }, 
        end_time: { gte: now },   
      },
      include: { meeting_room: true }
    });

    // TRẢ VỀ JSON
    return {
      user: {
        username: user.username, // Hết báo đỏ vì ở trên đã check if (!user)
      },
      stats: {
        completedTasks: completedTasksCount,
      },
      recentActivities: recentActivities.map(act => ({
        content: act.message
      })),
      activeMeeting: activeMeeting ? true : false,
      activeTasks: activeTasks.map(task => ({
        id: task.id,
        title: task.title,
        status: task.status || 'TODO'
      })),
      nextDeadline: nextDeadlineTask ? {
        title: nextDeadlineTask.title,
        // SỬA LỖI 2: Thêm dấu ? để an toàn với trường có thể null
        date: nextDeadlineTask.due_date?.toLocaleDateString('vi-VN') 
      } : null
    };
  }
}