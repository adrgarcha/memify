import MemifyLogo from './memify-logo';

export default function Footer() {
   return (
      <footer className="flex justify-center items-center h-72 border-t bg-[#2B2D4210]">
         <section className="flex flex-col gap-y-3">
            <MemifyLogo />
            <div className="flex flex-col gap-y-1">
               <p>Transform ideas into viral memes.</p>
               <p>Copyright © 2024 - All rights reserved</p>
            </div>
         </section>
         <section></section>
         <section></section>
         <section></section>
      </footer>
   );
}
