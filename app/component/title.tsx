type Props = {
    title: string
    place: string
}

export default function Title({title, place}: Props) {
    return (
        <>
            <h1 className="font-bold mt-32 md:mt-16 text-xl md:text-2xl">{title}</h1>
            <h2 className="mt-2">{place}</h2>
        </>
    );
}
