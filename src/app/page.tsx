import VideoCards from "./components/videoCard";
import BtnSobre from "./components/btnSobre"
import FallingText from "./components/fallingText";
import Image from "next/image";
import Hamburger from "./components/menuHamburger";
import Footer from "./components/footer";

export default function Home() {
  return (
  <div className="flex flex-col items-center w-[100vw]">
    <header className="w-[100%] h-[100vh] bg-[url(/videos/video-header-cortado-s-som.mp4)] bg-cover bg-top">
      <div className="flex flex-col items-center justify-between w-[100%] h-[100%] bg-[rgba(0,0,0,0.6)]">
        <div className="flex justify-between w-[100vw]">
        <FallingText text="3XMEND"/>
        <div className="flex p-[30px] m-[5px] mr-[10px] pb-0 mb-0"><Hamburger/></div>
        </div>
        <div>
          <p className="text-[48px] font-extrabold text-[#F5F5F5]">Agência completa de marketing.</p>
        </div>
        <div className="self-end p-[30px] m-[10px]"><Image className="bounce" src="/icons/down-arrow.png" alt="seta" width={40} height={40}/></div>
      </div>
    </header>
      <main className="flex flex-col items-center justify-center gap-[5vw] py-[5vw] max-w-[1200px]">
        <h2 className="text-[30px] text-center font-extrabold">Cuidamos do seu negócio, desde o posicionamento ao clique que gera vendas.</h2>
        <div  className="flex justify-between w-[100%]">
          <div className="flex flex-col gap-[8vw] w-[40%]">
            <div className="flex flex-col items-center w-[100%]">
              <VideoCards src="/videos/social-media.mp4" poster="/poster/social-media.jpeg"/>
              <h4 className="text-[18px] font-bold hoverSeta">Social media</h4>
              <p className="text-[12px] hoverSeta">Ver mais...</p>
            </div>
            <div className="flex flex-col items-center">
            <VideoCards src="/videos/criacao-video.mp4" poster="/poster/criacao-video.jpeg"/>
              <h4 className="text-[18px] font-bold hoverSeta">Produtora de video</h4>
              <p className="text-[12px] hoverSeta">Ver mais...</p>
            </div>
          </div>
          <div className="flex flex-col gap-[8vw] mt-[13vw] w-[40%]">
            <div className="flex flex-col items-center w-[100%]">
            <VideoCards src="/videos/ti-automacao.mp4" poster="/poster/ti-automacao.jpeg"/>
              <h4 className="text-[18px] font-bold hoverSeta">T.I.</h4>
              <p className="text-[12px] hoverSeta">Ver mais...</p>
            </div>
            <div className="flex flex-col items-center">
            <VideoCards src="/videos/parceiros.mp4" poster="/poster/parceiros.jpeg"/>
              <h4 className="text-[18px] font-bold hoverSeta">Parceiros</h4>
              <p className="text-[12px] hoverSeta">Ver mais...</p>
            </div>
          </div>
        </div>
        <BtnSobre/>
      </main>
      <Footer/>
  </div>
  );
}
