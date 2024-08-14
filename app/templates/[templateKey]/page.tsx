'use client';

import MemifyLogo from '@/components/memify-logo';
import MemeText from '@/components/templates/meme-text';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { R2_PUBLIC_URL } from '@/lib/r2';
import html2canvas from 'html2canvas';
import { Download } from 'lucide-react';
import Image from 'next/image';
import { FormEvent, useRef, useState } from 'react';

export default function TemplateKey({ params }: { params: { templateKey: string } }) {
   const [text1, setText1] = useState('');
   const [text2, setText2] = useState('');
   const [removeWatermark, setRemoveWatermark] = useState(false);
   const [disabled, setDisabled] = useState(false);
   const divRef = useRef<HTMLDivElement>(null);

   const downloadMeme = async () => {
      setDisabled(true);
      const canvas = await html2canvas(divRef.current!, {
         logging: false,
         onclone: node => {
            node.querySelectorAll('img').forEach(img => (img.style.borderRadius = '0px'));

            node.querySelectorAll('div').forEach(d => {
               if (d.firstElementChild?.tagName === 'P') {
                  d.style.top = '-15px';
               }
            });

            if (!removeWatermark) {
               const logoDiv = node.getElementById('memify-logo')!;
               logoDiv.style.display = 'block';
               logoDiv.querySelector('p')!.style.marginBottom = '15px';
            }
         },
      });

      const dataUrl = canvas.toDataURL();
      const a = document.createElement('a');
      a.href = dataUrl;
      a.download = 'meme.png';
      a.click();
      setDisabled(false);
   };

   const handleWatermark = (e: FormEvent<HTMLButtonElement>) => {
      e.preventDefault();
   };

   return (
      <div className="flex justify-center items-center h-screen">
         <div className="grid grid-cols-2 gap-x-8">
            <section>
               <div className="relative overflow-hidden" ref={divRef}>
                  <Image
                     src={`${R2_PUBLIC_URL}/${params.templateKey}`}
                     alt={params.templateKey}
                     width={0}
                     height={0}
                     sizes="100vw"
                     className="w-96 h-auto rounded-md"
                  />
                  <MemeText text={text1} />
                  <MemeText text={text2} />
                  <div id="memify-logo" className="absolute bottom-1 left-0 opacity-50 size-5 text-xs text-white hidden">
                     <MemifyLogo />
                  </div>
               </div>
               <Button
                  variant={'outline'}
                  className="block mx-auto mt-1"
                  onClick={() => {
                     setText1('');
                     setText2('');
                  }}>
                  Reset
               </Button>
            </section>
            <section className="flex flex-col gap-y-5">
               <h3>{params.templateKey.split('.')[0]}</h3>
               <Input id="text-1" placeholder="Text 1..." value={text1} onChange={e => setText1(e.target.value)} />
               <Input id="text-2" placeholder="Text 2..." value={text2} onChange={e => setText2(e.target.value)} />
               <div className="flex items-center gap-x-1">
                  <Checkbox id="watermark" checked={removeWatermark} onChange={handleWatermark} />
                  <label htmlFor="watermark">Remove watermark</label>
               </div>
               <Button onClick={downloadMeme} aria-disabled={disabled} className="aria-disabled:cursor-not-allowed aria-disabled:opacity-50">
                  <Download size={16} className="mr-2" />
                  <span>Download</span>
               </Button>
            </section>
         </div>
      </div>
   );
}
