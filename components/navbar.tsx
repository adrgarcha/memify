import { signOutUser } from '@/app/login/actions';
import { auth } from '@/lib/auth';
import { LogOut, User } from 'lucide-react';
import { DefaultSession } from 'next-auth';
import Image from 'next/image';
import Link from 'next/link';
import Github from './icons/github';
import MemifyLogo from './memify-logo';
import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuItem,
   DropdownMenuLabel,
   DropdownMenuSeparator,
   DropdownMenuTrigger,
} from './ui/dropdown-menu';

export default async function Navbar() {
   const session = await auth();

   return (
      <header>
         <nav className="flex justify-between items-center pl-3 pr-8 py-1 font-semibold">
            <section>
               <Link href="/">
                  <MemifyLogo />
               </Link>
            </section>
            <section className="flex gap-x-8">
               <Link href="/memes" className="rounded-md px-3 py-1 hover:bg-[#2B2D4220] transition">
                  Memes
               </Link>
               <Link href="/templates" className="rounded-md px-3 py-1 hover:bg-[#2B2D4220] transition">
                  Templates
               </Link>
            </section>
            <section>{session ? <UserProfileDropdown sessionUser={session.user} /> : <Link href="/login">Log in</Link>}</section>
         </nav>
      </header>
   );
}

function UserProfileDropdown({ sessionUser }: { sessionUser: DefaultSession['user'] }) {
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
      <DropdownMenu>
         <DropdownMenuTrigger>
            <Image
               src={sessionUser?.image ? sessionUser.image : '/memify-logo.png'}
               alt="User profile icon"
               width={40}
               height={40}
               className="object-cover rounded-full border border-[#2B2D4280]"
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
               <form action={signOutUser}>
                  <button type="submit" className="flex items-center gap-x-2">
                     <LogOut size={16} />
                     <span>Log out</span>
                  </button>
               </form>
            </DropdownMenuItem>
         </DropdownMenuContent>
      </DropdownMenu>
   );
}
