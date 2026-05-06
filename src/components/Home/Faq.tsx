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
        content: "Timelines vary based on case complexity. Uncontested cases can finalize in a few months, while contested divorces may take over a year. We work diligently to resolve your case without unnecessary delays.",
    },
    {
        title: " How are child custody and support determined?",
        content: `Courts prioritize the “best interests of the child,” focusing on stability and emotional ties. Child support is calculated using state guidelines, factoring in both parents’ incomes and the final parenting schedule.`,
    },
    {
        title: "How will our assets and property be divided?",
        content: "We pursue a fair and equitable split of all marital assets. When necessary, we engage financial experts to accurately value and divide real estate, businesses, retirement accounts, and shared debts.",
    },
    {
        title: "What should I bring to my initial consultation?",
        content: "Please bring any existing legal documents, a basic overview of your shared finances, and a list of your primary goals. This allows us to assess your situation and outline the best legal strategy immediately.",
    },
];

export default function Faq() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="w-full bg-[#f5f5f5] py-20 flex justify-center">
            <div className="w-full max-w-3xl text-center px-4">

                {/* Heading */}
                <h1 className="text-2xl sm:text-4xl md:text-5xl marcellus tracking-wide text-[#1c2b39]">
                    IMPORTANT ANSWER
                </h1>

                <p className="text-[10px] archivo tracking-[4px] text-[#c8a27a] mt-3 uppercase">
                    Our past & our future
                </p>

                {/* Divider */}
                <div className="w-full h-[2px] bg-[#d6b08c] mt-10 mb-6" />

                {/* Accordion */}
                <div className="space-y-4">
                    {data.map((item, index) => (
                        <div key={index} className="border-b-2 border-[#d6b08c]">

                            {/* Title */}
                            <button
                                onClick={() => toggle(index)}
                                className="w-full flex justify-between items-center py-4 text-[#1c2b39] text-sm md:text-base"
                            >
                                <span className="font-medium text-center w-full archivo">
                                    {item.title}
                                </span>
                                <span className="ml-2 text-[#c8a27a]">
                                    {openIndex === index ?
                                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M24 20L16 12L8 20" stroke="#BF9874" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>

                                        :
                                        <svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 0.999998L9 9L17 1" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>

                                    }
                                </span>
                            </button>

                            {/* Content */}
                            <div
                                className={`overflow-hidden transition-all duration-300 ${openIndex === index ? "max-h-40 pb-4" : "max-h-0"
                                    }`}
                            >
                                <p className="text-xs archivo md:text-sm text-[#808080] px-6 leading-relaxed">
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