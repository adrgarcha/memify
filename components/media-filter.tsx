'use client';

import { cn, createQueryString } from '@/lib/utils';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export default function MediaFilter() {
   const router = useRouter();
   const pathname = usePathname();
   const searchParams = useSearchParams();

   useEffect(() => {
      router.push(`${pathname}?${createQueryString(searchParams, 'media', 'all')}`);
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   return (
      <section className="grid grid-cols-3 border-2 border-gray-dark rounded-full">
         <MediaOption mediaType="All" />
         <MediaOption mediaType="Images" />
         <MediaOption mediaType="GIFs" />
      </section>
   );
}

function MediaOption({ mediaType }: { mediaType: string }) {
   const router = useRouter();
   const pathname = usePathname();
   const searchParams = useSearchParams();

   const handleClick = () => {
      router.push(`${pathname}?${createQueryString(searchParams, 'media', mediaType.toLowerCase())}`);
   };

   return (
      <button
         onClick={handleClick}
         className={cn(
            'w-full px-4 font-semibold rounded-full hover:bg-red hover:text-white transition',
            searchParams.get('media') === mediaType.toLowerCase() && 'bg-red text-white'
         )}>
         {mediaType}
      </button>
   );
}
