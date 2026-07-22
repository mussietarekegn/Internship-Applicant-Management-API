import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

import { ConfigService } from '@nestjs/config';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(
  Strategy,
) {
  constructor(
    private configService: ConfigService,
    private prisma: PrismaService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),

      ignoreExpiration: false,

      secretOrKey:
        configService.getOrThrow<string>(
          'JWT_SECRET',
        ),
    });
  }

  async validate(payload: any) {
    const admin = await this.prisma.admin.findUnique({
      where: {
        id: payload.sub,
      },
    });

    if (!admin) {
      return null;
    }

    return {
      id: admin.id,
      email: admin.email,
    };
  }
}