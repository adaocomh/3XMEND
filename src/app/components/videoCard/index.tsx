"use client"
import React, { useRef, useState } from 'react'

type VideoCardsProps = {
    src: string;
}

export default function VideoCards({ src }: VideoCardsProps){
    const videoRef = useRef<HTMLVideoElement>(null)
    const handleMouseEnter = () => {
        videoRef.current?.play()
    }
    const handleMouseLeave = () => {
        videoRef.current?.pause()
        videoRef.current!.currentTime = 0
    }

    return(
        <div className='w-[100%] h-[100%] overflow-hidden rounded-[10px] bg-[url(/videos/social-media.jpeg)] bg-cover cursor-pointer mb-[10px]' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <video ref={videoRef} className='w-full h-full object-cover' muted loop preload="metadata">
            <source src={src} type="video/mp4" />
            Seu navegador não suporta vídeos HTML5.
            </video>
        </div>
    )
}