import { redirect } from 'next/navigation';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: Request) {
   const session = await stripe.checkout.sessions.create({
      line_items: [
         {
            price: 'price_1PnlDuKbEESL5nMoCHzojoo7',
            quantity: 1,
         },
      ],
      mode: 'payment',
      success_url: `${req.headers.get('origin')}/?success=true`,
      cancel_url: `${req.headers.get('origin')}/?canceled=true`,
   });

   redirect(session.url!);
}
