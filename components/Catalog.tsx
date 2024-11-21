import Image from "next/image"
export default function Catalog(){
    return(
        <>
        <div className="bg-capa h-auto mt-8 w-full flex justify-center place-items-center">
                <Image width={1000} height={1000} className="w-[40vw] m-2" src='/img/section3/image1.webp' alt=""></Image>
            <div className="inline">
                <Image width={1000} height={1000} className="w-[22vw] my-2" src='/img/section3/image2.webp' alt=""></Image>
                <Image width={1000} height={1000} className="w-[22vw] my-2" src='/img/section3/image3.webp' alt=""></Image>
            </div>
        </div>
        </>
    )
}