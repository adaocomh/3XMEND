"use client"
import { useState } from "react"
import Image from "next/image"

export default function BtnAgencia(){
    const [mouseEnter, setMouseEnter] = useState(false)

    return(
        <div className="flex justify-center items-center w-[200px] py-[5px] border-[3px] border-[var(--background)] rounded-[50px] hover:bg-[var(--background)] transition-all duration-300 ease-in-out cursor-pointer hoverSeta" onMouseEnter={() => setMouseEnter(true)} onMouseLeave={() => setMouseEnter(false)}>
        {mouseEnter ? <p className="flex gap-[10px] text-[20px] font-bold text-(--cor-secundaria) hoverSeta">Agencia Mend <Image className="hoverSeta" src="/icons/right-arrow-2.png" alt="seta para direita" width={20} height={20}/></p> : <p className="flex gap-[10px] text-[20px] font-bold text-(--background) hoverSeta">Agencia Mend <Image className="hoverSeta" src="/icons/right-arrow.png" alt="seta para direita" width={20} height={20}/></p>}
      </div>
    )
}