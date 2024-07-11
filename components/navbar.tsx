'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import MemifyLogo from './memify-logo';
import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuItem,
   DropdownMenuLabel,
   DropdownMenuSeparator,
   DropdownMenuTrigger,
} from './ui/dropdown-menu';

export default function Navbar() {
   const [loggedIn, setIsLoggedIn] = useState(false);

   return (
      <header>
         <nav className="flex justify-between items-center px-3 py-1 font-semibold">
            <section>
               <Link href="/">
                  <MemifyLogo />
               </Link>
            </section>
            <section className="flex gap-x-4">
               <Link href="/memes">Memes</Link>
               <Link href="/templates">Templates</Link>
            </section>
            <section>{loggedIn ? <UserProfileDropdown /> : <Link href="/login">Log in</Link>}</section>
         </nav>
      </header>
   );
}

function UserProfileDropdown() {
   return (
      <DropdownMenu>
         <DropdownMenuTrigger>
            <Image src="/memify-logo.png" alt="User profile icon" width={50} height={50} />
         </DropdownMenuTrigger>
         <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>GitHub</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Log out</DropdownMenuItem>
         </DropdownMenuContent>
      </DropdownMenu>
   );
}
