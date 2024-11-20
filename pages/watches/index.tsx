'use client'
import { useState } from 'react';
import { useRouter } from 'next/router';
import '@/app/globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ItemProduct from '@/components/ItemProduct';
import Head from 'next/head';

export default function Watches() {
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();
  const qntSave = Number(router.query.qnt) || 0; 
  
  const products = [
    { title: 'Relógio BeWase', price: 2599.99, imagem: 'vitrini3.png', description: 'Descrição do primeiro produto. Esse texto pode ser alterado e personalizado de acordo com a necessidade do cliente.' },
    { title: 'Relógio EveryWear', price: 3299.99, imagem: 'watch1.png', description: 'Descrição do segundo produto. Esse texto pode ser alterado e personalizado de acordo com a necessidade do cliente.' },
    { title: 'Relógio Wear Double', price: 4999.99, imagem: 'watch7.png', description: 'Descrição do terceiro produto. Esse texto pode ser alterado e personalizado de acordo com a necessidade do cliente.' },
    { title: 'Relógio OnlyBasic', price: 599.99, imagem: 'watch2.png', description: 'Descrição do quarto produto. Esse texto pode ser alterado e personalizado de acordo com a necessidade do cliente.' },
    { title: 'Relógio WearWatch', price: 699.99, imagem: 'watch3.png', description: 'Descrição do quinto produto. Esse texto pode ser alterado e personalizado de acordo com a necessidade do cliente.' },
    { title: 'Relógio WearYe', price: 889.99, imagem: 'watch4.png', description: 'Descrição do sexto produto. Esse texto pode ser alterado e personalizado de acordo com a necessidade do cliente.' },
    { title: 'Relógio Wolter', price: 1299.99, imagem: 'watch5.png', description: 'Descrição do sétimo produto. Esse texto pode ser alterado e personalizado de acordo com a necessidade do cliente.' },
    { title: 'Relógio WolterBasic', price: 5599.99, imagem: 'watch6.png', description: 'Descrição do oitavo produto. Esse texto pode ser alterado e personalizado de acordo com a necessidade do cliente.' },
  ];
  
  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="mb-10">

      <Head>
        <title>Relógios Styled Wear</title>
        <meta name="description" content="Styled Wear created by Gabriel Morais" />
      </Head>

      <Navbar ProductCount={qntSave} page="watches" />
      
      <h1 className='uppercase text-font-300 text-center text-xl md:text-3xl mt-5'>Relógios</h1>

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
            description={product.description}
              key={index}
              page="watches"
              title={product.title}
              imagem={product.imagem}
              price={product.price}
              qntKart={qntSave}
            />
          ))
        ) : (
          <p className='mt-5 text-center m-auto w-full text-2xl absolute'>Nenhum produto encontrado.</p>
        )}
      </div>
      
      <div className="w-[92%] m-auto mt-7">
        <hr className="custom-hr" />
        <Footer />
      </div>
    </div>
  );
}
