import BtnAgencia from "../btnContatoFooter"
import Image from "next/image"
export default function Footer(){
    return(
        <div className="flex flex-col justify-center items-center w-[100vw] py-[50px] bg-[var(--cor-secundaria)]">
            <div className="flex flex-col justify-center items-center w-[1200px]">
                <div className="flex flex-col justify-center items-center w-full p-[60px] pt-0 border-b-[0.3px] border-[var(--foreground)] mb-[50]">
                    <h1 className="text-[100px] text-(--background) font-bold">Entre em contato.</h1>
                    <BtnAgencia/>
                </div>
                <div className="flex flex-col w-full gap-[50px]">
                    <div>
                        <h6 className="text-[16px] text-(--background) text-center font-bold">NovAmerica Office Park</h6>
                        <p className="text-[16px] text-(--background) text-center font-light h-[50px]">Av. das Nações Unidas, 18801 - Santo Amaro, São Paulo - SP, 04753-100, Brasil</p>
                    </div>
                    <div className="flex justify-between items-center w-full">
                        <p className="text-[16px] text-(--foreground)) text-center font-light  w-[350px]">© 2025 3XMEND. Todos os direitos reservados.</p>
                        <div className="flex gap-[10px]">
                            <div className="flex justify-center items-center w-[50px] h-[50px] bg-[var(--background)] rounded-[50px]"><Image src="/icons/instagram.png" alt="seta para direita" width={30} height={30}/></div>
                            <div className="flex justify-center items-center w-[50px] h-[50px] bg-[var(--background)] rounded-[50px]"><Image src="/icons/whatsapp.png" alt="seta para direita" width={30} height={30}/></div>
                            <div className="flex justify-center items-center w-[50px] h-[50px] bg-[var(--background)] rounded-[50px]"><Image src="/icons/telephone.png" alt="seta para direita" width={30} height={30}/></div>
                            <div className="flex justify-center items-center w-[50px] h-[50px] bg-[var(--background)] rounded-[50px]"><Image src="/icons/email.png" alt="seta para direita" width={30} height={30}/></div>
                        </div>
                        <div className="flex w-[350px]">
                            <p className="flex items-center text-[16px] text-(--background) h-[16px] text-center font-light p-[8px] border-r-[1px] border-[var(--background)]">Português</p>
                            <p className="flex items-center text-[16px] text-(--background) h-[16px] text-center font-light p-[8px] border-r-[1px] border-[var(--background)]">English</p>
                            <p className="flex items-center text-[16px] text-(--background) h-[16px] text-center font-light p-[8px]">Español</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}