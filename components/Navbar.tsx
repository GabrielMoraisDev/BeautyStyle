'use client'; // deve ser sempre a primeira linha no arquivo

import { useState, useEffect } from "react";
import Link from "next/link";

interface NavProps {
  page: string;
}

export default function Navbar({ page }: NavProps) {
    const [menu, setMenu] = useState<boolean>(false);
    const [eco, setEco] = useState<boolean>(false);
    const [cartCount, setCartCount] = useState<number>(0);

    // Lê o número de itens do carrinho no localStorage
    useEffect(() => {
      const count = localStorage.getItem('cartCount');
      const cart = localStorage.getItem('cart')

        if (!cart || cart === '[]' || cart === '{}' || JSON.parse(cart).length === 0) {
            setCartCount(0);
        } else if (count) {
            setCartCount(Number(count));
        }

        const authToken = localStorage.getItem('authToken'); // Verifica se há um authToken

        if (!authToken) {
            setCartCount(0);
        }
    }, []);

    return (
        <>
        <div className="h-20 w-full bg1 z-50">
            <h1 className="text-center text-black text-font-500 text-2xl sm:text-4xl uppercase pt-5">Beauty Style</h1>
            <hr className="w-[89.3%] m-auto border-black mt-2"/>
        </div>


            <nav className="bg1 sticky mt-[-1rem] top-0 sm:top-0 sm:mt-0 w-full h-16 z-50 flex text-font-300 place-items-center">

            {/* Mobile Menu */}
                <div className="border-white border w-10 h-10 absolute left-[5vw] mb-5 sm:hidden rounded-md flex justify-center place-items-center mt-10 top-[-1.7rem]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="55%" height="55%" fill="currentColor" className={`bi bi-list text-white ${menu?'hidden':'block'}`} viewBox="0 0 16 16"  onClick={()=>setMenu(true)}>
                        <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="55%" height="55%" fill="currentColor" className={`bi bi-x text-white ${menu?'block':'hidden'}`}viewBox="0 0 16 16"  onClick={()=>setMenu(false)}>
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                    </svg>
                </div>

                <div onClick={() => setEco(prev => !prev)} className={`${eco?'border-black text-black':'border-white text-white'} border w-10 h-10 absolute right-[5vw] mb-5 sm:hidden rounded-md flex justify-center place-items-center mt-10 top-[-1.7rem]`}>
                    <div className="flex justify-center place-items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="60%" height="60%" fill="currentColor" className="pointer-events-none bi bi-recycle" viewBox="0 0 16 16">
                                <path d="M9.302 1.256a1.5 1.5 0 0 0-2.604 0l-1.704 2.98a.5.5 0 0 0 .869.497l1.703-2.981a.5.5 0 0 1 .868 0l2.54 4.444-1.256-.337a.5.5 0 1 0-.26.966l2.415.647a.5.5 0 0 0 .613-.353l.647-2.415a.5.5 0 1 0-.966-.259l-.333 1.242zM2.973 7.773l-1.255.337a.5.5 0 1 1-.26-.966l2.416-.647a.5.5 0 0 1 .612.353l.647 2.415a.5.5 0 0 1-.966.259l-.333-1.242-2.545 4.454a.5.5 0 0 0 .434.748H5a.5.5 0 0 1 0 1H1.723A1.5 1.5 0 0 1 .421 12.24zm10.89 1.463a.5.5 0 1 0-.868.496l1.716 3.004a.5.5 0 0 1-.434.748h-5.57l.647-.646a.5.5 0 1 0-.708-.707l-1.5 1.5a.5.5 0 0 0 0 .707l1.5 1.5a.5.5 0 1 0 .708-.707l-.647-.647h5.57a1.5 1.5 0 0 0 1.302-2.244z"/>
                            </svg>
                        </div>
                </div>
                <div onClick={() => setEco(prev => !prev)} className={`${eco?'max-h-96 py-6':'max-h-0 py-0'} absolute top-[4rem] left-0 bg-white w-full px-10 z-10 overflow-hidden duration-300`}>
                    Nossa empresa é guiada por um propósito maior: alinhar inovação e responsabilidade ambiental para construir um futuro sustentável. Acreditamos que o progresso só é verdadeiro quando beneficia o planeta e as pessoas.
                    Por isso, adotamos práticas eco-friendly em todas as etapas do nosso processo. Desde a escolha de materiais sustentáveis e recicláveis até a redução do consumo energético e de recursos naturais, buscamos minimizar nossa pegada ecológica.
                </div>

                <a href="https://wa.me/11939320470" target="_blank" className="sm:hidden z-40 cursor-pointer absolute right-[41vw] rounded-full w-auto h-10 flex justify-center place-items-center hover:opacity-75 duration-300 text-white">
                    Fale Conosco 
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-whatsapp ml-2" viewBox="0 0 16 16">
                        <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
                    </svg>          
                </a>

                <Link href='/cart' className={`${page==='cart'?'text-black border-black':'text-white border-white'} border w-10 h-10 absolute right-[18vw] mb-5 sm:hidden rounded-md flex justify-center place-items-center mt-10 top-[-1.7rem]`}>
                    <div className={`absolute w-7 h-7 ${page==='cart'?'hidden':''} ${cartCount > 0 ? 'bg-slate-800':'hidden'} top-[-7px] left-[-18px] rounded-full flex justify-center place-items-center text-white hover:text-white duration-300`}>{cartCount}</div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="60%" height="60%" fill="currentColor" className="bi bi-basket3" viewBox="0 0 16 16">
                        <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM3.394 15l-1.48-6h-.97l1.525 6.426a.75.75 0 0 0 .729.574h9.606a.75.75 0 0 0 .73-.574L15.056 9h-.972l-1.479 6z"/>
                    </svg>
                </Link>

                <div className={`inline sm:hidden absolute bg1 w-full ${menu ? 'h-1 pb-72' : 'h-0'} left-0 top-11 overflow-hidden text-white duration-300 mt-4`}>
                    <Link href={`/`}><p className={`${page==='home'?'text-black':''} mt-4 ml-[6vw]`}>INÍCIO</p></Link>
                    <Link href={`/brincos`}><p className={`${page==='brincos'?'text-black':''} ml-[6vw] mt-4`}>BRINCOS</p></Link>
                    <Link href={`/aneis`}><p className={`${page==='aneis'?'text-black':''} mt-4 ml-[6vw]`}>ANÉIS</p></Link>
                    <Link href={`/colares`}><p className={`${page==='colares'?'text-black':''} mt-4 ml-[6vw]`}>COLARES</p></Link>
                    <Link href={`/pulseiras`}><p className={`${page==='pulseiras'?'text-black':''} mt-4 ml-[6vw]`}>PULSEIRAS</p></Link>
                    <Link href={`/login`}><p className={`${page==='login'?'text-black':''} mt-4 ml-[6vw]`}>MINHA CONTA</p></Link>
                </div>

                {/* Desktop Menu */}    
                    <Link href={`/`} className={`${page==='home'?'text-black':'text-white hover:text-black'} hidden sm:block sm:ml-3 sm:text-sm md:text-sm md:ml-10 xl:text-md xl:ml-20 text-md cursor-pointer duration-300`}>INÍCIO</Link>
                    <Link href={`/brincos`} className={`${page==='brincos'?'text-black':'text-white hover:text-black'} hidden sm:block sm:ml-10 sm:text-sm md:text-sm md:ml-14 xl:text-md xl:ml-20 text-md cursor-pointer duration-300`}>BRINCOS</Link>
                    <Link href={`/aneis`} className={`${page==='aneis'?'text-black':'text-white hover:text-black'} hidden sm:block sm:ml-3 sm:text-sm md:text-sm md:ml-10 xl:text-md xl:ml-20 text-md cursor-pointer duration-300`}>ANÉIS</Link>
                    <Link href={`/colares`} className={`${page==='colares'?'text-black':'text-white hover:text-black'} hidden sm:block sm:ml-3 sm:text-sm md:text-sm md:ml-10 xl:text-md xl:ml-20 text-md cursor-pointer duration-300`}>COLARES</Link>
                    <Link href={`/pulseiras`} className={`${page==='pulseiras'?'text-black':'text-white hover:text-black'} hidden sm:block sm:ml-3 sm:text-sm md:text-sm md:ml-10 xl:text-md xl:ml-20 text-md cursor-pointer duration-300`}>PULSEIRAS</Link>

                    <div className="hidden sm:flex ml-auto sm:mr-10 sm:w-[40%] md:mr-12 lg:mr-14 xl:mr-20 w-[30%] h-12 mt-2">
                        <div className="opacity-0 flex w-[60%] bg-white h-10 ml-auto mr-2 rounded-md overflow-hidden">
                            <input type="text" className="cursor-default flex place-items-center bg-white text-black border-0 w-[80%] h-full pl-6 font-sans focus:outline-none focus:ring-0" placeholder="Pesquisar..."/>
                            <div className="w-[1px] h-[70%] my-auto bg-slate-700 text-white"></div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="flex m-auto justify-center bi bi-search text-black" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                            </svg>
                        </div>

                        <a href="https://wa.me/11939320470" target="_blank" className="hidden z-40 cursor-pointer absolute sm:right-[30vw] md:right-[24vw] lg:right-[21vw] rounded-full w-auto h-10 sm:flex justify-center place-items-center hover:text-black duration-300 text-white">
                            <label className="sm:hidden lg:inline"> Fale Conosco </label>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-whatsapp ml-2" viewBox="0 0 16 16">
                                <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
                            </svg>          
                        </a>

                        <Link href={`/cart`} className={`${page==='cart'?'text-black border-black':'text-white hover:text-black border-white'} relative bg-transparent border hover:bg-white hover:text-slate-800 rounded-full w-10 h-10 ml-3 flex justify-center place-items-center duration-300 cursor-pointer`}>
                            <div className={`absolute w-7 h-7 ${page==='cart'?'hidden':''} ${cartCount > 0 ? 'bg-slate-800':'hidden'} top-[-7px] left-[-18px] rounded-full flex justify-center place-items-center text-white hover:text-white duration-300`}>{cartCount}</div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="60%" height="60%" fill="currentColor" className="bi bi-basket3" viewBox="0 0 16 16">
                                <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM3.394 15l-1.48-6h-.97l1.525 6.426a.75.75 0 0 0 .729.574h9.606a.75.75 0 0 0 .73-.574L15.056 9h-.972l-1.479 6z"/>
                            </svg>
                        </Link>

                        <Link href={`/login`} className={`${page==='login' ? 'text-black border-black' : 'text-white hover:text-black border-white'} bg-transparent border hover:bg-white hover:text-slate-800 rounded-full w-10 h-10 ml-3 flex justify-center place-items-center duration-300 cursor-pointer`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="60%" height="60%" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
                            </svg>
                        </Link>

                        <div onMouseEnter={() => setEco(true)} onMouseOut={() => setEco(false)} className='text-black border-black bg-white border hover:text-slate-800 rounded-full w-10 h-10 ml-3 flex justify-center place-items-center duration-300 cursor-pointer opacity-65 hover:opacity-100'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="60%" height="60%" fill="currentColor" className="pointer-events-none bi bi-recycle" viewBox="0 0 16 16">
                                <path d="M9.302 1.256a1.5 1.5 0 0 0-2.604 0l-1.704 2.98a.5.5 0 0 0 .869.497l1.703-2.981a.5.5 0 0 1 .868 0l2.54 4.444-1.256-.337a.5.5 0 1 0-.26.966l2.415.647a.5.5 0 0 0 .613-.353l.647-2.415a.5.5 0 1 0-.966-.259l-.333 1.242zM2.973 7.773l-1.255.337a.5.5 0 1 1-.26-.966l2.416-.647a.5.5 0 0 1 .612.353l.647 2.415a.5.5 0 0 1-.966.259l-.333-1.242-2.545 4.454a.5.5 0 0 0 .434.748H5a.5.5 0 0 1 0 1H1.723A1.5 1.5 0 0 1 .421 12.24zm10.89 1.463a.5.5 0 1 0-.868.496l1.716 3.004a.5.5 0 0 1-.434.748h-5.57l.647-.646a.5.5 0 1 0-.708-.707l-1.5 1.5a.5.5 0 0 0 0 .707l1.5 1.5a.5.5 0 1 0 .708-.707l-.647-.647h5.57a1.5 1.5 0 0 0 1.302-2.244z"/>
                            </svg>
                        </div>

                        <div  onMouseEnter={() => setEco(true)} onMouseOut={() => setEco(false)} className={`${eco?'max-h-28 sm:max-h-[30vh] py-5':'max-h-0 py-0'} absolute top-[4rem] right-0 bg-white w-full px-10 z-10 overflow-hidden duration-300`}>
                        Nossa empresa é guiada por um propósito maior: alinhar inovação e responsabilidade ambiental para construir um futuro sustentável. Acreditamos que o progresso só é verdadeiro quando beneficia o planeta e as pessoas.
                        Por isso, adotamos práticas eco-friendly em todas as etapas do nosso processo. Desde a escolha de materiais sustentáveis e recicláveis até a redução do consumo energético e de recursos naturais, buscamos minimizar nossa pegada ecológica.
                        </div>
                    </div>
            </nav>
        </>
    )
}
