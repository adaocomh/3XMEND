"use client";

import { useState, useEffect } from "react";
import FallingText from "../fallingText";
import Link from "next/link";
import AlternadorIdiomaMenu from "../alternadorMenu";
import LinksContatoMenu from "../linksContatosMenu/inde";

export default function Hamburger({ open, setOpen }: { open: boolean; setOpen: (value: boolean) => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [isBgLight, setIsBgLight] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  useEffect(() => {
    const header = document.querySelector<HTMLElement>(".div-menu");
    const fundoPage = document.querySelector<HTMLElement>(".header-page-dinamic");
    const listras = document.querySelectorAll<HTMLElement>(".listras");
    if (!header || !fundoPage) return;
  
    const updateListras = () => {
      const bgColor = window.getComputedStyle(header).backgroundColor;
      const rgbValues = bgColor
        .replace(/^rgba?\(|\s+|\)$/g, "")
        .split(",")
        .map(Number);
      const isTransparent = rgbValues[3] === 0 || bgColor === "transparent";
  
      const bgPColor = window.getComputedStyle(fundoPage).backgroundColor;
      const rgbFValues = bgPColor
        .replace(/^rgba?\(|\s+|\)$/g, "")
        .split(",")
        .map(Number);
      const isPageLight = rgbFValues[0] === 245 && rgbFValues[1] === 245 && rgbFValues[2] === 245;
  
      const corListras = open ? "#F5F5F5" : (isTransparent && isPageLight ? "#262626" : "#F5F5F5");
      setIsBgLight(!open && isTransparent && isPageLight);
  
      listras.forEach(listra => {
        listra.style.backgroundColor = corListras;
      });
    };
  
    updateListras();
  
    const observer = new MutationObserver(updateListras);
    observer.observe(header, { attributes: true, attributeFilter: ["style", "class"] });
    observer.observe(fundoPage, { attributes: true, attributeFilter: ["style", "class"] });
  
    window.addEventListener("scroll", updateListras);
  
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", updateListras);
    };
  }, [open, scrolled]);



  return (
    <div className={`fixed right-[40px] w-[50px] h-[50px] justify-center items-center rounded-full cursor-pointer flex transition-all duration-300 ease-in-out hoverSeta ${scrolled ? "bg-[#00BFFF]" : "bg-transparent"} div-menu`}>
      <div className={`absolute flex justify-center items-center w-0 h-0 bg-[#00BFFF] transition-all duration-600 ease-in-out rounded-[100%] ${open ? "right-[-40px] top-[-45px] w-[100vw] h-[100vh] rounded-none" : ""} menu-w`}>
        <div className={`${open ? "flex flex-col justify-start w-[1000px] gap-[40px]" : "hidden"}`}>
          <div className={`${open && scrolled? "absolute top-[40px] left-[40px]" : "hidden"}`}>
            <FallingText text="3XMEND"/>
          </div>
          <Link href="/#servicos">
          <h3 className="slideMenu1 text-[60px] text-(--background) font-black hoverSeta max-w-min" onClick={() => {
                const timer = setTimeout(() => setOpen(false), 200);
                return () => clearTimeout(timer);}}>Serviços</h3></Link>
          <Link href="/sobre"><h3 className="slideMenu2 text-[60px] text-(--background) font-black hoverSeta max-w-min">Sobre</h3></Link>
          <div className="slideMenu3 flex">
              <AlternadorIdiomaMenu/>
          </div>
          <LinksContatoMenu/>
        </div>
      </div>
      <button
        onClick={() => setOpen(!open)}
        className="relative w-[30px] h-[30px] transition-all duration-500 ease-in-out hoverSeta"
      >
        <div className="hoverSeta">
          <span
            className={`absolute left-0 block h-[3px] rounded-lg bg-(--background) transition-all duration-300 ease-in-out hoverSeta
              ${open ? "w-[30px] rotate-[135deg]" : "top-[5px] w-[20px] rotate-0"} listras`}
          />
          <span
            className={`absolute left-0 block h-[3px] w-[30px] rounded-lg bg-(--background) transition-all duration-300 ease-in-out hoverSeta
              ${open ? "opacity-0 -translate-x-5" : "top-[14px] opacity-100 translate-x-0"} listras`}
          />
          <span
            className={`absolute left-0 block h-[3px] rounded-lg bg-(--background) transition-all duration-300 ease-in-out hoverSeta
              ${open ? "w-[30px] -rotate-[135deg]" : "top-[23px] w-[25px] rotate-0"} listras`}
          />
        </div>
      </button>
    </div>
  );
}