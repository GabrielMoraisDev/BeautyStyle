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
      fetch(`http://localhost/BeautyStyle/login_info.php?id=${userId}`)
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
      const response = await fetch('http://localhost/BeautyStyle/login_update.php', {
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
      <div className="bg1 w-full lg:w-[80%] m-auto mt-8 h-[22.5rem] flex p-5">
        <div className="w-[70%] h-[20rem] inline m-auto">
          {loading ? (
            <p>Carregando dados...</p>
          ) : userData ? (
            <div className="w-[30rem] m-auto">
              <label htmlFor="nome" className="">Nome</label>
              <input
                className="border-none outline-none rounded-lg w-[30rem] px-4 flex justify-center m-auto"
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              /><br/>
              <div className="flex">
              <div className="inline">
              <label htmlFor="email" className="">Email</label>
              <input
                className="border-none outline-none rounded-lg w-[15rem] px-4 flex justify-center m-auto mr-2"
                type="text"
                value={userData.email || ''}
                readOnly
              /><br/>
              </div>
              <div className="inline">
                <label htmlFor="senha" className="">Senha</label>
                <input
                  className="border-none outline-none rounded-lg w-[14rem] px-4 flex justify-center m-auto ml-2"
                  type="password"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                /><br/>
              </div>
              </div>
              <label htmlFor="img" className="">URL da Imagem</label>
              <input
                className="border-none outline-none rounded-lg w-[30rem] px-4 flex justify-center m-auto"
                placeholder='Insira uma URL aqui'
                type="text"
                value={imgUrl}
                onChange={(e) => setImgUrl(e.target.value)} // Atualiza a URL da imagem
              /><br/>
              <div className="flex w-[33rem] m-auto">
                <Link
                  href="/user/compras"
                  className="bg-white text-black py-2 px-4 rounded mt-4 hover:opacity-65 m-auto flex justify-center place-items-center duration-300"
                >
                  Minhas Compras
                </Link>
                <button
                  onClick={handleSave}
                  className="bg-white text-black py-2 px-4 rounded mt-4 hover:opacity-65 m-auto flex justify-center place-items-center duration-300"
                >
                  Salvar Informações
                </button>
                <button
                  onClick={handleLogout}
                  className="bg-red-500 text-white py-2 px-4 rounded mt-4 hover:bg-red-600 m-auto flex justify-center place-items-center duration-300"
                >
                  Sair da conta
                </button>
              </div>
            </div>
          ) : (
            <p>Usuário não encontrado.</p>
          )}
        </div>

        <div className="w-[30%] h-[20rem] bg-white rounded-md flex items-center justify-center relative">
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
