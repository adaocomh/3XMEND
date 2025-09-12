"use client";

import React from "react";
import Link from "next/link";

type CardsProps = {
  src: string;
  poster: string;
  title: string;
  ver: string;
  desc: string;
  produto: string;
};

export default function CardsCategoria({ src, poster, title, ver, desc, produto }: CardsProps) {


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

  return (
    <Link href={`produto/${produto}`} className="flex flex-col items-center w-[100%] md:w-[30%]">
      {src ? <video
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
      </video> : <img src={poster} alt="imagem de perfil do parceiro" className="w-[100%] h-[100%] rounded-[10px] mb-[10px] hoverSeta"/>}
      <h4 className="text-[18px] font-bold hoverSeta">{title}</h4>
      <p className="text-[12px] text-[#7e7e7e] hoverSeta">{ver}</p>
    </Link>
  );
}