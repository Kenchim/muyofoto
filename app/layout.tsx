import Link from "next/link"

export const metadata = {
  title: 'MUYO FOTO',
  description: "This is MUYO FOTO's gallery website. We create photo books of street snapshots in various cities."
}

import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import Hamburger from "@/components/hamburger/hamburger";



export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex h-screen max-w-[1920px] mx-auto">
          <div className="w-0 mv:w-1/12 mb:w-2/12 snap-none md:min-w-[160px] fixed">
            <div className="p-6 md:p-5">
              <a href="/" className="relative z-20">
                <img src="../logo_sm.png" className="fixed t-0 w-16 md:w-20 min-w-[52px]" alt="muyo-foto logo" />
              </a>
                {/* <button className="mt-2 md:hidden">
                  <MdSort size={24} color="#d1d1d1" />
                </button> */}
                <Hamburger />
            </div>
            <div className="fixed inset-x-0 bottom-0 pb-12 pl-5 hidden md:block w-40">
              <ul>
                <li className="font-bold hover:text-gray-500 leading-6"><Link href="/muyodoc">MUYO DOC</Link></li>
                <li className="text-sm hover:text-gray-500 leading-6"><Link href="/muyodoc/taqueros">- Los Taqueros</Link></li>
                <li className="text-sm hover:text-gray-500 leading-6"><Link href="/muyodoc/solazul">- PORTEÑOS MIRAN AL SOL AZUL.</Link></li>
                <li className="text-sm hover:text-gray-500 leading-6"><Link href="/muyodoc/bellavita">- La Bella Vita</Link></li>
                <li className="text-sm hover:text-gray-500 leading-6"><Link href="/muyodoc/thoughts_mist">- Thoughts in the Mist</Link></li>
              </ul>
              <ul className="pt-4">
                <li className="font-bold hover:text-gray-500 leading-6"><Link href="/muyolog">MUYO LOG</Link></li>
                <li className="text-sm hover:text-gray-500 leading-6"><Link href="/muyolog/palette">- Palette of Madrid</Link></li>
                <li className="text-sm hover:text-gray-500 leading-6"><Link href="/muyolog/treasureddays">- Treasured Days</Link></li>
                <li className="text-sm hover:text-gray-500 leading-6"><Link href="/muyolog/espositos">- La MURGA!!</Link></li>
                <li className="text-sm hover:text-gray-500 leading-6"><Link href="/muyolog/mistique">- Mistique Vauban</Link></li>
              </ul>
              <p className="pt-4 font-bold hover:text-gray-500"><Link href="/about">ABOUT</Link></p>
              <p className="pt-4 font-bold hover:text-gray-500"><Link href="/news">NEWS</Link></p>
              <p className="pt-4 font-bold hover:text-gray-500"><Link href="/legal">Legal Information</Link></p>
            </div>
          </div>
          <div className="w-full md:w-5/6 md:ml-[16.6%]">
          {children}
          </div>
        </div>
        </body>
    </html>
  )
}

