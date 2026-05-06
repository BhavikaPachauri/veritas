import React from "react";

interface StatItem {
  value: string;
  label: string;
}

const stats: StatItem[] = [
  { value: "01", label: "Dedicated Legal Team" },
  { value: "02", label: "Client-Focused Approach" },
  { value: "03", label: "Practice Areas" },
  { value: "04", label: "Privacy" }
];

const ArrowDivider = () => (
  <svg
    className="h-16 md:h-20 w-3"
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
    <section className="w-full bg-[#1f3554] pb-8 md:pb-10">
      <div className="max-w-7xl mx-auto px-4">
        {/* Desktop */}
        <div className="hidden md:grid grid-cols-4 gap-8 items-center">
          {stats.map((item, index) => (
            <div key={index} className="flex items-center justify-center gap-3">
              <span className="marcellus text-[#BF9874] text-2xl lg:text-4xl font-semibold">
                {item.value}
              </span>

              <ArrowDivider />

              <span className="archivo text-white text-sm lg:text-lg whitespace-nowrap">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* Mobile */}
        <div className="grid grid-cols-4 gap-6 md:hidden">
          {stats.map((item, index) => (
            <div key={index} className="flex flex-col items-center justify-center">
              <span className="text-[#BF9874] text-lg font-semibold marcellus ">
                {item.value}
              </span>
              <div className="">
                <ArrowDivider />
              </div>
              <span className="text-white text-[5px] text-center archivo">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Slider;
