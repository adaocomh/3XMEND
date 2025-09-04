"use client";
import React from "react";

type VideoItem = {
  src: string;
  poster: string;
  title: string;
  desc: string;
};

export default function CardsVideos() {
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
  const videosLeft: VideoItem[] = [
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
  ];

  const videosRight: VideoItem[] = [
    {
      src: "/videos/ti-automacao.mp4",
      poster: "/poster/ti-automacao.jpeg",
      title: "T.I.",
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
    <div className="flex flex-col items-center w-[100%]">
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
    <div className="flex justify-between w-[100%]">
      <div className="flex flex-col gap-[8vw] w-[40%]">
        {videosLeft.map((video, index) => (
          <VideoCard key={index} {...video} />
        ))}
      </div>

      <div className="flex flex-col gap-[8vw] mt-[13vw] w-[40%]">
        {videosRight.map((video, index) => (
          <VideoCard key={index} {...video} />
        ))}
      </div>
    </div>
  );
}