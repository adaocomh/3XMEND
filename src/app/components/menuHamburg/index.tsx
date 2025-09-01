"use client";

import { useState } from "react";

export default function Hamburger() {
  const [open, setOpen] = useState(false);

  return (
    <button
      onClick={() => setOpen(!open)}
      className="relative m-[40px] mr-[0px] w-15 h-7 cursor-pointer transition-all duration-500 ease-in-out"
    >
      <span
        className={`absolute left-0 block h-[3px] rounded-lg bg-(--background) transition-all duration-300 ease-in-out
          ${open ? "top-2 w-[30px] rotate-[135deg]" : "top-0 w-[20px] rotate-0"}`}
      />
      <span
        className={`absolute left-0 block h-[3px] w-[30px] rounded-lg bg-(--background) transition-all duration-300 ease-in-out
          ${open ? "top-2 opacity-0 -translate-x-5" : "top-2 opacity-100 translate-x-0"}`}
      />
      <span
        className={`absolute left-0 block h-[3px] rounded-lg bg-(--background) transition-all duration-300 ease-in-out
          ${open ? "top-2 w-[30px] -rotate-[135deg]" : "top-4 w-[25px] rotate-0"}`}
      />
    </button>
  );
}