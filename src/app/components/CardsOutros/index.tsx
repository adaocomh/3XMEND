"use client"

import Link from "next/link";
import { useEffect, useRef } from "react";

type CardsProps = {
    src: string;
    poster: string;
    title: string;
    ver: string;
    href: string;
  };

export default function CardsOutros({ src, poster, title, ver, href }: CardsProps){
  const videoRef = useRef<HTMLVideoElement>(null);

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
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (window.matchMedia("(pointer: coarse)").matches) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              video.play().catch((err) => {
                console.warn("Erro ao tentar reproduzir o vídeo:", err);
              });
            } else {
              video.pause();
              video.currentTime = 0.1;
            }
          });
        },
        {
          root: null,
          threshold: 1,
        }
      );

      observer.observe(video);

      return () => {
        observer.disconnect();
      };
    }
  }, []);

    return(
    <Link href={href} className="flex flex-col items-center w-[100%]">
      <video
        className="w-[100%] h-[100%] rounded-[10px] mb-[10px] cursor-pointer hoverSeta"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onLoadedData={handleLoadedData}
        muted
        loop={false}
        playsInline
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
    