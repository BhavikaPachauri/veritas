import React, { useState } from "react";

type Item = {
  title: string;
  subtitle: string;
  description: string;
};

const leftItems: Item[] = [
  {
    title: "Divorce & Separation",
    subtitle: "2 Lawyers",
    description:
      "Learn about the no-fault divorce process in the UK, timelines, and legal steps. Understand how property, assets, and pensions are divided, and discover strategies for achieving a fair settlement.",
  },
  {
    title: "Financial Settlements",
    subtitle: "2 Lawyers",
    description:
      "Explore how to divide property, savings, debts, and pensions fairly. Understand Consent Orders, clean break agreements, and spousal maintenance, and how to protect your financial future.",
  },
  {
    title: "Domestic Abuse & Protection Orders",
    subtitle: "2 Lawyers",
    description:
      "Know your rights if you or your children are at risk. Learn about Non-Molestation Orders, Occupation Orders, and other legal tools designed to keep you safe.",
  },
];

const rightItems: Item[] = [
  {
    title: "Children Matters Law",
    subtitle: "7 Lawyers",
    description:
      "Get guidance on Child Arrangements Orders, co-parenting, custody, and contact schedules. Learn how the court prioritises your child's best interests and how to create agreements that reduce conflict.",
  },
  {
    title: "Cohabitation & Prenuptial Agreements",
    subtitle: "2 Lawyers",
    description:
      "Discover how Living Together Agreements, Declarations of Trust, and Prenuptial Agreements can protect your property and assets, clarify financial responsibilities, and prevent future disputes.",
  },
  {
    title: "Legal Process & Court Guidance",
    subtitle: "2 Lawyers",
    description:
      "Understand the court procedures, applications, and forms you may need. Learn how Family McKenzie can represent, advise, or support you through mediation and hearings.",
  },
];

// Grey ↘ arrow — shown when item is closed
const DefaultArrow = () => (
  <svg
  width="39"
  height="39"
  viewBox="0 0 39 39"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <defs>
    {/* Circle Border Gradient */}
    <linearGradient
      id="circleGradient"
      x1="0"
      y1="0"
      x2="39"
      y2="39"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset="0%" stopColor="#bababa" />
      <stop offset="25%" stopColor="#bf987416" />
      <stop offset="50%" stopColor="#bababa" />
      <stop offset="100%" stopColor="#bf987415" />
    </linearGradient>
  </defs>

  {/* Circle Border */}
  <rect
    x="0.5"
    y="0.5"
    width="38"
    height="38"
    rx="19"
    fill="white"
    fillOpacity="0.21"
    stroke="url(#circleGradient)"
    strokeWidth="1"
  />

  {/* Arrow */}
  <path
    d="M13.8815 13.3594L24.98 24.4579"
    stroke="#BF9874"
    strokeWidth="1.21075"
    strokeLinecap="round"
    strokeLinejoin="round"
  />

  <path
    d="M13.8815 24.4579L24.98 24.4579L24.98 13.3594"
    stroke="#BF9874"
    strokeWidth="1.21075"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
</svg>
);

// Gold ↗ arrow — shown in expanded body bottom-right
const HoverArrow = () => (
 <svg
  width="39"
  height="39"
  viewBox="0 0 39 39"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <defs>
    <linearGradient
      id="circleStrokeGradient"
      x1="0"
      y1="0"
      x2="39"
      y2="39"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset="0%" stopColor="#bf987402" />
      <stop offset="50%" stopColor="#BF9874" />
      <stop offset="100%" stopColor="#bf987407" />
      {/* <stop offset="100%" stopColor="#BF9874" /> */}
    </linearGradient>
  </defs>

  {/* Circle */}
  <rect
    x="0.5"
    y="0.5"
    width="38"
    height="38"
    rx="19"
    fill="#9F6907"
    fillOpacity="0.56"
    stroke="url(#circleStrokeGradient)"
    strokeWidth="1"
  />

  {/* Arrow */}
  <path
    d="M13.8815 24.458L24.98 13.3595"
    stroke="white"
    strokeWidth="1.21075"
    strokeLinecap="round"
    strokeLinejoin="round"
  />

  <path
    d="M13.8815 13.3595L24.98 13.3595L24.98 24.458"
    stroke="white"
    strokeWidth="1.21075"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
</svg>
);

