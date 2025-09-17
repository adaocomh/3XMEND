"use client";

import { useEffect, useState } from "react";

export default function FallingTextCarregamento({ text }: { text: string }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setVisible(true), 50);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="flex p-[30px] m-[5px] ml-[10px] pb-0 mb-0">
      {text.split("").map((letter, i) => (
        <h3
          key={i}
          className={`text-[80px] text-(--cor-terciaria) opacity-0 font-black transition-all ease-in-out md:text-[100px] ${
            visible ? "translate-y-0 opacity-100  duration-1200" : "translate-y-[-200px]"
          }`}
          style={{
            transitionDelay: visible ? `${i * 0.1}s` : "0s",
          }}
        >
          {letter}
        </h3>
      ))}
    </div>
  );
}