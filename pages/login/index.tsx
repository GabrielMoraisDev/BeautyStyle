'use client'
import '@/app/globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Head from 'next/head';

export default function Pants() {

  return (
    <div className="mb-10">

      <Head>
        <title>Faça seu Login</title>
        <meta name="description" content="Styled Wear created by Gabriel Morais" />
      </Head>

      <Navbar page="login" />
      <section className='mt-10'>
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
            <div className="w-full bg1 rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-slate-700 md:text-2xl text-center">
                       Faça seu login e continue sua compra! 
                    </h1>
                    <form className="space-y-4 md:space-y-6" action="#">
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-slate-700">Digite seu email</label>
                            <input type="email" name="email" id="email" className="pl-4 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="Digite aqui..." required/>
                        </div>
                        <div>
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-slate-700">Digite sua senha</label>
                            <input type="password" name="password" id="password" placeholder="Digite aqui..." className="pl-4 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"/>
                        </div>
                        <div className="flex items-center justify-between">

                        </div>
                        <button type="submit" className="w-full text-slate-700 bg1 hover:bg-white border-2 border-slate-700 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-xl px-5 py-2.5 text-center duration-300 cursor-pointer">Fazer login</button>
                        <p className="text-sm font-light text-slate-700">
                            Não possui um login? <Link href="/create" className="font-bold text-slate-700 hover:underline">Crie sua conta</Link>
                        </p>
                    </form>
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
