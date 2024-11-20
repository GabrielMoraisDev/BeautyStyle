import Link from "next/link"

interface Props{
    qntSave:number;
}

export default function Features({qntSave}:Props){

    return(
        <div className="w-full sm:w-[60%] m-auto h-auto bg-trnasparent grid grid-cols-1 gap-5 grid-rows-3 lg:gap-0 lg:mt-8 lg:w-[100%] xl:w-[80%] lg:grid-cols-3 lg:grid-rows-1 mb-5">

            <Link href={`/shirts?qnt=${qntSave}`} className="w-full h-96 lg:h-80 overflow-hidden cursor-pointer">
                <div className="h-full w-[85%] m-auto relative lg:opacity-65 lg:hover:opacity-100 duration-300">
                    <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl uppercase text-font-300 text-nowrap text-white z-40">Camisas</div>
                    <div className="w-full absolute h-96 bottom-0 bg-gradient-to-t from-slate-700 to-transparent z-30 opacity-75"></div>
                    <div className="w-full absolute h-96 bottom-0 bg-img1"></div>
                </div>
            </Link>

            <Link href={`/pants?qnt=${qntSave}`} className="w-full h-96 lg:h-80 overflow-hidden cursor-pointer">
                <div className="h-full w-[85%] m-auto relative lg:opacity-65 lg:hover:opacity-100 duration-300">
                    <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl uppercase text-font-300 text-nowrap text-white z-40">Calças</div>
                    <div className="w-full absolute h-96 bottom-0 bg-gradient-to-t from-slate-700 to-transparent z-30 opacity-75"></div>
                    <div className="w-full absolute h-96 bottom-0 bg-img2"></div>
                </div>
            </Link>

            <Link href={`/watches?qnt=${qntSave}`} className="w-full h-96 lg:h-80 overflow-hidden cursor-pointer">
                <div className="h-full w-[85%] m-auto relative lg:opacity-65 lg:hover:opacity-100 duration-300">
                    <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl uppercase text-font-300 text-nowrap text-white z-40">Relógios</div>
                    <div className="w-full absolute h-96 bottom-0 bg-gradient-to-t from-slate-700 to-transparent z-30 opacity-75"></div>
                    <div className="w-full absolute h-96 bottom-0 bg-img3"></div>
                </div>
            </Link>

        </div>
    )
}