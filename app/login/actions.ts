'use server';

import { signIn, signOut } from '@/lib/auth';
import { getUser } from '@/lib/query';
import { signInSchema } from '@/lib/zod';

export type Providers = 'credentials' | 'google' | 'discord' | 'github';

export interface SignInState {
   error?: string;
}

export async function signInUser(prevState: SignInState | undefined, formData: FormData) {
   const formDataKeys = Array.from(formData.keys());
   const provider = formDataKeys[formDataKeys.length - 1] as Providers;
   const redirectTo = '/';

   if (provider === 'credentials') {
      const validateUser = signInSchema.safeParse({
         email: formData.get('email'),
         password: formData.get('password'),
      });

      if (!validateUser.success) {
         return { error: 'Invalid email or password.' };
      }

      const user = await getUser(validateUser.data.email);

      if (!user) {
         return { error: `Invalid email or password.` };
      }

      if (!user.password) {
         return { error: `You already have an account. Log in with one of our providers.` };
      }

      await signIn(provider, formData, redirectTo);
   } else {
      await signIn(provider, { redirectTo });
   }
}

export async function signOutUser() {
   await signOut();
}
