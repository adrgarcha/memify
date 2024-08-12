'use client';

import { Rnd } from 'react-rnd';

export default function MemeText({ text }: { text: string }) {
   return (
      <Rnd
         default={{
            x: 0,
            y: 0,
            width: 'auto',
            height: 'auto',
         }}
         bounds={'parent'}
         resizeHandleComponent={{
            topLeft: <ResizeCorner />,
            topRight: <ResizeCorner />,
            bottomLeft: <ResizeCorner />,
            bottomRight: <ResizeCorner />,
         }}
         className="absolute border-2 border-transparent border-dashed hover:border-red transition-colors">
         <p className="text-3xl font-bold text-white text-stroke">{text}</p>
      </Rnd>
   );
}

function ResizeCorner() {
   return (
      <div className="flex justify-center items-center size-full">
         <div className="size-3 border-2 border-transparent hover:border-red hover:bg-red-600/50 transition-colors" />
      </div>
   );
}
