'use client';

import { signOutUser } from '@/app/login/actions';
import {
   AlertDialog,
   AlertDialogAction,
   AlertDialogCancel,
   AlertDialogContent,
   AlertDialogDescription,
   AlertDialogFooter,
   AlertDialogHeader,
   AlertDialogTitle,
} from '../ui/alert-dialog';

interface LogoutAlertProps {
   open: boolean;
   setOpen: (open: boolean) => void;
}

export default function LogoutAlert({ open, setOpen }: LogoutAlertProps) {
   return (
      <AlertDialog open={open}>
         <AlertDialogContent>
            <AlertDialogHeader>
               <AlertDialogTitle>Are you sure do you want to log out?</AlertDialogTitle>
               <AlertDialogDescription>
                  You will be logged out from your account and will need to log in again to access your account.
               </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
               <form action={signOutUser}>
                  <AlertDialogCancel onClick={() => setOpen(false)} className="mx-1">
                     Cancel
                  </AlertDialogCancel>
                  <AlertDialogAction type="submit" onClick={() => setOpen(false)} className="mx-1">
                     Confirm
                  </AlertDialogAction>
               </form>
            </AlertDialogFooter>
         </AlertDialogContent>
      </AlertDialog>
   );
}
