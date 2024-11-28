import { useEffect, useState } from 'react';
import '@/app/globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Head from 'next/head';

interface Produto {
  id: number;
  nome: string;
  preco: string;
  descricao: string;
  categoria: string;
  qnt: number;
}

export default function Compras() {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    const endpoint = `https://lime-dragonfly-325155.hostingersite.com/pedidos.php?id_user=${userId}`;

    fetch(endpoint)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Erro ao buscar produtos');
        }
        return res.json();
      })
      .then((data: Produto[]) => {
        setProdutos(data);
      })
      .catch((err) => {
        console.error('Erro:', err);
        setError('Não foi possível carregar os produtos.');
      })
      .finally(() => setLoading(false));
  }, []);

  // Calcula o total de compras
  const qntTotalDeCompras = produtos.reduce((total, produto) => total + produto.qnt, 0);

  // Verifica se o único produto tem id 0
  const exibirNenhumaCompra = produtos.length === 1 && produtos[0].id === 0;

  return (
    <div>
      <Head>
        <title>Produtos - Beauty Style</title>
        <meta name="description" content="Lista de produtos comprados" />
      </Head>
      <Navbar page="produtos" />

      <div className="bg1 text-slate-800 p-4 rounded-lg mb-4 w-[95%] m-auto text-center mt-5">
        <p className='w-full text-center flex justify-center place-items-center'>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="hidden lg:inline mr-2 bi bi-award" viewBox="0 0 16 16">
            <path d="M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702z"/>
            <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1z"/>
          </svg>
          Com o Clube Fidelidade Beauty Style, você ganha descontos após realizar suas compras!
        </p>
      </div>

      <div className="container mx-auto mt-8 px-4">
        <h1 className="text-2xl font-bold mb-4 text-center flex justify-center place-items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-cart2 mr-3" viewBox="0 0 16 16">
            <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l1.25 5h8.22l1.25-5zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"/>
          </svg>
          Minhas Compras
        </h1>

        {loading ? (
          <p>Carregando produtos...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : exibirNenhumaCompra ? (
          <p className='text-center'>Nenhuma compra realizada.</p>
        ) : produtos.length > 0 ? (
          <>
            <div className="flex justify-center">
              <div className="bg-blue-100 text-blue-600 p-4 rounded-lg mb-4">
                <p className="font-semibold">Quantidade de produtos comprados: {qntTotalDeCompras}</p>
              </div>
              <div className="bg-green-100 text-green-500 p-4 rounded-lg mb-4 ml-2">
                <p className="font-semibold">Seu desconto na sua próxima compra é de {qntTotalDeCompras * 1.4}%</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {produtos.map((produto, index) => (
                <div
                  key={index}
                  className="bg-white shadow-lg border-slate-400 border rounded-lg hover:shadow-lg p-5 mt-0 sm:hover:scale-105 duration-300 cursor-pointer"
                >
                  <Link href={`/${produto.categoria}/${produto.id}`}>
                    <div
                      className="w-[100%] h-64 lg:h-52 m-auto bg-center bg-cover border border-slate-300 rounded-md"
                      style={{
                        backgroundImage: `url('/img/products/${produto.categoria}/${produto.id}.webp')`,
                      }}
                    ></div>
                    <h2 className="text-lg font-semibold my-2">{produto.nome}</h2>
                    <p className="text-sm text-gray-500">
                      Categoria: {produto.categoria}
                    </p>
                    <p className="text-gray-800">Preço: <label className='text-green-600'>R$ {produto.preco}</label></p>
                    <p className="text-gray-600 truncate">{produto.descricao}</p>
                    <p className="text-gray-700 mt-2">
                      Quantidade: {produto.qnt}
                    </p>
                  </Link>
                </div>
              ))}
            </div>
          </>
        ) : (
          <p>Nenhum produto encontrado.</p>
        )}
      </div>

      <div className="w-[92%] m-auto mt-7">
        <hr className="custom-hr" />
        <Footer />
      </div>
    </div>
  );
}
