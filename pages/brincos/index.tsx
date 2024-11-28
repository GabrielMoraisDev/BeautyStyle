'use client';
import { useState, useEffect } from 'react';
import '@/app/globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ItemProduct from '@/components/ItemProduct';
import Head from 'next/head';

interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  imageUrl?: string;
}

interface Order {
  id: number; // Id do produto
  qnt: number; // Quantidade do produto no pedido
}

export default function Brincos() {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Estado para armazenar os pedidos
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://lime-dragonfly-325155.hostingersite.com/products.php?categoria=brincos');
        if (!response.ok) {
          throw new Error('Erro ao buscar os produtos.');
        }
        const data: Product[] = await response.json();
        setProducts(data);
      } catch (err: unknown) {
        setError((err as Error).message);
      }
    };
  
    const fetchOrders = async () => {
      try {
        const userId = localStorage.getItem('userId') || '99999'; // Se estiver vazio, substitui por '99999'
        const response = await fetch('https://lime-dragonfly-325155.hostingersite.com/pedidos.php?id_user=' + userId);
        if (!response.ok) {
          throw new Error('Erro ao buscar os pedidos.');
        }
        const data = await response.json();
        setOrders(data);
      } catch (err: unknown) {
        setError((err as Error).message);
      } finally {
        setIsLoading(false);
      }
    };
  
    fetchProducts();
    fetchOrders();
  }, []);

  // Função para calcular o desconto
  const calculateDiscountedPrice = (price: number, totalQuantity: number) => {
    const discount = price * (totalQuantity * 1.4 / 100); // Calculando o desconto
    return price - discount;  // Retornando o preço com desconto
  };

  // Somando todas as quantidades de pedidos
  const totalOrdersQuantity = orders.reduce((acc, order) => acc + order.qnt, 0);

  // Filtrando produtos com base na pesquisa
  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="mb-10">
      <Head>
        <title>Brincos - Beauty Style</title>
        <meta name="description" content="Created with NextJS" />
      </Head>

      <Navbar page="brincos" />

      <h1 className="uppercase text-font-300 text-center text-xl md:text-3xl mt-5">
        Brincos
      </h1>
      <p className="text-center text-green-700">{totalOrdersQuantity > 0 && `(DESCONTO DE ${totalOrdersQuantity * 1.4}% APLICADO)`}</p>


      <div className="w-[92%] m-auto my-4 flex justify-center">
        <input
          type="text"
          placeholder="Pesquisar produto..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-[80%] m-auto p-2 border border-gray-300 rounded"
        />
      </div>

      <div className="w-[92%] grid grid-rows-8 grid-cols-1 md:grid-rows-4 md:grid-cols-2 xl:grid-cols-4 xl:grid-rows-2 place-items-center m-auto">
        {isLoading ? (
          <p className="mt-5 text-center m-auto w-full text-2xl absolute">Carregando produtos...</p>
        ) : error ? (
          <p className="mt-5 text-center m-auto w-full text-2xl absolute text-red-500">
            Erro: {error}
          </p>
        ) : filteredProducts.length > 0 ? (
          filteredProducts.map((product) => {
            // Calculando o preço com o desconto baseado na quantidade total de pedidos
            const discountedPrice = calculateDiscountedPrice(product.price, totalOrdersQuantity);

            return (
              <ItemProduct
                id={product.id}
                description={product.description}
                key={product.id}
                page="brincos"
                title={product.title}
                imagem={product.imageUrl || `/products/brincos/${product.id}.webp`} // Usando imagem opcional
                price={discountedPrice}  // Passando o preço com desconto
              />
            );
          })
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
