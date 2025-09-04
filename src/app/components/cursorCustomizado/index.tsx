"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor({ open }: { open: boolean }) {
  const cursorRef = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const cursor = cursorRef.current;
    const arrow = arrowRef.current;
    if (!cursor || !arrow) return;

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
        arrow.style.width = "30px";
        arrow.style.height = "30px";
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.classList.contains("hoverSeta")) {
        cursor.style.width = "20px";
        cursor.style.height = "20px";
        cursor.style.boxShadow = "none";
        arrow.style.width = "0px";
        arrow.style.height = "0px";
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

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    if (open) {
      cursor.style.backgroundColor = "#F5F5F5";
    } else {
      cursor.style.backgroundColor = "#00BFFF";
    }
  }, [open]);

  return (
    <div
      ref={cursorRef}
      className="fixed flex justify-center items-center w-5 h-5 rounded-full bg-[#00BFFF] pointer-events-none z-9999 transition-[width,height] duration-150"
    ><img className="hidden transition-[width,height] duration-150" ref={arrowRef} src={`${open ? "/icons/right-blue.png" : "/icons/right-arrow.png"}`} alt="seta para direita"/></div>
  );
}