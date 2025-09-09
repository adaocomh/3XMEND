"use client";

import { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

const faqData: FAQItem[] = [
  {
    question: "Como posso criar um curso online com a 3xMend?",
    answer:
      "Nossa equipe ajuda a estruturar, hospedar e lançar seu curso online, garantindo uma experiência prática e profissional para os alunos.",
  },
  {
    question: "Como funciona o social media da 3XMEND?",
    answer:
      "O serviço de social media da 3XMEND é focado em posicionar sua marca de forma estratégica nas redes sociais, com conteúdo relevante, criativo e alinhado aos seus objetivos. A equipe cuida de todo o processo: planejamento de pautas, criação de artes e textos, agendamento de postagens e análise de resultados. O objetivo é aumentar seu engajamento, atrair novos seguidores e transformar sua presença digital em um canal de vendas eficaz.",
  },
  {
    question: "Os sites da 3XMEND acompanham as tendências do mercado?",
    answer:
      "Sim! Utilizamos tecnologias modernas e boas práticas de UX/UI para garantir que seu site esteja sempre atualizado e competitivo.",
  },
  {
    question: "Quais serviços de Design a 3XMEND desenvolve?",
    answer:
      "Oferecemos identidade visual, design de interfaces, materiais gráficos e soluções criativas personalizadas para sua marca.",
  },
  {
    question: "Como a 3XMEND me ajuda na criação de produtos físicos ou digitais?",
    answer:
      "Apoiamos desde a concepção da ideia até a execução, oferecendo design, tecnologia e estratégias para transformar seu produto em realidade.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
      <div className="flex flex-col bg-[#00BFFF]  w-full max-w-[1200px] text-(--background) gap-[4vw] py-[5vw]">
        <h2 className="text-[75px] font-bold text-center">
          Dúvidas Frequentes
        </h2>
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div key={index} className="border-b border-[var(--background)] pb-4">
              <button
                onClick={() => toggleFAQ(index)}
                className={`w-full flex justify-between items-center text-left text-[22px] font-semibold`}
              >
                {item.question}
                <span className="text-xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ease ${
                  openIndex === index ? "max-h-40 mt-3" : "max-h-0"
                }`}
              >
                <p className="text-[18px]">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
  );
}