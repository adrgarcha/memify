import LongArrowDown from '../icons/long-arrow-down';

export default function About() {
   return (
      <section className="flex flex-col justify-center items-center h-screen border-y">
         <h3 className="text-3xl font-bold text-center">
            Tired of taking <span className="text-red">countless hours</span> searching <br />
            templates, taking inspiration and finally <br />
            creating the meme in an <span className="text-red">over-complicated</span> app?
         </h3>
         <div className="relative my-10">
            <LongArrowDown />
            <p className="absolute top-0 bottom-0 left-12 my-auto w-60 h-fit font-medium">
               No more of that with <span className="text-white font-bold bg-red px-1 rounded-sm">Memify</span>
            </p>
         </div>
         <ul className="list-disc list-inside text-xl">
            <li>Easy access to hundreds of templates</li>
            <li>Take inspiration from community made memes</li>
            <li>Simple editor to create memes fast and easy</li>
            <li>Create memes from all image formats</li>
            <li>Save your favorite memes in your account</li>
            <li>Share your memes and grow up</li>
            <li>Made by community developers</li>
         </ul>
      </section>
   );
}
