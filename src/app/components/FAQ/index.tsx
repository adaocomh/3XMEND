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
      <div className="flex flex-col bg-[#00BFFF]  w-[95%] md:max-w-[1200px] text-(--background) gap-[4vw] py-[10vw] md:py-[5vw] faqCursor">
        <h2 className="text-[50px] md:text-[75px] font-bold text-center faqCursor">
          {t('titleFaq')}
        </h2>
        <div className="space-y-4 faqCursor">
          {faq.map((item, index) => (
            <div key={index} className="border-b border-[var(--background)] pb-4 faqCursor">
              <button
                onClick={() => toggleFAQ(index)}
                className={`w-full flex justify-between items-center text-left text-[22px] font-semibold hoverSeta faqCursor`}
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