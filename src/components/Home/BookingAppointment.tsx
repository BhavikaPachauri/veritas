import React from "react";

const InquirySection: React.FC = () => {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#f4f4f4] px-4 py-24"
    >
      <div className="absolute bottom-0 right-0 hidden md:block">
        <img
          src="/img/img7.webp"
          alt="Appointment booking background illustration"
          aria-hidden="true"
          className="w-[400px] object-contain md:w-[800px]"
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl">
        <div className="flex items-center justify-center gap-3 sm:gap-5 md:gap-6">
          <svg
            className="hidden h-auto sm:block sm:w-20 md:w-[107px]"
            viewBox="0 0 107 12"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M105.773 6.77343C106.326 6.77343 106.773 6.32571 106.773 5.77343C106.773 5.22114 106.326 4.77343 105.773 4.77343L105.773 6.77343ZM-6.53267e-05 5.77344L5.77344 11.5469L11.5469 5.77344L5.77344 -6.53267e-05L-6.53267e-05 5.77344ZM105.773 4.77343L5.77344 4.77344L5.77344 6.77344L105.773 6.77343L105.773 4.77343Z"
              fill="#BF9874"
            />
          </svg>

          <h2
            className="marcellus text-center text-3xl whitespace-nowrap text-[#001025] sm:text-3xl md:text-3xl lg:text-6xl"
            style={{ fontWeight: 500 }}
          >
            BOOK AN APPOINTMENT
          </h2>

          <svg
            className="hidden h-auto sm:block sm:w-20 md:w-[107px]"
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

        <p className="mt-4 text-center text-[10px] tracking-[3px] text-[#BF9874] md:text-[16px] archivo">
          WE WOULD LOVE TO WORK WITH YOU
        </p>

        <form className="mt-16 space-y-10" aria-label="Book an appointment form">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <label className="sr-only" htmlFor="full-name">
                Full Name
              </label>
              <input
                id="full-name"
                name="fullName"
                type="text"
                placeholder="Full Name"
                autoComplete="name"
                className="w-full border-b border-[#BF9874] bg-transparent text-sm outline-none placeholder:italic placeholder:text-gray-500 archivo"
              />
            </div>

            <div>
              <label className="sr-only" htmlFor="email">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="E-mail"
                autoComplete="email"
                className="w-full border-b border-[#BF9874] bg-transparent text-sm outline-none placeholder:italic placeholder:text-gray-500 lg:text-base archivo"
              />
            </div>
          </div>

          <div>
            <label className="sr-only" htmlFor="business-details">
              Business Details
            </label>
            <textarea
              id="business-details"
              name="businessDetails"
              placeholder="Business"
              rows={2}
              className="w-full resize-none border-b border-[#BF9874] bg-transparent text-sm outline-none placeholder:italic placeholder:text-gray-500 lg:text-base archivo"
            />
          </div>

          <div>
            <label className="sr-only" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Message"
              rows={2}
              className="w-full resize-none border-b border-[#BF9874] bg-transparent text-sm outline-none placeholder:italic placeholder:text-gray-500 lg:text-base archivo"
            />
          </div>

          <div className="mt-10 flex justify-center">
            <button
              type="submit"
              className="group relative inline-flex items-center justify-center overflow-hidden border border-[#001025] px-8 py-2.5 tracking-tighter text-white"
            >
              <span className="absolute h-0 w-0 rounded-full bg-[#001025] transition-all duration-500 ease-out group-hover:h-76 group-hover:w-76" />
              <span className="absolute inset-0 h-full w-full border border-[#001025] bg-[#FFF] opacity-10" />
              <span className="relative flex items-center justify-center gap-2 text-sm font-bold text-[#001025] group-hover:text-white md:text-base archivo">
                <span>REQUEST AN APPOINTMENT</span>
              </span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default InquirySection;
