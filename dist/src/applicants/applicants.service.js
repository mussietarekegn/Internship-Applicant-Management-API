"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicantsService = void 0;
const common_1 = require("@nestjs/common");
const common_2 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const client_1 = require("@prisma/client");
let ApplicantsService = class ApplicantsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(dto) {
        try {
            return await this.prisma.applicant.create({
                data: dto
            });
        }
        catch (error) {
            if (error.code === 'P2002') {
                throw new common_1.BadRequestException('Applicant email already exists');
            }
            throw error;
        }
    }
    async findAll(query) {
        const { search, status, track, page = 1, limit = 10, sortBy = 'createdAt', order = 'desc' } = query;
        const skip = (Number(page) - 1)
            *
                Number(limit);
        const where = {
            deletedAt: null
        };
        if (search) {
            where.OR = [
                {
                    name: {
                        contains: search,
                        mode: 'insensitive'
                    }
                },
                {
                    email: {
                        contains: search,
                        mode: 'insensitive'
                    }
                }
            ];
        }
        if (status) {
            where.status = status;
        }
        if (track) {
            where.track = track;
        }
        const allowedSortFields = [
            'createdAt',
            'name',
            'email',
            'status'
        ];
        const safeSort = allowedSortFields.includes(sortBy) ? sortBy : 'createdAt';
        const [items, total] = await Promise.all([
            this.prisma.applicant.findMany({
                where,
                skip,
                take: Number(limit),
                orderBy: {
                    [safeSort]: order === 'asc'
                        ?
                            'asc'
                        :
                            'desc'
                }
            }),
            this.prisma.applicant.count({
                where
            })
        ]);
        return {
            data: items,
            meta: {
                total,
                page: Number(page),
                limit: Number(limit),
                totalPages: Math.ceil(total / Number(limit))
            }
        };
    }
    async findOne(id) {
        const applicant = await this.prisma.applicant.findFirst({
            where: {
                id,
                deletedAt: null
            }
        });
        if (!applicant) {
            throw new common_1.NotFoundException('Applicant not found');
        }
        return applicant;
    }
    async update(id, dto) {
        await this.findOne(id);
        return this.prisma.applicant.update({
            where: {
                id
            },
            data: dto
        });
    }
    async remove(id) {
        await this.findOne(id);
        return this.prisma.applicant.update({
            where: {
                id
            },
            data: {
                deletedAt: new Date()
            }
        });
    }
    async updateStatus(id, dto) {
        const applicant = await this.findOne(id);
        if (applicant.status ===
            client_1.ApplicantStatus.REJECTED
            &&
                dto.status ===
                    client_1.ApplicantStatus.ACCEPTED) {
            throw new common_1.BadRequestException('Rejected applicants cannot be directly accepted');
        }
        return this.prisma.applicant.update({
            where: {
                id
            },
            data: {
                status: dto.status
            }
        });
    }
    async updateNotes(id, dto) {
        await this.findOne(id);
        return this.prisma.applicant.update({
            where: {
                id
            },
            data: {
                notes: dto.notes
            }
        });
    }
};
exports.ApplicantsService = ApplicantsService;
exports.ApplicantsService = ApplicantsService = __decorate([
    (0, common_2.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ApplicantsService);
//# sourceMappingURL=applicants.service.js.map