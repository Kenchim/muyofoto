import { FaLocationDot } from "react-icons/fa6";
import FotoCap from "../component/foto_caption";

export default function News() { 
    return (
    <div className="text-center w-5/6 md:w-3/4 lg:w-1/2 mx-auto tracking-wider max-w-[720px]">
            <h1 className="font-bold mt-32 text-xl md:text-2xl">NEWS</h1>
            <div className="leading-8 mt-4 md:mt-8">
            <p>--- April 7th - 14th, 2024 ---</p>
            <FotoCap
            url="../expo_osskaffe.jpg"
            alt="first solo exhibition at ÖSS Kaffe Madrid"
            caption='Held the first solo exhibition at ÖSS Kaffe Madrid. The history of ÖSS Kaffe begins in 
            Buenos Aires. I met them in Buenos Aires and later reunited in Madrid. Through this connection, 
            we showcased the project "PORTEÑOS MIRAN AL SOL AZUL." which was shot in Buenos Aires.' 
            />
            <img src="../expo_explanation_osskaffe.jpg" className="mx-auto mt-10 w-11/12 sm:w-5/6 md:w-2/3 shadow-xl"/>
            <p className="mt-4"><a className="underline" href="https://maps.app.goo.gl/35Cy3ifSKWNovBTe6">📍ÖSS Kaffe Madrid</a></p>
            <p className="pb-20"></p>
            </div>
    </div>
    )
}