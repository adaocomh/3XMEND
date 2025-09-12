import BtnAgencia from "../btnContatoFooter"
import Image from "next/image"
import Slide from "../elementosSlides"
import FadeIn from "../elementosFadeIn"
import Line from "../linhaCrescente"
import {useTranslations} from 'next-intl';
import LinksContato from "../linksContatos"
import AlternadorIdiomaFooter from "../alternadorFooter"

export default function Footer(){
    const t = useTranslations('footer');
    

    return(
        <div className="flex flex-col justify-center items-center w-[100vw] py-[50px] bg-[var(--cor-secundaria)]">
            <div className="flex flex-col justify-center gap-[60px] items-center w-[95%] md:w-[1200px] mb-[50]">
                <div className="overflow-hidden">
                    <Slide>
                        <h1 className="text-center text-[80px] md:text-[100px] text-(--background) font-bold">{t('titleFooter')}</h1>
                    </Slide>
                </div>
                <div className="overflow-hidden">
                    <Slide>
                        <BtnAgencia/>
                    </Slide>
                </div> 
                <div className="w-full">
                <Line/>
                </div>
                <div className="flex flex-col w-full gap-[50px]">
                    <FadeIn>
                    <div className="flex flex-col overflow-hidden">
                        <h6 className="text-[16px] text-(--background) text-center font-bold">NovAmerica Office Park</h6>
                        <p className="fade-in text-[16px] text-(--background) text-center font-light h-[50px]">Av. das Nações Unidas, 18801 - Santo Amaro, São Paulo - SP, 04753-100, Brasil</p>
                    </div>
                    <div className=" flex flex-col gap-[40px] md:flex-row justify-between items-center w-full">
                        <p className="order-3 md:order-0 text-[16px] text-(--foreground)) text-center text-(--foreground) font-light  w-[350px]">{t('copy')}</p>
                        <LinksContato/>
                        <AlternadorIdiomaFooter/>
                    </div>
                    </FadeIn>
                </div>
            </div>
        </div>
    )
}