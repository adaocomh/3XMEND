"use client";
import React from "react";
import Data from "../../data/data.json"
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
    <div className="flex justify-between w-[100%]">
      <div className="flex flex-col gap-[8vw] w-[40%]">
        {Data.cadsPageIniLeft.map((video: CardsProps) => (
          <Cards key={video.id} {...video}/>
        ))}
      </div>

      <div className="flex flex-col gap-[8vw] mt-[13vw] w-[40%]">
        {Data.cadsPageIniRight.map((video: CardsProps) => (
          <Cards key={video.id} {...video}/>
        ))}
      </div>
    </div>
  );
}