import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import '@/app/globals.css';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import Footer from '@/components/Footer';
import Head from 'next/head';

interface User {
  nome: string;
  email: string;
  senha: string;
  error: string;
  qnt_compras?: number;
  img?: string;
}

export default function ProtectedPage() {
  const router = useRouter();
  const [userData, setUserData] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [nome, setNome] = useState<string>('');
  const [senha, setSenha] = useState<string>('');
  const [imgUrl, setImgUrl] = useState<string>(''); // Novo estado para a URL da imagem

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    const userId = localStorage.getItem('userId');

    if (!token || !userId) {
      router.push('/login'); // Redireciona para a página de login se o token ou o ID estiver ausente
    } else {
      // Buscar os dados do usuário pelo ID
      fetch(`https://lime-dragonfly-325155.hostingersite.com/login_info.php?id=${userId}`)
        .then((res) => {
          if (!res.ok) {
            throw new Error('Erro na resposta da API');
          }
          return res.json();
        })
        .then((data: User) => {
          if (data.error) {
            throw new Error(data.error);
          }
          setUserData(data);
          setNome(data.nome);
          setSenha(data.senha);
          setImgUrl(data.img || ''); // Definindo a URL da imagem
        })
        .catch((error) => console.error('Erro ao buscar dados:', error))
        .finally(() => setLoading(false));
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userId');
    router.push('/');
  };

  const handleSave = async () => {
    const userId = localStorage.getItem('userId');
    if (userId) {
      const response = await fetch('https://lime-dragonfly-325155.hostingersite.com/login_update.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          id: userId,
          nome: nome,
          senha: senha,
          img: imgUrl, // Enviar a URL da imagem
        }).toString(),
      });

      const result = await response.json();
      if (result.success) {
        alert('Informações atualizadas com sucesso');
      } else {
        alert(result.error || 'Erro ao atualizar as informações');
      }
    }
  };

  return (
    <div>
      <Head>
        <title>Beauty Style</title>
        <meta name="description" content="Created with NextJS" />
      </Head>
      <Navbar page="login" />
      <div className="bg1 w-full lg:w-[80%] 2xl:w-[55%] m-auto mt-8  lg:flex p-5">
        <div className="w-[70%] h-[20rem] inline m-auto">
          {loading ? (
            <p>Carregando dados...</p>
          ) : userData ? (
            <div className="lg:ml-5">
              <p className='lg:mt-2 mb-7 text-2xl'>Informações da Conta de <b>{nome}</b></p>
              <div className="lg:flex">
              <div className="inline">
              <label htmlFor="nome" className="">Nome</label>
              <input
                className="border-none outline-none rounded-lg w-full xl:w-[20rem] lg:w-[15.5rem] px-4 flex justify-center lg:m-auto"
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              /><br/>
              </div>
              <div className="inline">
                <label htmlFor="email" className="ml-2">Email</label>
                  <input
                  className="border-none outline-none rounded-lg w-full xl:w-[20rem] lg:w-[15.5rem] px-4 flex justify-center lg:m-auto lg:ml-2"
                  type="text"
                  value={userData.email || ''}
                  readOnly
                /><br/>
              </div>
              </div>
              <label htmlFor="img" className="">URL da Imagem</label>
              <input
                className="border-none outline-none rounded-lg w-full xl:w-[40.5rem] lg:w-[31.5rem] px-4 flex justify-center"
                placeholder='Insira uma URL aqui'
                type="text"
                value={imgUrl}
                onChange={(e) => setImgUrl(e.target.value)}
              /><br/>
              <div className="lg:flex w-full lg:w-[31.5rem] xl:w-[36rem]">
                <Link
                  href="/user/compras"
                  className="bg-blue-500 text-white py-2 px-4 rounded mt-4 hover:bg-blue-600 flex justify-center place-items-center duration-300 text-center m-auto w-full lg:w-auto"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" className="hidden lg:inline bi bi-cart2 mr-2" viewBox="0 0 16 16">
                    <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l1.25 5h8.22l1.25-5zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"/>
                  </svg>
                  Minhas Compras
                </Link>
                <button
                  onClick={handleSave}
                  className="bg-green-500 text-white py-2 px-4 rounded mt-4 hover:bg-green-600 flex justify-center place-items-center duration-300 text-center m-auto w-full lg:w-auto"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" className="hidden lg:inline bi bi-floppy mr-2" viewBox="0 0 16 16">
                    <path d="M11 2H9v3h2z"/>
                    <path d="M1.5 0h11.586a1.5 1.5 0 0 1 1.06.44l1.415 1.414A1.5 1.5 0 0 1 16 2.914V14.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 14.5v-13A1.5 1.5 0 0 1 1.5 0M1 1.5v13a.5.5 0 0 0 .5.5H2v-4.5A1.5 1.5 0 0 1 3.5 9h9a1.5 1.5 0 0 1 1.5 1.5V15h.5a.5.5 0 0 0 .5-.5V2.914a.5.5 0 0 0-.146-.353l-1.415-1.415A.5.5 0 0 0 13.086 1H13v4.5A1.5 1.5 0 0 1 11.5 7h-7A1.5 1.5 0 0 1 3 5.5V1H1.5a.5.5 0 0 0-.5.5m3 4a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5V1H4zM3 15h10v-4.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5z"/>
                  </svg> Salvar Informações
                </button>
                <button
                  onClick={handleLogout}
                  className="bg-red-500 text-white py-2 px-4 rounded mt-4 hover:bg-red-600 flex justify-center place-items-center duration-300 text-center m-auto w-full lg:w-auto"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" className="hidden lg:inline bi bi-box-arrow-left mr-2" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0z"/>
                    <path fill-rule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708z"/>
                  </svg>
                  Sair da conta
                </button>
              </div>
            </div>
          ) : (
            <p>Usuário não encontrado.</p>
          )}
        </div>

        <div className="w-full h-auto mt-10 lg:mt-0 lg:w-[30%] lg:h-[20rem] bg-white rounded-md flex items-center justify-center relative">
          {imgUrl ? (
            <img src={imgUrl} alt="Profile" className="rounded-lg"/>
          ) : (
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZg2qVWPh1HQc_tzr3QkXXRj9koKN8bhVMog&s' alt="Profile" className="rounded-full"/>
          )}
        </div>
      </div>

      <div className="w-[92%] m-auto mt-5 lg:mt-10">
        <hr className="custom-hr" />
        <Footer />
      </div>
    </div>
  );
}
