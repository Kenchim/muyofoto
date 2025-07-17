import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import nodemailer from 'nodemailer';


const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;
const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 465,       
    secure: true,
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
        },
    });

    async function readRawBody(req: NextRequest): Promise<string> {
    const chunks = []
    const reader = req.body?.getReader()
    if (!reader) throw new Error('リクエストbodyが空です')

    while (true) {
        const { done, value } = await reader.read()
        if (done) break
        chunks.push(value)
    }

    const fullBuffer = Buffer.concat(chunks)
    return fullBuffer.toString('utf8')
    }

    export async function POST(req: NextRequest) {
    const rawBody = await readRawBody(req);
    const signature = req.headers.get('stripe-signature')!;

    let event;
    try {
        event = stripe.webhooks.constructEvent(rawBody, signature, webhookSecret);
    } catch (err) {
        console.error('❌ Webhook検証エラー:', err);
        return new NextResponse('Webhook signature verification failed', { status: 400 });
    }

    console.log('📥 Webhook受信:', event.type);

// ✅ 関数の上の方に追加
async function sendCustomerConfirmationEmail(session: Stripe.Checkout.Session) {
    const customer = session.customer_details;
    const amount = session.amount_total;
    const message = `
    ${customer?.name} 様
    
    このたびはご注文いただきありがとうございます。
    以下の内容で注文を承りました。
    
    🏠 配送先住所:
    〒${customer?.address?.postal_code}
    ${customer?.address?.state}
    ${customer?.address?.city ?? ''}
    ${customer?.address?.line1 ?? ''}
    
    📖 ご注文冊数: ${(amount ?? 0) / 100}
    💴 合計金額: ¥${(amount ?? 0) / 100}
    
    商品の到着まで今しばらくお待ちください。
    
    ---
    MUYO FOTO
    https://muyo-foto.com
        `;
    if (customer?.email) {
        await transporter.sendMail({
        from: process.env.GMAIL_USER,
        to: customer.email,
        subject: '📚 ご注文ありがとうございます（MUYO FOTO）',
        text: message,
        html:`
    <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #111; background: #fff; padding: 24px;">
        <h2 style="border-bottom: 1px solid #ccc; padding-bottom: 8px;">ご注文ありがとうございます</h2>
        
        <p>${customer?.name} 様</p>
        <p>下記の内容でご注文を承りました。</p>

        <table style="margin-top: 16px; font-size: 14px;">
        <tr>
            <td style="padding: 4px 8px;"><strong>メール:</strong></td>
            <td style="padding: 4px 8px;">${customer?.email}</td>
        </tr>
        <tr>
            <td style="padding: 4px 8px; vertical-align: top;"><strong>住所:</strong></td>
            <td style="padding: 4px 8px;">
            ${customer?.address?.postal_code}<br/>
            ${customer?.address?.state}<br/>
            ${customer?.address?.line1}<br/>
            ${customer?.address?.line2 || ''}
            </td>
        </tr>
        <tr>
            <td style="padding: 4px 8px;"><strong>冊数:</strong></td>
            <td style="padding: 4px 8px;">${(amount ?? 0) / 100} 冊</td>
        </tr>
        <tr>
            <td style="padding: 4px 8px;"><strong>合計金額:</strong></td>
            <td style="padding: 4px 8px;">¥${(amount ?? 0) / 100}</td>
        </tr>
        </table>

        <hr style="margin: 24px 0; border: none; border-top: 1px solid #ccc;" />

        <p style="font-size: 13px;">このメールは自動送信されています。ご不明な点がございましたら、お気軽にご連絡ください。</p>

        <p style="font-size: 13px;">MUYO FOTO ( Kento Nobuta: kent@muyo.jp )</p>
    </div>
    `
        });
    }
    }


    if (event.type === 'checkout.session.completed') {
        const session = event.data.object as Stripe.Checkout.Session;
        const name = session.customer_details?.name;
        const email = session.customer_details?.email;
        const address = session.customer_details?.address;


        console.log('👤 購入者:', { name, email, address });
        const customer = session.customer_details;
        const amount = session.amount_total;
        const message = `
        📦 新しい注文がありました！

        👤 名前: ${customer?.name}
        📧 メール: ${customer?.email}
        🏠 住所:
        ${customer?.address?.postal_code}
        ${customer?.address?.state}
        ${customer?.address?.line1}
        ${customer?.address?.line2}
        📖 冊数:${(amount ?? 0) / 100}
        💴 合計金額: ¥${(amount ?? 0) / 100}

        =========================
        `;
    await transporter.sendMail({
        from: process.env.GMAIL_USER,
        to: process.env.GMAIL_USER,
        subject: '注文通知',
        text: message,
        html: `
        <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #111; background: #fff; padding: 24px;">
        <h2 style="border-bottom: 1px solid #ccc; padding-bottom: 8px;">📦 新しい注文がありました！</h2>
        
        <p>下記の内容で注文が入りました。</p>
        <table style="margin-top: 16px; font-size: 14px;">
            <tr>
            <td style="padding: 4px 8px;"><strong>名前:</strong></td>
            <td style="padding: 4px 8px;">${customer?.name} 様</td>
            </tr>
            <tr>
            <td style="padding: 4px 8px;"><strong>メール:</strong></td>
            <td style="padding: 4px 8px;">${customer?.email}</td>
            </tr>
            <tr>
            <td style="padding: 4px 8px; vertical-align: top;"><strong>住所:</strong></td>
            <td style="padding: 4px 8px;">
                ${customer?.address?.postal_code}<br/>
                ${customer?.address?.state}<br/>
                ${customer?.address?.line1}<br/>
                ${customer?.address?.line2 || ''}
            </td>
            </tr>
            <tr>
            <td style="padding: 4px 8px;"><strong>冊数:</strong></td>
            <td style="padding: 4px 8px;">${(amount ?? 0) / 100} 冊</td>
            </tr>
            <tr>
            <td style="padding: 4px 8px;"><strong>合計金額:</strong></td>
            <td style="padding: 4px 8px;">¥${(amount ?? 0) / 100}</td>
            </tr>
        </table>

        <hr style="margin: 24px 0; border: none; border-top: 1px solid #ccc;" />

        <p style="font-size: 13px;">このメールは自動送信されています。</p>

        <p style="font-size: 13px;">MUYO FOTO ( Kento Nobuta: kent@muyo.jp )</p>
        </div>
    `
    });
    console.log('✅ メール送信成功');
    
    await sendCustomerConfirmationEmail(session);
        
    }
    
    return NextResponse.json({ received: true });
    }


