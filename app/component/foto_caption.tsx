
type Props = {
    url: string
    alt: string
    caption: string
}

export default function FotoCap({url, alt, caption}: Props) {
    return (
        <div>
            <img src={url} alt={alt} className="mx-auto mt-10 w-11/12 sm:w-5/6 md:w-2/3"/>
            <p className="mt-4 md:mt-8">{caption}</p>
        </div>
    );
}
