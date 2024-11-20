'use client'
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import "@/app/globals.css";
import Navbar from "@/components/Navbar";
import { useState, useEffect } from "react";
import Head from "next/head";

export default function Home() {
  const router = useRouter();
  const { name, imagem, description, price, qntKart } = router.query;
  
  const [qnt, setQnt] = useState(1);
  const [productCount, setProductCount] = useState(0);

  // Atualizar o productCount quando o router estiver pronto e o qntKart for válido
  useEffect(() => {
    if (router.isReady && qntKart) {
      const qntKartNumber = isNaN(Number(qntKart)) ? 0 : Number(qntKart);
      setProductCount(qntKartNumber);
    }
  }, [router.isReady, qntKart]);

  const addToCart = () => {
    setProductCount(productCount + qnt);
  };

  return (
    <div className="m-auto">
      <Head>
        <title>{name} Styled Wear</title>
        <meta name="description" content="Styled Wear created by Gabriel Morais" />
      </Head>

      <Navbar ProductCount={productCount} page='watches' />

      <div className="w-[80%] m-auto text-center">
        <h1 className='text-font-300 text-center mt-5 mb-3 text-xl uppercase'>{name}</h1>
        <Image width={300} height={300} src={`/img/${imagem}`} alt='' className='m-auto text-center' />
        <h1 className="text-3xl md:text-xl m-auto text-center mt-5">
            {Number(price).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
        </h1>
        <p className='mb-3 mt-5'>{description}</p>

        <div className="flex place-items-center justify-center m-auto text-center mb-5">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className={`bi bi-dash p-3 ${qnt === 1 ? 'bg-slate-400' : 'bg1 cursor-pointer'} text-white rounded-md`} viewBox="0 0 16 16" onClick={() => qnt > 1 && setQnt(qnt - 1)}>
            <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8"/>
          </svg>
          <p className='mx-3 select-none'>Quantidade: {qnt}</p>
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-plus p-3 bg1 cursor-pointer text-white rounded-md" viewBox="0 0 16 16" onClick={() => setQnt(qnt + 1)}>
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
          </svg>
        </div>

        <div className="inline md:flex md:justify-center md:place-items-center">
          <div onClick={addToCart} className='select-none w-full md:w-52 h-auto bg1 mt-2 mb-3 md:mb-10 md:mx-2 md:text-md lg:w-72 p-3 rounded-md text-white hover:opacity-70 duration-300 uppercase cursor-pointer'>
            Adicionar ao carrinho
          </div>
          <Link href={`/watches?qnt=${productCount}`}>
            <div className='select-none w-full md:w-52 h-auto bg1 mt-2 mb-10 md:mb-10 md:text-md md:mx-2 lg:w-72 p-3 rounded-md text-white hover:opacity-70 duration-300 uppercase'>
              Voltar à lista de produtos
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
