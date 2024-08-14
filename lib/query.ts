import { Tier, User } from '@prisma/client';
import prisma from './db';

export const getUser = async (email: string): Promise<User | null> => {
   return prisma.user.findUnique({
      where: { email },
   });
};

export const getUserTier = async (email: string): Promise<{ tier: Tier } | null> => {
   return prisma.user.findUnique({
      select: { tier: true },
      where: { email },
   });
};
