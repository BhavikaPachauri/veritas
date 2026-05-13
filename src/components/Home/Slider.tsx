import React from "react";

interface StatItem {
  value: string;
  label: string;
}

const stats: StatItem[] = [
  { value: "01", label: "Dedicated Legal Team" },
  { value: "02", label: "Client-Focused Approach" },
  { value: "03", label: "Practice Areas" },
  { value: "04", label: "Privacy" },
];

const ArrowDivider = () => (
  <svg
    className="h-16 md:h-24 w-3"
    viewBox="0 0 12 140"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.77344 0C6.77344 -0.552292 6.32572 -1 5.77344 -1C5.22115 -1 4.77344 -0.552292 4.77344 0L6.77344 0ZM5.77344 139.774L11.5469 134L5.77344 128.226L0 134L5.77344 139.774ZM4.77344 0L4.77344 134H6.77344L6.77344 0H4.77344Z"
      fill="#BF9874"
    />
  </svg>
);

const Slider: React.FC = () => {
  return (
    <section className="w-full bg-[#1B314E] py-8 lg:py-0 lg:pb-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="hidden lg:grid grid-cols-4 gap-3 items-center">
          {stats.map((item, index) => (
            <div
              key={index}
              className="flex items-end justify-center gap-2 xl:gap-3"
            >
              <span className="marcellus text-[#BF9874] mb-3 text-2xl lg:text-2xl xl:text-4xl font-semibold">
                {item.value}
              </span>

              <ArrowDivider />

              <span className="archivo text-white text-sm lg:text-base xl:text-lg mb-4 whitespace-nowrap">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* Mobile */}
        <div className="flex flex-col gap-1 lg:hidden">
          {stats.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-4 "
            >
              <div className="flex flex-col items-center justify-center mt-2 ">
                <span className="text-[#BF9874] text-[40px] leading-none marcellus">
                  {item.value}
                </span>

                {index !== stats.length - 1 && (
                  <svg width="30" height="80" className="mt-4"  viewBox="0 0 12 141" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.77344 1C6.77344 0.447708 6.32572 -5.74148e-08 5.77344 0C5.22115 5.74148e-08 4.77344 0.447708 4.77344 1L5.77344 1L6.77344 1ZM5.77344 140.774L11.5469 135L5.77344 129.226L-6.53267e-05 135L5.77344 140.774ZM5.77344 1L4.77344 1L4.77344 135L5.77344 135L6.77344 135L6.77344 1L5.77344 1Z" fill="#BF9874" />
                  </svg>

                )}
              </div>
              <div className="flex-1 mt-1">
                <div className="border border-[#BD8115]/41 bg-[#0C203A]/30 px-3 py-3 text-center">
                  <span className="text-[#FFFFFF] text-[16px] archivo">
                    {item.label}
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Slider;