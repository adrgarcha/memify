'use client';

import MemifyLogo from '@/components/memify-logo';
import DownloadMemeButton from '@/components/templates/download-meme-button';
import MemeText from '@/components/templates/meme-text';
import TemplateDialog from '@/components/templates/template-dialog';
import WatermarkCheckbox from '@/components/templates/watermark-checkbox';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import useGetUserTier from '@/hooks/use-get-user-tier';
import { R2_PUBLIC_URL } from '@/lib/r2';
import Image from 'next/image';
import { useRef, useState } from 'react';

export default function TemplateKey({ params }: { params: { templateKey: string } }) {
   const [text, setText] = useState({ first: '', second: '' });
   const [removeWatermark, setRemoveWatermark] = useState(false);
   const [open, setOpen] = useState(false);
   const divRef = useRef<HTMLDivElement>(null);
   const { tier } = useGetUserTier();

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
                  <MemeText text={text.first} />
                  <MemeText text={text.second} />
                  <div id="memify-logo" className="absolute bottom-1 left-0 opacity-50 size-5 text-xs text-white hidden">
                     <MemifyLogo />
                  </div>
               </div>
               <Button variant={'outline'} className="block mx-auto mt-1" onClick={() => setText({ first: '', second: '' })}>
                  Reset
               </Button>
            </section>
            <section className="flex flex-col gap-y-5">
               <h3>{params.templateKey.split('.')[0]}</h3>
               <Input id="text-1" placeholder="Text 1..." value={text.first} onChange={e => setText({ ...text, first: e.target.value })} />
               <Input id="text-2" placeholder="Text 2..." value={text.second} onChange={e => setText({ ...text, second: e.target.value })} />
               <WatermarkCheckbox removeWatermark={removeWatermark} tier={tier} setRemoveWatermark={setRemoveWatermark} setOpen={setOpen} />
               <DownloadMemeButton divRef={divRef} removeWatermark={removeWatermark} />
            </section>
         </div>
         <TemplateDialog open={open} setOpen={setOpen} />
      </div>
   );
}
