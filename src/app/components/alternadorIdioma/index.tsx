'use client'
import { routing } from "@/i18n/routing";
import { usePathname, useRouter } from "../../../i18n/navigation";
import { useEffect } from "react";

export default function AlternadorIdioma() {
  const linguagens = routing.locales;
  const pathname = usePathname();
  const router = useRouter();

  function handleSelectOnChange(linguagem: (typeof linguagens)[number]) {
    const query = Object.fromEntries(
      new URLSearchParams(window.location.search)
    );

    router.replace({ pathname, query }, { locale: linguagem });
  }

  useEffect(()=>{

    const alternador = document.querySelectorAll<HTMLElement>(".alternador");
    const fundoPage = document.querySelector<HTMLElement>(".header-page-dinamic");
    if (!fundoPage) return;

    const bgPColor = window.getComputedStyle(fundoPage).backgroundColor;
    const rgbFValues = bgPColor
        .replace(/^rgba?\(|\s+|\)$/g, "")
        .split(",")
        .map(Number);
    const isPageLight = rgbFValues[0] === 245 && rgbFValues[1] === 245 && rgbFValues[2] === 245;
    const corListras = isPageLight ? "#262626" : "#F5F5F5";

    alternador.forEach(linguagem => {
      linguagem.style.color = corListras;
      linguagem.style.borderColor = corListras;
      
    });

  })

  return (
    <div className="relative flex px-[5px]">
      <button
        onClick={() => handleSelectOnChange("pt")}
        className="flex items-center text-[16px] text-(--background) h-[16px] text-center font-medium p-[8px] px-[15px] border-r border-[var(--background)] hoverSeta alternador"
      >
        BR
      </button>
      <button
        onClick={() => handleSelectOnChange("en")}
        className="flex items-center text-[16px] text-(--background) h-[16px] text-center font-medium p-[8px] px-[15px] border-r border-[var(--background)] hoverSeta alternador"
      >
        EUA
      </button>
      <button
        onClick={() => handleSelectOnChange("es")}
        className="flex items-center text-[16px] text-(--background) h-[16px] text-center font-medium p-[8px] px-[15px] hoverSeta alternador"
      >
        ES
      </button>
    </div>
  );
}