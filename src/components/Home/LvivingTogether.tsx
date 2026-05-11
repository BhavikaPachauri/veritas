import React, { useState } from "react";

type Card = {
  title: string;
  subtitle: string;
  description: string;
  image: string;
};

const cards: Card[] = [
  {
    title: "What They Cover",
    subtitle:
      "These legal documents set out how property, finances, and responsibilities are shared while",
    description:
      "you live together, and what happens if the relationship ends. They address home ownership, bill contributions, savings or assets, and debt handling.",
    image: "/img/Living_together_agreement4.png",
  },
  {
    title: "Why You Need One",
    subtitle:
      "While not legally mandatory, a clear agreement reduces misunderstandings and prevents",
    description: "disputes if circumstances change.",
    image: "/img/Living_together_agreement5.png",
  },
  {
    title: "Our Service",
    subtitle:
      "At Family McKenzie, we guide you through the process: explaining your rights, drafting a",
    description:
      "tailored agreement, and ensuring both partners fully understand their responsibilities.",
    image: "/img/Living_together_agreement3.png",
  },
  {
    title: "The Benefits",
    subtitle:
      "A Living Together Agreement provides clarity, security, and peace of mind, allowing you to",
    description: "enjoy your relationship without uncertainty.",
    image: "/img/Living_together_agreement2.png",
  },
  {
    title: "Our Approach",
    subtitle:
      "We combine legal expertise with practical, empathetic advice to help you protect your",
    description: "future while building a life together.",
    image: "/img/Living_together_agreement1.png",
  },
];

const ArrowIcon: React.FC<{ expanded: boolean }> = ({ expanded }) => (
  <svg width="18" height="18" viewBox="0 0 22 22" fill="none" aria-hidden="true">
    {expanded ? (
      <>
        <path
          d="M15.5835 6.41634L6.41683 15.583"
          stroke="#BF9874"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.5835 15.583H6.41683V6.41634"
          stroke="#BF9874"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </>
    ) : (
      <>
        <path
          d="M6.41683 15.583L15.5835 6.41634"
          stroke="#BF9874"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.41683 6.41634H15.5835V15.583"
          stroke="#BF9874"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </>
    )}
  </svg>
);

const CardItem: React.FC<Card> = ({ title, subtitle, description, image }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-[220px] w-full object-cover"
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className="mt-4">
        <p className="archivo text-[17px] text-[#667C99]">{title}</p>

        <h3 className="archivo mt-2 text-[17px] font-medium leading-6">
          {subtitle}

          <div
            className="overflow-hidden"
            style={{
              maxHeight: expanded ? "250px" : "0px",
              opacity: expanded ? 1 : 0,
              transform: expanded ? "translateY(0px)" : "translateY(-8px)",
              transition:
                "max-height 0.45s cubic-bezier(0.4,0,0.2,1), opacity 0.35s ease, transform 0.35s ease",
            }}
          >
            <span className="archivo text-[17px] font-medium leading-6 text-white">
              {description.startsWith(subtitle.replace(/\.$/, ""))
                ? description.slice(subtitle.replace(/\.$/, "").length).trim()
                : description}
            </span>
          </div>
        </h3>

        <button
          type="button"
          onClick={() => setExpanded(!expanded)}
          className="archivo mt-4 flex cursor-pointer items-center gap-2 text-[12px] tracking-[2px] text-[#9F6907] hover:text-[#FFA400]"
          aria-expanded={expanded}
        >
          <span>{expanded ? "LEARN LESS" : "LEARN MORE"}</span>

          <span
            className="hover:text-[#BD8115]"
            style={{
              transition: "transform 0.4s cubic-bezier(0.4,0,0.2,1)",
              display: "flex",
              alignItems: "center",
            }}
          >
            <ArrowIcon expanded={expanded} />
          </span>
        </button>
      </div>
    </div>
  );
};

