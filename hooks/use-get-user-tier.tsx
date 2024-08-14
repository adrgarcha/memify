import { Tier } from '@prisma/client';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';

export default function useGetUserTier() {
   const [tier, setTier] = useState<Tier | null>(null);
   const session = useSession();

   useEffect(() => {
      const getUserTier = async () => {
         if (session.status === 'authenticated') {
            const response = await fetch(`/api/user-tier?email=${session.data?.user?.email}`);
            const userTier = await response.json();
            setTier(userTier);
         }
      };
      getUserTier();
   }, []);

   return { tier };
}
