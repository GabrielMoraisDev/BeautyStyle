'use client';

import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import '@/app/globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import products from './data/brincos.json'; // Atualize o caminho de acordo com a localização do seu arquivo JSON

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  imagem: string;
  quantity: number;
}

export default function ProductDetails() {
  const router = useRouter();
  const { id } = router.query; // Captura o ID da URL
  const [product, setProduct] = useState<Product | null>(null); // Estado para armazenar o produto
  const [qnt, setQnt] = useState(1); // Estado para quantidade

  // Função para adicionar o produto ao carrinho
  const addToCart = () => {
    if (product) {
      const cart: Product[] = JSON.parse(localStorage.getItem('cart') || '[]');
      const existingProduct = cart.find((item) => item.id === product.id);

      if (existingProduct) {
        existingProduct.quantity += qnt; // Incrementa a quantidade se o produto já estiver no carrinho
      } else {
        cart.push({ ...product, quantity: qnt }); // Adiciona o produto ao carrinho
      }

      localStorage.setItem('cart', JSON.stringify(cart)); // Salva o carrinho no localStorage
      updateCartCount();
    }

    alert('Produto adicionado ao carrinho de compras')
    location.reload();

  };

  // Atualizar o contador de produtos no carrinho
  const updateCartCount = () => {
    const cart: Product[] = JSON.parse(localStorage.getItem('cart') || '[]');
    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
    localStorage.setItem('cartCount', totalItems.toString());
  };

  // Carregar o produto com base no ID da URL
  useEffect(() => {
    if (id) {
      const foundProduct = products.find((item) => item.id === Number(id));
      setProduct(foundProduct ? { ...foundProduct, quantity: 1 } : null);
    }
  }, [id]);

  // Se o produto não for encontrado
  if (!product) {
    return (
      <div className="m-auto text-center">
        <Head>
          <title>Produto não encontrado</title>
          <meta name="description" content="Created with NextJS" />
        </Head>

        <Navbar page="brincos" />
        <p className="text-2xl mt-10">Produto não encontrado.</p>
        <Link href={`/brincos`}>
          <div className="select-none w-full md:w-52 h-auto bg1 mt-5 mb-10 md:mb-10 md:text-md lg:w-72 p-3 rounded-md text-white hover:opacity-70 duration-300 uppercase cursor-pointer m-auto">
            Voltar à lista de produtos
          </div>
        </Link>
      </div>
    );
  }

  return (
    <div className="m-auto">
      <Head>
        <title>{product.title} | Styled Wear</title>
        <meta name="description" content="Created with NextJS" />
      </Head>

      <Navbar page="brincos" />

      <div className="w-[80%] m-auto text-center">
        <h1 className="text-font-300 text-center mt-5 mb-3 text-xl uppercase">
          {product.title}
        </h1>
        <Image
          width={300}
          height={300}
          src={`/img${product.imagem}`}
          alt={product.title}
          className="m-auto text-center"
        />
        <h1 className="text-3xl md:text-xl m-auto text-center mt-5">
          {product.price.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          })}
        </h1>
        <p className="mb-3 mt-5">{product.description}</p>

        <div className="flex place-items-center justify-center m-auto text-center mb-5">
          <button
            disabled={qnt === 1}
            className={`bi bi-dash p-3 w-10 h-10 flex justify-center place-items-center ${qnt === 1 ? 'bg-gray-300' : 'bg1 cursor-pointer'} text-white rounded-md`}
            onClick={() => qnt > 1 && setQnt(qnt - 1)}
          >
            -
          </button>
          <p className="mx-3 select-none">Quantidade: {qnt}</p>
          <button
            className="bi bi-plus p-3 bg1 w-10 h-10 flex justify-center place-items-center cursor-pointer text-white rounded-md"
            onClick={() => setQnt(qnt + 1)}
          >
            +
          </button>
        </div>

        <div className="inline md:flex md:justify-center md:place-items-center">
          <div
            onClick={addToCart}
            className="select-none w-full md:w-52 h-auto bg1 mt-2 mb-3 md:mb-10 md:mx-2 md:text-md lg:w-72 p-3 rounded-md text-white hover:opacity-70 duration-300 uppercase cursor-pointer"
          >
            Adicionar ao carrinho
          </div>
          <Link href={`/brincos`}>
            <div className="select-none w-full md:w-52 h-auto bg1 mt-2 mb-10 md:mb-10 md:text-md md:mx-2 lg:w-72 p-3 rounded-md text-white hover:opacity-70 duration-300 uppercase">
              Voltar à lista de produtos
            </div>
          </Link>
        </div>
      </div>

      <div className="w-[92%] m-auto mt-7">
        <hr className="custom-hr" />
        <Footer />
      </div>
    </div>
  );
}
