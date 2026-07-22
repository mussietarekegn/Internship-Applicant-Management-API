import { Get, Req, UseGuards} from '@nestjs/common';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';

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
    @UseGuards(JwtAuthGuard)
    getMe(@Req() req:any){

    return req.user;

}
}