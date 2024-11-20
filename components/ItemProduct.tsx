import Image from "next/image";
import Link from "next/link";
import '@/app/globals.css'

interface ProdProps {
    title: string;
    page: string;
    imagem: string;
    description: string;
    price: number;
    qntKart: number;
  }

export default function ItemProduct({title, page, description, imagem, price, qntKart}:ProdProps){
    const valorFormatado = price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    return(
        <div>
        <div className="w-72 h-auto m-auto pb-5 mt-6 mb-2">
            <Link href={`${page}/${title}?description=${description}&imagem=${imagem}&price=${price}&qntKart=${qntKart}`}>
                <Image width={300}  height={300} src={`/img/${imagem}`} alt=''></Image>
                <h1 className='text-font-300 text-center mt-5 text-xl uppercase'>{title}</h1>
                <h1 className='text-font-300 text-center text-3xl uppercase text-slate-600'>{valorFormatado}</h1>
                <p className="mt-3 w-full truncate">Este texto pode ser personalizado conforme a sua necessidade. Adicione o produto ao carrinho clicando abaixo!</p>
                <div className="w-full h-auto p-3 bg1 text-white mt-3 text-xl md:text-sm text-center rounded-md cursor-pointer hover:opacity-70 duration-300 xl:w-[60%] xl:m-auto xl:mt-4">VER PRODUTO</div>
            </Link>
        </div>
        <hr className="block md:hidden border-slate-400 w-full m-auto"/>
        </div>
    )
}