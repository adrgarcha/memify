import { PrismaAdapter } from '@auth/prisma-adapter';
import NextAuth from 'next-auth';
import credentials from 'next-auth/providers/credentials';
import discord from 'next-auth/providers/discord';
import github from 'next-auth/providers/github';
import google from 'next-auth/providers/google';
import prisma from './db';

export const { handlers, signIn, signOut, auth } = NextAuth({
   adapter: PrismaAdapter(prisma),
   providers: [credentials, google, discord, github],
   pages: {
      signIn: '/login',
      error: '/login',
   },
});
