import { Tier } from '@prisma/client';
import { useSession } from 'next-auth/react';
import { Dispatch, FormEvent, SetStateAction } from 'react';
import { Checkbox } from '../ui/checkbox';

interface WatermarkCheckboxProps {
   removeWatermark: boolean;
   tier: Tier | null;
   setRemoveWatermark: Dispatch<SetStateAction<boolean>>;
   setOpen: Dispatch<SetStateAction<boolean>>;
}

export default function WatermarkCheckbox({ removeWatermark, tier, setRemoveWatermark, setOpen }: WatermarkCheckboxProps) {
   const session = useSession();

   const handleWatermark = async (e: FormEvent<HTMLButtonElement>) => {
      e.preventDefault();

      switch (session.status) {
         case 'unauthenticated':
            setOpen(true);
            return;
         case 'authenticated':
            if (tier === 'FREE') {
               setOpen(true);
               return;
            }
            break;
         default:
            break;
      }

      setRemoveWatermark(prev => !prev);
   };
   return (
      <div className="flex items-center gap-x-1">
         <Checkbox id="watermark" checked={removeWatermark} onClick={handleWatermark} />
         <label htmlFor="watermark">Remove watermark</label>
      </div>
   );
}
