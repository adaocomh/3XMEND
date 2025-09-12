"use client";
import { useState } from "react";
import Hamburger from "../menuHamburger";
import CustomCursor from "../cursorCustomizado";

export default function CursorMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Hamburger open={open} setOpen={setOpen} />
      <CustomCursor open={open} />
    </>
  );
}