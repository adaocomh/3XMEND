"use client"

import { useState } from "react"

export default function BtnSobre(){
    const [mouseEnter, setMouseEnter] = useState(false)
    return(
        <div className="flex justify-center items-center w-[100px] h-[100px] border-[3px] border-[var(--cor-secundaria)] rounded-[50%] hover:bg-[var(--cor-secundaria)] transition-all duration-300 ease-in-out cursor-pointer hoverSeta" onMouseEnter={() => setMouseEnter(true)} onMouseLeave={() => setMouseEnter(false)}>
        {mouseEnter ? <p className="font-bold text-(--background) hoverSeta">Sobre</p> : <p className="font-bold text-(--cor-secundaria) hoverSeta">Sobre</p>}
      </div>
    )
}