import Link from "next/link"

export default function Muyodoc() { 
    return <div className="text-center w-5/6 md:w-3/4 lg:w-1/2 mx-auto tracking-wider max-w-[720px]">
            <h1 className="font-bold mt-32 md:mt-16 text-xl md:text-2xl">MUYO DOC</h1>
            <div className="mt-4 md:mt-8 leading-7 mv:leading-8 pb-24">
            <p>
            MUYO DOC is a photography project that involves walking through a city, observing, 
            and capturing images while exploring the theme of "What shapes this city?" 
            Minimal pre-research is conducted, and the theme is determined based on the 
            information and sensations acquired through living and photographing in the city. 
            It takes into account the question of "Why am I here at this particular moment?" 
            and may also incorporate the zeitgeist as a sub-theme.
            </p>
            <img src="muyodoc.jpg" alt="doc" className="mx-auto mt-10 w-11/12 sm:w-5/6 md:w-2/3" />
            <p className="mt-10 mb-4 font-bold">What is MUYO...</p>
            <p className="mb-10">"無用（MUYO）" literally means "having no use" or "having no purpose." 
            However, this concept is essential in various aspects of life. Let's consider the example of a vessel. 
            If the purpose of a vessel is to contain liquids, what enables it to fulfill that purpose is the hollow 
            space within. The hollow space might seem meaningless by itself, but without it, the vessel cannot 
            serve its function as a vessel.</p>
            <img src="hollow.jpg" alt="hollow" className="mx-auto mt-10 w-11/12 sm:w-5/6 md:w-2/3" />
            <p className="mt-10 mb-4 font-bold">Works</p>
            <p className="hover:text-gray-500"><Link href="muyodoc/taqueros">- LOS TAQUEROS - Sabor de Esquina</Link></p>
            <p className="hover:text-gray-500"><Link href="muyodoc/solazul">- PORTEÑOS MIRAN AL SOL AZUL.</Link></p>
            <p className="hover:text-gray-500"><Link href="muyodoc/bellavita">- La Bella Vita</Link></p>
            <p className="hover:text-gray-500"><Link href="muyodoc/thoughts_mist">- Thoughts in the Mist</Link></p>
            </div>
        </div>
}