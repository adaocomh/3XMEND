"use client";

import { useEffect, useRef, useState } from "react";

type CounterProps = {
  target: number;
  duration?: number;
};

export default function Contador({ target, duration = 4000 }: CounterProps) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !hasAnimated) {
          animateCounter();
          setHasAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 1 }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [target, duration, hasAnimated]);

  const animateCounter = () => {
    let start: number | null = null;
    let animationFrame: number;

    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setCount(Math.ceil(progress * target));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(step);
      }
    };

    animationFrame = requestAnimationFrame(step);

    return () => cancelAnimationFrame(animationFrame);
  };

  return <span ref={ref} className="count">{count}</span>;
}