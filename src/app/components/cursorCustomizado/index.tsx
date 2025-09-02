"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const cursor = cursorRef.current;
    const arrow = arrowRef.current;
    if (!cursor || !arrow) return;
    arrow.style.display ="none";

    const moveCursor = (e: MouseEvent) => {
      cursor.style.left = e.clientX - 10 + "px";
      cursor.style.top = e.clientY - 10 + "px";
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      if (target.classList.contains("hoverSeta"))  {
        cursor.style.width = "70px";
        cursor.style.height = "70px";
        cursor.style.boxShadow = "0px 0px 10px rgba(0,0,0,0.3)";
        arrow.style.display ="block";
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.classList.contains("hoverSeta")) {
        cursor.style.width = "20px";
        cursor.style.height = "20px";
        cursor.style.boxShadow = "none";
        arrow.style.display ="none";
      }
    };

    document.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="flex justify-center items-center fixed w-5 h-5 rounded-full bg-[#00BFFF] pointer-events-none z-50 transition-transform duration-300"
    ><Image ref={arrowRef} src="/icons/right-arrow.png" alt="seta para direita" width={30} height={30} loading="lazy"/></div>
  );
}