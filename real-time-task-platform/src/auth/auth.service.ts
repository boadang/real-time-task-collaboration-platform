// src/auth/auth.service.ts
import { Injectable, ConflictException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../prisma/prisma.service';
import { Public } from './decorators/public.decorator';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async register(username, email, password) {
    // 1. Kiểm tra username đã tồn tại chưa
    const existingUser = await this.prisma.users.findFirst({ where: { username } });
    if (existingUser) throw new ConflictException('Username already exists');

    // 2. Hash mật khẩu (10 là salt rounds)
    const hashedPassword = await bcrypt.hash(password, 10);

    // 3. Tạo user mới
    return this.prisma.users.create({
      data: { username, email, password: hashedPassword },
    });
  }

  async login(username: string, password: string) {
    const user = await this.validateUser(username, password);
    
    // Tạo payload để nhúng vào token
    const payload = { username: user.username, sub: user.id };
    
    return {
      userId: user.id,
      username: user.username,
      token: this.jwtService.sign(payload),
    };
  }

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.prisma.users.findFirst({ where: { username } });
    
    if (user && await bcrypt.compare(pass, user.password)) {
      const { password: _, ...result } = user;
      return result;
    }
    throw new UnauthorizedException('Invalid credentials');
  }
}