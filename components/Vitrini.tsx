import Image from "next/image";
import Link from "next/link";

interface Props {
  qntKart: number;
}

export default function Vitrini({ qntKart }: Props) {

    return(
        <div>
        <div className="sm:hidden w-full h-52 lg:h-80 overflow-hidden md:ml-5 xl:w-[50rem] md:h-auto">
            <Image width={300} height={300} src='/img/vitrini1.png' alt='' className="m-auto text-center w-full"></Image>
        </div>
        <div className="md:flex place-items-center h-auto">
            <div className="w-full h-auto lg:h-80 mb-7">
                <h1 className="text-xl text-font-300 text-slate-600 xl:text-3xl xl:mt-5 uppercase">Jaqueta BeWase 100% algodão slate-blue</h1>
                <label className="line-through text-gray-400 xl:text-2xl">R$ 1.500,00</label>
                <p className="text-2xl text-slate-500 xl:text-3xl">R$ 1.299,99 <label className="text-sm">À VISTA</label></p>
                <p className="text-font-300 mt-3 xl:w-[80%] xl:text-xl">Esta jaqueta 100% algodão é uma peça essencial para qualquer guarda-roupa. Feita de material natural e respirável, ela proporciona conforto o dia todo, além de um toque suave e agradável contra a pele. </p>
                    <div className="flex mt-3 xl:w-1/2 text-white">
                        <Link href={`/shirts/Jaqueta BeWase slate-blue?description=Descrição do primeiro produto. Esse texto pode ser alterado e personalizado de acordo com a necessidade do cliente.&imagem=vitrini1.png&price=1299.99&qntKart=${qntKart}`} className="w-1/2 flex justify-center place-items-center h-12 bg1 font-bold mr-2 rounded-md text-md hover:opacity-75 cursor-pointer duration-300">VER PRODUTO</Link>
                        <Link href={`/shirts?qnt=${qntKart}`} className="w-1/2 flex justify-center place-items-center h-12 bg1 font-bold mx-2 rounded-md text-md hover:opacity-75 cursor-pointer duration-300">VER MAIS</Link>
                    </div>
            </div>
            <div className="hidden sm:flex w-full h-52 lg:h-80 overflow-hidden md:ml-5 xl:w-[50rem] md:h-auto">
                <Image width={300} height={300} src='/img/vitrini1.png' alt='' className="m-auto text-center w-full"></Image>
            </div>
        </div>

<hr className="custom-hr my-10"/>

        <div className="md:flex place-items-center">
        <div className="w-full h-52 lg:h-80 overflow-hidden md:mr-5 xl:w-[50rem] md:h-auto">
                <Image width={500} height={500} src='/img/vitrini2.png' alt='' className="m-auto text-center w-full"></Image>
            </div>
            <div className="w-full h-auto lg:h-80 mb-7 md:text-right">
                <h1 className="text-xl text-font-300 text-slate-600 xl:text-3xl xl:mt-5 uppercase">Jaqueta Wear Double 100% algodão</h1>
                <label className="line-through text-gray-400 xl:text-2xl">R$ 3.799,99</label>
                <p className="text-2xl text-slate-500 xl:text-3xl">R$ 2.999,99 <label className="text-sm">À VISTA</label></p>
                <p className="text-font-300 mt-3 xl:w-[80%] xl:text-xl xl:float-end">Esta jaqueta, confeccionada 100% em algodão de alta qualidade, combina conforto e estilo em um design clássico e versátil. Disponível nas cores preta ou marrom, ela é perfeita para diversas ocasiões, desde um look casual até uma opção mais elegante para dias mais frescos.</p>
                    <div className="flex mt-3 xl:w-1/2 xl:float-end text-white">
                        <Link href={`/shirts/Jaqueta Wear Double?description=Descrição do segundo produto. Esse texto pode ser alterado e personalizado de acordo com a necessidade do cliente.&imagem=vitrini2.png&price=2999.99&qntKart=${qntKart}`} className="w-1/2 flex justify-center place-items-center h-12 bg1 font-bold mr-2 rounded-md text-md hover:opacity-75 cursor-pointer duration-300">VER PRODUTO</Link>
                        <Link href={`/shirts?qnt=${qntKart}`} className="w-1/2 flex justify-center place-items-center h-12 bg1 font-bold mx-2 rounded-md text-md hover:opacity-75 cursor-pointer duration-300">VER MAIS</Link>
                    </div>
            </div>
        </div>

<hr className="custom-hr my-10"/>

        <div className="sm:hidden w-full h-52 lg:h-80 overflow-hidden md:h-auto md:ml-5 xl:w-[50rem]">
                <Image width={500} height={500} src='/img/vitrini3.png' alt='' className="m-auto text-center w-full"></Image>
        </div>
        <div className="md:flex place-items-center">
            <div className="w-full h-auto lg:h-80 mb-7">
                <h1 className="text-xl text-font-300 text-slate-600 xl:text-3xl xl:mt-5 uppercase">Relógio Plate aço inoxidável Prata</h1>
                <label className="line-through text-gray-400 xl:text-2xl">R$ 1.499,99</label>
                <p className="text-2xl text-slate-500 xl:text-3xl">R$ 1.199,99 <label className="text-sm">À VISTA</label></p>
                <p className="text-font-300 mt-3 xl:w-[80%] xl:text-xl">Este relógio de aço inoxidável prata é a escolha perfeita para quem valoriza qualidade e estilo atemporal. Com um design clássico e sofisticado, ele combina perfeitamente com qualquer ocasião, seja para uso diário ou eventos especiais.</p>
                    <div className="flex mt-3 xl:w-1/2 text-white">
                        <Link href={`/watches/Relógio Plate aço inoxidável Prata?description=Descrição do terceiro produto. Esse texto pode ser alterado e personalizado de acordo com a necessidade do cliente.&imagem=vitrini3.png&price=1199.99&qntKart=${qntKart}`} className="w-1/2 flex justify-center place-items-center h-12 bg1 font-bold mr-2 rounded-md text-md hover:opacity-75 cursor-pointer duration-300">VER PRODUTO</Link>
                        <Link href={`/watches?qnt=${qntKart}`} className="w-1/2 flex justify-center place-items-center h-12 bg1 font-bold mx-2 rounded-md text-md hover:opacity-75 cursor-pointer duration-300">VER MAIS</Link>
                    </div>
            </div>
            <div className="hidden sm:flex w-full h-52 lg:h-80 overflow-hidden md:h-auto md:ml-5 xl:w-[50rem]">
                <Image width={500} height={500} src='/img/vitrini3.png' alt='' className="m-auto text-center w-full"></Image>
            </div>
        </div>

        </div>
    )
}