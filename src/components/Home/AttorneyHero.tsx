import React from "react";

type Card = {
  title: string;
  subtitle: string;
  image: string;
};

const cards: Card[] = [
  {
    title: "What They Cover",
    subtitle:
      "These legal documents set out how property, finances, and responsibilities are shared while living together.",
    image: "/img/img12.png",
  },
  {
    title: "Why You Need One",
    subtitle:
      "While not legally mandatory, a clear agreement reduces misunderstandings and prevents disputes.",
    image: "/img/img12.png",
  },
  {
    title: "Our Service",
    subtitle:
      "At Family McKenzie, we guide you through the process: explaining your rights, drafting agreements.",
    image: "/img/img12.png",
  },
  {
    title: "The Benefits",
    subtitle:
      "Provides clarity, security, and peace of mind—allowing you to focus on your relationship.",
    image: "/img/img12.png",
  },
  {
    title: "Our Approach",
    subtitle:
      "We combine legal expertise with practical, empathetic advice to protect your future.",
    image: "/img/img12.png",
  },
];

const AttorneyHero: React.FC = () => {
  return (
    <section className="bg-[#071a2f] text-white py-20 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="flex items-center justify-center gap-3 sm:gap-5 md:gap-6 flex-wrap">

          {/* Left Line */}
          <svg
            className="w-12 sm:w-20 md:w-[107px]"
            viewBox="0 0 107 12"
            fill="none"
          >
            <path
              d="M105.773 6.77343C106.326 6.77343 106.773 6.32571 106.773 5.77343C106.773 5.22114 106.326 4.77343 105.773 4.77343L105.773 6.77343ZM-6.53267e-05 5.77344L5.77344 11.5469L11.5469 5.77344L5.77344 -6.53267e-05L-6.53267e-05 5.77344ZM105.773 4.77343L5.77344 4.77344L5.77344 6.77344L105.773 6.77343L105.773 4.77343Z"
              fill="#BF9874"
            />
          </svg>

          {/* Title */}
          <h2 className="text-lg sm:text-3xl md:text-4xl lg:text-5xl marcellus text-center whitespace-nowrap">
            LIVING TOGETHER AGREEMENT
          </h2>

          {/* Right Line */}
          <svg
            className="w-12 sm:w-20 md:w-[107px]"
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
        <p className="text-center text-[10px] tracking-[3px] font-bold text-[#BF9874] mt-3 archivo">
          Build a Secure Future Together
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">

          {/* Cards */}
          {cards.map((card, index) => (
            <div key={index} className="group cursor-pointer">

              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-[220px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="mt-4">
                <p className="text-[17px] text-[#667C99] archivo">
                  {card.title}
                </p>

                <h3 className="mt-2 text-[17px] leading-6 font-medium archivo">
                  {card.subtitle}
                </h3>

                <span className="flex items-center gap-2 mt-3 text-[12px] tracking-[2px] text-[#9F6907] archivo">
                  LEARN MORE
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 22 22"
                    fill="none"
                  >
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
                  </svg>
                </span>
              </div>
            </div>
          ))}

          {/* CTA Card */}
          <div className="flex flex-col justify-center items-center text-center px-3">
            <div className="text-[#BF9874] text-xl mb-4">
              <img src="/img/balance.png"/>
            </div>

            <div className="w-30 h-[1px] bg-[#9F6907] mt-4 mb-4" />

            <h3 className=" text-2xl marcellus sm:text-3xl lg:text-4xl leading-tight">
              Make It Official <br /> Make It Secure
            </h3>

            <div className="w-30 h-[1px] bg-[#9F6907] mt-4 mb-4" />
           

            <p className="text-sm text-white mb-6 max-w-xs">
              At Family McKenzie, we guide you through the process.
            </p>

            <button className="bg-[#9F6907] text-[#001025] text-base font-semibold px-5 py-3 tracking-wide hover:opacity-90 transition">
              FIND OUT MORE →
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AttorneyHero;