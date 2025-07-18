import FotoCap from "@/app/component/foto_caption";
import Title from "@/app/component/title";
import Link from "next/link";

export default function Exhibition() { 
    return (
        <div className="text-center w-5/6 md:w-3/4 mx-auto tracking-wider max-w-[720px] font-serif">
            <Title title="運ぶ人・the Carrier" place="Bangkok, Thailand" />
            <div className="leading-8 mt-4 md:mt-8 pb-24">
            <FotoCap 
                url="../hakobuhito/7.jpg"
                alt="運ぶ人"
                caption="気づけばチャイナタウンに足繁く通うようになり、「運ぶ人」を追いかけるようになった。
                単純にモノを「運ぶ」という行為を生業とする人たちがいる。独特な同族意識は、ある意味で彼らを一般社会から孤立させているようにも見えた。
                街と馴染んでいるようで、どこか浮いている。誰もが何かモノを手にすれば、そこに「運ぶ人」の痕跡が残る。それでも彼らとすれ違うとき、多くの人はその存在に気づく様子もない。
                まるで別の世界線を行き交っているように。"
            />
            <FotoCap 
                url="../hakobuhito/5.jpg"
                alt="運ぶ人"
                caption="しかし、彼らのような存在なくして、この街の発展は起こり得なかった。
                バンコクの魅力は、いつも矛盾を前提としている。その象徴とも言える「運ぶ人」を撮った。当初は自分自身で理由も分からないで、それでも何故か彼らのことが気になり、何度も撮影を続けた。
                そして、その過程を通じて彼らのような存在こそが、バンコクという都市を形作っていると思うようになった。
                光の当たらないような場所にこそ、その街の輪郭を捉える手がかりがある。きっとどんな都市においても言えることのように思う。
                このプロジェクトを通じて、自分がなぜ写真を撮るのか、その根本的な理由が少し分かった気がした。"
            />
            <FotoCap 
            url="../hakobuhito/4.jpg"
            alt="運ぶ人"
            caption=""
            />
            <FotoCap 
            url="../hakobuhito/3.jpg"
            alt="運ぶ人"
            caption=""
            />
            <div className="mt-14 -mb-4">------- 写真展のご案内(DM) -------</div>
            <FotoCap 
                url="../hakobuhito/8.jpg"
                alt="運ぶ人"
                caption=""
            />
            <FotoCap 
                url="../hakobuhito/9.jpg"
                alt="運ぶ人"
                caption=""
                />
            <FotoCap 
                url="../hakobuhito/10.jpg"
                alt="運ぶ人"
                caption=""
                />

            <div className="text-center w-5/6 mx-auto tracking-wider max-w-[720px]">
            <div className="leading-8 mt-4 md:mt-8">
            <div className="mt-14 mb-4">------- Kento Nobuta  -------</div>
            <p>カメラを持ったフラヌール（Flâneur）。都市の中を散歩し、観察し、撮影する。
                これまでメキシコシティ、ブエノスアイレス、ナポリ、ハノイなど各都市で作品制作を行う。
                2024年4月にはスペイン・マドリードのÖss Kaffeにて個展を開催。
                2025年7月には名古屋市の堀川ギャラリーにて、本作品『運ぶ人』の展示を行う。
            </p>
            <p className="underline hover:text-gray-500 inline-block text-xs mt-4">
                <Link href="https://drive.google.com/file/d/1V4Jjyx6qzAQ-TjiILrvxxY3ha2TwP7By/view?usp=sharing"
                download="https://drive.google.com/file/d/1V4Jjyx6qzAQ-TjiILrvxxY3ha2TwP7By/view?usp=sharing">
                Download portfolio (pdf file)</Link></p>
            </div>
            <p className="pb-20"></p>
    </div>
            </div>
        </div>
    )
}