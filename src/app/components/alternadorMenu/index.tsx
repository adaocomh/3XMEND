'use client'
import { routing } from "@/i18n/routing";
import { usePathname, useRouter } from "../../../i18n/navigation";

export default function AlternadorIdiomaMenu() {
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
        className="flex items-center h-[16px] p-[8px] border-r border-[var(--background)] text-[16px] font-medium text-center text-(--background) hoverSeta"
      >
        BR
      </button>
      <button
        onClick={() => handleSelectOnChange("en")}
        className="flex items-center h-[16px] p-[8px] border-r border-[var(--background)] text-[16px] font-medium text-center text-(--background) hoverSeta"
      >
        EUA
      </button>
      <button
        onClick={() => handleSelectOnChange("es")}
        className="flex items-center h-[16px] p-[8px] text-[16px] font-medium text-center text-(--background) hoverSeta"
      >
        ES
      </button>
    </div>
  );
}