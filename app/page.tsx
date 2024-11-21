'use client'; // Mantenha isso se precisar de um componente cliente
import { Suspense } from 'react'; // Importando Suspense
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Features from "@/components/Features";
import Vitrini from "@/components/Vitrini";
import Catalog from "@/components/Catalog";
import { Slider } from "@/components/Slider";

function HomeContent() {

  return (
    <div>
      <Navbar page='home' /> {/* Passando ProductCount */}
      <Slider />

      <div className="w-[92%] m-auto">
        <p className="text-xl text-black text-center mt-5 text-font-300 uppercase">
        ELEGÂNCIA QUE REFLETE SUA ESSÊNCIA
        </p>
        <hr className="my-3 custom-hr" />

        <Features />
        <p className="text-xl text-black text-center text-font-300 uppercase my-12 w-[80%] m-auto">
        ACESSÓRIOS SOFISTICADOS PARA SEU COTIDIANO,
        EVENTOS DE CLASSE E OUTROS.
        </p>
        <hr className="my-3 custom-hr" />
        <Vitrini />
        <hr className="custom-hr mt-7" />
      </div>

      <Catalog />
      <div className="w-[92%] m-auto">
        <p className="text-xl text-black text-center text-font-300 uppercase my-12 w-[80%] m-auto">
        CLASSE E ESTILO PARA TODOS OS GOSTOS
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
