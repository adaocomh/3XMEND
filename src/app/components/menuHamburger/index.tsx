"use client";

import { useState, useEffect } from "react";

export default function Hamburger() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <div className={`fixed right-[35px] flex justify-center items-center w-[50px] h-[50px] rounded-full cursor-pointer transition-all duration-300 ease-in-out z-9 hoverSeta ${scrolled ? "bg-[#00BFFF]" : "bg-transparent"}`} >
      <button
        onClick={() => setOpen(!open)}
        className="relative w-[30px] h-[30px] cursor-pointer transition-all duration-500 ease-in-out hoverSeta"
      >
        <div className="hoverSeta">
          <span
            className={`absolute left-0 block h-[3px] rounded-lg bg-(--background) transition-all duration-300 ease-in-out hoverSeta
              ${open ? "w-[30px] rotate-[135deg]" : "top-[5px] w-[20px] rotate-0"}`}
          />
          <span
            className={`absolute left-0 block h-[3px] w-[30px] rounded-lg bg-(--background) transition-all duration-300 ease-in-out hoverSeta
              ${open ? "opacity-0 -translate-x-5" : "top-[14px] opacity-100 translate-x-0"}`}
          />
          <span
            className={`absolute left-0 block h-[3px] rounded-lg bg-(--background) transition-all duration-300 ease-in-out hoverSeta
              ${open ? "w-[30px] -rotate-[135deg]" : "top-[23px] w-[25px] rotate-0"}`}
          />
        </div>
      </button>
    </div>
  );
}