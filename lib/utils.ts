import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
   return twMerge(clsx(inputs));
}

export function createQueryString(searchParams: URLSearchParams, name: string, value: string): string {
   const params = new URLSearchParams(searchParams.toString());
   params.set(name, value);
   return params.toString();
}

export function checkCorrectFileType(fileName: string, fileType: 'all' | 'images' | 'gifs' | string | null): boolean {
   const imageTypes = ['jpg', 'jpeg', 'png', 'webp', 'svg'];
   const gifTypes = ['gif'];
   const type = fileName.split('.').pop();

   switch (fileType) {
      case 'images':
         return imageTypes.includes(type!);
      case 'gifs':
         return gifTypes.includes(type!);
      default:
         return true;
   }
}
