import FallingText from "@/app/components/fallingText"
import HamburgerCursor from "@/app/components/cursorMenu"
import Image from "next/image"

export default function PageSocialMedia(){
    return(
        <div className="flex flex-col items-center bg-gray-700">
            <header className="w-[100vw]">
                <div className="flex justify-between w-[100%] p-[40px]">
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
            </header>
            <main className="flex flex-col items-center justify-center py-[5vw] max-w-[1200px]">
                <h2 className="text-[30px] text-center font-extrabold">Cuidamos do seu negócio, desde o posicionamento ao clique que gera vendas.</h2>
            </main>
    </div>
    )
}