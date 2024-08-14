import { getR2Templates } from '@/lib/r2';
import MediaGrid from '../media-grid';
import SearchBar from '../searchbar';

export default async function Hero() {
   const templates = await getR2Templates();
   return (
      <section className="relative h-screen overflow-hidden">
         <div className="opacity-80">
            <MediaGrid items={templates} scroll={false} />
         </div>
         <div className="absolute inset-0 m-auto mt-48 w-fit h-fit px-14 py-16 rounded-3xl bg-gray opacity-95 shadow-2xl">
            <h1 className="text-6xl text-center font-bold leading-relaxed pb-6">
               Transform <span className="px-1 bg-white rounded-md">ideas</span> into <br />
               <span className="px-1 bg-red text-white rounded-md">viral memes</span>
            </h1>
            <SearchBar className={['w-[500px] mx-auto font-medium']} redirect />
         </div>
      </section>
   );
}
