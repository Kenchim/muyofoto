import FotoCap from "@/app/component/foto_caption";
import Title from "@/app/component/title";
import Link from "next/link";

export default function ThoughtsMist() { 
    return (
        <div className="text-center w-5/6 md:w-3/4 mx-auto tracking-wider max-w-[720px]">
            <Title title="Thoughts in the Mist" place="Hanoi, Vietnam" />
            <div className="leading-8 mt-4 md:mt-8 pb-24">
            <FotoCap 
                url="../hanoi/1.jpg"
                alt="Mist with flower"
                caption="What I saw in Hanoi was characterized by 'closeness' and 'lowness.' Motorbikes carrying two or three 
                people would casually disregard traffic signals and ride against the flow of traffic on narrow roads. The distances 
                were so precarious that it seemed almost miraculous accidents didn't happen, yet the flow continued without ever 
                stopping. In cafes and street stalls, people of all ages gather, sitting closely with friends and family on low chairs, 
                leisurely passing the time. From their appearance, I sensed both charm and a powerful “root.” As I took photos 
                while walking, crouched like the locals working on the ground, I found myself being looked up to by the passersby. 
                Several eyes turn towards me from below all at once, as if my thoughts were being peered into."
            />
            <FotoCap 
                url="../hanoi/2.jpg"
                alt="rhizome"
                caption=""
            />
            <FotoCap 
                url="../hanoi/3.jpg"
                alt="teas at low table"
                caption="Hanoi started early in the morning. By 6 a.m., people are gathered in makeshift cafes on the streets 
                and squares, sitting on small chairs, sipping bitter hot tea and smoking from pipes. The mist creates a deep 
                and fantastical atmosphere. Every day, I, too, woke up early, aligning 'closely' on 'low' chairs, sipping tea. 
                During that time, I felt a sense of euphoria as if I was blended into the city."
            />
            <FotoCap 
                url="../hanoi/4.jpg"
                alt="cafe with crowds"
                caption=""
            />
            <FotoCap 
                url="../hanoi/5.jpg"
                alt="beautiful couple"
                caption="There was a moment by the lake, surrounded by mist, where everything turned completely white and left 
                me disoriented. There was no feeling of uneasiness; instead, a sense of comfort enveloped me. During my time 
                in Hanoi, I often pondered about the boundaries between people. Whether it was the temperament of the people 
                in Hanoi or something historical, I couldn't discern, but I was aware of being an outsider. While everyone was 
                friendly and kind, sometimes, an invisible wall seemed to appear. They seemed to be in a vacant state, staring 
                at a point in space, quietly waiting for something. I wondered what they were thinking in those moments."
            />
            <FotoCap 
                url="../hanoi/6.jpg"
                alt="lady staring nowhere"
                caption=""
            />
            <FotoCap 
                url="../hanoi/7.jpg"
                alt="Man wearing a colorful watch cap"
                caption="It seemed prudent to avoid delving into historical matters, especially given the language barrier 
                with elderly individuals, leaving me unable to inquire about anything. Nevertheless, during the early 
                morning tea sessions, something seemed to be communicated. Perhaps the 'lowness' of the chairs conveyed a 
                fundamental connection. I wondered how those who had experienced war perceived the present world. Such 
                thoughts crossed my mind during those quiet mornings spent in their 'closeness.'"
            />
            <FotoCap 
                url="../hanoi/8.jpg"
                alt=""
                caption=""
            />
            <FotoCap 
                url="../hanoi/9.jpg"
                alt="Man setting up a chair in front of his house to smoke a cigar"
                caption="I believe 'closeness' and 'lowness' symbolize the relationships among the people of Hanoi. 
                They gather spontaneously from various places, huddling together in a small cluster, sharing tea, and 
                later dispersing in different directions on motorcycles. This succession undoubtedly shapes Hanoi - 
                the repetition of connection and disconnection. When surrounded by the mist, I felt that, at that moment, 
                only a few people, including myself, became like a single organism within a small space in Hanoi. 
                Perhaps, at that moment, I was a part of Hanoi. Now, stepping out of the mist, I recall that time. 
                Their postures strangely linger in my mind. The history of ancient China and contemporary France's dominance. 
                The intersection of Zhuangzi's “and” Deleuze's spatiotemporal dimensions in Hanoi seems too coincidental. 
                If that intersection is the seed, it surely hints at the germination of something unexpected. 
                Something that will extend in unforeseen directions. My time in Hanoi might shape my future."
            />
            <FotoCap 
                url="../hanoi/10.jpg"
                alt="Man setting up a chair in front of his house to smoke a cigar"
                caption=""
            />
                <p className="underline hover:text-gray-500 inline-block text-xs">
                    <Link href="/about">If you are interested in this book, please contact us.</Link>
                </p>
            </div>
        </div>
    )
}