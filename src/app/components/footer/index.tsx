import AlternadorIdiomaFooter from "../alternadorFooter"
import BtnAgencia from "../BtnAgencia"
import Slide from "../elementosSlides"
import FadeIn from "../elementosFadeIn"
import Line from "../linhaCrescente"
import {useTranslations} from 'next-intl';
import LinksContato from "../linksContatos"

export default function Footer(){
    const t = useTranslations('footer');
    

    return(
        <div className="flex flex-col justify-center items-center w-[100vw] py-[50px] bg-[var(--cor-secundaria)]">
            <div className="flex flex-col justify-center items-center gap-[60px] w-[95%] mb-[50] md:w-[1200px]">
                <div className="overflow-hidden">
                    <Slide>
                        <h1 className=" text-[80px] text-center font-bold text-(--background) md:text-[100px]">{t('titleFooter')}</h1>
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
                <div className="flex flex-col gap-[50px] w-full">
                    <FadeIn>
                    <div className="flex flex-col overflow-hidden">
                        <h6 className="text-[16px] font-bold text-center text-(--background)">NovAmerica Office Park</h6>
                        <p className="h-[50px] text-[16px] font-light text-center text-(--background) fade-in">Av. das Nações Unidas, 18801 - Santo Amaro, São Paulo - SP, 04753-100, Brasil</p>
                    </div>
                    <div className="flex flex-col justify-between items-center gap-[40px] w-full md:flex-row">
                        <p className="order-3 w-[350px] text-[16px] font-light text-center text-(--foreground) md:order-0">{t('copy')}</p>
                        <LinksContato/>
                        <AlternadorIdiomaFooter/>
                    </div>
                    </FadeIn>
                </div>
            </div>
        </div>
    )
}