
"use client";

import { Carousel } from "flowbite-react";
import Image from "next/image";

export function Slider() {
  return (
    <div className="h-[50vw] sm:h-[33vw] md:h-[35vw] lg:h-[26vw] mt-0 bg-slate-100">
      <Carousel className="rounded-none bg-gradient-to-r from-slate-500 via-transparent to-slate-500">

      <div className="flex justify-center w-full h-full">      
        <div className="absolute bottom-0 w-full h-12 bg-gradient-to-t from-slate-500 to-transparent opacity-60"></div>
        <Image width={1920} height={1080} className="h-auto w-full sm:w-[70%] md:w-[70%] lg:w-[55%] mt-0" src="/img/1.png" alt="..." />
      </div> 

      <div className="flex justify-center w-full h-full">
      <div className="absolute bottom-0 w-full h-12 bg-gradient-to-t from-slate-500 to-transparent opacity-60"></div>
        <Image width={1920} height={1080} className="h-auto w-full sm:w-[70%] md:w-[70%] lg:w-[55%] mt-0" src="/img/2.png" alt="..." />
      </div> 

      <div className="flex justify-center w-full h-full">
      <div className="absolute bottom-0 w-full h-12 bg-gradient-to-t from-slate-500 to-transparent opacity-60"></div>
        <Image width={1920} height={1080} className="h-auto w-full sm:w-[70%] md:w-[70%] lg:w-[55%] mt-0" src="/img/3.png" alt="..." />
      </div> 

      <div className="flex justify-center w-full h-full">
      <div className="absolute bottom-0 w-full h-12 bg-gradient-to-t from-slate-500 to-transparent opacity-60"></div>
        <Image width={1920} height={1080} className="h-auto w-full sm:w-[70%] md:w-[70%] lg:w-[55%] mt-0" src="/img/4.png" alt="..." />
      </div> 

      </Carousel>
    </div>
  );
}
