import Image from "next/image";
import Link from "next/link";
import '@/app/globals.css'

interface ProdProps {
    id: number;
    title: string;
    page: string;
    imagem: string;
    description: string;
    price: number;
  }

export default function ItemProduct({id, title, page, description, imagem, price}:ProdProps){
    const valorFormatado = price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    return(
        <div>
        <div className="w-80 lg:w-[21vw] h-auto m-auto mt-6 mb-2 shadow-lg px-5 pt-5 pb-7 rounded-lg">
            <Link href={`${page}/${id}`}>
                <Image width={300}  height={300} src={`/img${imagem}`} alt='' className="h-72 text-center m-auto"></Image>
                <h1 className='text-font-300 text-center mt-5 text-xl uppercase'>{title}</h1>
                <h1 className='text-font-300 text-center text-3xl uppercase text-slate-600'>{valorFormatado}</h1>
                <p className="mt-3 w-full truncate">{description}</p>
                <div className="w-full h-auto p-3 bg1 text-white mt-3 text-xl md:text-sm text-center rounded-md cursor-pointer hover:opacity-70 duration-300 xl:w-[60%] xl:m-auto xl:mt-4">VER PRODUTO</div>
            </Link>
        </div>
        <hr className="block md:hidden border-slate-400 w-full m-auto mt-10"/>
        </div>
    )
}