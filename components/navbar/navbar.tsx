import { auth } from '@/lib/auth';
import Link from 'next/link';
import MemifyLogo from '../memify-logo';
import UserProfileDropdown from './user-profile-dropdown';

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
