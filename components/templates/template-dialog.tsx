import { useRouter } from 'next/navigation';
import { Dispatch, SetStateAction } from 'react';
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

interface TemplateDialogProps {
   open: boolean;
   setOpen: Dispatch<SetStateAction<boolean>>;
}

export default function TemplateDialog({ open, setOpen }: TemplateDialogProps) {
   const router = useRouter();
   return (
      <AlertDialog open={open}>
         <AlertDialogContent>
            <AlertDialogHeader>
               <AlertDialogTitle>Are you ready to upgrade?</AlertDialogTitle>
               <AlertDialogDescription>It looks like you can't use this functionality yet.</AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
               <AlertDialogCancel onClick={() => setOpen(false)}>Cancel</AlertDialogCancel>
               <AlertDialogAction onClick={() => router.push('/#pricing')}>Upgrade</AlertDialogAction>
            </AlertDialogFooter>
         </AlertDialogContent>
      </AlertDialog>
   );
}
