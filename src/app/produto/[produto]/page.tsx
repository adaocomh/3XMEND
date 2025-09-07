import FallingText from "../../components/fallingText"
import HamburgerCursor from "../../components/cursorMenu"
import Image from "next/image"
import Link from "next/link"
import Data from "../../data/dataProd.json"

type CardsItem = {
    src: string;
    title: string;
    desc: string;
    produto: string;
  };
export default async function PaginaDinamicProd({ params } : 
    { params: Promise<{produto: string}> }){
        const { produto } = await params
        
        const item = Data.find((obj: CardsItem) => obj.produto === produto);

  if (!item) return

  return (
    <div className="flex flex-col items-center w-[100vw]">
    <header className="relative w-[100vw] h-[100vh]">
      <video
        src={item.src}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-between bg-[rgba(0,0,0,0.6)] p-[40px] z-10">
        <div className="flex justify-between w-full">
          <Link href="/" className="z-999">
            <FallingText text="3XMEND" />
          </Link>
          <div className="flex gap-[60px] items-center">
            <div className="relative flex">
              <p className="flex items-center text-[16px] text-(--background) h-[16px] text-center font-medium p-[8px] border-r border-[var(--background)] hoverSeta">BR</p>
              <p className="flex items-center text-[16px] text-(--background) h-[16px] text-center font-medium p-[8px] border-r border-[var(--background)] hoverSeta">EUA</p>
              <p className="flex items-center text-[16px] text-(--background) h-[16px] text-center font-medium p-[8px] hoverSeta">ES</p>
            </div>
            <div className="flex justify-center items-center">
              <HamburgerCursor />
            </div>
          </div>
        </div>
        <div>
          <p className="text-[48px] font-extrabold text-[#F5F5F5]">{item.title}</p>
        </div>
        <div className="self-center">
          <Image
            className="bounce"
            src="/icons/down-arrow.png"
            alt="seta"
            width={40}
            height={40}
          />
        </div>
      </div>
    </header>

    <main className="flex flex-col items-center justify-center gap-[5vw] py-[5vw] max-w-[1200px]">
      <h2 className="text-[50px] text-center font-extrabold">
        {item.title}
      </h2>
      <p>{item.desc}</p>
    </main>
  </div>
  );
}