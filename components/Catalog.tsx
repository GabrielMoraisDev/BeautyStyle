import Image from "next/image"
export default function Catalog(){
    return(
        <>
        <div className="bg-capa h-auto mt-8 w-full flex justify-center place-items-center">
                <Image width={300} height={300} className="w-[50vw] m-2" src='/img/capa1.png' alt=""></Image>
            <div className="inline">
                <Image width={300} height={300} className="w-[25vw] my-2" src='/img/capa2.png' alt=""></Image>
                <Image width={300} height={300} className="w-[25vw] my-2" src='/img/capa3.png' alt=""></Image>
            </div>
        </div>
        </>
    )
}