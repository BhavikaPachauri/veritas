import React from "react";

const VeritasHighlight: React.FC = () => {
  return (
    <section className="relative w-full bg-[#EAF1FA] overflow-hidden">

      {/* Right decorative background image */}
      {/* <div className="hidden md:block absolute right-0 bottom-0">
        <img
          src="/img/img7.png"
          alt="background"
          className="object-contain w-[400px] md:w-[600px]"
        />
      </div> */}

      {/* Main Grid */}
      <div className="  grid grid-cols-1 md:grid-cols-2 md:gap-16 items-stretch relative z-10">

        {/* LEFT IMAGE (FULL COVER) */}
        <div className="relative hidden md:block w-full h-full min-h-[400px] ">
          <img
            src="/img/Prenuptial.png"
            alt="Prenuptial"
            className="absolute inset-0 w-full h-full object-cover"
          />

        </div>

        {/* RIGHT CONTENT */}
        <div className="text-left max-w-4xl py-8 sm:py-10 md:py-16 px-4 sm:px-6 md:px-10">

          {/* Title */}
          <h2 className="text-2xl sm:text-4xl md:text-5xl uppercase font-serif text-[#001025] tracking-wide marcellus">
            Prenuptial Agreements
          </h2>

          {/* Subtitle */}
          <p className="mt-4 text-xs sm:text-sm md:text-base lg:text-md tracking-wide font-black uppercase text-[#001025] archivo"
          style={{fontWeight: 600}}>
            Marriage is a beautiful commitment.<br />
            A prenuptial agreement helps you protect it.
          </p>

          {/* Section 1 */}
          <p className="mt-6 text-sm sm:text-base md:text-lg  text-[#667C99] font-black leading-relaxed archivo"
          style={{fontWeight: 700}}>
            What They Cover
          </p>
          <p className=" text-sm sm:text-base text-[#667C99] leading-relaxed archivo"
          style={{fontWeight: 400}}>
            Prenups are legal documents that set out how assets, property,
            savings, and pensions will be divided if your relationship ends.
            They safeguard business investments and prevent disputes over
            debts—but cannot cover child arrangements.
          </p>

          {/* Section 2 */}
          <p className="mt-6 text-sm sm:text-base md:text-lg text-[#667C99] font-extrabold leading-relaxed archivo"
          style={{fontWeight: 700}}>
            Why They Matter
          </p>
          <p style={{fontWeight: 400}} className="text-sm sm:text-base text-[#667C99] leading-relaxed archivo">
            UK courts are more likely to uphold prenups that are fair, clear,
            and supported by independent legal advice from both parties. This
            reduces future conflict and gives you both clarity and confidence.
          </p>

          {/* Button */}
          {/* <div className="mt-8">
            <button className="border border-[#001025] text-[#001025] font-black text-xs sm:text-sm px-6 py-3 uppercase tracking-wide  transition archivo"
            style={{fontWeight: 700}}>
              Request an Appointment
            </button>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default VeritasHighlight;