import { DashboardService } from './dashboard.service';
import { DashboardController } from './dashboard.controller';
import { Module } from '@nestjs/common';

@Module({
  controllers: [DashboardController],
  providers: [DashboardService],
})
export class DashboardModule {}