const ExpertiseItemWrapper: React.FC<Item> = ({ title, subtitle, description }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="border-b border-[#BF9874] cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* ── Header: title + subtitle + default arrow (fades out upward on hover) ── */}
      <div className="flex items-center justify-between gap-4 py-7">
        <div className="flex-1 min-w-0">
          <h3 className="text-white text-sm sm:text-base md:text-lg lg:text-xl font-medium leading-snug">
            {title}
          </h3>
          <p className="text-[#829BBC] text-xs lg:text-md mt-[6px]">{subtitle}</p>
        </div>

        {/* Default arrow: exits upward on hover */}
        <div className="flex-shrink-0 relative w-[39px] h-[39px] ">
          <div
            style={{
              position: "absolute",
              inset: 0,
              opacity: hovered ? 0 : 1,
              transform: hovered ? "translateY(-16px)" : "translateY(0px)",
              transition:
                "opacity 0.5s cubic-bezier(0.4,0,0.2,1), transform 0.5s cubic-bezier(0.4,0,0.2,1)",
            }}
          >
            <DefaultArrow />
          </div>
        </div>
      </div>

      {/* ── Accordion body: smooth height via grid-template-rows ── */}
      <div
        style={{
          display: "grid",
          gridTemplateRows: hovered ? "1fr" : "0fr",
          transition: "grid-template-rows 0.6s cubic-bezier(0.4,0,0.2,1)",
        }}
      >
        <div style={{ minHeight: 0, overflow: "hidden" }}>
          {/* Description on left, gold arrow bottom-right */}
          <div className="flex items-end justify-between gap-4 pb-7">

            {/* Description: slides in from above, fades in */}
            <p
              className="text-gray-400 text-base md:text-lg leading-relaxed flex-1"
              style={{
                opacity: hovered ? 1 : 0,
                transform: hovered ? "translateY(0px)" : "translateY(-16px)",
                transition:
                  "opacity 0.55s cubic-bezier(0.4,0,0.2,1) 0.1s, transform 0.55s cubic-bezier(0.4,0,0.2,1) 0.1s",
              }}
            >
              {description}
            </p>

            {/* Gold arrow: rises from below into bottom-right */}
            <div
              className="relative flex-shrink-0"
              style={{
                opacity: hovered ? 1 : 0,
                transform: hovered ? "translateY(0px)" : "translateY(24px)",
                transition:
                  "opacity 0.55s cubic-bezier(0.4,0,0.2,1) 0.15s, transform 0.55s cubic-bezier(0.4,0,0.2,1) 0.15s",
              }}
            >
               <span
                className="absolute w-0 h-0 transition-all duration-500 ease-out bg-orange-600 rounded-full group-hover:w-56 group-hover:h-56"
              ></span>
              <HoverArrow />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const FieldsOfExpertise: React.FC = () => {
  return (
    <section id="services" className="relative w-full bg-[#001025] archivo py-14 sm:py-16 md:py-20 px-4 sm:px-6 md:px-10 overflow-hidden">
      {/* Background decorative image */}
      <div className="hidden md:block absolute right-0 bottom-0">
        <img
          src="/img/img7.png"
          alt="background"
          className="object-contain w-[400px] md:w-[700px]"
        />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl marcellus sm:text-4xl md:text-6xl font-serif text-white tracking-wide">
            SERVICES
          </h2>
          <p className="mt-4 text-[10px] archivo sm:text-sm  lg:text-base tracking-[0.3em] text-[#c8a96a] uppercase">
            Vision makes us who we are
          </p>
        </div>

        {/* Two-column grid — each item is independent */}
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-16 relative">
          <div>
            {leftItems.map((item, index) => (
              <ExpertiseItemWrapper key={index} {...item} />
            ))}
          </div>
          <div>
            {rightItems.map((item, index) => (
              <ExpertiseItemWrapper key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FieldsOfExpertise;
