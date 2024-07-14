import { auth } from '@/lib/auth';
import Link from 'next/link';
import MemifyLogo from '../memify-logo';
import NavbarPages from './navbar-pages';
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
            <NavbarPages />
            <section>{session ? <UserProfileDropdown sessionUser={session.user} /> : <Link href="/login">Log in</Link>}</section>
         </nav>
      </header>
   );
}
