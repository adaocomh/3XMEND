"use client";

import { useState, useEffect } from "react";
import FallingTextCarregamento from "../fallingTextCarregamento";

export default function Loader({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center w-screen h-screen bg-[var(--cor-secundaria)]">
        <div className="flex flex-col items-center">
        <FallingTextCarregamento text="3XMEND"/>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}