"use client"
import { useState } from "react"
import Image from "next/image"
import {useTranslations} from 'next-intl';

export default function BtnAgencia(){
  const t = useTranslations('footer')
    const [mouseEnter, setMouseEnter] = useState(false)

    return(
        <a className="flex justify-center items-center w-[200px] py-[5px] border-[3px] border-[var(--background)] rounded-[50px] hover:bg-[var(--background)] transition-all duration-300 ease-in-out cursor-pointer hoverSeta" href="https://wa.me/5511956747411?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20oferecidos%20pela%203XMEND." rel='noopener noreferrer' target="_blank" onMouseEnter={() => setMouseEnter(true)} onMouseLeave={() => setMouseEnter(false)}>
        {mouseEnter ? <p className="flex gap-[10px] text-[20px] font-bold text-(--cor-secundaria) hoverSeta">{t('btnContato')}<Image className="hoverSeta" src="/icons/right-arrow-2.png" alt="seta para direita" width={20} height={20}/></p> : <p className="flex gap-[10px] text-[20px] font-bold text-(--background) hoverSeta">{t('btnContato')}<Image className="hoverSeta" src="/icons/right-arrow.png" alt="seta para direita" width={20} height={20}/></p>}
      </a>
    )
}