import Link from "next/link";

export default function Muyolog() { 
    return <div className="text-center w-5/6 md:w-3/4 lg:w-1/2 mx-auto tracking-wider max-w-[720px]">
            <h1 className="font-bold mt-32 md:mt-16 text-xl md:text-2xl">MUYO LOG</h1>
            <div className="mt-4 md:mt-8 leading-7 mv:leading-8 pb-24">
            <p>
            MUYO LOG is a project where, while walking through a city, photos are taken randomly 
            based on fleeting sensations. It is an informal project aimed at compiling photographs. 
            Themes discovered in MUYO LOG may lead to deeper exploration and potentially evolve into 
            the larger MUYO DOC project. By capturing images centered around narrower themes, one may 
            come to realize that these themes actually symbolize the essence of the city.
            </p>
            <img src="muyolog.jpg" alt="log" className="mx-auto mt-10 w-11/12 sm:w-5/6 md:w-2/3" />
            <p className="mt-10 mb-4 font-bold">What is MUYO...</p>
            <p className="mb-10">"無用（MUYO）" literally means "having no use" or "having no purpose." 
            However, this concept is essential in various aspects of life. Let's consider the example of a vessel. 
            If the purpose of a vessel is to contain liquids, what enables it to fulfill that purpose is the hollow 
            space within. The hollow space might seem meaningless by itself, but without it, the vessel cannot 
            serve its function as a vessel.</p>
            <img src="vessel.jpg" alt="vessel" className="mx-auto mt-10 w-11/12 sm:w-5/6 md:w-2/3" />
            <p className="mt-10 mb-4 font-bold">Works</p>
            <p className="hover:text-gray-500"><Link href="muyolog/palette">- Palette of Madrid</Link></p>
            <p className="hover:text-gray-500"><Link href="muyolog/treasureddays">- Treasured Days</Link></p>
            <p className="hover:text-gray-500"><Link href="muyolog/espositos">- Los Espocitos</Link></p>
            </div>
        </div>
}