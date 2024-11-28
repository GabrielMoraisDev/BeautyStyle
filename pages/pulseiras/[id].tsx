'use client';

import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import '@/app/globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useState, useEffect } from 'react';
import Head from 'next/head';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  imagem: string;
  quantity: number;
  categoria: string;
}

interface Order {
  id: number; // Id do produto
  qnt: number; // Quantidade do produto no pedido
}

export default function ProductDetails() {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState<Product | null>(null);
  const [qnt, setQnt] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [orders, setOrders] = useState<Order[]>([]);

  // Função para calcular o desconto
  const calculateDiscountedPrice = (price: number, totalQuantity: number) => {
    const discount = price * (totalQuantity * 1.4 / 100);
    return price - discount;
  };

  // Somando todas as quantidades de pedidos
  const totalOrdersQuantity = orders.reduce((acc, order) => acc + order.qnt, 0);

  // Carregar os pedidos
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const userId = localStorage.getItem('userId') || '99999'; // Se não existir, coloca um valor default
        const response = await fetch('https://lime-dragonfly-325155.hostingersite.com/pedidos.php?id_user=' + userId);
        if (!response.ok) {
          throw new Error('Erro ao buscar os pedidos.');
        }
        const data: Order[] = await response.json();
        setOrders(data);
      } catch (err) {
        console.log(err)
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  // Função para carregar o produto
  useEffect(() => {
    if (id) {
      const fetchProduct = async () => {
        try {
          const response = await fetch(`https://lime-dragonfly-325155.hostingersite.com/products.php?categoria=pulseiras`);
          if (!response.ok) {
            throw new Error('Erro ao carregar os produtos');
          }
          const data: Product[] = await response.json();
          const foundProduct = data.find((item) => item.id === Number(id));
          setProduct(foundProduct ? { ...foundProduct, quantity: 1 } : null);
        } catch (err) {
          console.log(err)
          setError(true);
        } finally {
          setLoading(false);
        }
      };

      fetchProduct();
    }
  }, [id]);

  // Atualizando o produto no carrinho
  const addToCart = () => {
    const authToken = localStorage.getItem('authToken');
    if (!authToken) {
      alert('Você precisa fazer login para adicionar itens ao carrinho!');
      router.push('/login');
      return;
    }
  
    if (product) {
      const cart: Product[] = JSON.parse(localStorage.getItem('cart') || '[]');
      const existingProduct = cart.find((item) => item.id === product.id);
  
      // Usar o preço com desconto ao adicionar o produto
      const productWithDiscount = {
        ...product,
        price: discountedPrice, // Alterar para o preço com desconto
        imagem: `/img/products/aneis/${product.id}.webp`,
        quantity: qnt,
        categoria: product.categoria,
      };
  
      if (existingProduct) {
        existingProduct.quantity += qnt;
        existingProduct.price = discountedPrice; // Atualizar o preço com desconto se o produto já existir no carrinho
      } else {
        cart.push(productWithDiscount);
      }
  
      localStorage.setItem('cart', JSON.stringify(cart));
      updateCartCount();
  
      // Perguntar se o usuário deseja personalizar a joia
      const wantsToCustomize = confirm('Deseja personalizar esta joia?');
      if (wantsToCustomize) {
        // Redirecionar para o WhatsApp
        window.location.href = 'https://wa.me/11939320470';
        return; // Não recarregar a página se redirecionar
      }
    }
  
    alert('Produto adicionado ao carrinho de compras');
    location.reload();
  };  

  const updateCartCount = () => {
    const cart: Product[] = JSON.parse(localStorage.getItem('cart') || '[]');
    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
    localStorage.setItem('cartCount', totalItems.toString());
  };

  if (loading) {
    return <p className="text-center mt-10">Carregando...</p>;
  }

  if (error || !product) {
    return (
      <div className="m-auto text-center">
        <Head>
          <title>Produto não encontrado</title>
          <meta name="description" content="Created with NextJS" />
        </Head>
        <Navbar page="pulseiras" />
        <p className="text-2xl mt-10">Produto não encontrado.</p>
        <Link href={`/pulseiras`}>
          <div className="select-none w-full md:w-52 h-auto bg1 mt-5 mb-10 md:mb-10 md:text-md lg:w-72 p-3 rounded-md text-white hover:opacity-70 duration-300 uppercase cursor-pointer m-auto">
            Voltar à lista de produtos
          </div>
        </Link>
      </div>
    );
  }

  // Calculando o preço com desconto
  const discountedPrice = calculateDiscountedPrice(product.price, totalOrdersQuantity);

  return (
    <div className="m-auto">
      <Head>
        <title>{product.title} | Styled Wear</title>
        <meta name="description" content="Created with NextJS" />
      </Head>

      <Navbar page="pulseiras" />

      <div className="w-[80%] m-auto text-center">
        <h1 className="text-font-300 text-center mt-5 mb-3 text-xl uppercase">
          {product.title}
        </h1>
        <Image
          width={300}
          height={300}
          src={`/img/products/pulseiras/${`${product.id}.webp`}`}
          alt={product.title}
          className="m-auto text-center"
        />
        <h1 className="text-3xl md:text-xl m-auto text-center mt-5">
          {discountedPrice.toLocaleString('pt-BR', {
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
          <Link href={`/pulseiras`}>
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
