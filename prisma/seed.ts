import { PrismaClient } from '@prisma/client';
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

  console.log('Admin created');
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });