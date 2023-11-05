"use client" 
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Page() { 
    const slides = [
      {path: "../taqueros/2.jpg"},
      {path: "../sol_azul/1.jpg"},
      {path: "../bella_vita/1.jpg"},
      {path: "../madrid/1.jpg"},
      {path: "../montevideo/1.jpg"},
      {path: "../los_espositos/1.jpg"},
    ];
    const slidesVertical = [
      {path: "../top_vertical/1.jpg"},
      {path: "../top_vertical/2.jpg"},
      {path: "../top_vertical/3.jpg"},
      {path: "../top_vertical/4.jpg"},
      {path: "../top_vertical/5.jpg"},
      {path: "../top_vertical/6.jpg"},
    ];
    
    
    const [slideIndex, setSlideIndex] = useState(0);

    useEffect(() => {
      let newIndex = 0;
      setInterval(() => {
        if(newIndex <= 4){
          newIndex = newIndex + 1;
          setSlideIndex(newIndex)
          console.log(newIndex)
        } else {
          newIndex = 0;
          setSlideIndex(newIndex);
          console.log(newIndex)
        }
      }, 2400)
    }, [])

    return (
      <>
    <div className="hidden mv:block max-w-[1440px] w-full max-h-screen h-full relative py-32 md:py-10 px-0 md:px-4 z-[-2]">
        <div style={{backgroundImage: `url(${slides[slideIndex].path})`}} className="bg-center bg-contain bg-no-repeat w-5/6 max-h-screen h-full object-contain mx-auto"></div>
    </div>
    <div className="block mv:hidden max-w-[1440px] w-full max-h-screen h-full relative py-40 md:py-10 px-0 md:px-4 z-[-2]">
        <div style={{backgroundImage: `url(${slidesVertical[slideIndex].path})`}} className="bg-center bg-contain bg-no-repeat w-5/6 max-h-screen h-full object-contain mx-auto"></div>
    </div>
    </>
  ) 
}
