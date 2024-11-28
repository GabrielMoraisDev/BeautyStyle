'use client';
import '@/app/globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Head from 'next/head';
import { useState, FormEvent } from 'react';
import { useRouter } from 'next/router';

export default function Pants() {
  const [nome, setNome] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [senha, setSenha] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState<string>('');
  const router = useRouter();

  // Função para enviar dados do formulário via POST
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Validação dos campos
    if (!nome) {
      setError('Por favor, preencha o nome.');
      return;
    }
    if (!email) {
      setError('Por favor, preencha o email.');
      return;
    }
    if (!senha) {
      setError('Por favor, preencha a senha.');
      return;
    }

    setError(''); // Limpa mensagem de erro antes de enviar

    // Envia os dados para o servidor
    try {
      const response = await fetch('https://lime-dragonfly-325155.hostingersite.com/add_user.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome, email, senha }),
      });

      const result = await response.json();

      if (response.ok) {
        setSuccess(result.message || 'Cadastro realizado com sucesso!');
        setNome('');
        setEmail('');
        setSenha('');
        setError('');
        setTimeout(() => {
          router.push('/login'); // Redireciona para a página de login
        }, 2000);
      } else {
        setError(result.message || 'Erro ao realizar cadastro.');
      }
    } catch (error) {
      setError('Erro ao conectar com o servidor. Tente novamente mais tarde.');
      console.log(error);
    }
  };

  return (
    <div className="mb-10">
      <Head>
        <title>Crie sua Conta</title>
        <meta name="description" content="Created with NextJS" />
      </Head>

      <Navbar page="login" />
      <section className="mt-10">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
          <div className="w-full bg1 rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-slate-700 md:text-2xl text-center">
                Crie sua conta!
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="nome" className="block mb-2 text-sm font-medium text-slate-700">
                    Digite seu nome de usuário
                  </label>
                  <input
                    type="text"
                    name="nome"
                    id="nome"
                    className="pl-4 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="Digite aqui..."
                    required
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-slate-700">
                    Digite seu email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="pl-4 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="Digite aqui..."
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="senha" className="block mb-2 text-sm font-medium text-slate-700">
                    Digite sua senha
                  </label>
                  <input
                    type="password"
                    name="senha"
                    id="senha"
                    className="pl-4 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="Digite aqui..."
                    required
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full text-slate-700 bg1 hover:bg-white border-2 border-slate-700 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-xl px-5 py-2.5 text-center duration-300 cursor-pointer"
                  disabled={!nome || !email || !senha}
                >
                  Criar conta
                </button>
                <p className="text-sm font-light text-slate-700">
                  Já tem uma conta?{' '}
                  <Link href="/login" className="font-bold text-slate-700 hover:underline">
                    Fazer Login
                  </Link>
                </p>
              </form>

              {error && <div className="text-red-500 mt-4">{error}</div>}
              {success && <div className="text-green-500 mt-4">{success}</div>}
            </div>
          </div>
        </div>
      </section>

      <div className="w-[92%] m-auto mt-5 lg:mt-10">
        <hr className="custom-hr" />
        <Footer />
      </div>
    </div>
  );
}
