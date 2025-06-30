
import Stripe from 'stripe';
export async function POST(req) {
  const { cartItems, userId } = await req.json();

  if (!cartItems || !Array.isArray(cartItems)) {
    return new Response(JSON.stringify({ error: "Invalid cart items" }), { status: 400 });
  }

  const line_items = cartItems.map(item => ({
    price_data: {
      currency: 'usd',
      product_data: {
        name: item.name,
      },
      unit_amount: item.price * 100,
    },
    quantity: item.quantity,
  }));
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);



  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items,
    mode: 'payment',
    success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success?session_id={CHECKOUT_SESSION_ID}&userId=${userId}`,
    cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/checkout`,
  });

  return Response.json({ url: session.url });
}
