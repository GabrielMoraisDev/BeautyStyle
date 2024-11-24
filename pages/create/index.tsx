'use client'
import '@/app/globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Head from 'next/head';
import { useState, FormEvent } from 'react';
import { useRouter } from 'next/router';

export default function Pants() {
  const [email, setEmail] = useState<string>('');
  const [senha, setSenha] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState<string>('');
  const router = useRouter(); // Used for redirecting

  // Função para enviar dados do formulário via POST
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Evita o comportamento padrão do formulário

    // Verifica se os campos estão preenchidos
    if (!email || !senha) {
      setError('Por favor, preencha todos os campos.');
      return;
    }
    

    // Envia os dados para o PHP
    try {
      const response = await fetch('http://192.168.0.155/BeautyStyle/add_user.php', { // Use a relative API URL if using Next.js API routes
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // Change to JSON if you're using JSON in POST
        },
        body: JSON.stringify({ email, senha }), // Send data in JSON format
      });

      const result = await response.json();

      // Verifica a resposta do servidor
      if (result.status === 'success') {
        setSuccess(result.message);
        setEmail('');  // Limpa o campo de email
        setSenha('');  // Limpa o campo de senha
        setError(''); // Clear error message if registration is successful
        setTimeout(() => {
          router.push('/login'); // Redirect to login page after success
        }, 2000);
      } else {
        setError(result.message);
      }
    } catch (error) {
      setError('Erro ao conectar com o servidor.');
    }
  };

  console.log(senha)

  return (
    <div className="mb-10">
      <Head>
        <title>Crie sua Conta</title>
        <meta name="description" content="Styled Wear created by Gabriel Morais" />
      </Head>

      <Navbar page="login" />
      <section className='mt-10'>
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
            <div className="w-full bg1 rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-slate-700 md:text-2xl text-center">
                       Crie sua conta! 
                    </h1>
                    <form method="POST" action="http://192.168.0.155/BeautyStyle/add_user.php" className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-slate-700">Digite seu email</label>
                            <input 
                              type="email" 
                              name="email" 
                              id="email" 
                              className="pl-4 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " 
                              placeholder="Digite aqui..." 
                              required 
                              value={email}
                              onChange={(e) => setEmail(e.target.value)} // Atualiza o estado do email
                            />
                        </div>
                        <div>
                            <label htmlFor="senha" className="block mb-2 text-sm font-medium text-slate-700">Digite sua senha</label>
                            <input 
                              type="password" 
                              name="senha" 
                              id="senha" 
                              placeholder="Digite aqui..." 
                              className="pl-4 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                              value={senha}
                              onChange={(e) => setSenha(e.target.value)} // Atualiza o estado da senha
                            />
                        </div>
                        <button type="submit" className="w-full text-slate-700 bg1 hover:bg-white border-2 border-slate-700 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-xl px-5 py-2.5 text-center duration-300 cursor-pointer">Criar conta</button>
                        <p className="text-sm font-light text-slate-700">
                            Já tem uma conta? <Link href="/login" className="font-bold text-slate-700 hover:underline">Fazer Login</Link>
                        </p>
                    </form>

                    {error && <div className="text-red-500">{error}</div>}
                    {success && <div className="text-green-500">{success}</div>}
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
