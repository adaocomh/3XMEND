import CardsVideos from "./components/cardsVideos";
import BtnSobre from "./components/btnSobre"
import FallingText from "./components/fallingText";
import Image from "next/image";
import HamburgerCursor from "./components/cursorMenu";

export default function Home() {
  return (
  <div className="flex flex-col items-center w-[100vw]">
    <header className="w-[100vw] h-[100vh] bg-[url(/videos/video-header-cortado-s-som.mp4)] bg-cover bg-top">
      <div className="flex flex-col items-center justify-between w-[100%] h-[100%] bg-[rgba(0,0,0,0.6)] p-[40px]">
        <div className="flex justify-between w-[100%]">
        <FallingText text="3XMEND"/>
        <div className="flex gap-[60px] items-center">
          <div className="relative flex">
              <p className="flex items-center text-[16px] text-(--background) h-[16px] text-center font-medium p-[8px] border-r-[1px] border-[var(--background)] hoverSeta">BR</p>
              <p className="flex items-center text-[16px] text-(--background) h-[16px] text-center font-medium p-[8px] border-r-[1px] border-[var(--background)] hoverSeta">EUA</p>
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
