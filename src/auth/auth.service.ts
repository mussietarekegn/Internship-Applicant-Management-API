import {
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import { LoginDto } from './dto/login.dto';

import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async login(dto: LoginDto) {
    const admin = await this.prisma.admin.findUnique({
      where: {
        email: dto.email,
      },
    });

    if (!admin) {
      throw new UnauthorizedException(
        'Invalid email or password',
      );
    }

    const passwordMatches = await bcrypt.compare(
      dto.password,
      admin.password,
    );

    if (!passwordMatches) {
      throw new UnauthorizedException(
        'Invalid email or password',
      );
    }

    const payload = {
      sub: admin.id,
      email: admin.email,
    };

    const access_token = await this.jwtService.signAsync(payload);

    return {
      access_token,
    };
  }
}