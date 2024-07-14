'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavbarPages() {
   const pathname = usePathname();
   return (
      <section className="flex gap-x-8">
         <Link
            href="/memes"
            className={cn(
               'rounded-md px-3 py-1 hover:bg-[#2B2D4220] transition',
               pathname.startsWith('/memes') && 'text-white bg-red-dark hover:bg-[#D9042990]'
            )}>
            Memes
         </Link>
         <Link
            href="/templates"
            className={cn(
               'rounded-md px-3 py-1 hover:bg-[#2B2D4220] transition',
               pathname.startsWith('/templates') && 'text-white bg-red-dark hover:bg-[#D9042990]'
            )}>
            Templates
         </Link>
      </section>
   );
}
