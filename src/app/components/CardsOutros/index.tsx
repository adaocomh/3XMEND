"use client"

import Link from "next/link";

type CardsProps = {
    src: string;
    poster: string;
    title: string;
    ver: string;
    href: string;
  };

export default function CardsOutros({ src, poster, title, ver, href }: CardsProps){
  const handleMouseEnter = (e: React.MouseEvent<HTMLVideoElement>) => {
    const video = e.currentTarget;
    if (video.paused) {
      video.play().catch((err) => {
        console.warn("Erro ao tentar reproduzir o vídeo:", err);
      });
    }
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLVideoElement>) => {
    const video = e.currentTarget;
    if (!video.paused) {
      video.pause();
      video.currentTime = 0.1;
    }
  };

  const handleLoadedData = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    e.currentTarget.currentTime = 0.1;
  };

    return(
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
      <p className="text-[12px] text-(--cor-quartenaria) hoverSeta">{ver}</p>
    </Link>
    )
}
    