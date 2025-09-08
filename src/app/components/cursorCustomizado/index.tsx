"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function CustomCursor({ open }: { open: boolean }) {
  const cursorRef = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<HTMLImageElement>(null)
  const pathname = usePathname();

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
        cursor.style.boxShadow = "0px 0px 10px #00BFFF20";
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

  useEffect(()=>{
    const cursor = cursorRef.current;
    if (!cursor) return;
    if(open){
      cursor.classList.add("menu-aberto")
    }else{
      cursor.classList.remove("menu-aberto")
    }
  })

  useEffect(() => {
    const cursor = cursorRef.current;
    const arrow = arrowRef.current;
    if (!cursor || !arrow) return;
    
    cursor.classList.remove("menu-aberto");
    cursor.style.width = "20px";
    cursor.style.height = "20px";
    cursor.style.boxShadow = "none";

    arrow.style.display = "none";
    arrow.style.width = "0px";
    arrow.style.height = "0px";
  }, [pathname]);
  return (
    <div
      ref={cursorRef}
      className={`fixed flex justify-center w-[20px] h-[20px] items-center rounded-full bg-[#00BFFF] pointer-events-none z-9999 transition-[width,height,background-color] duration-150`}
    ><img
    className="hidden transition-[width,height] duration-150" ref={arrowRef} src={open ? "/icons/right-blue.png" : "/icons/right-arrow.png"} alt="seta para direita"
  /></div>
  );
}