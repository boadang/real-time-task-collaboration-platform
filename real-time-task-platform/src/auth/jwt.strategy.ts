import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private configService: ConfigService, private prisma: PrismaService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: configService.get<string>('JWT_SECRET') || 'default_secret',
        });
    }

    // Hàm này tự động chạy sau khi token được giải mã thành công
  // payload chính là object { sub: user.id, username: user.username } ta tạo lúc login
  async validate(payload: any) {
    const user = await this.prisma.users.findUnique({
      where: { id: payload.sub },
    });

    if (!user) {
      throw new UnauthorizedException('Không tìm thấy người dùng');
    }

    // Kết quả return ở đây sẽ được NestJS tự động gán vào biến `req.user`
    return { userId: payload.sub, username: payload.username };
  }
}