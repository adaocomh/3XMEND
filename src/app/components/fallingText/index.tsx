"use client";

import { useEffect, useRef, useState } from "react";

export default function FallingText({ text }: { text: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true);
  const [mounted, setMounted] = useState(false);
  const [isBgLight, setIsBgLight] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 1 }
    );

    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, []);

  useEffect(() => {
    const headerDinamic = document.querySelector<HTMLElement>(".header-page-dinamic");
    const menuW = document.querySelector<HTMLElement>(".menu-w");
    if (!headerDinamic || !menuW) return;
  
    const updateColors = () => {
      const bgColor = window.getComputedStyle(headerDinamic).backgroundColor;
      const rgbValues = bgColor
        .replace(/^rgba?\(|\s+|\)$/g, "")
        .split(",")
        .map(Number);
  
      const pageIsLight =
        rgbValues[0] === 245 &&
        rgbValues[1] === 245 &&
        rgbValues[2] === 245;
  
      setIsBgLight(pageIsLight);
      
      const menuWidth = parseFloat(window.getComputedStyle(menuW).width);
      setMenuOpen(menuWidth > 0.98 * window.innerWidth);
    };
  
    updateColors();
  
    const headerObserver = new MutationObserver(updateColors);
    headerObserver.observe(headerDinamic, { attributes: true, attributeFilter: ["style", "class"] });
  
    const resizeObserver = new ResizeObserver(updateColors);
    resizeObserver.observe(menuW);
  
    window.addEventListener("resize", updateColors);
  
    return () => {
      headerObserver.disconnect();
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateColors);
    };
  }, [visible]);

  return (
    <div ref={containerRef} className="flex">
      {text.split("").map((letter, i, arr) => {

         const colorClass = menuOpen
          ? "text-[#F5F5F5]"
          : isBgLight
          ? "text-[#00BFFF]"
          : "text-[#F5F5F5]";

        return (
          <h3
            key={i}
            className={`
              text-[38px] font-semibold z-50
              ${colorClass} duration-300 ease-in-out hoverSeta
              ${
                visible
                  ? "translate-y-0 opacity-100 transition-transform"
                  : "-translate-y-[100px] opacity-0 transition"
              }
            `}
            style={{
              transitionDelay: mounted
                ? visible
                  ? `${i * 0.1}s`
                  : `${(arr.length - 1 - i) * 0.1}s`
                : "-0.5s",
            }}
          >
            {letter}
          </h3>
        );
      })}
    </div>
  );
}