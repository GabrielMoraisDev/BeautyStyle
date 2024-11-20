'use client'
import { useRouter } from 'next/router';
import '@/app/globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Head from 'next/head';

export default function Pants() {
  const router = useRouter();
  const qntSave = Number(router.query.qnt) || 0; 

  return (
    <div className="mb-10">

      <Head>
        <title>Faça seu Login</title>
        <meta name="description" content="Styled Wear created by Gabriel Morais" />
      </Head>

      <Navbar ProductCount={qntSave} page="pants" />
      <section className='mt-10'>
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
            <div className="w-full bg1 rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-white md:text-2xl">
                       Faça seu login e continue sua compra! 
                    </h1>
                    <form className="space-y-4 md:space-y-6" action="#">
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">Your email</label>
                            <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="name@company.com" required/>
                        </div>
                        <div>
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-white">Password</label>
                            <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"/>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                  <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300" required/>
                                </div>
                                <div className="ml-3 text-sm">
                                  <label htmlFor="remember" className="text-slate-100">Remember me</label>
                                </div>
                            </div>
                            <a href="#" className="text-sm font-medium text-slate-100 hover:underline">Forgot password?</a>
                        </div>
                        <button type="submit" className="w-full text-white bg-slate-700 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-xl px-5 py-2.5 text-center hover:opacity-60 duration-300 cursor-pointer">Sign in</button>
                        <p className="text-sm font-light text-slate-100">
                            Não possui um login? <a href="#" className="font-medium text-sky-300 hover:underline">Crie sua conta</a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
      </section>
      
      <div className="h-40 w-full"></div>

      <div className="w-[92%] m-auto">
          <Footer />
        </div>
    </div>
  );
}
