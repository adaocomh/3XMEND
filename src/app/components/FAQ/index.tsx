"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

type FAQItem = {
  questao: string;
  resposta: string;
};


export default function FAQ() {
  const t = useTranslations('sobre')

const faq: FAQItem[] =  t.raw("faq") || [];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
      <div className="flex flex-col gap-[4vw] w-[95%] py-[10vw] bg-[var(--cor-terciaria)] text-(--background) md:max-w-[1200px] md:py-[5vw] faqCursor">
        <h2 className="text-[35px] font-bold text-center md:text-[75px] faqCursor">
          {t('titleFaq')}
        </h2>
        <div className="space-y-4 faqCursor">
          {faq.map((item, index) => (
            <div key={index} className="pb-4 border-b border-[var(--background)] faqCursor">
              <button
                onClick={() => toggleFAQ(index)}
                className={`flex justify-between items-center w-full text-[22px] font-semibold text-left hoverSeta faqCursor`}
              >
                {item.questao}
                <span className="text-xl faqCursor">
                  {openIndex === index ? "-" : "+"}
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ease faqCursor ${
                  openIndex === index ? "max-h-40 mt-3" : "max-h-0"
                }`}
              >
                <p className="text-[18px] faqCursor">
                  {item.resposta}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
  );
}