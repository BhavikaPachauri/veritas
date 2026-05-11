import React from "react";

const VeritasHighlight: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#EAF1FA]">
      <div className="relative z-10 grid grid-cols-1 items-stretch md:grid-cols-2 md:gap-16">
        <div className="relative hidden h-full min-h-[400px] w-full md:block">
          <img
            src="/img/Prenuptial.png"
            alt="Prenuptial"
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
            decoding="async"
          />
        </div>

        <div className="max-w-4xl px-4 py-8 text-left sm:px-6 sm:py-10 md:px-10 md:py-16">
          <h2 className="marcellus text-[26px] uppercase tracking-wide text-[#001025] sm:text-4xl md:text-5xl">
            Prenuptial Agreements
          </h2>

          <p
            className="archivo mt-4 text-xs uppercase tracking-wide text-[#001025] sm:text-sm md:text-base lg:text-md"
            style={{ fontWeight: 600 }}
          >
            Marriage is a beautiful commitment.
            <br />
            A prenuptial agreement helps you protect it.
          </p>

          <p
            className="archivo mt-6 text-sm leading-relaxed text-[#667C99] sm:text-base md:text-lg"
            style={{ fontWeight: 700 }}
          >
            What They Cover
          </p>
          <p
            className="archivo text-sm leading-relaxed text-[#667C99] sm:text-base"
            style={{ fontWeight: 400 }}
          >
            Prenups are legal documents that set out how assets, property,
            savings, and pensions will be divided if your relationship ends.
            They safeguard business investments and prevent disputes over debts,
            but cannot cover child arrangements.
          </p>

          <p
            className="archivo mt-6 text-sm leading-relaxed text-[#667C99] sm:text-base md:text-lg"
            style={{ fontWeight: 700 }}
          >
            Why They Matter
          </p>
          <p
            className="archivo text-sm leading-relaxed text-[#667C99] sm:text-base"
            style={{ fontWeight: 400 }}
          >
            UK courts are more likely to uphold prenups that are fair, clear,
            and supported by independent legal advice from both parties. This
            reduces future conflict and gives you both clarity and confidence.
          </p>
        </div>
      </div>
    </section>
  );
};

export default VeritasHighlight;
