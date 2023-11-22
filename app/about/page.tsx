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
            </div>
            <h2 className="font-bold mt-16 text-xl md:text-2xl tracking-wider">CONTACT</h2>
            <p className="mt-4 md:mt-8 mb-16">kent@muyo.jp</p>
            <FotoCap
            url="../now.jpg"
            alt="Ha noi Vietnam"
            caption="Shooting in Hà Nội, Việt Nam (November 2023)" 
            />
            <p className="pb-20"></p>
    </div>
    )
}