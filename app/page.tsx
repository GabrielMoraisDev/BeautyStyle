'use client'; // Mantenha isso se precisar de um componente cliente
import { Suspense } from 'react'; // Importando Suspense
import { useSearchParams } from 'next/navigation'; // Importando useSearchParams
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Features from "@/components/Features";
import Vitrini from "@/components/Vitrini";
import Catalog from "@/components/Catalog";
import { Slider } from "@/components/Slider";

function HomeContent() {
  const searchParams = useSearchParams(); // Obtendo os parâmetros de busca da URL
  const qnt = searchParams ? searchParams.get('qnt') : null; // Verifica se searchParams está definido e então obtém o parâmetro 'qnt'

  // Convertendo qnt para número, se necessário
  const ProductCount = Number(qnt) || 0; // Se qnt não estiver definido, use 0

  return (
    <div>
      <Navbar ProductCount={ProductCount} page='home' /> {/* Passando ProductCount */}
      <Slider />

      <div className="w-[92%] m-auto">
        <p className="text-xl text-black text-center mt-5 text-font-300 uppercase">
          SEU ESTILO, NOSSO COMPROMISSO
        </p>
        <hr className="my-3 custom-hr" />

        <Features qntSave={ProductCount} />
        <p className="text-xl text-black text-center text-font-300 uppercase my-12 w-[80%] m-auto">
          Roupas criadas para todos os eventos<br />pensando em você
        </p>

        <Vitrini qntKart={ProductCount} />
        <hr className="custom-hr mt-7" />
      </div>

      <Catalog />
      <div className="w-[92%] m-auto">
        <p className="text-xl text-black text-center text-font-300 uppercase my-12 w-[80%] m-auto">
          “As roupas certas podem refletir o seu verdadeiro estilo.”
        </p>

        <hr className="custom-hr" />
        <Footer />
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="w-full h-auto">
      <Suspense fallback={<div>Carregando...</div>}> {/* Boundary de Suspense */}
        <HomeContent />
      </Suspense>
    </div>
  );
}
