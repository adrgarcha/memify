import Image from 'next/image';

export default function MemifyLogo() {
   return (
      <div className="flex items-center gap-x-2">
         <Image src="/memify-logo.png" alt="Memify logo" width={50} height={50} />
         <p>Memify</p>
      </div>
   );
}
