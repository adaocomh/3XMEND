"use client";

import { useTranslations } from "next-intl";
import { notFound } from "next/navigation";
import FallingText from "../fallingText";
import HamburgerCursor from "../cursorMenu";
import AlternadorIdioma from "../alternadorIdioma";
import CardProduto from "../cardProduto";
import CardsOutros from "../CardsOutros";
import Link from "next/link";

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

export default function PageCategoria({ categoria }: { categoria: string }) {
  const t = useTranslations("paginaDinamicaCategoria");

  if (!t.has(categoria)) {
    return notFound();
  }

  const cards: CardsProps[] = t.raw(categoria) as CardsProps[];

  const titleMap: Record<string, string> = {
    socialmedia: t("titlesG.titleSocial"),
    ti: t("titlesG.titleTi"),
    parceiros: t("titlesG.titleParceiro"),
  };
  const title = titleMap[categoria] || "Categoria";

  const getOutros = (key: string): CardsOutrosProps[] => {
    return t.has(key) ? (t.raw(key) as CardsOutrosProps[]) : [];
  };

  const outros: CardsOutrosProps[] = {
    socialmedia: getOutros("outrosSocial"),
    parceiros: getOutros("outrosParceiros"),
    ti: getOutros("outrosTI"),
  }[categoria] || [];

  return (
    <div className="flex flex-col items-center bg-[var(--background)] header-page-dinamic">
      <header className="w-[100vw]">
        <div className="flex justify-between w-[100%] p-[20px] md:p-[40px]">
          <Link href="/"><FallingText text="3XMEND" /></Link>
          <div className="flex items-center gap-[60px]">
            <AlternadorIdioma/>
            <div className="flex justify-center items-center">
              <HamburgerCursor />
            </div>
          </div>
        </div>
      </header>

      <main className="flex flex-col justify-center items-center gap-[5vw] w-[90%] py-[10vw] md:gap-[5vw] md:max-w-[1200px] md:py-[5vw]">
        <h2 className="text-[48px] font-black text-center md:text-[80px]">{title}</h2>

        <div className="flex flex-col gap-[60px] w-[100%]">
          <div className="flex gap-x-[5%] gap-y-[60px] flex-wrap w-[100%]">
            {cards.map((card) => (
              <CardProduto key={card.id} {...card} />
            ))}
          </div>

          <h2 className="text-[30px] font-extrabold text-center">
            {t("titleOutrosS")}
          </h2>
          <div className="flex flex-row gap-x-[5%] gap-y-[60px] flex-wrap w-[100%]">
            {outros.map((card) => (
              <div key={card.id} className="w-[100%] md:w-[30%]">
                <CardsOutros {...card} />
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}