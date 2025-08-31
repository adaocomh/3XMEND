"use client"
import React, { useRef } from 'react'

type VideoCardsProps = {
    src: string;
    poster?: string;
}

export default function VideoCards({ src, poster }: VideoCardsProps){
    const videoRef = useRef<HTMLVideoElement>(null)
    const handleMouseEnter = () => {
        videoRef.current?.play()
    }
    const handleMouseLeave = () => {
        if(videoRef.current){
        videoRef.current.pause()
        videoRef.current.currentTime = 0.1
        }
    }

    return(
        <div className='w-[100%] h-[100%] bg-cover rounded-[10px] mb-[10px] overflow-hidden cursor-pointer' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <video ref={videoRef} className='w-full h-full object-cover' muted loop preload="auto" poster={poster} onLoadedData={() => {
                if(videoRef.current){
                    videoRef.current.currentTime = 0.1
                }
            }}>
            <source src={src} type="video/mp4"/>
            Seu navegador não suporta vídeos HTML5.
            </video>
        </div>
    )
}