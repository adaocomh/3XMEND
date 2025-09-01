"use client";


import { useEffect, useRef, useState } from "react";

export default function FallingText({ text }: { text: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true);
  const [mounted, setMounted] = useState(false);

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

  return (
  <div ref={containerRef} className="flex p-[30px] m-[5px] ml-[10px] pb-0 mb-0">
        {text.split("").map((letter, i, arr) => (
          <h3 key={i}
            className={`text-[38px] text-[#F5F5F5] font-medium transition-all duration-300 ease-in-out ${visible ? "translate-y-0 opacity-100" : "-translate-y-[100px] opacity-0"}`}
            style={{
              transitionDelay: mounted ? (visible ? `${i * 0.1}s` : `${(arr.length - 1 - i) * 0.1}s`) : "-0.5s",
            }}
          >
            {letter}
          </h3>
        ))}
    </div>
  );
}