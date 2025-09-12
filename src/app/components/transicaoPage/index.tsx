"use client";

import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";

export default function TransicaoPage({ children }: { children: React.ReactNode }) {
  const [show, setShow] = useState(false);
  const [animate, setAnimate] = useState(false);
  const pathname = usePathname();
  const prevPathname = useRef(pathname);

  useEffect(() => {
    if (prevPathname.current === pathname) {
      prevPathname.current = pathname;
      return;
    }

    setShow(true);
    setAnimate(true);

    const timer1 = setTimeout(() => setAnimate(false), 450);
    const timer2 = setTimeout(() => setShow(false), 600);

    prevPathname.current = pathname;

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [pathname]);

  return (
    <>
      {show && (
        <div
          className={`fixed inset-0 z-40 bg-[#00BFFF] transform transition-all duration-500 ease-in-out
          ${animate ? "translate-y-0 opacity-100" : "-translate-y-full opacity-50"}`}
        />
      )}
      {children}
    </>
  );
}