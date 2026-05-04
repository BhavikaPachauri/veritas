import { useState } from "react";

type Item = {
    title: string;
    content: string;
};

const data: Item[] = [
    {
        title: "How can we help you?",
        content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        title: "Legal and law advices.",
        content: "We provide expert legal consultation tailored to your needs.",
    },
    {
        title: "Get compensation for your injuries.",
        content: "Our team helps you claim rightful compensation efficiently.",
    },
    {
        title: "Our mission is Your success.",
        content: "We focus on delivering results that matter for you.",
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