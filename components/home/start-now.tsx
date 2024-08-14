import SearchBar from '../searchbar';

export default function StartNow() {
   return (
      <section className="flex flex-col justify-center items-center border-t h-96">
         <h4 className="text-3xl font-bold">Start making memes now!</h4>
         <p className="text-gray">Create memes easier and faster with Memify</p>
         <SearchBar className={['mt-14']} redirect />
      </section>
   );
}
