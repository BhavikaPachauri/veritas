import React, { useEffect, useState } from "react";

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

const DefaultArrow = () => (
  <svg
    width="39"
    height="39"
    viewBox="0 0 39 39"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <defs>
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

const HoverArrow = () => (
  <svg
    width="39"
    height="39"
    viewBox="0 0 39 39"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
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
      </linearGradient>
    </defs>

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

const ExpertiseItemWrapper: React.FC<Item> = ({
  title,
  subtitle,
  description,
}) => {
  const [active, setActive] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <div
      className="border-b border-[#BF9874]"
      onMouseEnter={() => {
        if (!isMobile) {
          setActive(true);
        }
      }}
      onMouseLeave={() => {
        if (!isMobile) {
          setActive(false);
        }
      }}
    >
      <button
        type="button"
        className="flex w-full items-center justify-between gap-4 py-7 text-left"
        aria-expanded={active}
        onClick={() => setActive((prev) => !prev)}
        onFocus={() => {
          if (!isMobile) {
            setActive(true);
          }
        }}
        onBlur={() => {
          if (!isMobile) {
            setActive(false);
          }
        }}
      >
        <div className="min-w-0 flex-1">
          <h3 className="text-sm font-medium leading-snug text-white sm:text-base md:text-lg lg:text-xl">
            {title}
          </h3>

          <p className="mt-[6px] text-xs text-[#829BBC] lg:text-md">
            {subtitle}
          </p>
        </div>

        <div className="relative h-[39px] w-[39px] flex-shrink-0">
          <div
            style={{
              position: "absolute",
              inset: 0,
              opacity: active ? 0 : 1,
              transform: active ? "translateY(-16px)" : "translateY(0px)",
              transition:
                "opacity 0.5s cubic-bezier(0.4,0,0.2,1), transform 0.5s cubic-bezier(0.4,0,0.2,1)",
            }}
          >
            <DefaultArrow />
          </div>
        </div>
      </button>

      <div
        style={{
          display: "grid",
          gridTemplateRows: active ? "1fr" : "0fr",
          transition: "grid-template-rows 0.6s cubic-bezier(0.4,0,0.2,1)",
        }}
      >
        <div style={{ minHeight: 0, overflow: "hidden" }}>
          <div className="flex items-end justify-between gap-4 pb-7">
            <p
              className="flex-1 text-base leading-relaxed text-gray-400 md:text-lg"
              style={{
                opacity: active ? 1 : 0,
                transform: active ? "translateY(0px)" : "translateY(-16px)",
                transition:
                  "opacity 0.55s cubic-bezier(0.4,0,0.2,1) 0.1s, transform 0.55s cubic-bezier(0.4,0,0.2,1) 0.1s",
              }}
            >
              {description}
            </p>

            <div
              className="relative flex-shrink-0"
              style={{
                opacity: active ? 1 : 0,
                transform: active ? "translateY(0px)" : "translateY(24px)",
                transition:
                  "opacity 0.55s cubic-bezier(0.4,0,0.2,1) 0.15s, transform 0.55s cubic-bezier(0.4,0,0.2,1) 0.15s",
              }}
            >
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
    <section
      id="services"
      className="relative w-full overflow-hidden bg-[#001025] px-4 py-14 sm:px-6 sm:py-16 md:px-10 md:py-20 archivo"
    >
      <div className="absolute bottom-0 right-0 hidden md:block">
        <img
          src="/img/img7.png"
          alt=""
          aria-hidden="true"
          className="w-[400px] object-contain md:w-[700px]"
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-12 text-center md:mb-16">
          <h2 className="marcellus text-3xl tracking-wide text-white sm:text-4xl md:text-6xl">
            SERVICES
          </h2>

          <p className="mt-4 text-[10px] uppercase tracking-[0.3em] text-[#c8a96a] sm:text-sm lg:text-base archivo">
            Vision makes us who we are
          </p>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-2 md:gap-16">
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
