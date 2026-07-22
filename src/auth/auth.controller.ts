import { 
  Controller,
  Post,
  Body,
  Get,
  UseGuards,
} from '@nestjs/common';

import { ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { CurrentUser } from './decorators/current-user.decorator';

@Controller('api/auth')
export class AuthController {

  constructor(
    private readonly authService: AuthService,
  ) {}

  @Post('login')
  login(@Body() dto: LoginDto) {
    return this.authService.login(dto);
  }

  @Get('me')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  getMe(
    @CurrentUser() user: any,
  ) {
    return user;
  }
}