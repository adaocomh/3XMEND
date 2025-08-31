"use client";


import { useEffect, useRef, useState } from "react";

export default function FallingText({ text }: { text: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true);
  const [mounted, setMounted] = useState(false); // para diferenciar primeira renderização

  useEffect(() => {
    setMounted(true); // já montou, podemos aplicar transições
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 1 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, []);

  return (
  <h3 ref={containerRef} className="flex text-[48px] text-[#F5F5F5] font-extrabold p-[30px] m-[10px] pb-0 mb-0">
        {text.split("").map((letter, i, arr) => (
          <span
            key={i}
            className={`
              inline-block
              transition-all
              duration-300
              ease-in-out
              ${visible ? "translate-y-0 opacity-100" : "-translate-y-[100px] opacity-0"}
            `}
            style={{
              transitionDelay: mounted ? (visible ? `${i * 0.1}s` : `${(arr.length - 1 - i) * 0.1}s`) : "0s",
            }}
          >
            {letter}
          </span>
        ))}
    </h3>
  );
}