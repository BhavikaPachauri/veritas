import { useState } from "react";

type Item = {
  title: string;
  content: string;
};

const data: Item[] = [
  {
    title: "How can Family McKenzie help me with my divorce?",
    content:
      "We guide you through the divorce process with strategic legal expertise. Our attorneys protect your rights in asset division, custody, and settlements, always striving for an amicable and efficient resolution.",
  },
  {
    title: "How long does the divorce process typically take?",
    content:
      "Timelines vary based on case complexity. Uncontested cases can finalize in a few months, while contested divorces may take over a year. We work diligently to resolve your case without unnecessary delays.",
  },
  {
    title: "How are child custody and support determined?",
    content:
      "Courts prioritize the best interests of the child, focusing on stability and emotional ties. Child support is calculated using state guidelines, factoring in both parents' incomes and the final parenting schedule.",
  },
  {
    title: "How will our assets and property be divided?",
    content:
      "We pursue a fair and equitable split of all marital assets. When necessary, we engage financial experts to accurately value and divide real estate, businesses, retirement accounts, and shared debts.",
  },
  {
    title: "What should I bring to my initial consultation?",
    content:
      "Please bring any existing legal documents, a basic overview of your shared finances, and a list of your primary goals. This allows us to assess your situation and outline the best legal strategy immediately.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="flex w-full justify-center bg-[#f5f5f5] py-20">
      <div className="w-full max-w-3xl px-4 text-center">
        <h2 className="marcellus text-3xl tracking-wide text-[#1c2b39] sm:text-4xl md:text-5xl lg:text-6xl">
          IMPORTANT ANSWER
        </h2>

        <p
          className="mt-3 mb-10 text-[12px] uppercase tracking-[4px] text-[#BF9874] md:text-[16px] archivo"
          style={{ fontWeight: 500 }}
        >
          Our past &amp; our future
        </p>

        <div>
          {data.map((item, index) => (
            <div key={index} className="border-t-1 border-[#9F6907]">
              <button
                onClick={() => toggle(index)}
                type="button"
                aria-expanded={openIndex === index}
                aria-controls={`faq-panel-${index}`}
                id={`faq-button-${index}`}
                className={`flex w-full items-center justify-between pt-4 text-sm md:text-base ${openIndex === index ? "pb-0" : "pb-5"}`}
              >
                <span
                  className="archivo mb-1 w-full text-start text-base font-medium md:text-center md:text-lg"
                  style={{ fontWeight: 500 }}
                >
                  {item.title}
                </span>
                <span className="ml-2 text-[#c8a27a]">
                  {openIndex === index ? (
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        d="M24 20L16 12L8 20"
                        stroke="#BF9874"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ) : (
                    <svg
                      width="18"
                      height="10"
                      viewBox="0 0 18 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        d="M1 0.999998L9 9L17 1"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </span>
              </button>

              <div
                id={`faq-panel-${index}`}
                role="region"
                aria-labelledby={`faq-button-${index}`}
                className={`overflow-hidden transition-all duration-300 ${openIndex === index ? "max-h-40 pb-3" : "max-h-0"}`}
              >
                <p className="archivo w-90 text-start text-xs leading-relaxed text-[#808080] md:w-172 md:px-1 md:text-center md:text-[14px]">
                  {item.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
