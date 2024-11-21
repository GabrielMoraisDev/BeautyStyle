
"use client";

import { Carousel } from "flowbite-react";

export function Slider() {
  return (
    <div className="h-[50vw] sm:h-[33vw] md:h-[35vw] lg:h-[26vw] mt-0 bg-slate-100">
      <Carousel className="rounded-none bg-gradient-to-r from-slate-500 via-transparent to-slate-500">

      <div className="flex justify-center w-full h-full bg-cover bg-center" style={{ backgroundImage: `url('/img/carrosel/image1.webp')` }}>      
        <div className="absolute bottom-0 w-full h-12 bg-gradient-to-t from-slate-500 to-transparent opacity-60"></div>
      </div> 

      <div className="flex justify-center w-full h-full bg-cover bg-center" style={{ backgroundImage: `url('/img/carrosel/image2.webp')` }}>      
        <div className="absolute bottom-0 w-full h-12 bg-gradient-to-t from-slate-500 to-transparent opacity-60"></div>
      </div> 

      <div className="flex justify-center w-full h-full bg-cover bg-center" style={{ backgroundImage: `url('/img/carrosel/image3.webp')` }}>      
        <div className="absolute bottom-0 w-full h-12 bg-gradient-to-t from-slate-500 to-transparent opacity-60"></div>
      </div> 

      </Carousel>
    </div>
  );
}
