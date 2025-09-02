"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

type LineProps = {
  children: ReactNode;
  className?: string;
};

export default function Line({ children, className = "" }: LineProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`${visible ? "linha-crescente " : "w-[0%]"} ${className}`}
    >
      {children}
    </div>
  );
}
