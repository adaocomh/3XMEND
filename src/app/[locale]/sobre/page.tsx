import FallingText from "@/app/components/fallingText";
import AlternadorIdioma from "@/app/components/alternadorIdioma";
import HamburgerCursor from "@/app/components/cursorMenu";
import Link from "next/link";
import Contador from "../../components/contador";
import FAQ from "../../components/FAQ";
import { useTranslations } from "next-intl";

export default function Sobre() {
  const t = useTranslations('sobre')

  const passos: string[] =  t.raw("passosDesc") || [];

  return (
    <div className="flex flex-col items-center bg-[var(--cor-secundaria)]">
      <header className="w-[100vw]">
        <div className="flex justify-between w-[100%] p-[40px]">
          <Link href="/"><FallingText text="3XMEND"/></Link>
          <div className="flex items-center gap-[60px]">
            <AlternadorIdioma/>
            <div className="flex justify-center items-center">
              <HamburgerCursor/>
            </div>
          </div>
        </div>
      </header>

      <main className="flex flex-col justify-center items-center">
        <div className="flex flex-col gap-[4vw] w-[95%] py-[10vw] bg-[var(--cor-secundaria)] md:max-w-[1200px] md:py-[5vw]">
            <h1 className="text-[35px] font-bold text-(--background) leading-tight md:text-[75px] md:font-black">{t("desc")}</h1>
            <div className="flex flex-col">
            {passos.map((passo, i) => (
                <h2 key={i} className="text-[30px] font-bold text-(--cor-terciaria) md:text-[60px] md:font-black">
                  {passo}
                </h2>
              ))}
            </div>
            <h1 className="text-[35px] font-bold text-(--background) leading-tight md:text-[75px] md:font-black">{t("desc2")}</h1>
            <h1 className="text-[35px] font-bold text-(--cor-terciaria) leading-tight md:text-[75px] md:font-black">{t("desc3")}</h1>
            <div className="flex flex-col gap-[3vw]">
            <h1 className="text-[35px] font-bold text-(--background) text-center md:text-[75px] md:font-black">{t("impacto")}</h1>
                <div className="flex justify-between">
                    <div className="flex flex-col items-center">
                        <h1 className="text-[35px] font-bold text-(--background) md:text-[75px] md:font-black"><Contador target={12} duration={1500}/></h1>
                        <h6 className="text-[16px] text-center text-(--background) font-bold md:text-[35px]">{t("parceiros")}</h6>
                    </div>
                    <div className="flex flex-col items-center">
                        <h1 className="text-[35px] font-bold text-(--background) md:text-[75px] md:font-black"><Contador target={25} duration={1500}/>M</h1>
                        <h6 className="text-[16px] text-center text-(--background) font-bold md:text-[35px]">{t("visualizacao")}</h6>
                    </div>
                    <div className="flex flex-col items-center">
                        <h1 className="text-[35px] font-bold text-(--background) md:text-[75px] md:font-black"><Contador target={4} duration={1500}/></h1>
                        <h6 className="text-[16px] text-center text-(--background) font-bold md:text-[35px]">{t("carreira")}</h6>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex justify-center items-center w-[100vw] py-[10vw] bg-[var(--background)] md:py-[5vw]">
            <div className="flex flex-col gap-[5px] w-[95%] md:max-w-[1200px]">
                <h1 className="text-[35px] font-semibold text-(--cor-secundaria) leading-tight md:text-[75px]">{t("titleAgen1")}</h1>
                <h2 className="text-[25px] font-semibold text-(--cor-secundaria) leading-tight md:text-[55px]">{t("titleAgen2")}</h2>
                <div className="flex flex-col gap-[8px]">
                    <p className="text-[16px] md:text-[18px]">{t("pAgen1")}</p>
                    <p className="text-[16px] md:text-[18px]">{t("pAgen2")}</p>
                </div>
            </div>
        </div>
        <div className="flex justify-center items-center w-[100vw] bg-[var(--cor-terciaria)] faqCursor">
            <FAQ/>
        </div>
      </main>
    </div>
  );
}