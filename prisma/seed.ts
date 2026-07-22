import { PrismaClient, ApplicantStatus, InternshipTrack } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  const password = await bcrypt.hash('admin123', 10);

  await prisma.admin.upsert({
    where: {
      email: 'admin@infnova.com',
    },
    update: {},
    create: {
      email: 'admin@infnova.com',
      password,
    },
  });

  await prisma.applicant.createMany({
    data:[{
      name:'Mussie',
      email:'moss@gmail.com',
      track:InternshipTrack.BACKEND,
      status:ApplicantStatus.PENDING
      },
      {
      name:'Tarekegn',
      email:'Tare@gmail.com',
      track:InternshipTrack.FRONTEND,
      status:ApplicantStatus.SHORTLISTED
      },
      {
      name:'Yonatan',
      email:'yoni@gmail.com',
      track:InternshipTrack.MOBILE,
      status:ApplicantStatus.ACCEPTED
      }
      ]
    });
    console.log('Seed completed');
    
  }

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });