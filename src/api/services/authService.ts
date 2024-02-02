import { PrismaClient } from '@prisma/client';
import randomstring from 'randomstring';

const prisma = new PrismaClient();
export const getUsers = async () => {
  return await prisma.user.findMany();
};

export const getUserByEmail = async (email: string) => {
  return await prisma.user.findUnique({ where: { email } });
};

export const createToken = async (userId: number) => {
  const token = randomstring.generate();
  return await prisma.token.create({
    data: {
      token,
      user_id: userId,
      expires_at: new Date(
        Date.now() + 24 * 60 * 60 * 1000
      ),
    },
    select: { token: true },
  });
};

export const findToken = async (token: string) => {
  return await prisma.token.findUnique({
    where: { token },
    include: {
      user: {
        select: {
          id: true,
          email: true,
          name: true,
          is_blocked: true,
        },
      },
    },
  });
};
