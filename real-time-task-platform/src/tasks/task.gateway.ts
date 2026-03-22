import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  ConnectedSocket,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

// Mở port socket (cùng port với HTTP hoặc port riêng), cho phép CORS từ Frontend React
@WebSocketGateway({ cors: { origin: 'http://localhost:5173' } })
export class TaskGateway {
  @WebSocketServer()
  server: Server; // Biến server dùng để phát (broadcast) tin nhắn đi toàn mạng

  // 1. Khi một user vào xem Task Board -> Cho họ "Join" vào một phòng (Room) riêng của Board đó
  @SubscribeMessage('join_board')
  handleJoinBoard(@ConnectedSocket() client: Socket, @MessageBody() boardId: number) {
    client.join(`board_${boardId}`);
    console.log(`Client ${client.id} joined board_${boardId}`);
  }

  // 2. Khi user kéo thả Task -> Gửi sự kiện này cho TẤT CẢ những người khác trong phòng
  @SubscribeMessage('update_task_status')
  handleTaskUpdate(@ConnectedSocket() client: Socket, @MessageBody() data: any) {
    const { boardId, taskId, newStatus } = data;
    
    // Logic: Gọi Service để lưu vào DB PostgreSQL ở đây...
    // this.taskService.updateStatus(taskId, newStatus);

    // Bắn sự kiện 'task_updated' tới tất cả user đang xem board này (Ngoại trừ người vừa kéo)
    client.to(`board_${boardId}`).emit('task_updated', {
      taskId,
      newStatus,
      updatedBy: client.id,
    });
  }
}