import React, { useState } from "react";
import { Link } from "react-scroll";




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
      "you live together, and what happens if the relationship ends. They address home ownership, bill contributions, savings or assets, and debt handling. ",
    image: "/img/Living_together_agreement4.png",
  },
  {
    title: "Why You Need One",
    subtitle:
      "While not legally mandatory, a clear agreement reduces misunderstandings and prevents",
    description:
      "disputes if circumstances change.",
    image: "/img/Living_together_agreement5.png",
  },
  {
    title: "Our Service",
    subtitle:
      "At Family McKenzie, we guide you through the process: explaining your rights, drafting a ",
    description:
      "tailored agreement, and ensuring both partners fully understand their responsibilities.",
    image: "/img/Living_together_agreement3.png",
  },
  {
    title: "The Benefits",
    subtitle:
      "A Living Together Agreement provides clarity, security, and peace of mind—allowing you to ",
    description:
      "enjoy your relationship without uncertainty.",
    image: "/img/Living_together_agreement2.png",
  },
  {
    title: "Our Approach",
    subtitle:
      "We combine legal expertise with practical, empathetic advice to help you protect your ",
    description:
      "future while building a life together.",
    image: "/img/Living_together_agreement1.png",
  },
];

const ArrowIcon: React.FC<{ expanded: boolean }> = ({ expanded }) => (
  <svg width="18" height="18" viewBox="0 0 22 22" fill="none">
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

const CardItem: React.FC<Card> = ({
  title,
  subtitle,
  description,
  image,
}) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      {/* Image */}
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-[220px] object-cover"
        />
      </div>

      {/* Content */}
      <div className="mt-4">
        {/* Title */}
        <p className="text-[17px] text-[#667C99] archivo">{title}</p>

        {/* Subtitle */}
        <h3 className="mt-2 text-[17px] leading-6 font-medium archivo">
          {subtitle}

          {/* Expand Description */}
          <div
            className="overflow-hidden"
            style={{
              maxHeight: expanded ? "250px" : "0px",
              opacity: expanded ? 1 : 0,
              transform: expanded
                ? "translateY(0px)"
                : "translateY(-8px)",
              transition:
                "max-height 0.45s cubic-bezier(0.4,0,0.2,1), opacity 0.35s ease, transform 0.35s ease",
            }}
          >
            <span className=" text-[17px] leading-6 font-medium archivo text-white">
              {description.startsWith(subtitle.replace(/\.$/, ""))
                ? description
                  .slice(subtitle.replace(/\.$/, "").length)
                  .trim()
                : description}
            </span>
          </div>
        </h3>

        {/* Toggle */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-2 mt-4 text-[12px] tracking-[2px] text-[#9F6907] hover:text-[#FFA400] archivo cursor-pointer"
        >
          <span>{expanded ? "LEARN LESS" : "LEARN MORE"}</span>

          <span className="hover:text-[#FFA400]"
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
    <section className="bg-[#001025] text-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="flex items-center justify-center gap-3 sm:gap-5 md:gap-6 flex-wrap">
          {/* Left line */}
          <svg
            className="hidden sm:block sm:w-20 md:w-[107px]"
            viewBox="0 0 107 12"
            fill="none"
          >
            <path
              d="M105.773 6.77343C106.326 6.77343 106.773 6.32571 106.773 5.77343C106.773 5.22114 106.326 4.77343 105.773 4.77343L105.773 6.77343ZM-6.53267e-05 5.77344L5.77344 11.5469L11.5469 5.77344L5.77344 -6.53267e-05L-6.53267e-05 5.77344ZM105.773 4.77343L5.77344 4.77344L5.77344 6.77344L105.773 6.77343L105.773 4.77343Z"
              fill="#BF9874"
            />
          </svg>

          <h2 className="text-[24px] sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl marcellus text-center whitespace-nowrap">
            LIVING TOGETHER AGREEMENT
          </h2>

          {/* Right line */}
          <svg
            className="hidden sm:block sm:w-20 md:w-[107px]"
            viewBox="0 0 107 12"
            fill="none"
          >
            <path
              d="M1 4.77344C0.447716 4.77344 0 5.22115 0 5.77344C0 6.32572 0.447716 6.77344 1 6.77344V4.77344ZM106.774 5.77344L101 -6.53267e-05L95.2265 5.77344L101 11.5469L106.774 5.77344ZM1 6.77344L101 6.77344V4.77344L1 4.77344V6.77344Z"
              fill="#BF9874"
            />
          </svg>
        </div>

        {/* Subtitle */}
        <p className="text-center uppercase text-[10px] sm:text-[14px] md:text-[16px] tracking-[3px] font-bold text-[#BF9874] mt-3 archivo">
          Build a Secure Future Together
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
          {/* Cards */}
          {cards.map((card, index) => (
            <CardItem key={index} {...card} />
          ))}

          {/* CTA Card */}
          <div className="flex flex-col justify-center items-center text-center px-3">
            <div className="text-[#BF9874] text-xl mb-5">
              <img src="/img/balance.png" alt="balance" />
            </div>

            <div className="w-30 h-[1px] bg-[#9F6907] mt-5 mb-5" />

            <h3 className="text-2xl marcellus sm:text-3xl lg:text-4xl leading-tight">
              Make It Official <br /> Make It Secure
            </h3>

            <div className="w-30 h-[1px] bg-[#9F6907] mt-5 mb-5" />

            <p className="archivo text-sm text-white mb-6 max-w-[200px]">
              At Family McKenzie, we guide you through the process.
            </p>

            {/* <Btn title="FIND OUT MORE" bg="bg-[#9F6907]" text="text-[#001025]" /> */}

            <Link
              key="services"
              to="services"
              smooth={true}
              duration={500}
              offset={-100}
              spy={true}
              className="relative inline-flex items-center justify-center px-8 py-2.5 overflow-hidden tracking-tighter text-white  group"
            >
              <span
                className="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#9F6907] rounded-full group-hover:w-56 group-hover:h-56"
              ></span>

              <span
                className="absolute inset-0 w-full h-full   opacity-60 bg-[#FFA400]"
              ></span>
              <span className="archivo flex items-center justify-center gap-2  relative text-white text-base ">
                <p>FIND OUR MORE</p>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_216_113)">
                    <path d="M10.195 13.8297L15 8.99974L10.195 4.16974C10.1516 4.11275 10.0965 4.06575 10.0333 4.03192C9.9702 3.9981 9.90053 3.97823 9.82904 3.97367C9.75756 3.96911 9.68593 3.97996 9.61901 4.00549C9.55208 4.03102 9.49142 4.07063 9.44114 4.12164C9.39085 4.17265 9.35211 4.23387 9.32754 4.30115C9.30297 4.36843 9.29315 4.44021 9.29873 4.51162C9.30431 4.58303 9.32517 4.65241 9.35989 4.71505C9.39462 4.7777 9.4424 4.83216 9.5 4.87474L13.095 8.49974H3.53C3.39739 8.49974 3.27022 8.55241 3.17645 8.64618C3.08268 8.73995 3.03 8.86713 3.03 8.99974C3.03 9.13234 3.08268 9.25952 3.17645 9.35329C3.27022 9.44706 3.39739 9.49974 3.53 9.49974H13.095L9.5 13.1247C9.40651 13.2189 9.35425 13.3463 9.35472 13.479C9.35519 13.6117 9.40835 13.7387 9.5025 13.8322C9.59665 13.9257 9.72409 13.978 9.85677 13.9775C9.98945 13.977 10.1165 13.9239 10.21 13.8297H10.195Z" fill="#fff" />
                  </g>
                  <defs>
                    <clipPath id="clip0_216_113">
                      <rect width="18" height="18" fill="white" transform="matrix(0 1 -1 0 18 0)" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
            </Link>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AttorneyHero;