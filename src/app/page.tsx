import CardsVideos from "./components/cardsCategoria";
import BtnSobre from "./components/btnSobre"
import FallingText from "./components/fallingText";
import Image from "next/image";
import HamburgerCursor from "./components/cursorMenu";
import Link from "next/link";

export default function Home() {
  return (
  <div className="flex flex-col items-center w-[100vw]">
    <header className="relative w-[100vw] h-[100vh]">
      <video src="/videos/video-header-cortado-s-som.mp4" autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover"/>
      <div className="absolute inset-0 flex flex-col items-center justify-between bg-[rgba(0,0,0,0.8)] p-[40px]">
        <div className="flex justify-between w-full">
          <Link href="/" className="z-999">
            <FallingText text="3XMEND"/>
          </Link>
          <div className="flex gap-[60px] items-center">
            <div className="relative flex">
              <p className="flex items-center text-[16px] text-(--background) h-[16px] text-center font-medium p-[8px] border-r border-[var(--background)] hoverSeta">BR</p>
              <p className="flex items-center text-[16px] text-(--background) h-[16px] text-center font-medium p-[8px] border-r border-[var(--background)] hoverSeta">EUA</p>
              <p className="flex items-center text-[16px] text-(--background) h-[16px] text-center font-medium p-[8px] hoverSeta">ES</p>
            </div>
          <div className="flex justify-center items-center"><HamburgerCursor/></div>
        </div>
        </div>
        <div>
          <p className="text-[48px] font-extrabold text-[#F5F5F5]">Agência completa de marketing.</p>
        </div>
        <div className="self-end"><Image className="bounce" src="/icons/down-arrow.png" alt="seta" width={40} height={40}/></div>
      </div>
    </header>
      <main className="flex flex-col items-center justify-center gap-[5vw] py-[5vw] max-w-[1200px]">
        <h2 className="text-[30px] text-center font-extrabold">Cuidamos do seu negócio, desde o posicionamento ao clique que gera vendas.</h2>
        <CardsVideos/>
        <BtnSobre/>
      </main>
  </div>
  );
}
