import CardsCategoria from "../components/cardsCategoria";
import BtnSobre from "../components/btnSobre"
import FallingText from "../components/fallingText";
import Image from "next/image";
import HamburgerCursor from "../components/cursorMenu";
import Link from "next/link";
import {useTranslations} from 'next-intl';
import AlternadorIdioma from "../components/alternadorIdioma";

export default function Home() {
  const t = useTranslations('home');
  return (
  <div className="flex flex-col items-center w-[100vw]">
    <header className="relative w-[100vw] h-[100vh]">
      <video src="/videos/video-header-cortado-s-som.mp4" autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover"/>
      <div className="absolute inset-0 flex flex-col items-center justify-between bg-[rgba(0,0,0,0.8)] p-[40px]">
        <div className="flex justify-between w-full">
          <Link href="/">
            <FallingText text="3XMEND"/>
          </Link>
          <div className="flex gap-[60px] items-center">
            <AlternadorIdioma/>
          <div className="flex justify-center items-center"><HamburgerCursor/></div>
        </div>
        </div>
        <div>
          <p className="text-[48px] font-extrabold text-[#F5F5F5]">{t('titleHeader')}</p>
        </div>
        <div className="self-end"><Image className="bounce" src="/icons/down-arrow.png" alt="seta" width={40} height={40}/></div>
      </div>
    </header>
      <main id="servicos" className="flex flex-col items-center justify-center gap-[5vw] py-[5vw] max-w-[1200px]">
        <h2 className="text-[30px] text-center font-extrabold">{t('titleCategoria')}</h2>
        <CardsCategoria/>
        <Link href="/sobre"><BtnSobre/></Link>
      </main>
  </div>
  );
}
