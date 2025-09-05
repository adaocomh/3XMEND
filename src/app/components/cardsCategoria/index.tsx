"use client";
import React from "react";
import Data from "../../data/data.json"
import Link from "next/link";

type CardsItem = {
  src: string;
  poster: string;
  title: string;
  ver: string;
  href: string;
};

export default function CardsPageIni() {
  const handleMouseEnter = (e: React.MouseEvent<HTMLVideoElement>) => {
    e.currentTarget.play();
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLVideoElement>) => {
    e.currentTarget.pause();
    e.currentTarget.currentTime = 0.1;
  };

  const handleLoadedData = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    e.currentTarget.currentTime = 0.1;
  };
  const Cards = ({ src, poster, title, ver, href }: CardsItem) => (
    <Link href={href} className="flex flex-col items-center w-[100%]">
      <video
        className="w-[100%] h-[100%] rounded-[10px] mb-[10px] cursor-pointer hoverSeta"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onLoadedData={handleLoadedData}
        muted
        loop={false}
        poster={poster}
      >
        <source src={src} type="video/mp4" />
        Seu navegador não suporta vídeos HTML5.
      </video>
      <h4 className="text-[18px] font-bold hoverSeta">{title}</h4>
      <p className="text-[12px] text-[#7e7e7e] hoverSeta">{ver}</p>
    </Link>
  );
  return (
    <div className="flex justify-between w-[100%]">
      <div className="flex flex-col gap-[8vw] w-[40%]">
        {Data.cadsPageIniLeft.map((video, index) => (
          <Cards key={index} {...video} />
        ))}
      </div>

      <div className="flex flex-col gap-[8vw] mt-[13vw] w-[40%]">
        {Data.cadsPageIniRight.map((video, index) => (
          <Cards key={index} {...video} />
        ))}
      </div>
    </div>
  );
}