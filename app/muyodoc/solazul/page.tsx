import FotoCap from "@/app/component/foto_caption";
import Title from "@/app/component/title";
import Link from "next/link";

export default function Solazul() { 
    return (
        <div className="text-center w-5/6 md:w-3/4 mx-auto tracking-wider max-w-[720px]">
            <Title title="PORTEÑOS MIRAN AL SOL AZUL." place="Buenos Aires, Argentina" />
            <div className="leading-8 mt-4 md:mt-8 pb-24">
            <FotoCap 
                url="../sol_azul/1.jpg"
                alt="obelisco"
                caption="Obelisco, built in 1936, is a symbol of Buenos Aires, towering at 67.5 meters high. It was 
                built in only two months, so the city must have been very active at the time. Originally, it was a 
                symbol of the sun god in ancient Egypt, and was decorated with gold and other materials to achieve 
                a dazzling radiance. It also served as a rudimentary clock by tracking the shadow it casts. While it 
                lacks the golden embellishments, it shines under the brilliant sun and casts its imposing shadows."
            />
            <FotoCap 
                url="../sol_azul/2.jpg"
                alt="Cementerio de la Recoleta"
                caption="Initially, I photographed the city, focusing on the duality of 'light and shadow.' I thought 
                that the city is exactly like this: the overwhelming brilliance of sunlight juxtaposed with the shadows 
                on the other side. Behind the skyscrapers of this metropolis, there are construction workers who live 
                day by day. Tango attracts many tourists, but for the locals, it remains an unattainable realm because 
                of the exorbitant admission fee. 1,000 yen turned into 3,500 Argentine pesos now. The sadness and 
                melancholy atmosphere of the city I believe, stems from the reality that there is nothing they can do. 
                However, after spending about three months in the city, I began to feel that this was not the only 
                attraction of the city. It was during this time that I began to view Obelisco as the emblematic 
                representation of Buenos Aires."
            />
            <FotoCap 
                url="../sol_azul/3.jpg"
                alt="anxiety"
                caption="According to Bataille's 'Solar Anus,' Obelisco could be seen as a parody of male genitalia. 
                It slouches toward the sun. In fact, on International AIDS Day 2005, it was covered with a condom, 
                so the whole city must have that image. The Porteños have a powerful grace. And the attitude of 
                living in the face of any adversity. I sense an animalistic 'masculinity' in them, as they live each 
                moment to the fullest. If someone is in need, they are quick to lend a hand. They are imposing and 
                confident. Their inner strength is strong. Fearlessly challenging hypocritical governments and 
                asserting their rights. It may sometimes be violent, but it is antagonistic to neoliberal society, 
                where 'altruistic behavior' is used as an excuse for selfishness. I have heard anti-American and 
                anti-British voices many times."
            />
            <FotoCap 
                url="../sol_azul/4.jpg"
                alt="asado"
                caption=""
            />
            <FotoCap 
                url="../sol_azul/7.jpg"
                alt="screaming"
                caption="Maradona's 'Hand of God' victory over Great Britain in the World Cup in 1986 was, some say, 
                a revenge for the Falklands War. Football and violence exist synonymously in this country. The unity 
                and togetherness I witnessed during the World Cup was inspiring, but it was also a terrifying experience. 
                The city seemed to tremble with frenzied excitement, creating an atmosphere of madness that appeared 
                to defy the fear of death. I have never had an experience like that, and I don't think I ever will. 
                It was such a shocking impact. And then the next day life returned to normal as if nothing had happened 
                with an unbelievable sense of purity."
            />
            <FotoCap 
                url="../sol_azul/5.jpg"
                alt="hole"
                caption=""
            />
            <FotoCap 
                url="../sol_azul/6.jpg"
                alt="obelisco"
                caption="We cannot look directly at the sun. Usually, we reflexively look away. 
                Porteños do not shy away from the dualistic world of light and shadow. They confront the irresistible 
                reality. They do not look away. The scorching sun is the blue sun that burns Buenos Aires. Porteños 
                look directly at the blue sun. In such a figure, the sun does not chase the night, but looks directly 
                at Buenos Aires and shines back. In this city, the sun is also a parody of the male genitalia. 
                Buenos Aires is the blue sun."
            />
            <FotoCap 
                url="../sol_azul/8.jpg"
                alt="World cup final"
                caption=""
            />

            <p className="underline hover:text-gray-500 inline-block text-xs">
                    <Link href="/about">If you are interested in this book, please contact us.</Link>
            </p>
            </div>
        </div>
    )
}