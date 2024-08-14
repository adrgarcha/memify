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
