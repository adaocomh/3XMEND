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
    <div className={`fixed flex transition-all duration-300 ease-in-out z-9 hoverSeta ${open ? "right-[0px] top-[0px] justify-end w-[100vw] h-[100vh] bg-[#00BFFF] p-[60px]" : "right-[35px] w-[50px] h-[50px] justify-center items-center] rounded-full cursor-pointer"} ${scrolled ? "bg-[#00BFFF]" : "bg-transparent"}`}>
      <button
        onClick={() => {
          setOpen(!open)
          if(!open){
            setScrolled(true)
          }
        }}
        className={`relative top-[10px] w-[30px] h-[30px] cursor-pointer transition-all duration-500 ease-in-out hoverSeta`}
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