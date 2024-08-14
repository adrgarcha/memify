import { getUserTier } from '@/lib/query';
import { NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
   const email = req.nextUrl.searchParams.get('email')!;
   const user = await getUserTier(email);
   return new Response(JSON.stringify(user?.tier));
}
