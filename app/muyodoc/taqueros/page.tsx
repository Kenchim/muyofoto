import FotoCap from "@/app/component/foto_caption";
import Title from "@/app/component/title";
import Link from "next/link";

export default function Taqueros() { 
    return (
        <div className="text-center w-5/6 md:w-3/4 mx-auto tracking-wider max-w-[720px]">
            <Title title="LOS TAQUEROS - Sabor de Esquina" place="Mexico City, Mexico" />
            <div className="leading-8 mt-4 md:mt-8 pb-24">
            <FotoCap 
                url="../taqueros/2.jpg"
                alt="taquero"
                caption="It's April 2022. I was curious about Mexico, a country that kept its borders 
                open while the rest of the world was in a state of stagnation. My time in Mexico City 
                was filled with wondrous moments. An ordinary sight of street food stands and the interaction 
                of strangers seem to me to be something beyond reality - almost utopic.
                "
            />
            <FotoCap 
                url="../taqueros/1.jpg"
                alt="tacos"
                caption="The events of the past two years have accelerated the changes in our society. 
                This has highlighted true human values that necessitate reevaluation of the importance 
                of physical interactions and chance encounters. It's a futile effort to defy the 
                overarching social norm where we find ourselves with minimal social exchanges. 
                However the quiet but powerful presence of the taqueros on the street corners seem to be 
                in direct conflict with these trends.
                "
            />
            <FotoCap 
                url="../taqueros/3.jpg"
                alt="artisan"
                caption="Los taqueros are taco chefs. In contrast to today's world where many restaurants 
                including the taquerias have adapted their operation to meet economic demands, there are a 
                few taqueros who continue to make and serve tacos the old fashioned way. Their survival is 
                deep rooted in the land, their strength is self-reliant and the sense of comfort they bring 
                to the community remind us of what it means to be human, something many people tend to forget 
                in today's society. I felt a sense of nostalgia and joy from their magnetic presence, 
                their attitude towards the craft, and their interaction with the locals."
            />
            <FotoCap 
                url="../taqueros/4.jpg"
                alt="hand of taquero"
                caption="[...] Taquerias are now wrapped in plastic tarp. Eating at the stands are prohibited and masks 
                are mandatory. Under these circumstances, the idiosyncratic interaction and human relationships on 
                the streetscapes are becoming rare and would probably be a thing of the past. Due to pandemic 
                measures we have lost the social aspect of the taqueria experience. As I was casually walking 
                along the street, a taqueria suddenly appeared in front of me and I stopped to order a taco. 
                It was a 15 minute wait and this 'interval' was blissful."
            />
            <FotoCap 
                url="../taqueros/5.jpg"
                alt="taquero - rain"
                caption="In today’s world of personalised and convenient consumerism. We are able to choose what 
                we want and when we want it. We can order from a taco stand just a mere 3 kilometres away, delivered 
                by a stranger in under 30 minutes. This leaves very little for the unforeseen and the organic 
                encounter with the makers."
            />
            <FotoCap 
                url="../taqueros/6.jpg"
                alt="taquero - future"
                caption="I would like to continue walking the streets. I want to enjoy those encounters with the 
                'unexpected'. Walking aimlessly without purpose or destination, capturing the blissful moments 
                bestowed by an entity that exist beyond the limitation of my body and mind. I will walk today, 
                with my camera in hand, in the direction my heart leads me."
            />
            <FotoCap 
                url="../taqueros/7.jpg"
                alt="preparing tacos"
                caption=""
                />
            <p className="underline hover:text-gray-500 inline-block text-xs">
                    <Link href="/about">If you are interested in this book, please contact us.</Link>
            </p>
            </div>
        </div>
    )
}