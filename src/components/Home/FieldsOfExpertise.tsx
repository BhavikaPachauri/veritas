import React from "react";

type Item = {
  title: string;
  subtitle: string;
};

const leftItems: Item[] = [
  { title: "Divorce & Separation", subtitle: "2 Lawyers" },
  { title: "Financial Settlements", subtitle: "2 Lawyers" },
  { title: "Domestic Abuse & Protection Orders", subtitle: "2 Lawyers" },

];

const rightItems: Item[] = [
  { title: "Children Matters Law", subtitle: "7 Lawyers" },
  { title: "Cohabitation & Prenuptial Agreements", subtitle: "2 Lawyers" },
  { title: "Legal Process & Court Guidance", subtitle: "2 Lawyers" },
 
];

const ExpertiseItem: React.FC<Item> = ({ title, subtitle }) => {
  return (
    <div className="py-7 border-b border-[#BF9874] flex items-center justify-between gap-4">
      <div>
        <h3 className="text-white text-sm sm:text-base font-medium">
          
          {title}
        </h3>
        <p className="text-gray-400 text-xs mt-1">{subtitle}</p>
      </div>

      <button className="text-[10px] sm:text-xs tracking-widest text-white uppercase flex items-center gap-1 hover:opacity-80 transition">
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.41683 15.583L15.5835 6.41634" stroke="#BF9874" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6.41683 6.41634L15.5835 6.41634L15.5835 15.583" stroke="#BF9874" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

      </button>
    </div>
  );
};

const FieldsOfExpertise: React.FC = () => {
  return (
    <section className="relative w-full bg-[#041c34] archivo py-14 sm:py-16 md:py-20 px-4 sm:px-6 md:px-10">
      {/* <div className="absolute inset-0 bg-[url('/img/img8.png')] bg-cover bg-right"></div> */}
       <div className="hidden md:block absolute right-0 bottom-0 ">
                <img
                    src="/img/img7.png"
                    alt="background"
                    className="object-contain w-[400px] md:w-[700px]"
                />
            </div>

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">
          <div className="flex justify-center items-center gap-6">
            
            <h2 className="text-3xl marcellus sm:text-4xl md:text-5xl font-serif text-white tracking-wide">
              SERVICES
            </h2>
          
          </div>

          <p className="mt-4 text-[10px] archivo sm:text-sm tracking-[0.3em] text-[#c8a96a] uppercase">
            Vision makes us who we are
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2  md:gap-16 relative">

          {/* Left Column */}
          <div>
            {leftItems.map((item, index) => (
              <ExpertiseItem key={index} {...item} />
            ))}
          </div>

          {/* Right Column */}
          <div>
            {rightItems.map((item, index) => (
              <ExpertiseItem key={index} {...item} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default FieldsOfExpertise;