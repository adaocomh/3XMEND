import FallingText from "@/app/components/fallingText";
import HamburgerCursor from "@/app/components/cursorMenu";
import Link from "next/link";
import FAQ from "../components/FAQ";

export default async function PageDinamicasCategorias() {
  return (
    <div className="header-page-dinamic flex flex-col bg-[#262626] items-center">
      <header className=" w-[100vw]">
        <div className="flex justify-between w-[100%] p-[40px]">
          <Link href="/"><FallingText text="3XMEND"/></Link>
          <div className="flex gap-[60px] items-center">
            <div className="relative flex">
              <p className="flex items-center text-[16px] text-(--background) h-[16px] text-center font-medium p-[8px] border-r-[1px] border-[var(--background)] hoverSeta">
                BR
              </p>
              <p className="flex items-center text-[16px] text-(--background) h-[16px] text-center font-medium p-[8px] border-r-[1px] border-[var(--background)] hoverSeta">
                EUA
              </p>
              <p className="flex items-center text-[16px] text-(--background) h-[16px] text-center font-medium p-[8px] hoverSeta">
                ES
              </p>
            </div>
            <div className="flex justify-center items-center">
              <HamburgerCursor />
            </div>
          </div>
        </div>
      </header>

      <main className="flex flex-col items-center justify-center">
        <div className="flex flex-col gap-[4vw] bg-[#262626] max-w-[1200px] py-[5vw]">
            <h1 className="text-[75px] font-black text-(--background)">A 3XMEND é sua agência digital onde cuidamos do seu negócio, desde o posicionamento ao clique que gera vendas.</h1>
            <div className="flex flex-col">
                <h2 className="text-[60px] font-black text-[#00BFFF]">1. Diagnóstico e Imersão</h2>
                <h2 className="text-[60px] font-black text-[#00BFFF]">2. Estratégia sob medida</h2>
                <h2 className="text-[60px] font-black text-[#00BFFF]">3. Execução criativa e focada</h2>
                <h2 className="text-[60px] font-black text-[#00BFFF]">4. Acompanhamento e otimização</h2>
                <h2 className="text-[60px] font-black text-[#00BFFF]">5. Relatórios e reuniões estratégicas</h2>
            </div>
            <h1 className="text-[75px] font-black text-(--background)">Nosso jeito de trabalhar é simples: entender o seu negócio, criar estratégias personalizadas e executar com excelência. A gente mergulha no seu universo, estuda o seu mercado e coloca em prática ações que realmente fazem diferença no digital.</h1>
            <h1 className="text-[75px] font-black text-[#00BFFF]">Planejamento, ação e resultado. Sem achismo, sem enrolação.</h1>
            <div className="flex flex-col gap-[3vw]">
            <h1 className="text-[75px] font-black text-(--background) text-center">Impacto da 3XMEND</h1>
                <div className="flex justify-between">
                    <div className="flex flex-col items-center">
                        <h1 className="text-[75px] font-black text-(--background)">12</h1>
                        <h6 className="text-[35px] text-(--background) font-bold">Parceiros</h6>
                    </div>
                    <div className="flex flex-col items-center">
                        <h1 className="text-[75px] font-black text-(--background)">25M</h1>
                        <h6 className="text-[35px] text-(--background) font-bold">Gerados em visualização</h6>
                    </div>
                    <div className="flex flex-col items-center">
                        <h1 className="text-[75px] font-black text-(--background)">4</h1>
                        <h6 className="text-[35px] text-(--background) font-bold">Anos de mercado</h6>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex justify-center items-center bg-[var(--background)] w-[100vw] py-[5vw]">
            <div className="flex flex-col gap-[5px] w-full max-w-[1200px]">
                <h1 className="text-[75px] font-semibold text-[#262626]">Agenciamento de influencers</h1>
                <h2 className="text-[55px] font-semibold text-[#262626]">Você é o talento. A gente é o time por trás do sucesso.</h2>
                <div className="flex flex-col">
                    <p className="text-[18px]">Você tem o potencial, o carisma, o conhecimento ou a influência. E nós temos as estratégias certas pra transformar isso tudo em uma marca forte, desejada e profissional.</p>
                    <p className="text-[18px]"><strong>Te Agenciamos</strong> é o nosso braço estratégico voltado para quem quer ser mais do que visto — quer ser lembrado, reconhecido e valorizado no digital. A gente entra em campo pra cuidar da sua imagem, posicionamento, conteúdo, oportunidades de negócio e presença online com visão estratégica, criatividade e consistência.</p>
                </div>
            </div>
        </div>
        <div className="flex justify-center items-center bg-[#00BFFF] w-[100vw]">
            <FAQ/>
        </div>
      </main>
    </div>
  );
}