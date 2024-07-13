import { User } from '@prisma/client';
import prisma from './db';

export const getUser = async (email: string): Promise<User | null> => {
   return prisma.user.findUnique({
      where: { email },
   });
};
