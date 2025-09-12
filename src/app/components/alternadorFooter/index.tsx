'use client'
import { routing } from "@/i18n/routing";
import { usePathname, useRouter } from "../../../i18n/navigation";

export default function AlternadorIdiomaFooter() {
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
    <div className="flex w-[350px]">
      <button
        onClick={() => handleSelectOnChange("pt")}
        className="flex items-center text-[16px] text-(--background) h-[16px] text-center font-light p-[8px] border-r-[1px] border-[var(--background)] hoverSeta"
      >
        Português
      </button>
      <button
        onClick={() => handleSelectOnChange("en")}
        className="flex items-center text-[16px] text-(--background) h-[16px] text-center font-light p-[8px] border-r-[1px] border-[var(--background)] hoverSeta"
      >
        English
      </button>
      <button
        onClick={() => handleSelectOnChange("es")}
        className="flex items-center text-[16px] text-(--background) h-[16px] text-center font-light p-[8px] hoverSeta"
      >
        Español
      </button>
    </div>
  );
}