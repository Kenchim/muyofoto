import FotoCap from "@/app/component/foto_caption";
import Title from "@/app/component/title";
import Link from "next/link";

export default function Bellavita() { 
    return (
        <div className="text-center w-5/6 md:w-3/4 mx-auto tracking-wider max-w-[720px]">
            <Title title="La Bella Vita - ECCO L'UOMO" place="Napoli, Italia" />
            <div className="leading-8 mt-4 md:mt-8 pb-24">
            <FotoCap 
                url="../bella_vita/1.jpg"
                alt="Dante Alighieri"
                caption='"Posso fare ritratto?"
                '
            />
            <p>Queste sono le mie parole magiche.</p>
            <p>Sono riuscito a conoscere meglio Napoli perché non parlo italiano.</p>
            <p className="text-xs mt-4">"Posso fare ritratto?"(May I take your portrait?)</p>
            <p className="text-xs mt-2">These are my magic words. </p>
            <p className="text-xs mt-2">I was able to get to know Naples better precisely because I didn't speak italian.</p>
            <FotoCap 
                url="../bella_vita/2.jpg"
                alt="Man waiting for the bus"
                caption='I stayed in the Dante area of this city, which is home to SSC NAPOLI, the football club that 
                won its 3rd Serie A title after a hiatus of 33 years. Dante, known for "The Divine Comedy," 
                has influenced various artists, and his poems are adorned with numerous references to number 3. 
                The poetic verses intricately incorporate the concept of the Holy Trinity with rhymes and 
                structures designed around 3.'
            />
            <FotoCap 
                url="../bella_vita/3.jpg"
                alt="Taxi driver"
                caption='This area is not only a popular tourist spot but also a place where local markets abound, 
                exuding a nostalgic atmosphere. Observing people walking by, one can easily distinguish between 
                tourists and locals. The locals have a certain indescribable serenity on their faces, bearing the 
                weight of history and seemingly cherishing life through its joys and hardships. It was then that 
                I decided to do portraits in this city.'
            />
            <FotoCap 
                url="../bella_vita/4.jpg"
                alt="Fruit juice stand owner"
                caption='My seat number on the plane to Naples was 33E. Coincidentally, the duration of this project 
                was also 33 days. I thought, why not take 100 portraits, a number Dante favoured, calculated as 
                33 x 3 + 1? (But in the end, I could only manage fifty.) Then, speaking of portraits, I thought 
                of Hiroh Kikai, and upon researching, I found out that he passed away at "3:33 am." This must be 
                a sign of the number 3 guiding me. So, from his masterpiece "王たちの肖像 (Portraits of Kings)", 
                I translated the Latin words, "Ecce Homo" (Behold the man), from his book to Italian and borrowed 
                it for this inside cover (subtitle).'
            />
            <FotoCap 
                url="../bella_vita/10.jpg"
                alt="Woman shopping with her daughter and granddaughter"
                caption="Living amidst the festive atmosphere with flags displaying the number 3 all around the city, 
                it felt like coming here at this moment was predetermined. Doing the portraits was not a mere coincidence; 
                the connections I made through photography were special. Just like the rhymes in Dante's poetry, I 
                wanted to immerse myself in the grand wave of Naples and let it guide me. I felt drawn by some 
                serendipitous force."
            />
            <FotoCap 
                url="../bella_vita/6.jpg"
                alt="Man having a discussion on the street"
                caption='When I asked for my first portrait, I was incredibly nervous. The stern looks of many 
                intimidated me, and I spent three hours walking without being able to approach a single person. 
                As dusk settled, in the last moments, an elderly man stood upright among the passing crowd. I 
                asked, "Posso fare ritratto? (May I take your portrait?)" Though my grammar and pronunciation 
                were probably incorrect, he understood my intention and replied, "Prego." (Sure.) At that moment, 
                his facial expression softened, and he accepted my request.'
            />
            <FotoCap 
                url="../bella_vita/11.jpg"
                alt="Nonna"
                caption="From then on, I walked for hours each day to continue the photography. Some days, I couldn't 
                capture anyone, while on other days, I photographed five people. I made new friends along the way. 
                It wasn't random; I didn't just shoot conspicuous individuals. I only approached those whom I felt 
                something special about. About ten people declined, but most people accepted. In the moments of 
                shooting portraits, I felt like I could communicate beyond language with the subjects."
            />
            <FotoCap 
                url="../bella_vita/7.jpg"
                alt="Man wearing a colorful watch cap"
                caption="The period of photography coincided with scorching heat. Not a single drop of rain fell. 
                When I completed the 50th portrait, I decided to wrap up the project. The 50th person was a white-clad 
                monk (unfortunately, I cannot publish his photo due to his request), who turned his right palm towards 
                me and prayed, 'God bless you to Ken.' It felt like he was telling me to stop at this point. 
                Besides, I had already explored Dante's area extensively, and I didn't want to go to other places just 
                to reach the goal of the number, 100 portraits. It seemed just right to conclude it there."
            />
            <FotoCap 
                url="../bella_vita/5.jpg"
                alt="Man in a black suit"
                caption="The days following, the weather unexpectedly turned cooler, as if the preceding heat was an 
                illusion. The project seemed guided by the number 3, and I met various people. I even went on a 
                photography expedition with some music performers. And again, it felt guided as the photography 
                came to an end."
            />
            <FotoCap 
                url="../bella_vita/8.jpg"
                alt="Man setting up a chair in front of his house to smoke a cigar"
                caption="There was a memorable incident when I approached a woman for a portrait, but she kindly declined, 
                explaining that she hadn't put on makeup after her gym session and suggesting that perhaps we could do 
                it another time if we ever meet again somewhere. A week later, I saw her walking with a man, arm in arm. 
                It turned out that the man was one of the people I had photographed previously. The two people I had 
                approached at different times were partners. They were both surprised. I felt joy knowing that those 
                I had approached were together. On that day, they were on their way back from the gym together, so I 
                couldn't take the woman's portrait again."
            />
            <FotoCap 
                url="../bella_vita/9.jpg"
                alt="Man setting up a chair in front of his house to smoke a cigar"
                caption="It goes without saying, portraits require subjects in order to come to life. I approach them, 
                take their pictures, and express my gratitude. Sometimes this short exchange lasts only a minute. 
                During this moment, I forget myself and pour my heart into capturing that fleeting connection with the 
                subjects. Once it's over, we might never meet again. It's just one minute in their long lives. But I 
                don't think it was by mere chance. Even the timing of my arrival in Naples was surely guided by something. 
                If I think that way, there must be meaning in that one minute. I am thankful for the time spent in 
                this city and the people I met. Maybe the fact that I couldn't speak Italian made them more accepting 
                of me. Through my camera, I feel like I gained a glimpse of Naples as a city and its people. Naples is 
                beautiful. I believe I will return here someday, guided by something yet again. On the last day, as I 
                was waiting for my flight at the airport, it rained for the first time during this stay."
            />
            <FotoCap 
                url="../bella_vita/12.jpg"
                alt="Castel Sant'Elmo"
                caption=""
                />
                <p className="underline hover:text-gray-500 inline-block text-xs">
                    <Link href="/about">If you are interested in this book, please contact us.</Link>
                </p>
            </div>
        </div>
    )
}