import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { ApplicantStatus, InternshipTrack } from '@prisma/client';

@Injectable()
export class DashboardService {
  constructor(private prisma: PrismaService) {}

  async getSummary() {
    const where = {
      deletedAt: null,
    };

    const [
      totalApplicants,
      pending,
      shortlisted,
      accepted,
      rejected,
      trackCounts,
    ] = await Promise.all([
      this.prisma.applicant.count({ where }),

      this.prisma.applicant.count({
        where: {
          ...where,
          status: ApplicantStatus.PENDING,
        },
      }),

      this.prisma.applicant.count({
        where: {
          ...where,
          status: ApplicantStatus.SHORTLISTED,
        },
      }),

      this.prisma.applicant.count({
        where: {
          ...where,
          status: ApplicantStatus.ACCEPTED,
        },
      }),

      this.prisma.applicant.count({
        where: {
          ...where,
          status: ApplicantStatus.REJECTED,
        },
      }),

      this.prisma.applicant.groupBy({
        by: ['track'],
        where,
        _count: true,
      }),
    ]);

    const tracks = {
      FRONTEND: 0,
      BACKEND: 0,
      MOBILE: 0,
      UI_UX: 0,
      DATA_ANALYTICS: 0,
    };

    trackCounts.forEach((item) => {
      tracks[item.track] = item._count;
    });

    return {
      totalApplicants,
      pending,
      shortlisted,
      accepted,
      rejected,
      tracks,
    };
  }
}