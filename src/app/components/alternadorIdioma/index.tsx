'use client'
import { routing } from "@/i18n/routing";
import { usePathname, useRouter } from "../../../i18n/navigation";

export default function AlternadorIdioma() {
  const linguagens = routing.locales;
  const pathname = usePathname();
  const router = useRouter();

  function handleSelectOnChange(linguagem: (typeof linguagens)[number]) {
    const query = Object.fromEntries(
      new URLSearchParams(window.location.search)
    );

    router.replace({ pathname, query }, { locale: linguagem });
  }

  return (
    <div className="relative flex">
      <button
        onClick={() => handleSelectOnChange("pt")}
        className="flex items-center text-[16px] text-(--background) h-[16px] text-center font-medium p-[8px] border-r border-[var(--background)] hoverSeta"
      >
        BR
      </button>
      <button
        onClick={() => handleSelectOnChange("en")}
        className="flex items-center text-[16px] text-(--background) h-[16px] text-center font-medium p-[8px] border-r border-[var(--background)] hoverSeta"
      >
        EUA
      </button>
      <button
        onClick={() => handleSelectOnChange("es")}
        className="flex items-center text-[16px] text-(--background) h-[16px] text-center font-medium p-[8px] hoverSeta"
      >
        ES
      </button>
    </div>
  );
}