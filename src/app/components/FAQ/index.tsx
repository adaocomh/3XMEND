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
      "A 3xMend oferece suporte completo na criação de cursos online. Isso inclui desde o planejamento do conteúdo, desenvolvimento de roteiros, gravação de aulas, edição de vídeos, até a publicação em plataformas de ensino.",
  },
  {
    question: "Como funciona o social media da 3XMEND?",
    answer:
      "O serviço de social media da 3XMEND é focado em posicionar sua marca de forma estratégica nas redes sociais, com conteúdo relevante, criativo e alinhado aos seus objetivos. A equipe cuida de todo o processo: planejamento de pautas, criação de artes e textos, agendamento de postagens e análise de resultados. O objetivo é aumentar seu engajamento, atrair novos seguidores e transformar sua presença digital em um canal de vendas eficaz.",
  },
  {
    question: "Os sites da 3XMEND acompanham as tendências do mercado?",
    answer:
      "Sim, os sites desenvolvidos pela 3XMEND acompanham as principais tendências do mercado digital. A equipe utiliza design moderno, responsivo (adaptável a celular, tablet e desktop), foco na experiência do usuário (UX/UI) e otimização para mecanismos de busca (SEO). Além disso, os sites são criados com tecnologia atualizada e pensados para oferecer performance, segurança e escalabilidade, garantindo que seu negócio esteja sempre alinhado às melhores práticas do mercado.",
  },
  {
    question: "Quais serviços de Design a 3XMEND desenvolve?",
    answer:
      "A 3XMEND oferece uma variedade de serviços de Design voltados para fortalecer a identidade visual da sua marca e melhorar a comunicação com o público. Entre os principais serviços estão: criação de logotipos, identidade visual completa, artes para redes sociais, materiais gráficos (como cartões, banners e apresentações), além de layouts personalizados para sites e cursos. Tudo é desenvolvido com foco em criatividade, estratégia e alinhamento com os objetivos do cliente.",
  },
  {
    question: "Como a 3XMEND me ajuda na criação de produtos físicos ou digitais?",
    answer:
      "A 3XMEND te ajuda na criação de produtos físicos e digitais oferecendo suporte completo, desde a concepção da ideia até o design e material promocional. Para produtos digitais, como e-books, cursos ou infoprodutos, a equipe cuida do planejamento, identidade visual, diagramação, gravação e edição de conteúdos. Já para produtos físicos, auxilia no desenvolvimento da marca, rótulos, embalagens e comunicação visual. Tudo é pensado estrategicamente para tornar seu produto profissional, atrativo e pronto para o mercado.",
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