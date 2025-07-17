import Link from "next/link";
import FotoCap from "../component/foto_caption";

export default function SuccessPage() {
    return (
        <div className="text-center w-5/6 md:w-3/4 lg:w-1/2 mx-auto tracking-wider max-w-[720px] font-serif">
            <h1 className="font-bold mt-32 text-xl md:text-2xl">Thank you for your purchase!</h1>
        <p className="mt-10">写真集の発送準備を行います。</p>
        <FotoCap
            url="../thanks.jpg"
            alt="thanks"
            caption="" 
            />
        <p className="hover:text-gray-500 leading-6 underline"><Link href="/exhibition">『運ぶ人』ページへ戻る</Link></p>
    </div>
    );
}
