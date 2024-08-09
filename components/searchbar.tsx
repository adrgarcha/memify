'use client';

import { cn, createQueryString } from '@/lib/utils';
import { ClassValue } from 'clsx';
import { Search } from 'lucide-react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { ChangeEvent, useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import { Input } from './ui/input';

export default function SearchBar({ className }: { className?: ClassValue[] }) {
   const router = useRouter();
   const pathname = usePathname();
   const searchParams = useSearchParams();
   const [search, setSearch] = useState(searchParams.get('search') || '');

   const handleSearch = useDebouncedCallback((e: ChangeEvent<HTMLInputElement>) => {
      const searchValue = e.target.value;
      setSearch(searchValue);
      router.push(`${pathname}?${createQueryString(searchParams, 'search', searchValue)}`);
   }, 300);

   return (
      <section className={cn('relative flex items-center w-[700px] border-2 border-gray rounded-md', className)}>
         <Input
            type="text"
            placeholder="Search templates..."
            defaultValue={search}
            onChange={handleSearch}
            className="w-full mr-10 py-1 px-4 border-0 rounded-e-none"
         />
         <Search className="absolute right-2 hover:cursor-pointer hover:animate-pulse" />
      </section>
   );
}
