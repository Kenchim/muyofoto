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
      {path: "../top_horizontal/1.jpg"},
      {path: "../top_horizontal/2.jpg"},
      {path: "../top_horizontal/3.jpg"},
      {path: "../top_horizontal/4.jpg"},
      {path: "../top_horizontal/5.jpg"},
      {path: "../top_horizontal/6.jpg"},
    ];
    const slidesVertical = [
      {path: "../top_vertical/1.jpg"},
      {path: "../top_vertical/2.jpg"},
      {path: "../top_vertical/3.jpg"},
      {path: "../top_vertical/4.jpg"},
      {path: "../top_vertical/5.jpg"},
      {path: "../top_vertical/6.jpg"},
      {path: "../top_vertical/7.jpg"},
      {path: "../top_vertical/8.jpg"},
      {path: "../top_vertical/9.jpg"},
      {path: "../top_vertical/10.jpg"},
      {path: "../top_vertical/11.jpg"},
      {path: "../top_vertical/12.jpg"},
    ];
    
    
    const [slideIndex, setSlideIndex] = useState(0);

    useEffect(() => {
      let newIndex = 0;
      setInterval(() => {
        if(newIndex <= 10){
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
      <div className="flex items-center justify-center min-h-screen px-4 max-w-7xl">
      <div className="flex flex-col items-center text-center px-4 py-8 md:w-2/3 w-full">
      <h1 className="text-xl md:text-2xl font-light xl:mb-4 mb-0 font-serif tracking-widest pt-28 mv:pt-0">Thank you for coming to AABF!<a className="md:ml-2 xl:ml-4 tracking-widest"></a></h1>
      <p className="text-xs xl:text-base mb-2 font-serif tracking-widest m-auto">AICHI ART BOOK FAIR 2025</p>
      <div className="w-full max-w-3xl mt-6 mb-8 z-[-2]">
        <img
          src="../aabf2025.png" // 実際の画像パスに変更してください
          alt=""
          className="w-full object-cover mv:block hidden"
        />
        <img
          src="../aabf2025.png" // 実際の画像パスに変更してください
          alt="運ぶ人"
          className="w-full object-cover mv:hidden"
        />
      </div>
      <p className="text-xs xl:text-base mb-2 font-serif tracking-widest ml-auto text-right">
      11.26 Wed. – 12.2 Tue., 2025<br />
      10:00 – 20:00<br />
      @NAGOYA MATSUZAKAYA, Organ Plaza, South Building 1F<br />
      Admission Free
      </p>
      <div className="text-right mt-2 tracking-wide ml-auto">
      <a href="https://aichiartbookfair.com/" className="text-xs xl:text-base underline hover:opacity-80 font-serif ">
        https://aichiartbookfair.com/
      </a>
      </div>
    </div>
    </div>
    {/* <div className="hidden mv:block max-w-[1440px] w-full max-h-screen h-full relative py-32 md:py-10 px-0 md:px-4 z-[-2]">
        <div style={{backgroundImage: `url(${slides[slideIndex].path})`}} className="bg-center bg-contain bg-no-repeat w-5/6 max-h-screen h-full object-contain mx-auto"></div>
    </div>
    <div className="block mv:hidden max-w-[1440px] w-full max-h-screen h-full relative py-40 md:py-10 px-0 md:px-4 z-[-2]">
        <div style={{backgroundImage: `url(${slidesVertical[slideIndex].path})`}} className="bg-center bg-contain bg-no-repeat w-5/6 max-h-screen h-full object-contain mx-auto"></div>
    </div> */}
    </>
  ) 
}
