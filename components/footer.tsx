import Link from 'next/link';
import MemifyLogo from './memify-logo';

export default function Footer() {
   const footerLinks = [
      {
         id: 'pricing',
         label: 'Pricing',
         href: '/#pricing',
      },
      {
         id: 'templates',
         label: 'Templates',
         href: '/templates',
      },
      {
         id: 'memes',
         label: 'Memes',
         href: '/memes',
      },
   ];

   const supportLinks = [
      {
         id: 'github',
         label: 'Github',
         href: 'https://github.com/adrgarcha/memify',
         out: true,
      },
      {
         id: 'ko-fi',
         label: 'Ko-fi',
         href: '',
         out: true,
      },
   ];

   const legalLinks = [
      {
         id: 'terms',
         label: 'Terms of service',
         href: '/terms',
      },
      {
         id: 'privacy',
         label: 'Privacy policy',
         href: '/privacy',
      },
   ];

   return (
      <footer className="flex justify-center items-center h-72 border-t bg-[#2B2D4210]">
         <div className="flex gap-x-40">
            <section className="flex flex-col gap-y-3">
               <MemifyLogo />
               <div className="flex flex-col gap-y-1">
                  <p>Transform ideas into viral memes.</p>
                  <p>Copyright © 2024 - All rights reserved</p>
               </div>
            </section>
            <FooterLink label="LINKS" links={footerLinks} />
            <FooterLink label="SUPPORT" links={supportLinks} />
            <FooterLink label="BORING" links={legalLinks} />
         </div>
      </footer>
   );
}

interface FooterLinkProps {
   label: string;
   links: { id: string; label: string; href: string; out?: boolean }[];
}

function FooterLink({ label, links }: FooterLinkProps) {
   return (
      <section>
         <h5 className="mb-5 font-semibold opacity-75">{label}</h5>
         <ul className="flex flex-col gap-y-2">
            {links.map(link => (
               <li key={link.id}>
                  <Link href={link.href} target={link.out ? '_blank' : '_self'}>
                     {link.label}
                  </Link>
               </li>
            ))}
         </ul>
      </section>
   );
}
