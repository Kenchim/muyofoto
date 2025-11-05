import FotoCap from "@/app/component/foto_caption";
import Title from "@/app/component/title";
import Link from "next/link";

export default function Carrier() { 
    return (
        <div className="text-center w-5/6 md:w-3/4 mx-auto tracking-wider max-w-[720px]">
            <Title title="the Carrier（Hakobu-Hito）" place="Bangkok, Thailand" />
            <div className="leading-8 mt-4 md:mt-8 pb-24">
            <FotoCap 
                url="../hakobuhito/5.jpg"
                alt=""
                caption="Before I realized it, I found myself returning again and again to Bangkok’s
                        Chinatown, drawn to the figures of the “carriers.” These are people who make their
                        living through the humble, everyday work of carrying. There seemed to be a unique
                        sense of kinship among them—one that, in a way, also set them apart from the rest
                        of society. They blended into the city, yet somehow remained slightly out of place."
            />
            <FotoCap 
                url="../hakobuhito/7.jpg"
                alt=""
                caption=""
            />
            <FotoCap 
                url="../hakobuhito/11.jpg"
                alt=""
                caption="Whenever someone holds an object, a trace of the carrier remains. And yet, when
                        people pass by them on the street, most don’t seem to notice their existence at all—
                        as if the carriers were moving through a different dimension altogether."
            />
            <FotoCap 
                url="../hakobuhito/3.jpg"
                alt=""
                caption="Still, without them, the development of this city would not have been possible.
                        Bangkok’s appeal is built on contradictions, and the carriers are a living symbol
                        of that. At first, I didn’t know why I was so drawn to them. Even without a clear
                        reason, I kept photographing them again and again. Through that process, I
                        gradually came to feel that it is precisely these often-overlooked figures who give
                        shape to the city of Bangkok."
            />
        
            <FotoCap 
                url="../hakobuhito/1.jpg"
                alt=""
                caption="In places where no light shines, we can often find the clearest outline of a city. I
                        believe that’s true of any urban landscape. Through this project, I feel I’ve begun to
                        understand—just a little—why I take photographs in the first place."
            />
            <FotoCap 
                url="../hakobuhito/12.jpg"
                alt=""
                caption=""
            />
                <p className="underline hover:text-gray-500 inline-block text-xs">
                    <Link href="/about">If you are interested in this book, please contact us.</Link>
                </p>
            </div>
        </div>
    )
}