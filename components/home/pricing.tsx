import { Tier } from '@prisma/client';
import { ArrowRight, Check, X } from 'lucide-react';
import Link from 'next/link';
import { Button } from '../ui/button';

export default function Pricing() {
   return (
      <section id="pricing" className="flex flex-col items-center h-screen bg-gray-50">
         <h4 className="flex items-center gap-x-1 mt-12 px-4 font-semibold text-white bg-red rounded-full">
            <p>Launch discount</p>
            <ArrowRight size={14} strokeWidth={3} />
            <p>50% OFF</p>
         </h4>
         <h3 className="mt-8 text-4xl text-center font-semibold">
            Everything you need in one place,
            <br />
            start making memes fast
         </h3>
         <section className="grid grid-cols-2 gap-x-96 my-auto">
            <PricingPlan plan="FREE" />
            <PricingPlan plan="SHITPOSTER" />
         </section>
      </section>
   );
}

function PricingPlan({ plan }: { plan: Tier }) {
   return (
      <div className="px-8 py-6 border-2 border-red rounded-md bg-white">
         <div className="flex flex-col ">
            <h5 className="font-semibold text-sm text-black/85 h-4">{plan === 'FREE' ? 'Starter' : 'Shitposter'}</h5>
            <p className="text-gray font-medium text-xs">{plan === 'FREE' ? 'For the entire community' : 'For all-in users'}</p>
         </div>
         <h3 className="font-semibold text-4xl py-4">
            {plan === 'FREE' ? (
               <p>Free</p>
            ) : (
               <p>
                  <span className="text-lg line-through text-gray-400">$10</span> $5 <span className="text-xs text-gray-400">USD</span>
               </p>
            )}
         </h3>
         <ul className="flex flex-col gap-y-2 mr-8">
            <li className="flex items-center gap-x-1">
               <Check size={16} color="green" /> Unlimited custom memes
            </li>
            <li className="flex items-center gap-x-1">
               <Check size={16} color="green" /> Hundreds of templates
            </li>
            <li className="flex items-center gap-x-1">
               <Check size={16} color="green" /> Thousands of memes
            </li>
            <li className="flex items-center gap-x-1">
               <Check size={16} color="green" /> Every editor tool
            </li>
            <li className="flex items-center gap-x-1">
               <Check size={16} color="green" /> Save your favorite memes
            </li>
            {plan === 'FREE' ? (
               <li className="flex items-center gap-x-1 text-gray-400">
                  <X size={16} color="red" /> Remove watermarks
               </li>
            ) : (
               <li className="flex items-center gap-x-1">
                  <Check size={16} color="green" /> Remove watermarks
               </li>
            )}
         </ul>
         <div className="flex flex-col items-center mt-6">
            <Link href={plan === 'FREE' ? '/templates' : ''}>
               <Button className="flex items-center gap-x-2 font-bold group">
                  {plan === 'FREE' ? 'Start for free' : 'Be a shitposter'}
                  <ArrowRight size={18} strokeWidth={3} className="group-hover:translate-x-1 transition-transform" />
               </Button>
            </Link>
            <p className="text-xs text-gray font-semibold mt-1">{plan === 'FREE' ? 'Start your journey for free.' : 'Pay once. Access forever.'}</p>
         </div>
      </div>
   );
}
