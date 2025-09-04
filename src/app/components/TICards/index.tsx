"use client";
import React from "react";

type VideoItem = {
  src: string;
  poster: string;
  title: string;
  desc: string;
};

export default function CardsTI() {
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

  // Lista de vídeos
  const videoscards: VideoItem[] = [
    {
      src: "/videos/site.mp4",
      poster: "/poster/site.jpeg",
      title: "Sites e e-commerce",
      desc: "Ver mais...",
    },
    {
      src: "/videos/banco-dados.mp4",
      poster: "/poster/banco-dados.jpeg",
      title: "Banco de dados",
      desc: "Ver mais...",
    },
    {
      src: "/videos/cripto.mp4",
      poster: "/poster/cripto.jpeg",
      title: "Cripto",
      desc: "Ver mais...",
    },
    {
      src: "/videos/ti-automacao.mp4",
      poster: "/poster/ti-automacao.jpeg",
      title: "Automação",
      desc: "Ver mais...",
    }
  ];

  const outrosServicos: VideoItem[] = [
    {
        src: "/videos/social-media.mp4",
        poster: "/poster/social-media.jpeg",
        title: "Social media",
        desc: "Ver mais...",
      },
    {
      src: "/videos/criacao-video.mp4",
      poster: "/poster/criacao-video.jpeg",
      title: "Produtora de video",
      desc: "Ver mais...",
    },
    {
      src: "/videos/parceiros.mp4",
      poster: "/poster/parceiros.jpeg",
      title: "Parceiros",
      desc: "Ver mais...",
    },
  ];

  // Componente para renderizar cada card
  const VideoCard = ({ src, poster, title, desc }: VideoItem) => (
    <div className="flex flex-col items-center w-[30%]">
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
      <p className="text-[12px] text-[#7e7e7e] hoverSeta">{desc}</p>
    </div>
  );

  return (
      <div className="flex flex-col w-[100%] gap-[60px]">
      <div className="flex flex-wrap gap-x-[5%] gap-y-[60px] w-[100%]">
        {videoscards.map((video, index) => (
          <VideoCard key={index} {...video} />
        ))}
      </div>
      <h2 className="text-[30px] text-center font-extrabold">Outros serviços.</h2>
      <div className="flex flex-wrap gap-x-[5%] gap-y-[60px] w-[100%]">
        {outrosServicos.map((video, index) => (
          <VideoCard key={index} {...video} />
        ))}
      </div>
      </div>
  );
}