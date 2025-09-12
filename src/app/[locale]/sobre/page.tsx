import FallingText from "@/app/components/fallingText";
import HamburgerCursor from "@/app/components/cursorMenu";
import Link from "next/link";
import FAQ from "../../components/FAQ";
import Contador from "../../components/contador";
import AlternadorIdioma from "@/app/components/alternadorIdioma";
import { useTranslations } from "next-intl";

export default function Sobre() {
  const t = useTranslations('sobre')

  const passos: string[] =  t.raw("passosDesc") || [];

  return (
    <div className="header-page-dinamic flex flex-col bg-[#262626] items-center">
      <header className=" w-[100vw]">
        <div className="flex justify-between w-[100%] p-[40px]">
          <Link href="/"><FallingText text="3XMEND"/></Link>
          <div className="flex gap-[60px] items-center">
            <AlternadorIdioma/>
            <div className="flex justify-center items-center">
              <HamburgerCursor />
            </div>
          </div>
        </div>
      </header>

      <main className="flex flex-col items-center justify-center">
        <div className="flex flex-col gap-[4vw] bg-[#262626] max-w-[1200px] py-[5vw]">
            <h1 className="text-[75px] font-black text-(--background)">{t("desc")}</h1>
            <div className="flex flex-col">
            {passos.map((passo, i) => (
                <h2 key={i} className="text-[60px] font-black text-[#00BFFF]">
                  {passo}
                </h2>
              ))}
            </div>
            <h1 className="text-[75px] font-black text-(--background)">{t("desc2")}</h1>
            <h1 className="text-[75px] font-black text-[#00BFFF]">{t("desc3")}</h1>
            <div className="flex flex-col gap-[3vw]">
            <h1 className="text-[75px] font-black text-(--background) text-center">{t("impacto")}</h1>
                <div className="flex justify-between">
                    <div className="flex flex-col items-center">
                        <h1 className="text-[75px] font-black text-(--background)"><Contador target={12} duration={1500}/></h1>
                        <h6 className="text-[35px] text-(--background) font-bold">{t("parceiros")}</h6>
                    </div>
                    <div className="flex flex-col items-center">
                        <h1 className="text-[75px] font-black text-(--background)"><Contador target={25} duration={1500}/>M</h1>
                        <h6 className="text-[35px] text-(--background) font-bold">{t("visualizacao")}</h6>
                    </div>
                    <div className="flex flex-col items-center">
                        <h1 className="text-[75px] font-black text-(--background)"><Contador target={4} duration={1500}/></h1>
                        <h6 className="text-[35px] text-(--background) font-bold">{t("carreira")}</h6>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex justify-center items-center bg-[var(--background)] w-[100vw] py-[5vw]">
            <div className="flex flex-col gap-[5px] w-full max-w-[1200px]">
                <h1 className="text-[75px] font-semibold text-[#262626]">{t("titleAgen1")}</h1>
                <h2 className="text-[55px] font-semibold text-[#262626]">{t("titleAgen2")}</h2>
                <div className="flex flex-col">
                    <p className="text-[18px]">{t("pAgen1")}</p>
                    <p className="text-[18px]">{t("pAgen2")}</p>
                </div>
            </div>
        </div>
        <div className="flex justify-center items-center bg-[#00BFFF] w-[100vw] faqCursor">
            <FAQ/>
        </div>
      </main>
    </div>
  );
}