const AttorneyHero: React.FC = () => {
  return (
    <section className="bg-[#001025] px-4 py-20 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-5 md:gap-6">
          <svg
            className="hidden sm:block sm:w-20 md:w-[107px]"
            viewBox="0 0 107 12"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M105.773 6.77343C106.326 6.77343 106.773 6.32571 106.773 5.77343C106.773 5.22114 106.326 4.77343 105.773 4.77343L105.773 6.77343ZM-6.53267e-05 5.77344L5.77344 11.5469L11.5469 5.77344L5.77344 -6.53267e-05L-6.53267e-05 5.77344ZM105.773 4.77343L5.77344 4.77344L5.77344 6.77344L105.773 6.77343L105.773 4.77343Z"
              fill="#BF9874"
            />
          </svg>

          <h2 className="marcellus text-center text-[24px] whitespace-nowrap sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl">
            LIVING TOGETHER AGREEMENT
          </h2>

          <svg
            className="hidden sm:block sm:w-20 md:w-[107px]"
            viewBox="0 0 107 12"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M1 4.77344C0.447716 4.77344 0 5.22115 0 5.77344C0 6.32572 0.447716 6.77344 1 6.77344V4.77344ZM106.774 5.77344L101 -6.53267e-05L95.2265 5.77344L101 11.5469L106.774 5.77344ZM1 6.77344L101 6.77344V4.77344L1 4.77344V6.77344Z"
              fill="#BF9874"
            />
          </svg>
        </div>

        <p className="archivo mt-3 text-center text-[10px] font-bold uppercase tracking-[3px] text-[#BF9874] sm:text-[14px] md:text-[16px]">
          Build a Secure Future Together
        </p>

        <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, index) => (
            <CardItem key={index} {...card} />
          ))}

          <div className="flex flex-col items-center justify-center px-3 text-center">
            <div className="mb-5 text-xl text-[#BF9874]">
              <img
                src="/img/balance.png"
                alt=""
                aria-hidden="true"
                loading="lazy"
                decoding="async"
              />
            </div>

            <div className="mt-5 mb-5 h-[1px] w-30 bg-[#9F6907]" />

            <h3 className="marcellus text-2xl leading-tight sm:text-3xl lg:text-4xl">
              Make It Official <br /> Make It Secure
            </h3>

            <div className="mt-5 mb-5 h-[1px] w-30 bg-[#9F6907]" />

            <p className="archivo mb-6 max-w-[200px] text-sm text-white">
              At Family McKenzie, we guide you through the process.
            </p>

            <a
              href="/#services"
              className="group relative inline-flex items-center justify-center overflow-hidden px-8 py-2.5 tracking-tighter text-white"
            >
              <span className="absolute h-0 w-0 rounded-full bg-[#9F6907] transition-all duration-500 ease-out group-hover:h-56 group-hover:w-56" />
              <span className="absolute inset-0 h-full w-full bg-[#FFA400] opacity-60" />
              <span className="archivo relative flex items-center justify-center gap-2 text-base text-white">
                <span>FIND OUT MORE</span>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <g clipPath="url(#clip0_216_113)">
                    <path
                      d="M10.195 13.8297L15 8.99974L10.195 4.16974C10.1516 4.11275 10.0965 4.06575 10.0333 4.03192C9.9702 3.9981 9.90053 3.97823 9.82904 3.97367C9.75756 3.96911 9.68593 3.97996 9.61901 4.00549C9.55208 4.03102 9.49142 4.07063 9.44114 4.12164C9.39085 4.17265 9.35211 4.23387 9.32754 4.30115C9.30297 4.36843 9.29315 4.44021 9.29873 4.51162C9.30431 4.58303 9.32517 4.65241 9.35989 4.71505C9.39462 4.7777 9.4424 4.83216 9.5 4.87474L13.095 8.49974H3.53C3.39739 8.49974 3.27022 8.55241 3.17645 8.64618C3.08268 8.73995 3.03 8.86713 3.03 8.99974C3.03 9.13234 3.08268 9.25952 3.17645 9.35329C3.27022 9.44706 3.39739 9.49974 3.53 9.49974H13.095L9.5 13.1247C9.40651 13.2189 9.35425 13.3463 9.35472 13.479C9.35519 13.6117 9.40835 13.7387 9.5025 13.8322C9.59665 13.9257 9.72409 13.978 9.85677 13.9775C9.98945 13.977 10.1165 13.9239 10.21 13.8297H10.195Z"
                      fill="#fff"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_216_113">
                      <rect
                        width="18"
                        height="18"
                        fill="white"
                        transform="matrix(0 1 -1 0 18 0)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AttorneyHero;
