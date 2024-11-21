'use client';
import { useState } from 'react';
import '@/app/globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ItemProduct from '@/components/ItemProduct';
import Head from 'next/head';
import products from './data/brincos.json'; // Atualize o caminho de acordo com a localização do JSON

export default function Pants() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="mb-10">
      <Head>
        <title>Calças Styled Wear</title>
        <meta name="description" content="Styled Wear created by Gabriel Morais" />
      </Head>

      <Navbar page="brincos" />

      <h1 className="uppercase text-font-300 text-center text-xl md:text-3xl mt-5">Calças</h1>

      <div className="w-[92%] m-auto my-4 flex justify-center">
        <input
          type="text"
          placeholder="Pesquisar produto..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="w-[80%] m-auto p-2 border border-gray-300 rounded"
        />
      </div>

      <div className="w-[92%] grid grid-rows-8 grid-cols-1 md:grid-rows-4 md:grid-cols-2 xl:grid-cols-4 xl:grid-rows-2 place-items-center m-auto">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product, index) => (
            <ItemProduct
              id={product.id}
              description={product.description}
              key={index}
              page="brincos"
              title={product.title}
              imagem={product.imagem}
              price={product.price}
            />
          ))
        ) : (
          <p className="mt-5 text-center m-auto w-full text-2xl absolute">Nenhum produto encontrado.</p>
        )}
      </div>

      <div className="w-[92%] m-auto mt-7">
        <hr className="custom-hr" />
        <Footer />
      </div>
    </div>
  );
}
