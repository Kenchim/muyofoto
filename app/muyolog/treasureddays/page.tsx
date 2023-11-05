import FotoCap from "@/app/component/foto_caption";
import Title from "@/app/component/title";
import Link from "next/link";

export default function Treasureddays() { 
    return (
        <div className="text-center w-5/6 md:w-3/4 mx-auto tracking-wider max-w-[720px]">
            <Title title="Treasured days" place="Montevideo, Uruguay" />
            <div className="leading-8 mt-4 md:mt-8 pb-24">
            <FotoCap 
                url="../montevideo/1.jpg"
                alt="pigeon"
                caption="Uruguay is a small country with a population of about 3.5 million. 
                The capital, Montevideo, is home to 1.5 million people. The city is quiet and safe. 
                Many people are friendly. Although not flashy by any means, the people all seem to 
                live down-to-earth lives."
            />
            <FotoCap 
                url="../montevideo/2.jpg"
                alt="bycicle"
                caption=""
            />
            <FotoCap 
                url="../montevideo/3.jpg"
                alt="garage"
                caption="Beef and dairy products raised in the vast pastureland are very tasty, and their 
                foreign exchange earnings are covered by the export of these agricultural and livestock products. 
                On the other hand, imports are subject to high tariffs and foreign products are expensive. 
                It is difficult to obtain things that are easily available in Japan."
            />
            <FotoCap 
                url="../montevideo/5.jpg"
                alt="chureria"
                caption=""
            />
            
            <FotoCap 
                url="../montevideo/6.jpg"
                alt="amusument park"
                caption="Initially, I struggled to adapt to the inconveniences of not having certain things 
                readily available. However, after living there for a week or two, I found that I was no longer 
                bothered by such inconveniences. Maybe what I was trying to get was not necessary in the first place. 
                It was during this period that I pondered the concept of true wealth. As former President Mujica 
                said, we seek not material wealth but spiritual wealth by knowing what is enough. My days in 
                Montevideo were a time to realize what is essentially important in life. It was a quiet but powerful city."
            />
            <FotoCap 
                url="../montevideo/4.jpg"
                alt="warning"
                caption=""
            />
            <p className="underline hover:text-gray-500 inline-block text-xs">
                <Link href="https://www.dropbox.com/scl/fi/qww0leu45rvkmw5ml8r2m/Treasured_Days.pdf?rlkey=b68g95mdcp49ei2c226i7apd1&dl=0"
                download="https://www.dropbox.com/scl/fi/qww0leu45rvkmw5ml8r2m/Treasured_Days.pdf?rlkey=b68g95mdcp49ei2c226i7apd1&dl=0">
                Download this book (pdf file)</Link></p>
            </div>
        </div>
    )
}