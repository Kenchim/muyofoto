import FotoCap from "@/app/component/foto_caption";
import Title from "@/app/component/title";
import Link from "next/link";

export default function Palette() { 
    return (
        <div className="text-center w-5/6 md:w-3/4 mx-auto tracking-wider max-w-[720px]">
            <Title title="Palette of Madrid" place="Madrid, Spain" />
            <div className="leading-8 mt-4 md:mt-8 pb-24">
            <FotoCap 
                url="../madrid/1.jpg"
                alt="spain"
                caption="Madrid's population of approximately 3.25 million is relatively small for a capital city. 
                Many immigrants have come to the same area I am staying, and I hear different languages as 
                I walk down the streets. The weather in June, after the rainy season, is especially wonderful and 
                it is as bright as noonday from 7:00 in the morning to 10:00 in the evening. So we live our lives in 
                sync with the sun. We get up as the sun rises and get ready for bed when it sets.
                "
            />
            <FotoCap 
                url="../madrid/2.jpg"
                alt="buildings"
                caption="The city is very hilly and narrow with many beautiful buildings overlapping each other. 
                I love this city not only for its buildings, but also for its people and their culture which are 
                often interwoven. The butchers, the printers and the taxi drivers are all very friendly. 
                They respect each other's culture and look happy under the sun."
            />
            <FotoCap 
                url="../madrid/3.jpg"
                alt="youth"
                caption="As you walk through the streets, you notice that there are several districts alongside each 
                other with distinct atmospheres. However they coexist harmoniously. This city has an indescribable 
                and pleasant air flowing through it."
            />
            <FotoCap 
                url="../madrid/4.jpg"
                alt="bird"
                caption=""
            />
            
            <FotoCap 
                url="../madrid/5.jpg"
                alt="walking"
                caption='[...] Madrid, though a conventional expression, is brimming with "diversity." This can be said not 
                only for race and gender but for every aspect that shapes the city. And they all harmonise and overlap 
                each other with respect for one another, creating a beautiful amalgamation. Being in such a city, one 
                strangely feels compelled to cherish each day and live life to the fullest. Perhaps, it only takes a 
                slight shift in one’s mindset to discover colour in ordinary moments.'
            />
            <FotoCap 
                url="../madrid/6.jpg"
                alt="egg"
                caption=""
            />
            <p className="underline hover:text-gray-500 inline-block text-xs">
                <Link href="https://www.dropbox.com/scl/fi/mauw3aqlsn253b7wc5itk/palette_of_Madrid_muyofoto.pdf?rlkey=oori3ten1k1gmzyzbclqcx6ye&dl=0" 
                download="https://www.dropbox.com/scl/fi/mauw3aqlsn253b7wc5itk/palette_of_Madrid_muyofoto.pdf?rlkey=oori3ten1k1gmzyzbclqcx6ye&dl=0">
                Download this book (pdf file)</Link></p>
            </div>
        </div>
    )
}