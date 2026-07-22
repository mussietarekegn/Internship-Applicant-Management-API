import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

import { PrismaModule } from '../prisma/prisma.module';
import { JwtStrategy } from './strategies/jwt.strategy';
@Module({
  imports: [
    PrismaModule,

    PassportModule.register({
      defaultStrategy: 'jwt',
    }),

    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],

      useFactory: (config: ConfigService) => ({
        secret: config.getOrThrow<string>('JWT_SECRET'),

        signOptions: {
          expiresIn: config.getOrThrow('JWT_EXPIRES_IN'),
        },
      }),
    }),
  ],

  controllers: [AuthController],

  providers: [
    AuthService,
    JwtStrategy,
  ],

  exports: [
    AuthService,
    PassportModule,
    JwtModule,
    JwtStrategy,
  ],
})
export class AuthModule {}