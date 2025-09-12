"use client";

import { useTranslations } from "next-intl";
import FallingText from "@/app/components/fallingText";
import HamburgerCursor from "@/app/components/cursorMenu";
import CardsCategoria from "../../components/cards";
import Cards from "../../components/CardsOutros";
import Link from "next/link";
import AlternadorIdioma from "../alternadorIdioma";

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

export default function ClientPage({ categoria }: { categoria: string }) {
  const t = useTranslations("paginaDinamicaCategoria");

  // Pega os cards dinamicamente
  const cards: CardsProps[] = t.raw(categoria) || [];

  // Mapeia títulos
  const titleMap: Record<string, string> = {
    socialmedia: t("titlesG.titleSocial"),
    ti: t("titlesG.titleTi"),
    parceiros: t("titlesG.titleParceiro"),
  };
  const title = titleMap[categoria] || "Categoria";

  // Mapeia "outros serviços"
  const outrosMap: Record<string, CardsOutrosProps[]> = {
    socialmedia: t.raw("outrosSocial") || [],
    parceiros: t.raw("outrosParceiros") || [],
    ti: t.raw("outrosTI") || [],
  };
  const outros = outrosMap[categoria] || [];

  return (
    <div className="header-page-dinamic flex flex-col bg-[#F5F5F5] items-center">
      <header className="w-[100vw]">
        <div className="flex justify-between w-[100%] p-[40px]">
          <Link href="/"><FallingText text="3XMEND" /></Link>
          <div className="flex gap-[60px] items-center">
            <AlternadorIdioma/>
            <div className="flex justify-center items-center">
              <HamburgerCursor />
            </div>
          </div>
        </div>
      </header>

      <main className="flex flex-col items-center justify-center gap-[5vw] md:gap-[5vw] py-[10vw] md:py-[5vw] w-[95%] md:max-w-[1200px]">
        <h2 className="text-[80px] text-center font-black">{title}</h2>

        <div className="flex flex-col w-[100%] gap-[60px]">
          <div className="flex flex-wrap gap-x-[5%] gap-y-[60px] w-[100%]">
            {cards.map((card) => (
              <CardsCategoria key={card.id} {...card} />
            ))}
          </div>

          <h2 className="text-[30px] text-center font-extrabold">
            {t("titleOutrosS")}
          </h2>
          <div className="flex flex-row flex-wrap gap-x-[5%] gap-y-[60px] w-[100%]">
            {outros.map((card) => (
              <div key={card.id} className="w-[100%] md:w-[30%]">
                <Cards {...card} />
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}