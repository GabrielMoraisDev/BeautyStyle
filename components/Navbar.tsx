'use client'; // deve ser sempre a primeira linha no arquivo

import { useEffect, useState } from "react";
import Link from "next/link";

interface NavProps {
  page: string;
  ProductCount: number;
}

export default function Navbar({ page, ProductCount }: NavProps) {
  const [menu, setMenu] = useState<boolean>(false);
  const [classc, setClassc] = useState<string>('right-[-20rem]');

  useEffect(() => {
    if (ProductCount > 0) {
      setClassc('right-[2rem]');
      const timer = setTimeout(() => {
        setClassc('right-[-20rem]');
      }, 3000);
      
      return () => clearTimeout(timer); // limpa o timeout quando o componente desmonta ou ProductCount muda
    }
  }, [ProductCount]); // esse useEffect executa toda vez que ProductCount mudar


    return (
        <>
        <div className="h-20 w-full bg1 z-50">
            <h1 className="text-center text-white text-font-500 text-2xl sm:text-4xl uppercase pt-5">Styled Wear</h1>
            <hr className="w-[89.3%] m-auto border-white mt-2"/>
        </div>

        <div className={`fixed bottom-5 bg-slate-800 ${classc} rounded-md py-4 px-7 duration-300 text-white z-50`}>{ProductCount} itens em seu carrinho!</div>

            <nav className="bg1 sticky mt-[-1rem] top-0 sm:top-0 sm:mt-0 w-full h-16 z-50 flex text-font-300 place-items-center">

            <div className="border-white border w-10 h-10 absolute left-[5vw] mb-5 sm:hidden rounded-md flex justify-center place-items-center mt-10 top-[-1.7rem]">
                <svg xmlns="http://www.w3.org/2000/svg" width="55%" height="55%" fill="currentColor" className={`bi bi-list text-white ${menu?'hidden':'block'}`} viewBox="0 0 16 16"  onClick={()=>setMenu(true)}>
                    <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="55%" height="55%" fill="currentColor" className={`bi bi-x text-white ${menu?'block':'hidden'}`}viewBox="0 0 16 16"  onClick={()=>setMenu(false)}>
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                </svg>
            </div>

            <Link href='/cart' className="border-white border w-10 h-10 absolute right-[5vw] mb-5 sm:hidden rounded-md flex justify-center place-items-center mt-10 top-[-1.7rem]">
                <svg xmlns="http://www.w3.org/2000/svg" width="55%" height="55%" fill="currentColor" className="bi bi-cart3 text-white" viewBox="0 0 16 16">
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                </svg>
            </Link>

            <div className={`inline sm:hidden absolute bg1 w-full ${menu ? 'h-1 pb-72' : 'h-0'} left-0 top-11 overflow-hidden text-white duration-300 mt-4`}>
                <Link href={`/?qnt=${encodeURIComponent(ProductCount)}`}><p className={`${page==='home'?'opacity-70':''} mt-4 ml-[6vw]`}>INÍCIO</p></Link>
                <Link href={`/shirts?qnt=${encodeURIComponent(ProductCount)}`}><p className={`${page==='shirt'?'opacity-70':''} ml-[6vw] mt-4`}>CAMISAS</p></Link>
                <Link href={`/pants?qnt=${encodeURIComponent(ProductCount)}`}><p className={`${page==='pants'?'opacity-70':''} mt-4 ml-[6vw]`}>CALÇAS</p></Link>
                <Link href={`/watches?qnt=${encodeURIComponent(ProductCount)}`}><p className={`${page==='watches'?'opacity-70':''} mt-4 ml-[6vw]`}>RELÓGIOS</p></Link>
                <Link href={`/login?qnt=${encodeURIComponent(ProductCount)}`}><p className={`${page==='login'?'opacity-70':''} mt-4 ml-[6vw]`}>ENTRAR</p></Link>
                <Link href={`/cart?qnt=${encodeURIComponent(ProductCount)}`}><p className={`${page==='cart'?'opacity-70':''} mt-4 ml-[6vw]`}>CARRINHO DE COMPRAS</p></Link>
            </div>

                <Link href={`/?qnt=${encodeURIComponent(ProductCount)}`} className={`${page==='home'?'opacity-65':'hover:opacity-65'} hidden sm:block sm:ml-3 sm:text-sm md:text-sm md:ml-10 xl:text-md xl:ml-20 text-white text-md cursor-pointer duration-300`}>INÍCIO</Link>
                <Link href={`/shirts?qnt=${encodeURIComponent(ProductCount)}`} className={`${page==='shirts'?'opacity-65':'hover:opacity-65'} hidden sm:block sm:ml-10 sm:text-sm md:text-sm md:ml-14 xl:text-md xl:ml-20 text-white text-md cursor-pointer duration-300`}>CAMISAS</Link>
                <Link href={`/pants?qnt=${encodeURIComponent(ProductCount)}`} className={`${page==='pants'?'opacity-65':'hover:opacity-65'} hidden sm:block sm:ml-3 sm:text-sm md:text-sm md:ml-10 xl:text-md xl:ml-20 text-white text-md cursor-pointer duration-300`}>CALÇAS</Link>
                <Link href={`/watches?qnt=${encodeURIComponent(ProductCount)}`} className={`${page==='watches'?'opacity-65':'hover:opacity-65'} hidden sm:block sm:ml-3 sm:text-sm md:text-sm md:ml-10 xl:text-md xl:ml-20 text-white text-md cursor-pointer duration-300`}>RELÓGIOS</Link>

                <div className="hidden sm:flex ml-auto sm:mr-10 sm:w-[40%] md:mr-12 lg:mr-14 xl:mr-20 w-[30%] h-12 mt-2">
                    <div className="opacity-0 flex w-[60%] bg-white h-10 ml-auto mr-2 rounded-md overflow-hidden">
                        <input type="text" className="cursor-default flex place-items-center bg-white text-black border-0 w-[80%] h-full pl-6 font-sans focus:outline-none focus:ring-0" placeholder="Pesquisar..."/>
                        <div className="w-[1px] h-[70%] my-auto bg-slate-700 text-white"></div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="flex m-auto justify-center bi bi-search text-black" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                        </svg>
                    </div>
                    <Link href={`/login?qnt=${encodeURIComponent(ProductCount)}`} className="relative bg-transparent border border-white text-white hover:bg-white hover:text-slate-800 rounded-full w-10 h-10 ml-3 flex justify-center place-items-center duration-300 cursor-pointer">
                        <div className={`absolute w-7 h-7 ${ProductCount > 0 ? 'bg-slate-800':'hidden'} top-[-7px] left-[-18px] rounded-full flex justify-center place-items-center text-white hover:text-white duration-300`}>{ProductCount}</div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="55%" height="55%" fill="currentColor" className="bi bi-cart3" viewBox="0 0 16 16">
                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                        </svg>
                    </Link>

                    <Link href={`/login?qnt=${encodeURIComponent(ProductCount)}`} className="bg-transparent border border-white text-white hover:bg-white hover:text-slate-800 rounded-full w-10 h-10 ml-3 flex justify-center place-items-center duration-300 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="60%" height="60%" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
                        </svg>
                    </Link>
                </div>
            </nav>
        </>
    )
}
