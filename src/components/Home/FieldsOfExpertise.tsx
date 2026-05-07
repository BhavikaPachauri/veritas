import React from "react";

type Item = {
  title: string;
  subtitle: string;
  description: string;
};

const leftItems: Item[] = [
  { title: "Divorce & Separation", subtitle: "2 Lawyers", description: "Learn about the no-fault divorce process in the UK, timelines, and legal steps. Understand how property, assets, and pensions are divided, and discover strategies for achieving a fair settlement." },
  { title: "Financial Settlements", subtitle: "2 Lawyers", description: "Explore how to divide property, savings, debts, and pensions fairly. Understand Consent Orders, clean break agreements, and spousal maintenance, and how to protect your financial future." },
  { title: "Domestic Abuse & Protection Orders", subtitle: "2 Lawyers", description: "Know your rights if you or your children are at risk. Learn about Non-Molestation Orders, Occupation Orders, and other legal tools designed to keep you safe." },
];

const rightItems: Item[] = [
  { title: "Children Matters Law", subtitle: "7 Lawyers", description: "Get guidance on Child Arrangements Orders, co-parenting, custody, and contact schedules. Learn how the court prioritises your child's best interests and how to create agreements that reduce conflict." },
  { title: "Cohabitation & Prenuptial Agreements", subtitle: "2 Lawyers", description: "Discover how Living Together Agreements, Declarations of Trust, and Prenuptial Agreements can protect your property and assets, clarify financial responsibilities, and prevent future disputes." },
  { title: "Legal Process & Court Guidance", subtitle: "2 Lawyers", description: "Understand the court procedures, applications, and forms you may need. Learn how Family McKenzie can represent, advise, or support you through mediation and hearings." },
];

const ExpertiseItemWrapper: React.FC<Item> = ({ title, subtitle, description }) => {
  return (
    <div className="border-b border-[#BF9874] group cursor-pointer">

      {/* ── Top row: title + subtitle + default icon (always fixed) ── */}
      <div className="flex items-center justify-between gap-4 py-7">
        <div className="flex-1 min-w-0">
          <h3 className="text-white text-sm sm:text-base font-medium leading-snug">
            {title}
          </h3>
          <p className="text-[#BF9874] text-xs mt-[6px]">{subtitle}</p>
        </div>

        {/* Default icon — top right, fades out upward on hover */}
        <div className="flex-shrink-0 relative w-[39px] h-[39px]">
          <svg
            width="39" height="39" viewBox="0 0 39 39"
            fill="none" xmlns="http://www.w3.org/2000/svg"
            className="absolute inset-0 opacity-100 translate-y-0 group-hover:opacity-0 group-hover:-translate-y-4"
            style={{ transition: "opacity 0.55s cubic-bezier(0.4,0,0.2,1), transform 0.55s cubic-bezier(0.4,0,0.2,1)" }}
          >
            <rect width="39" height="39" rx="19.5" transform="matrix(-1 -8.74228e-08 -8.74228e-08 1 39 3.40949e-06)" fill="white" fillOpacity="0.21" />
            <path d="M13.8815 13.3594L24.98 24.4579" stroke="#BF9874" strokeWidth="1.21075" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M13.8815 24.4579L24.98 24.4579L24.98 13.3594" stroke="#BF9874" strokeWidth="1.21075" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      {/* ── Accordion body: description + hover icon bottom-right ── */}
      <div
        className="accordion-body overflow-hidden"
        style={{
          display: "grid",
          gridTemplateRows: "0fr",
          transition: "grid-template-rows 0.65s cubic-bezier(0.4,0,0.2,1)",
        }}
      >
        <div className="min-h-0 overflow-hidden">
          {/* description left, hover icon bottom-right */}
          <div className="flex items-end justify-between gap-4 pb-7">

            {/* Description slides down and fades in */}
            <p
              className="text-gray-400 text-xs leading-relaxed flex-1 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0"
              style={{
                transition: "opacity 0.6s cubic-bezier(0.4,0,0.2,1) 0.1s, transform 0.6s cubic-bezier(0.4,0,0.2,1) 0.1s",
              }}
            >
              {description}
            </p>

            {/* Hover icon — bottom right, rises up and fades in */}
            <div
              className="flex-shrink-0 opacity-0 translate-y-6 ease-in-out group-hover:opacity-100 group-hover:translate-y-0"
              style={{
                transition: "opacity 0.6s cubic-bezier(0.4,0,0.2,1) 0.15s, transform 0.6s cubic-bezier(0.4,0,0.2,1) 0.15s",
              }}
            >
              <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="39" height="39" rx="19.5" transform="matrix(-1 -8.74228e-08 -8.74228e-08 1 39 3.40949e-06)" fill="#9F6907" fillOpacity="0.56" />
                <path d="M13.8815 24.458L24.98 13.3595" stroke="white" strokeWidth="1.21075" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M13.8815 13.3595L24.98 13.3595L24.98 24.458" stroke="white" strokeWidth="1.21075" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
};

const FieldsOfExpertise: React.FC = () => {
  return (
    <>
      <style>{`
        .group:hover .accordion-body {
          grid-template-rows: 1fr !important;
        }
      `}</style>

      <section className="relative w-full bg-[#041c34] archivo py-14 sm:py-16 md:py-20 px-4 sm:px-6 md:px-10 overflow-hidden">
        <div className="hidden md:block absolute right-0 bottom-0">
          <img src="/img/img7.png" alt="background" className="object-contain w-[400px] md:w-[700px]" />
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl marcellus sm:text-4xl md:text-5xl font-serif text-white tracking-wide">
              SERVICES
            </h2>
            <p className="mt-4 text-[10px] archivo sm:text-sm tracking-[0.3em] text-[#c8a96a] uppercase">
              Vision makes us who we are
            </p>
          </div>

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
    </>
  );
};

export default FieldsOfExpertise;