import FotoCap from "@/app/component/foto_caption";
import Link from "next/link";

export default function Custom404() { 
    return (
    <div className="text-center w-5/6 md:w-3/4 lg:w-1/2 mx-auto tracking-wider max-w-[360px] md:max-w-[720px]">
            <h1 className="font-bold mt-32 md:mt-16 text-xl md:text-2xl">PAGE NOT FOUND</h1>
            <div className="leading-8 mt-4 md:mt-8">
            <FotoCap 
                url="../404.jpg"
                alt="Castel Sant'Elmo"
                caption="Please check the URL again."
                />
                <p className="underline hover:text-gray-500 inline-block text-xs mb-20">
                    <Link href="/">HOME</Link>
            </p>
            </div>
    </div>
    )
}