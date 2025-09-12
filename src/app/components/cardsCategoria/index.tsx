"use client";
import React from "react";
import Data from "../../../messages/pt.json"
import Cards from "../CardsOutros";

type CardsProps = {
  id: number;
  src: string;
  poster: string;
  title: string;
  ver: string;
  href: string;
  produto: string;
};

export default function CardsPageIni() {
  return (
    <div className="flex flex-col justify-between w-[100%] md:flex-row">
      <div className="flex flex-col gap-[10vw] md:gap-[8vw] w-[100%] md:w-[40%]">
        {Data.home.cadsPageIniLeft.map((video: CardsProps) => (
          <Cards key={video.id} {...video}/>
        ))}
      </div>

      <div className="flex flex-col gap-[10vw] md:gap-[8vw] mt-[10vw] md:mt-[13vw] w-[100%] md:w-[40%]">
        {Data.home.cadsPageIniRight.map((video: CardsProps) => (
          <Cards key={video.id} {...video}/>
        ))}
      </div>
    </div>
  );
};