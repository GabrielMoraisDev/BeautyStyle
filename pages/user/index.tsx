import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function ProtectedPage() {
  const router = useRouter();

  useEffect(() => {
    // Verificando se o token de autenticação existe no localStorage
    const token = localStorage.getItem('authToken');

    if (!token) {
      // Se o token não existir, redireciona para a página de login
      router.push('/login');
    }
  }, []);

  return (
    <div>
      <h1>Página Protegida</h1>
      {/* Conteúdo da página protegida */}
    </div>
  );
}
