"use client";

import { useEffect, useRef, useState } from "react";

export default function FallingText({ text, open }: { text: string; open: boolean }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true);
  const [mounted, setMounted] = useState(false);
  const [isBgLight, setIsBgLight] = useState(false);

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
    const header = document.querySelector<HTMLElement>(".header-page-dinamic");
    if (!header) return;

    const bgColor = window.getComputedStyle(header).backgroundColor;
    const rgbValues = bgColor
      .replace(/^rgba?\(|\s+|\)$/g, "")
      .split(",")
      .map(Number);

    setIsBgLight(rgbValues[0] === 245 && rgbValues[1] === 245 && rgbValues[2] === 245);
  }, [visible]);

  return (
    <div ref={containerRef} className="flex z-999">
      {text.split("").map((letter, i, arr) => (
        <h3
          key={i}
          className={`
            text-[38px] font-semibold
            ${isBgLight ? "text-[#00BFFF]" : open ? "text-[#F5F5F5]" : "text-[#00BFFF]"} duration-300 ease-in-out hoverSeta
            ${visible ? "translate-y-0 opacity-100 transition-transform" : "-translate-y-[100px] opacity-0 transition"}
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
      ))}
    </div>
  );
}