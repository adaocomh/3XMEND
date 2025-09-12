"use client";

import { useTranslations } from "next-intl";
import FallingText from "@/app/components/fallingText";
import AlternadorIdioma from "../alternadorIdioma";
import HamburgerCursor from "@/app/components/cursorMenu";
import Image from "next/image";
import Link from "next/link";
import Cards from "@/app/components/cardsOutros";
import Slide from "@/app/components/elementosSlides";

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

export default function PaginaProduto({ title }: { 
    title: string; }) {
  const t = useTranslations("paginaDinamicaServico");
  const tc = useTranslations("paginaDinamicaCategoria")

  const item = t.raw(title) as CardsProps | undefined;

  

  if (!item) {
    return (
      <div className="flex justify-center items-center h-[100vh]">
        <p className="text-xl font-bold">Produto não encontrado.</p>
      </div>
    );
  }

const outros: CardsOutrosProps[] =  tc.raw("outros") || [];
  

  const icons = Array.isArray(item.icon) ? item.icon : [];
  const desc = Array.isArray(item.descIcon) ? item.descIcon : [];
  const imgs = Array.isArray(item.imgs) ? item.imgs : [];

  return (
    <div className="flex flex-col items-center w-[100vw]">
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

        <div className="absolute inset-0 flex flex-col justify-between items-center bg-[rgba(0,0,0,0.8)] p-[40px]">
          <div className="flex justify-between w-full">
            <Link href="/"><FallingText text="3XMEND" /></Link>
            <div className="flex items-center gap-[60px]">
              <AlternadorIdioma/>
              <div className="flex justify-center items-center">
                <HamburgerCursor />
              </div>
            </div>
          </div>

          <div>
            <p className="text-[48px] font-extrabold text-(--background)">{item.title}</p>
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

      <main className="flex flex-col justify-center items-start gap-[10vw] w-[95%] pt-[2vw] pb-[5vw] md:gap-[5vw] md:max-w-[1200px]">
        <div className="flex flex-col justify-between gap-[1vw] my-[2vw] md:flex-row">
          <div className="flex flex-col gap-[1vw] w-[100%] my-[2vw] md:w-[60%]">
            <Slide>
              <h2 className="text-[50px] font-black text-start">{item.title}</h2>
            </Slide>
            <Slide>
              <h3 className="text-[35px] font-bold text-start">{item.subTitle}</h3>
            </Slide>
            <Slide>
              <p className=" text-[18px] text-start text-(--foreground)">{item.desc}</p>
            </Slide>
          </div>

          {desc.length > 0 && (
            <div className="flex flex-col justify-between my-[2vw] gap-none md:gap-[3vw] md:my-none">
              {desc.map((d, i) => (
                <div key={i} className="flex items-center gap-[20px]">
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
          <div className="flex flex-col gap-[4vw] md:gap-[2vw]">
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
            <h2 className="text-[30px] font-extrabold self-center">
              {tc("titleOutrosS")}
            </h2>
            <div className="flex justify-center gap-x-[5%] gap-y-[60px] flex-wrap w-[100%]">
              {outros.map((card) => (
                <div key={card.id} className="w-[100%] md:w-[30%]">
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