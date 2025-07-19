import Stripe from 'stripe';
import { NextResponse } from 'next/server';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(request: Request) {
    const { quantity } = await request.json();

    try {
        const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        shipping_address_collection: {
            allowed_countries: ['JP'],
        },
        shipping_options: [
            {
            shipping_rate_data: {
                display_name: '直接のお渡し（送料 0円）',
                type: 'fixed_amount',
                fixed_amount: { amount: 0, currency: 'jpy' },
            },
            },
            {
            shipping_rate: "shr_1RltYkEQicqwUzUiGjclYxWs" 
            }
        ],
        line_items: [
            {
            price: 'price_1Rm24LEQicqwUzUiS1S9Nnsg', // Stripeで登録した価格IDに置き換える
            quantity,
            },
        ],
        mode: 'payment',
        success_url: `${request.headers.get('origin')}/success`,
        cancel_url: `${request.headers.get('origin')}/photobook`,
        });

        return NextResponse.json({ id: session.id });
    } catch (err: any) {
        console.error('Stripe error:', err.message);
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}
