"use client";

import { useState, useEffect } from "react";
import FallingText from "../fallingText";
import Link from "next/link";
import AlternadorIdiomaMenu from "../alternadorMenu";
import LinksContatosMenu from "../linksContatosMenu/inde";
import { useTranslations } from "next-intl";

export default function MenuHamburger({ open, setOpen }: { open: boolean; setOpen: (value: boolean) => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [isBgLight, setIsBgLight] = useState(false);
  const t = useTranslations('menu')

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
  
      let corListras;
      if (window.scrollY === 0 && !open) {
        corListras = "#262626";
      } else {
        corListras = open
          ? "#F5F5F5"
          : isTransparent && isPageLight
          ? "#262626"
          : "#F5F5F5";
      }

      setIsBgLight(!open && isTransparent && isPageLight);

      listras.forEach((listra) => {
        listra.style.backgroundColor = corListras;
      });
    };
  
    updateListras();
  
    const observer = new MutationObserver(updateListras);
    observer.observe(header, { attributes: true, attributeFilter: ["style", "class"] });
    observer.observe(fundoPage, { attributes: true, attributeFilter: ["style", "class"] });
  
    window.addEventListener("scroll", updateListras);
    window.addEventListener("resize", updateListras);
    window.addEventListener("load", updateListras);
  
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", updateListras);
      window.removeEventListener("resize", updateListras);
      window.removeEventListener("load", updateListras);
    };
  }, [open, scrolled]);



  return (
    <div className={`fixed right-[20px] flex justify-center items-center w-[50px] h-[50px] rounded-full cursor-pointer transition-all duration-150 ease-in-out hoverSeta z-40 md:right-[40px] ${scrolled ? "bg-[var(--cor-terciaria)]" : "bg-transparent"} div-menu`}>
      <div className={`absolute flex justify-center items-center w-0 h-0 bg-[var(--cor-terciaria)] transition-all duration-600 ease-in-out rounded-[100%] ${open ? "right-[-20px] top-[-45px] w-[100vw] h-[100vh] rounded-none md:right-[-40px]" : ""} menu-w`}>
        <div className={`${open ? "flex flex-col justify-start gap-[40px] w-[80%] md:w-[1000px]" : "hidden"}`}>
          <div className={`${open && scrolled? "absolute top-[40px] left-[40px]" : "hidden"}`}>
            <Link href="/"><FallingText text="3XMEND"/></Link>
          </div>
          <Link href="/#servicos">
          <h3 className="max-w-min text-[60px] font-black text-(--background) hoverSeta slideMenu1" onClick={() => {
                const timer = setTimeout(() => setOpen(false), 200);
                return () => clearTimeout(timer);}}>{t('servicos')}</h3></Link>
          <Link href="/sobre"><h3 className="max-w-min text-[60px] font-black text-(--background) hoverSeta slideMenu2">{t('sobreTitle')}</h3></Link>
          <div className="flex slideMenu3">
              <AlternadorIdiomaMenu/>
          </div>
          <LinksContatosMenu/>
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