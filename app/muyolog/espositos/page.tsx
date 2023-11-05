import FotoCap from "@/app/component/foto_caption";
import Title from "@/app/component/title";
import Link from "next/link";

export default function Espositos() { 
    return (
        <div className="text-center w-5/6 md:w-3/4 mx-auto tracking-wider max-w-[720px]">
            <Title title="La MURGA!! - Los Espositos" place="Napoli, Italia" />
            <div className="leading-8 mt-4 md:mt-8 pb-24">
            <FotoCap 
                url="../los_espositos/1.jpg"
                alt="battle"
                caption=""
            />
            <p className="font-bold">Murga(noun) - /ˈmɜːrɡə/</p>
            <p>A dynamic and culturally rich form of street performance 
                that originated in Uruguay and Argentina. Performers are dressed in colorful costumes and 
                dance to the beat of drums and other percussion instruments.</p>
            <br />
            <p className="font-bold">Esposito(noun) - /es-po-ˈsi-toʊ/</p>
            <p>Said of a baby: Abandoned by their parents, 
                placed for adoption, or left in a public place (such as the doors of a church) for someone to raise.</p>
            
            <FotoCap 
                url="../los_espositos/2.jpg"
                alt="dancers"
                caption=""
            />
            <FotoCap 
                url="../los_espositos/4.jpg"
                alt="drum blah"
                caption="I spoke to Peppe, the leader of Los Espositos, saying 'Posso fare ritratto?' which I had learned on the spot 
                from a translation. Our first encounter was when I passed by him as he parked his Vespa on the street in front of Dante subway station.
                I couldn't help but ask if I could take a portrait of his classic and beautiful appearance."
            />
            <FotoCap 
                url="../los_espositos/5.jpg"
                alt="game on"
                caption=""
            />
            <FotoCap 
                url="../los_espositos/8.jpg"
                alt="Zampanò"
                caption="From that point on, I found myself participating in their practice sessions and taking photos. 
                I even accompanied them on expeditions to neighboring towns. Always putting their heart and soul into 
                drumming and dancing, I, in turn, dedicated myself wholeheartedly to capturing their performances."
            />
            <FotoCap 
                url="../los_espositos/6.jpg"
                alt="kick"
                caption=""
            />
            <FotoCap 
                url="../los_espositos/7.jpg"
                alt="drumer and audience"
                caption="Approaching, retreating, and approaching again... as I repeated this process in my photography, 
                I felt like I became one of the performers. Now, when I close my eyes to reminisce about that town, what 
                comes to mind is the rich, thick aroma of espresso and the time spent with Los Espositos."
            />
            <FotoCap 
                url="../los_espositos/3.jpg"
                alt="drum"
                caption=""
            />
            <p className="underline hover:text-gray-500 inline-block text-xs">
                    <Link href="/about">If you are interested in this book, please contact us.</Link>
            </p>
            </div>
        </div>
    )
}