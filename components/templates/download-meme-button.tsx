import html2canvas from 'html2canvas';
import { Download } from 'lucide-react';
import { useState } from 'react';
import { Button } from '../ui/button';

export default function DownloadMemeButton({ divRef, removeWatermark }: { divRef: React.RefObject<HTMLDivElement>; removeWatermark: boolean }) {
   const [disabled, setDisabled] = useState(false);

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

   return (
      <Button onClick={downloadMeme} aria-disabled={disabled} className="aria-disabled:cursor-not-allowed aria-disabled:opacity-50">
         <Download size={16} className="mr-2" />
         <span>Download</span>
      </Button>
   );
}
