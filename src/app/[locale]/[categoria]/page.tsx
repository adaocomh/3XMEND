import FallingText from "@/app/components/fallingText";
import HamburgerCursor from "@/app/components/cursorMenu";
import CardsCategoria from "../../components/cards";
import Cards from "../../components/CardsOutros";
import Link from "next/link";
import Data from "../../../traducao/pt.json"

type CardsOutrosProps = {
  id: number;
  src: string;
  poster: string;
  title: string;
  ver: string;
  href: string;
};

type CardsProps = {
  id: number;
  src: string;
  poster: string;
  title: string;
  ver: string;
  desc: string;
  produto: string;
};


export default async function PageDinamicasCategorias({
  params,
}: {
  params: Promise<{ categoria: string }>;
}) {
  const { categoria } = await params;

  const cards =
  Array.isArray(Data.paginaDinamicaCategoria[categoria as keyof typeof Data["paginaDinamicaCategoria"]])
  ? (Data.paginaDinamicaCategoria[categoria as keyof typeof Data["paginaDinamicaCategoria"]] as any[])
  : [];
  
    const titleMap: Record<string, string> = {
      socialmedia: Data.paginaDinamicaCategoria.titlesG.titleSocial,
      ti: Data.paginaDinamicaCategoria.titlesG.titleTi,
      parceiros: Data.paginaDinamicaCategoria.titlesG.titleParceiro
    };
    const title = titleMap[categoria] || "Categoria";

    const outrosMap: Record<string, any[]> = {
      socialmedia: Data.paginaDinamicaCategoria.outrosSocial,
      parceiros: Data.paginaDinamicaCategoria.outrosParceiros,
      ti: Data.paginaDinamicaCategoria.outrosTI
    };
    
    const outros = Array.isArray(outrosMap[categoria]) ? outrosMap[categoria]! : [];


  return (
    <div className="header-page-dinamic flex flex-col  bg-[#F5F5F5] items-center">
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
              <HamburgerCursor/>
            </div>
          </div>
        </div>
      </header>

      <main className="flex flex-col items-center justify-center gap-[5vw] py-[5vw] max-w-[1200px]">
        <h2 className="text-[80px] text-center font-black">
          {title}
        </h2>

        <div className="flex flex-col w-[100%] gap-[60px]">
          <div className="flex flex-wrap gap-x-[5%] gap-y-[60px] w-[100%]">
          {cards.map((card: CardsProps) => (
              <CardsCategoria key={card.id} {...card}/>
            ))}
          </div>

          <h2 className="text-[30px] text-center font-extrabold">
            Outros serviços.
          </h2>
          <div className="flex flex-row flex-wrap gap-x-[5%] gap-y-[60px] w-[100%]">
          {outros.map((card: CardsOutrosProps) => (
              <div key={card.id} className="w-[30%]">
                <Cards {...card}/>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}