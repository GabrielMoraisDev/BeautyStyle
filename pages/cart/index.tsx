import '@/app/globals.css';
import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useRouter } from 'next/router';
import Image from 'next/image';
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

export default function Cart() {
  const router = useRouter();
  const [cart, setCart] = useState<Product[]>([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart') || '[]');
    setCart(storedCart);
  }, []);

  const updateCart = (updatedCart: Product[]) => {
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    setCart(updatedCart);
  };

  const removeFromCart = (productId: number) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    updateCart(updatedCart);
  };

  const updateQuantity = (productId: number, quantity: number) => {
    const updatedCart = cart.map((item) => {
      if (item.id === productId) {
        return { ...item, quantity };
      }
      return item;
    });
    updateCart(updatedCart);
  };

  const calculateTotal = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  const valorParcelado = () => {
    return calculateTotal() / 12;
  };

  // Função para finalizar a compra
function finished() {
  const userId = localStorage.getItem('userId');
  if (!userId) {
    alert('Por favor, faça o login para finalizar a compra.');
    return;
  }

  const produtos = cart.map((product) => ({
    title: product.title,
    description: product.description,
    price: product.price,
    categoria: product.categoria,
  }));

  // Adicionando o console.log para verificar os dados
  console.log('Dados sendo enviados:', {
    id_usuario: userId,
    produtos,
  });

  fetch('http://localhost/Beautystyle/insert_pedidos.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id_usuario: userId, produtos }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data); // Adiciona um log para ver o que o back-end está respondendo
      if (data.success) {
        localStorage.clear();
        alert('Compra concluída com sucesso!');
        router.push('/');
      } else {
        alert('Erro ao finalizar a compra');
      }
    })
    .catch((error) => {
      console.error('Erro na solicitação:', error);
      alert('Erro ao finalizar a compra');
    });
}



  return (
    <div>
      <Navbar page="cart" />
      <Head>
        <title>Carrinho - Beauty Style</title>
        <meta name="description" content="Created with NextJS" />
      </Head>
      <div className="w-[90%] m-auto text-center mt-5">
        <h1 className="text-font-300 text-center text-xl md:text-3xl uppercase">Carrinho de Compras</h1>
        <hr className="border-slate-600 mt-4 mb-6" />
        {cart.length === 0 ? (
          <>
            <p className="mt-5">Seu carrinho está vazio.</p>
            <div className="h-[47vh]"></div>
          </>
        ) : (
          <div className="inline lg:flex">
            <div className="mt-2 lg:mt-0 h-auto lg:h-[25rem] lg:overflow-y-scroll">
              {cart.map((product) => (
                <div key={product.id}>
                  <div className="inline lg:flex my-5 w-[95%]">
                    <Image width={300} height={300} src={`${product.imagem}`} alt={product.title} className="w-32 h-32 shadow-lg m-auto" />
                    <div className="lg:ml-4 text-center lg:text-left">
                      <p className="text-lg font-semibold mt-3 lg:mt-0">{product.title}</p>
                      <p className="m-auto text-md w-[90%] text-slate-700 mt-3 lg:mt-2 lg:ml-0">{product.description}</p>
                      <p className="mt-3 text-md text-color3 text-2xl">{product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
                    </div>
                    <div className="flex items-center justify-center mt-3 lg:mt-0">
                      <button className={`${product.quantity === 1 ? 'bg-gray-300' : 'bg1'} text-xl text-white rounded-full w-10 h-10`} onClick={() => updateQuantity(product.id, product.quantity - 1)} disabled={product.quantity === 1}>-</button>
                      <span className="mx-3">{product.quantity}</span>
                      <button className="text-xl bg1 text-white rounded-full w-10 h-10" onClick={() => updateQuantity(product.id, product.quantity + 1)}>+</button>
                    </div>
                    <button className="text-red-600 lg:ml-5 my-5 lg:my-0 lg:mt-0" onClick={() => removeFromCart(product.id)}>Remover</button>
                  </div>
                  <hr className="border-slate-400 lg:w-[98%] mb-10 lg:mb-0" />
                </div>
              ))}
            </div>
            <div className="lg:ml-5 mt-5 text-center lg:w-[45%]">
              <p className="text-xl font-semibold text-font-500 uppercase">Resumo do Pedido</p>
              <hr className="my-2" />
              <p className="text-2xl font-semibold text-slate-500">
                {calculateTotal().toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
              </p>
              <p className="text-base font-semibold text-slate-400">
                (ou 12X de {valorParcelado().toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })})
              </p>
              <div className="w-full h-72 mt-3 rounded-lg">
                {/* Payment Methods */}
                <div onClick={() => finished()} className="bg2 font-bold uppercase hover:opacity-65 cursor-pointer rounded-lg flex justify-center place-items-center mt-2 w-[90%] m-auto h-12 border text-white p-4 duration-300">
                  Finalizar Compra
                </div>
              </div>
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
