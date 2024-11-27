import Image from "next/image";
import Link from "next/link";

export default function Vitrini() {

    return(
        <div className="xl:w-[77%] xl:m-auto">
        <div className="sm:hidden w-full h-52 lg:h-80 overflow-hidden md:ml-5 xl:w-[50rem] md:h-auto">
            <Image width={300} height={300} src='/img/section2/image1.webp' alt='' className="m-auto text-center w-full"></Image>
        </div>
        <div className="md:flex place-items-center h-auto">
            <div className="w-full h-auto lg:h-80 mb-7">
                <h1 className="text-xl text-font-300 text-color3 xl:text-3xl xl:mt-5 uppercase">PAR DE ALIANÇAS DE OURO 18K</h1>
                <label className="line-through text-gray-400 xl:text-2xl">R$ 1.500,00</label>
                <p className="text-2xl text-color2 xl:text-3xl">R$ 1.299,99 <label className="text-sm">À VISTA</label></p>
                <p className="text-font-300 mt-3 xl:w-[80%] xl:text-xl">Alianças fabricadas manualmente, com equipamentos da mais alta tecnologia seguindo normas e padrões Nacionais e Internacionais...</p>
                    <div className="flex mt-3 xl:w-[65%] text-white">
                        <Link href={`/aneis/1`} className="w-1/2 flex justify-center place-items-center h-12 bg1 font-bold mr-2 rounded-md text-md hover:opacity-75 cursor-pointer duration-300">VER PRODUTO</Link>
                        <Link href={`/aneis`} className="w-1/2 flex justify-center place-items-center h-12 bg1 font-bold mx-2 rounded-md text-md hover:opacity-75 cursor-pointer duration-300">VER MAIS</Link>
                    </div>
            </div>
            <div className="hidden sm:flex w-full h-52 lg:h-80 overflow-hidden md:ml-5 xl:w-[50rem] md:h-auto">
                <Image width={300} height={300} src='/img/section2/image1.webp' alt='' className="m-auto text-center w-full"></Image>
            </div>
        </div>

<hr className="custom-hr my-10"/>

        <div className="md:flex place-items-center">
        <div className="w-full h-52 lg:h-80 overflow-hidden md:mr-5 xl:w-[50rem] md:h-auto">
                <Image width={500} height={500} src='/img/section2/image2.webp' alt='' className="m-auto text-center w-full"></Image>
            </div>
            <div className="w-full h-auto lg:h-80 mb-7 md:text-right">
                <h1 className="text-xl text-font-300 text-color3 xl:text-3xl xl:mt-5 uppercase">BRINCOS DE DIAMANTE ENCRUSTADO</h1>
                <label className="line-through text-gray-400 xl:text-2xl">R$ 3.799,99</label>
                <p className="text-2xl text-color2 xl:text-3xl">R$ 2.999,99 <label className="text-sm">À VISTA</label></p>
                <p className="text-font-300 mt-3 xl:w-[80%] xl:text-xl xl:float-end">Brincos fabricados manualmente, com equipamentos da mais alta tecnologia seguindo normas e padrões Nacionais e Internacionais...</p>
                    <div className="flex mt-3 xl:w-[65%] xl:float-end text-white">
                        <Link href={`/brincos/1`} className="w-1/2 flex justify-center place-items-center h-12 bg1 font-bold mr-2 rounded-md text-md hover:opacity-75 cursor-pointer duration-300">VER PRODUTO</Link>
                        <Link href={`/brincos`} className="w-1/2 flex justify-center place-items-center h-12 bg1 font-bold mx-2 rounded-md text-md hover:opacity-75 cursor-pointer duration-300">VER MAIS</Link>
                    </div>
            </div>
        </div>

<hr className="custom-hr my-10"/>

        <div className="sm:hidden w-full h-52 lg:h-80 overflow-hidden md:h-auto md:ml-5 xl:w-[50rem]">
                <Image width={500} height={500} src='/img/section2/image3.webp' alt='' className="m-auto text-center w-full"></Image>
        </div>
        <div className="md:flex place-items-center">
            <div className="w-full h-auto lg:h-80 mb-7">
                <h1 className="text-xl text-font-300 text-color3 xl:text-3xl xl:mt-5 uppercase">PULSEIRAS DE OURO 18K</h1>
                <label className="line-through text-gray-400 xl:text-2xl">R$ 1.499,99</label>
                <p className="text-2xl text-color2 xl:text-3xl">R$ 1.199,99 <label className="text-sm">À VISTA</label></p>
                <p className="text-font-300 mt-3 xl:w-[80%] xl:text-xl">Pulseiras fabricadas manualmente, com equipamentos da mais alta tecnologia seguindo normas e padrões Nacionais e Internacionais...</p>
                    <div className="flex mt-3 xl:w-[65%] text-white">
                        <Link href={`/pulseiras/1`} className="w-1/2 flex justify-center place-items-center h-12 bg1 font-bold mr-2 rounded-md text-md hover:opacity-75 cursor-pointer duration-300">VER PRODUTO</Link>
                        <Link href={`/pulseiras`} className="w-1/2 flex justify-center place-items-center h-12 bg1 font-bold mx-2 rounded-md text-md hover:opacity-75 cursor-pointer duration-300">VER MAIS</Link>
                    </div>
            </div>
            <div className="hidden sm:flex w-full h-52 lg:h-80 overflow-hidden md:h-auto md:ml-5 xl:w-[50rem]">
                <Image width={500} height={500} src='/img/section2/image3.webp' alt='' className="m-auto text-center w-full"></Image>
            </div>
        </div>

        </div>
    )
}