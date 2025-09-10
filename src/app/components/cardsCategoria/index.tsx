"use client";
import React from "react";
import Data from "../../data/data.json"
import Cards from "../CardsOutros";

export default function CardsPageIni() {
  return (
    <div className="flex justify-between w-[100%]">
      <div className="flex flex-col gap-[8vw] w-[40%]">
        {Data.cadsPageIniLeft.map((video) => (
          <Cards key={video.id} {...video} />
        ))}
      </div>

      <div className="flex flex-col gap-[8vw] mt-[13vw] w-[40%]">
        {Data.cadsPageIniRight.map((video) => (
          <Cards key={video.id} {...video} />
        ))}
      </div>
    </div>
  );
}