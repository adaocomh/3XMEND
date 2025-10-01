"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

type CardsProps = {
  src: string;
  poster: string;
  title: string;
  ver: string;
  desc: string;
  produto: string;
};

export default function CardProduto({ src, poster, title, ver, desc, produto }: CardsProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [unlocked, setUnlocked] = useState(false);

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

    const unlock = () => {
      video.play()
        .then(() => {
          video.pause();
          video.currentTime = 0.1;
          setUnlocked(true);
        })
        .catch((err) => console.warn("Falha ao desbloquear autoplay:", err));

      document.removeEventListener("touchstart", unlock);
    };

    document.addEventListener("touchstart", unlock, { once: true });

    if (window.matchMedia("(pointer: coarse)").matches) {
      const observer = new IntersectionObserver(
        (entries) => {
          if (!unlocked) return;

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
          threshold: 0.5,
        }
      );

      observer.observe(video);

      return () => {
        observer.disconnect();
      };
    }
  }, [unlocked]);

  return (
    <Link href={`produto/${produto}`} className="flex flex-col items-center w-[100%] md:w-[30%]">
      {src ? (
        <video
          ref={videoRef}
          className="w-[100%] h-[100%] rounded-[10px] mb-[10px] cursor-pointer hoverSeta"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onLoadedData={handleLoadedData}
          muted
          loop={true}
          playsInline
          poster={poster}
        >
          <source src={src} type="video/mp4" />
          Seu navegador não suporta vídeos HTML5.
        </video>
      ) : (
        <img
          src={poster}
          alt="imagem de perfil do parceiro"
          className="w-[100%] h-[100%] rounded-[10px] mb-[10px] hoverSeta"
        />
      )}
      <h4 className="text-[18px] font-bold hoverSeta">{title}</h4>
      <p className="text-[12px] text-(--cor-quartenaria) hoverSeta">{ver}</p>
    </Link>
  );
}