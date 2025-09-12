import FallingText from "../components/fallingText";
import HamburgerCursor from "../components/cursorMenu";
import AlternadorIdioma from "../components/alternadorIdioma";
import Image from "next/image";
import CardsMain from "../components/cardsMain";
import BtnSobre from "../components/btnSobre"
import Link from "next/link";
import {useTranslations} from 'next-intl';

export default function Home() {
  const t = useTranslations('home');
  return (
  <div className="flex flex-col items-center w-[100vw]">
    <header className="relative w-[100vw] h-[100vh]">
      <video src="/videos/video-header-cortado-s-som.mp4" autoPlay muted loop playsInline className="absolute inset-0 h-full w-full object-cover"/>
      <div className="absolute inset-0 flex flex-col items-center justify-between bg-[rgba(0,0,0,0.8)]  p-[40px]">
        <div className="flex justify-between w-full">
          <Link href="/">
            <FallingText text="3XMEND"/>
          </Link>
          <div className="flex items-center gap-[60px]">
            <AlternadorIdioma/>
          <div className="flex justify-center items-center"><HamburgerCursor/></div>
        </div>
        </div>
        <div>
          <p className="text-[48px] font-extrabold text-[#F5F5F5] text-center">{t('titleHeader')}</p>
        </div>
        <div className="self-end"><Image className="bounce" src="/icons/down-arrow.png" alt="seta" width={40} height={40}/></div>
      </div>
    </header>
      <main id="servicos" className="flex flex-col justify-center items-center gap-[10vw] w-[95%] py-[10vw] md:gap-[5vw]  md:max-w-[1200px] md:py-[5vw]">
        <h2 className="text-[30px] font-extrabold text-center">{t('titleCategoria')}</h2>
        <CardsMain/>
        <Link href="/sobre"><BtnSobre/></Link>
      </main>
  </div>
  );
}
