import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import { Toaster } from '@/components/ui/sonner';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({ weight: ['400', '500', '600', '700', '800'], subsets: ['latin'] });

export const metadata: Metadata = {
   title: 'Memify',
   description: 'Create and share hilarious memes.',
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en">
         <body className={`${poppins.className} w-full`}>
            <Navbar />
            <main className="h-screen">{children}</main>
            <Footer />
            <Toaster />
         </body>
      </html>
   );
}
