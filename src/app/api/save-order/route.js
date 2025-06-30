import Stripe from 'stripe';
import sanityClient from '@sanity/client';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const client = sanityClient({
  projectId: 'jn1tk3yp',
  dataset: 'production',
  apiVersion: '2023-06-01',
  token: process.env.SANITY_API_TOKEN, 
  useCdn: false,
});

function getDeliveryDate() {
  const date = new Date();
  let added = 0;
  while (added < 7) {
    date.setDate(date.getDate() + 1);
    if (date.getDay() !== 0 && date.getDay() !== 6) added++;
  }
  return date.toISOString();
}

export async function POST(req) {
  const { sessionId, userId } = await req.json();

  const session = await stripe.checkout.sessions.retrieve(sessionId);
  const lineItems = await stripe.checkout.sessions.listLineItems(sessionId);

  const products = lineItems.data.map(item => ({
    name: item.description,
    quantity: item.quantity,
    price: item.amount_total / 100,
  }));

  await client.create({
    _type: 'orders',
    userId,
    products,
    totalPrice: session.amount_total / 100,
    deliveryDate: getDeliveryDate(),
  });

  return Response.json({ success: true });
}
