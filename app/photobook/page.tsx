'use client';

import FotoCap from "@/app/component/foto_caption";
import Title from "@/app/component/title";
import Link from "next/link";
import { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';


const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!);

export default function PhotobookPage() {
const [quantity, setQuantity] = useState(1);
const [loading, setLoading] = useState(false);

const handleCheckout = async () => {
    setLoading(true);
    const res = await fetch('/api/checkout_sessions', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ quantity }),
    });

    if (!res.ok) {
    alert('エラーが発生しました');
    setLoading(false);
    return;
    }

    const data = await res.json();
    const stripe = await stripePromise;
    stripe?.redirectToCheckout({ sessionId: data.id });
};

return (
    <div className="text-center w-5/6 md:w-3/4 lg:w-1/2 mx-auto tracking-wider max-w-[720px] font-serif">
            <h1 className="font-bold md:mt-16 mt-32 text-xl md:text-2xl"><span className="text-base mr-4">写真集</span>『運ぶ人』</h1>
            <div>
            <img src="../cover.png" className="mx-auto mt-10 w-1/2 shadow-md"/>
            <p className="mt-4 md:mt-8"></p>
        </div>
    <p className="my-4">価格: ¥2,500 (税込)</p>
    <p className="text-xs md:text-sm mt-4 mb-10">（送料: 500円 レターパックで郵送いたします）</p>
    <label>
        冊数：
        <select className="mx-6 px-3 py-3 bg-white border font-semibold tracking-wide hover:bg-gray-100 transition" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
        {[1, 2, 3, 4, 5].map(n => (
            <option key={n} value={n}>{n}冊</option>
        ))}
        </select>
    </label>
    <button className="px-3 py-3 bg-white border font-semibold tracking-wide hover:bg-gray-100 transition" onClick={handleCheckout} disabled={loading}>
        {loading ? '読み込み中…' : '購入する'}
    </button>
    </div>
);
}