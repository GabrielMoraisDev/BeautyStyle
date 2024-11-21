'use client'
import '@/app/globals.css';
import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  imagem: string;
  quantity: number;
}

export default function Cart() {
  const [cart, setCart] = useState<Product[]>([]);

  // Carregar os itens do carrinho
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart') || '[]');
    setCart(storedCart);
  }, []);

  // Atualizar o carrinho no localStorage
  const updateCart = (updatedCart: Product[]) => {
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    setCart(updatedCart);
  };

  // Remover um item do carrinho
  const removeFromCart = (productId: number) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    updateCart(updatedCart);
  };

  // Atualizar a quantidade de um item no carrinho
  const updateQuantity = (productId: number, quantity: number) => {
    const updatedCart = cart.map((item) => {
      if (item.id === productId) {
        return { ...item, quantity };
      }
      return item;
    });
    updateCart(updatedCart);
  };

  // Calcular o total do carrinho
  const calculateTotal = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  return (
    <div>
      <Navbar page="cart" />

      <div className="w-[80%] m-auto text-center mt-10">
        <h1 className="text-font-300 text-center text-2xl uppercase">Carrinho</h1>
        {cart.length === 0 ? (
          <p className="mt-5">Seu carrinho está vazio.</p>
        ) : (
          <div>
            {cart.map((product) => (
              <div key={product.id} className="flex justify-between items-center mt-5">
                <img src={`/img${product.imagem}`} alt={product.title} className="w-24 h-24" />
                <div className="ml-4 text-left">
                  <p className="text-lg font-semibold">{product.title}</p>
                  <p className="text-md">{product.description}</p>
                  <p className="text-md">{product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
                </div>
                <div className="flex items-center">
                  <button
                    className="text-xl bg1 text-white rounded-full px-3 py-1"
                    onClick={() => updateQuantity(product.id, product.quantity - 1)}
                    disabled={product.quantity === 1}
                  >
                    -
                  </button>
                  <span className="mx-3">{product.quantity}</span>
                  <button
                    className="text-xl bg1 text-white rounded-full px-3 py-1"
                    onClick={() => updateQuantity(product.id, product.quantity + 1)}
                  >
                    +
                  </button>
                </div>
                <button
                  className="text-red-600"
                  onClick={() => removeFromCart(product.id)}
                >
                  Remover
                </button>
              </div>
            ))}

            <div className="mt-5 text-right">
              <p className="text-2xl font-semibold">Total: {calculateTotal().toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
            </div>

            <div className="mt-5">
              <Link href="/">
                <div className="bg1 text-white p-3 rounded-md cursor-pointer w-40 mx-auto">
                  Continuar comprando
                </div>
              </Link>
            </div>
          </div>
        )}
      </div>

      <div className="w-[92%] m-auto mt-7">
        <hr className="custom-hr" />
        <Footer />
      </div>
    </div>
  );
}
