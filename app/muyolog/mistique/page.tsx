import FotoCap from "@/app/component/foto_caption";
import Title from "@/app/component/title";
import Link from "next/link";

export default function Mistique() { 
    return (
        <div className="text-center w-5/6 md:w-3/4 mx-auto tracking-wider max-w-[720px]">
            <Title title="Mistique Vauban" place="Marseille, France" />
            <div className="leading-8 mt-4 md:mt-8 pb-24">
            <FotoCap 
                url="../marseille/1.jpg"
                alt="divided two"
                caption=""
            />
            <p>'Two years ago...'</p>
            <p className="mb-4">A madame said, shaking her head.</p>
            <p>Just at that moment when someone placed two stones there,</p>
            <p className="mb-4">Our journey began in a place far away.</p>
            <p>And from the midst of the fork road,</p>
            <p className="mb-4">Now, the stones we confront ask.</p>
            <p>Let's follow the path we believe in.</p>
            <p className="mb-4">If it fails, returning here wouldn't be so bad after all.</p>
            <p className="text-xs mb-4">from Vauban - district on top of the hill</p>
            <FotoCap 
                url="../marseille/2.jpg"
                alt="Pigeon"
                caption=""
            />
            <FotoCap 
                url="../marseille/8.jpg"
                alt="Shadow of pigeon"
                caption=""
            />
            <FotoCap 
                url="../marseille/3.jpg"
                alt="rocks"
                caption=""
            />
            <FotoCap 
                url="../marseille/4.jpg"
                alt="mirror"
                caption=""
            />
            
            <FotoCap 
                url="../marseille/5.jpg"
                alt="crushed car and pooped car"
                caption=''
            />
            <FotoCap 
                url="../marseille/6.jpg"
                alt="hills"
                caption=""
            />
            <FotoCap 
                url="../marseille/7.jpg"
                alt="light of birds"
                caption=""
            />
             <p className="underline hover:text-gray-500 inline-block text-xs">
                    <Link href="/about">If you are interested in this book, please contact us.</Link>
            </p>
            </div>
        </div>
    )
}