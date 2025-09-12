"use client";

import { useState, useEffect } from "react";
import FallingTextCarregamento from "../fallingTextCarregamento";

export default function TelaDeCarregamentoIni({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center bg-[var(--cor-secundaria)]
          transition-opacity duration-500
          ${loading ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        <FallingTextCarregamento text="3XMEND" />
      </div>
      <div>
        {children}
      </div>
    </>
  );
}