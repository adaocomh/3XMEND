"use client";
import React from "react";
import Cards from "../CardsOutros";
import { useTranslations } from "next-intl";


type CardsProps = {
  id: number;
  src: string;
  poster: string;
  title: string;
  ver: string;
  href: string;
  produto: string;
};

export default function CardsMais() {
  const t = useTranslations('home')

  const cardsLeft: CardsProps[] = t.raw('cadsPageIniLeft') || []
  const cardsRight: CardsProps[] = t.raw('cadsPageIniRight') || []

  return (
    <div className="flex flex-col justify-between w-[100%] md:flex-row">
      <div className="flex flex-col gap-[10vw] md:gap-[8vw] w-[100%] md:w-[40%]">
        {cardsLeft.map((video: CardsProps) => (
          <Cards key={video.id} {...video}/>
        ))}
      </div>

      <div className="flex flex-col gap-[10vw] md:gap-[8vw] mt-[10vw] md:mt-[13vw] w-[100%] md:w-[40%]">
        {cardsRight.map((video: CardsProps) => (
          <Cards key={video.id} {...video}/>
        ))}
      </div>
    </div>
  );
};