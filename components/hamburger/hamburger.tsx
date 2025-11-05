"use client"

import Link from "next/link";
import { useState } from "react";
import { FaXmark } from "react-icons/fa6"
import { MdSort } from "react-icons/md"

const Hamburger = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
    return (
        <div className="md:hidden">
          <button onClick={toggleMenu} className="fixed md:static mt-[70px] z-20 md:hidden">
            {isOpen ? <FaXmark size={20} color="#d1d1d1" /> :  <MdSort size={24} color="#d1d1d1" /> }
          </button>
          <nav className={isOpen ? "block" : "hidden"}>
          <div className="fixed inset-x-0 bottom-0 px-6 shadow-lg w-max bg-white h-full z-[0]">
              <ul className="mt-[160%]" onClick={toggleMenu}>
                <li className="font-bold hover:text-gray-500 leading-6"><Link href="/muyodoc">MUYO DOC</Link></li>
                <li className="text-xs hover:text-gray-500 leading-6"><Link href="/muyodoc/taqueros">- Los Taqueros</Link></li>
                <li className="text-xs hover:text-gray-500 leading-6"><Link href="/muyodoc/solazul">- PORTEÑOS MIRAN AL SOL AZUL</Link></li>
                <li className="text-xs hover:text-gray-500 leading-6"><Link href="/muyodoc/bellavita">- La Bella Vita</Link></li>
                <li className="text-xs hover:text-gray-500 leading-6"><Link href="/muyodoc/thoughts_mist">- Thoughts in the Mist</Link></li>
                <li className="text-xs hover:text-gray-500 leading-6"><Link href="/muyodoc/carrier">- the Carrier(Hakobu Hito)</Link></li>
              </ul>
              <ul className="pt-4" onClick={toggleMenu}>
                <li className="font-bold hover:text-gray-500 leading-6"><Link href="/muyolog">MUYO LOG</Link></li>
                <li className="text-xs leading-6 hover:text-gray-500"><Link href="/muyolog/palette">- Palette of Madrid</Link></li>
                <li className="text-xs leading-6 hover:text-gray-500"><Link href="/muyolog/treasureddays">- Treasured Days</Link></li>
                <li className="text-xs leading-6 hover:text-gray-500"><Link href="/muyolog/espositos">- La MURGA!!</Link></li>
                <li className="text-xs leading-6 hover:text-gray-500"><Link href="/muyolog/mistique">- Mistique Vauban</Link></li>
              </ul>
              <p className="pt-4 font-bold hover:text-gray-500" onClick={toggleMenu}><Link href="/about">ABOUT</Link></p>
              <p className="pt-4 font-bold hover:text-gray-500" onClick={toggleMenu}><Link href="/news">NEWS</Link></p>
              <ul className="pt-4">
                <li className="font-bold leading-6">SHOP</li>
                <li className="text-sm hover:text-gray-500 leading-6" onClick={toggleMenu}><Link href="/photobook">- the Carrier (Hakobu Hito)</Link></li>
              </ul>
              <p className="pt-4 font-bold hover:text-gray-500" onClick={toggleMenu}><Link href="/legal">Legal Information</Link></p>
            </div>
          </nav>
        </div>
      );
    };
    
    export default Hamburger;