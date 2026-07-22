import { Controller, Get } from '@nestjs/common';
import { DashboardService } from './dashboard.service';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('api/dashboard')
@UseGuards(JwtAuthGuard)
export class DashboardController {
  constructor(
    private readonly dashboardService: DashboardService,
  ) {}

  @Get('summary')
  getSummary() {
    return this.dashboardService.getSummary();
  }
}