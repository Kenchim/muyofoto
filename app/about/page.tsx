import Link from "next/link";
import FotoCap from "../component/foto_caption";

export default function About() { 
    return (
    <div className="text-center w-5/6 md:w-3/4 lg:w-1/2 mx-auto tracking-wider max-w-[720px]">
            <h1 className="font-bold mt-32 text-xl md:text-2xl">ABOUT</h1>
            <div className="leading-8 mt-4 md:mt-8">
            <p>A Flâneur with a Camera. I stroll, observe, and shoot within the city. 
                Previously created some photobooks such as "Los Taqueros Sabor de Esquina" in Mexico City, 
                "PORTEÑOS MIRAN AL SOL AZUL." in Buenos Aires and "La Bella Vita" in Naples. 
            </p>
            <p className="mt-4 md:mt-8">KENTO NOBUTA</p>
            <p className="underline hover:text-gray-500 inline-block text-xs">
                <Link href="https://drive.google.com/file/d/1V4Jjyx6qzAQ-TjiILrvxxY3ha2TwP7By/view?usp=sharing"
                download="https://drive.google.com/file/d/1V4Jjyx6qzAQ-TjiILrvxxY3ha2TwP7By/view?usp=sharing">
                Download portfolio (pdf file)</Link></p>
            </div>
            <h2 className="font-bold mt-16 text-xl md:text-2xl tracking-wider">CONTACT</h2>
            <p className="mt-4 md:mt-8 mb-16">kent@muyo.jp</p>
            <FotoCap
            url="../now.jpg"
            alt="Japan"
            caption="Shooting in Gifu (November 2025)" 
            />
            <p className="pb-20"></p>
    </div>
    )
}