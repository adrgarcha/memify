'use client';

import Discord from '@/components/icons/discord';
import GithubBrand from '@/components/icons/github-brand';
import Google from '@/components/icons/google';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useEffect } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { toast } from 'sonner';
import { Providers, signInUser } from './actions';

export default function Login() {
   const [state, dispatch] = useFormState(signInUser, undefined);

   useEffect(() => {
      if (state?.error) {
         toast.error("Couldn't log in. Please try again.", {
            description: state.error,
         });
      }
   }, [state]);

   return (
      <div className="flex justify-center h-full">
         <section className="h-fit mt-56 rounded-md border p-8 shadow-xl">
            <h1 className="text-4xl font-bold text-center">Log in</h1>
            <form action={dispatch} className="flex flex-col gap-y-4 mt-4">
               <Label htmlFor="email">Email</Label>
               <Input type="email" name="email" className="rounded-md border px-2 py-1" />
               <Label htmlFor="password">Password</Label>
               <Input type="password" name="password" className="rounded-md border px-2 py-1" />
               <SubmitButton name="credentials">
                  <span>Log in</span>
                  <ArrowRight size={16} className="ml-2" />
               </SubmitButton>
               <p className="text-center text-sm text-gray-dark">Or log in with</p>
               <div className="grid grid-cols-3 gap-x-2">
                  <SubmitButton name="google">
                     <Google size={20} color="white" />
                  </SubmitButton>
                  <SubmitButton name="discord">
                     <Discord size={20} color="white" />
                  </SubmitButton>
                  <SubmitButton name="github">
                     <GithubBrand size={20} color="white" />
                  </SubmitButton>
               </div>
            </form>
            <Link href="/register">
               <p className="mt-4 text-center text-xs text-gray opacity-90 hover:text-red hover:opacity-100 transition">
                  {`Don't have an account yet? Register here`}
               </p>
            </Link>
         </section>
      </div>
   );
}

interface SubmitButtonProps {
   name: Providers;
   children: React.ReactNode;
}

function SubmitButton({ name, children }: SubmitButtonProps) {
   const { pending } = useFormStatus();
   return (
      <Button
         type="submit"
         name={name}
         aria-disabled={pending}
         className="bg-gray-dark text-white font-semibold aria-disabled:cursor-not-allowed aria-disabled:opacity-50">
         {children}
      </Button>
   );
}
