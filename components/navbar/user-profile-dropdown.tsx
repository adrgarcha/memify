'use client';

import { LogOut, User } from 'lucide-react';
import { DefaultSession } from 'next-auth';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Github from '../icons/github';
import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuItem,
   DropdownMenuLabel,
   DropdownMenuSeparator,
   DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import LogoutAlert from './logout-alert';

export default function UserProfileDropdown({ sessionUser }: { sessionUser: DefaultSession['user'] }) {
   const [open, setOpen] = useState(false);
   const dropdownItems = [
      {
         id: 'profile',
         label: 'Profile',
         icon: <User size={16} />,
         href: '/profile',
      },
      {
         id: 'github',
         label: 'Github',
         icon: <Github size={16} />,
         href: 'https://github.com/adrgarcha/memify',
         out: true,
         separator: true,
      },
   ];

   return (
      <>
         <DropdownMenu>
            <DropdownMenuTrigger>
               <Image
                  src={sessionUser?.image ? sessionUser.image : '/memify-logo.png'}
                  alt="User profile icon"
                  width={40}
                  height={40}
                  className="object-cover rounded-full border-[1.5px] border-gray"
               />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
               <DropdownMenuLabel>My Account</DropdownMenuLabel>
               <DropdownMenuSeparator />
               {dropdownItems.map(item => (
                  <div key={item.id}>
                     <DropdownMenuItem>
                        <Link href={item.href} target={item.out ? '_blank' : '_self'} className="flex items-center gap-x-2">
                           {item.icon}
                           <span>{item.label}</span>
                        </Link>
                     </DropdownMenuItem>
                     {item.separator && <DropdownMenuSeparator />}
                  </div>
               ))}
               <DropdownMenuItem className="hover:cursor-pointer">
                  <button onClick={() => setOpen(true)} className="flex items-center gap-x-2">
                     <LogOut size={16} />
                     <span>Log out</span>
                  </button>
               </DropdownMenuItem>
            </DropdownMenuContent>
         </DropdownMenu>
         <LogoutAlert open={open} setOpen={setOpen} />
      </>
   );
}
