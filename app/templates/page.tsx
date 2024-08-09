import MediaFilter from '@/components/media-filter';
import MediaGrid from '@/components/media-grid';
import SearchBar from '@/components/searchbar';
import { getR2Templates } from '@/lib/r2';

export default async function Templates() {
   const templates = await getR2Templates();
   return (
      <div className="w-full h-full">
         <div className="mt-20 mx-52 h-full">
            <section className="flex justify-between">
               <SearchBar />
               <MediaFilter />
            </section>
            <MediaGrid items={templates} />
         </div>
      </div>
   );
}
