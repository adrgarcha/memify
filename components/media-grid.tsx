'use client';

import { R2Template } from '@/lib/r2';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { ScrollArea } from './ui/scroll-area';

export default function MediaGrid({ items, scroll = true }: { items: R2Template[]; scroll?: boolean }) {
   const searchParams = useSearchParams();
   const search = searchParams.get('search') || '';

   const cols = 5;
   const filteredItems = items.filter(item => item.key.includes(search));
   const columnItems = Array.from({ length: cols }, (_, i) => filteredItems.filter((_, index) => index % cols === i));

   const content = (
      <div className={`grid grid-cols-${cols} gap-x-2 h-full`}>
         {columnItems.map((col, colIndex) => (
            <div key={colIndex} className="flex flex-col gap-y-2">
               {col.map(item => (
                  <Link key={item.key} href={`/templates/${item.key}`} className="h-fit">
                     <Image src={item.url} alt={item.key} width={0} height={0} sizes="100vw" className="w-full h-auto rounded-md" />
                  </Link>
               ))}
            </div>
         ))}
      </div>
   );

   return scroll ? <ScrollArea className="h-[900px] mt-2">{content}</ScrollArea> : <div>{content}</div>;
}
