"use client";

import { useState, useEffect } from "react";
import FallingTextCarregamento from "../fallingTextCarregamento";

export default function Loader({ children }: { children: React.ReactNode }) {
  const [show, setShow] = useState(true);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setVisible(false);
    }, 2000);

    const timer2 = setTimeout(() => {
      setShow(false);
    }, 2600);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  if (!show) {
    return <>{children}</>;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--cor-secundaria)]">
      <div
        className={`flex flex-col items-center transition-opacity duration-600
        ${visible ? "opacity-100" : "opacity-0"}`}
      >
        <FallingTextCarregamento text="3XMEND" />
      </div>
    </div>
  );
}