import About from '@/components/home/about';
import Hero from '@/components/home/hero';
import Pricing from '@/components/home/pricing';
import StartNow from '@/components/home/start-now';

export default function Home() {
   return (
      <div className="flex flex-col justify-center items-center">
         <Hero />
         <About />
         <Pricing />
         <StartNow />
      </div>
   );
}
