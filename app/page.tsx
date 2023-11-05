"use client" 
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Page() { 
    const slides = [
      {path: "mexico.png"},
      {path: "buenos.jpg"},
      {path: "napoli.png"},
      {path: "madrid.png"},
      {path: "montevideo.png"},
      {path: "muruga.png"},
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
      }, 3000)
    }, [])

    return (
    <div className="max-w-[1440px] w-full max-h-screen h-full relative py-32 md:py-10 px-0 md:px-4 z-[-2]">
      <Link href="#">
        <div style={{backgroundImage: `url(${slides[slideIndex].path})`}} className="bg-center bg-contain bg-no-repeat w-5/6 max-h-screen h-full object-contain mx-auto"></div>
      </Link>
      <div></div>
    </div>
  ) 
}

