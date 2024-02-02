import { fakerID_ID } from '@faker-js/faker';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import { config } from 'dotenv';

config();

const prisma = new PrismaClient();
const bcryptRound = Number(process.env.BCRYPT_ROUND);

const main = async () => {
  await prisma.user.deleteMany();

  const roles = await prisma.role.findMany();
  for (let i = 0; i < 5; i++) {
    await prisma.user.create({
      data: {
        email: fakerID_ID.internet.email().toLowerCase(),
        name: fakerID_ID.person.fullName(),
        password: await bcrypt.hash(
          `password`,
          bcryptRound
        ),
        role_id:
          roles[Math.floor(Math.random() * roles.length)]
            .id,
      },
    });
  }
};

main()
  .catch((err) => {
    throw err;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
