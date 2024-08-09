'use client';

import { R2Template } from '@/lib/r2';
import { checkCorrectFileType } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

export default function MediaGrid({ items }: { items: R2Template[] }) {
   const searchParams = useSearchParams();

   return (
      <section className="grid grid-cols-5 gap-2 h-full mt-2">
         {items.map(
            item =>
               checkCorrectFileType(item.key, searchParams.get('media')) && (
                  <Link key={item.key} href={`/templates/${item.key}`}>
                     <Image src={item.url} alt={item.key} width={0} height={0} sizes="100vw" className="w-full h-auto rounded-md" />
                  </Link>
               )
         )}
      </section>
   );
}
