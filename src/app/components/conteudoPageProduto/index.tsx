"use client";

import { useTranslations } from "next-intl";
import FallingText from "@/app/components/fallingText";
import HamburgerCursor from "@/app/components/cursorMenu";
import Image from "next/image";
import Link from "next/link";
import Cards from "@/app/components/CardsOutros";
import Slide from "@/app/components/elementosSlides";
import AlternadorIdioma from "../alternadorIdioma";

type CardsProps = {
  id: number;
  src: string;
  poster: string;
  ver: string;
  title: string;
  subTitle: string;
  desc: string;
  icon?: string[];
  descIcon?: string[];
  imgs?: string[];
};

type CardsOutrosProps = {
  id: number;
  src: string;
  poster: string;
  title: string;
  ver: string;
  href: string;
};

export default function PaginaDinamicProdClient({ title }: { 
    title: string; }) {
  const t = useTranslations("paginaDinamicaServico");
  const tc = useTranslations("paginaDinamicaCategoria")

  // 🔹 Pega o produto dinamicamente do JSON
  const item = t.raw(title) as CardsProps | undefined;

  

  if (!item) {
    return (
      <div className="flex justify-center items-center h-[100vh]">
        <p className="text-xl font-bold">Produto não encontrado.</p>
      </div>
    );
  }

const outros: CardsOutrosProps[] =  tc.raw("outros") || [];
  

  // 🔹 Garante que "outros" seja array

  const icons = Array.isArray(item.icon) ? item.icon : [];
  const desc = Array.isArray(item.descIcon) ? item.descIcon : [];
  const imgs = Array.isArray(item.imgs) ? item.imgs : [];

  return (
    <div className="flex flex-col items-center w-[100vw]">
      {/* HEADER */}
      <header className="relative w-[100vw] h-[100vh]">
        {item.src ? (
          <video
            src={item.src}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          <img
            src={item.poster}
            className="absolute inset-0 w-full h-full bg-top"
            alt={item.title}
          />
        )}

        <div className="absolute inset-0 flex flex-col items-center justify-between bg-[rgba(0,0,0,0.8)] p-[40px]">
          <div className="flex justify-between w-full">
            <Link href="/"><FallingText text="3XMEND" /></Link>
            <div className="flex gap-[60px] items-center">
              <AlternadorIdioma/>
              <div className="flex justify-center items-center">
                <HamburgerCursor />
              </div>
            </div>
          </div>

          <div>
            <p className="text-[48px] font-extrabold text-[#F5F5F5]">{item.title}</p>
          </div>

          <div className="self-center">
            <Image
              className="bounce"
              src="/icons/down-arrow.png"
              alt="seta"
              width={40}
              height={40}
            />
          </div>
        </div>
      </header>

      {/* MAIN */}
      <main className="flex flex-col items-start justify-center gap-[5vw] pt-[2vw] pb-[5vw] max-w-[1200px]">
        {/* INFO */}
        <div className="flex flex-row justify-between gap-[1vw] my-[2vw]">
          <div className="flex flex-col gap-[1vw] my-[2vw] w-[60%]">
            <Slide>
              <h2 className="text-[50px] text-start font-black">{item.title}</h2>
            </Slide>
            <Slide>
              <h3 className="text-[35px] text-start font-bold">{item.subTitle}</h3>
            </Slide>
            <Slide>
              <p className="text-start text-[18px] text-[#575757]">{item.desc}</p>
            </Slide>
          </div>

          {/* ÍCONES */}
          {desc.length > 0 && (
            <div className="flex flex-col justify-between my-[2vw]">
              {desc.map((d, i) => (
                <div key={i} className="flex gap-[20px] items-center">
                  <Slide>
                    <img
                      className="w-[30px] h-[30px]"
                      src={icons[i]}
                      alt={`Icon ${i + 1}`}
                    />
                  </Slide>
                  <Slide>
                    <h6 className="text-[18px] font-medium">{d}</h6>
                  </Slide>
                </div>
              ))}
            </div>
          )}
        </div>

        {imgs.length > 0 && (
          <div className="flex flex-col gap-[2vw]">
            {imgs.map((img, i) => (
              <img
                key={img}
                src={`/imgsProdutora/${img}`}
                alt={`Imagem ${i + 1}`}
                className="w-full h-auto rounded-[10px]"
              />
            ))}
          </div>
        )}

        {outros.length > 0 && (
          <>
            <h2 className="text-[30px] self-center font-extrabold">
              {tc("titleOutrosS")}
            </h2>
            <div className="flex justify-center flex-wrap gap-x-[5%] gap-y-[60px] w-[100%]">
              {outros.map((card) => (
                <div key={card.id} className="w-[30%]">
                  <Cards {...card} />
                </div>
              ))}
            </div>
          </>
        )}
      </main>
    </div>
  );
}