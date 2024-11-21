import Link from "next/link"

export default function Features(){

    return(
        <div className="w-full sm:w-[60%] m-auto h-auto bg-transparent grid grid-cols-1 gap-5 grid-rows-3 lg:gap-0 lg:mt-8 lg:w-[100%] xl:w-[80%] lg:grid-cols-4 lg:grid-rows-1 mb-5">

            <Link href={`/brincos`} className="w-full h-96 lg:h-80 overflow-hidden cursor-pointer">
                <div className="h-full w-[85%] m-auto relative lg:opacity-65 lg:hover:opacity-100 duration-300">
                    <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl uppercase text-font-300 text-nowrap text-white z-40">Brincos</div>
                    <div className="w-full absolute h-96 bottom-0 bg-gradient-to-t from-slate-700 to-transparent z-30 opacity-75"></div>
                    <div className="w-full absolute h-96 bottom-0 bg-cover bg-center" style={{ backgroundImage: `url('/img/section1/brincos.webp')`}}></div>
                </div>
            </Link>

            <Link href={`/aneis`} className="w-full h-96 lg:h-80 overflow-hidden cursor-pointer">
                <div className="h-full w-[85%] m-auto relative lg:opacity-65 lg:hover:opacity-100 duration-300">
                    <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl uppercase text-font-300 text-nowrap text-white z-40">Anéis</div>
                    <div className="w-full absolute h-96 bottom-0 bg-gradient-to-t from-slate-700 to-transparent z-30 opacity-75"></div>
                    <div className="w-full absolute h-96 bottom-0 bg-cover bg-center" style={{ backgroundImage: `url('/img/section1/aneis.webp')`}}></div>
                </div>
            </Link>

            <Link href={`/colares`} className="w-full h-96 lg:h-80 overflow-hidden cursor-pointer">
                <div className="h-full w-[85%] m-auto relative lg:opacity-65 lg:hover:opacity-100 duration-300">
                    <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl uppercase text-font-300 text-nowrap text-white z-40">Colares</div>
                    <div className="w-full absolute h-96 bottom-0 bg-gradient-to-t from-slate-700 to-transparent z-30 opacity-75"></div>
                    <div className="w-full absolute h-96 bottom-0 bg-cover bg-center" style={{ backgroundImage: `url('/img/section1/colares.webp')`}}></div>
                </div>
            </Link>

            <Link href={`/pulseiras`} className="w-full h-96 lg:h-80 overflow-hidden cursor-pointer">
                <div className="h-full w-[85%] m-auto relative lg:opacity-65 lg:hover:opacity-100 duration-300">
                    <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl uppercase text-font-300 text-nowrap text-white z-40">Pulseiras</div>
                    <div className="w-full absolute h-96 bottom-0 bg-gradient-to-t from-slate-700 to-transparent z-30 opacity-75"></div>
                    <div className="w-full absolute h-96 bottom-0 bg-cover bg-center" style={{ backgroundImage: `url('/img/section1/pulseiras.webp')`}}></div>
                </div>
            </Link>

        </div>
    )
}