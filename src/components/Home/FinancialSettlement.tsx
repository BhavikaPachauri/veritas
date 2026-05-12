function Testimonials() {
  return (
    <section
      className="relative overflow-hidden bg-[#001025]"
      aria-labelledby="financial-settlements-heading"
    >
      <div className="pointer-events-none absolute bottom-0 right-0 hidden w-[40%] select-none md:block lg:w-[45%]">
        <img
          src="/img/img7.webp"
          alt="Decorative financial settlement graphic"
          className="h-full w-full object-contain object-bottom"
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className="flex min-h-[500px] flex-col md:grid md:grid-cols-2">
        <div className="relative grid min-h-[350px] w-full grid-cols-2 md:min-h-[400] lg:min-h-[500px]">
          <div className="z-10">
            <img
              src="/img/Financial_settlement.webp"
              alt="Financial Settlement"
              className="absolute inset-0 h-[50vh] w-full object-cover md:h-full lg:w-[550px]"
              loading="lazy"
              decoding="async"
            />
          </div>

          <div className="absolute top-20 right-10 hidden items-center overflow-hidden xl:flex lg:right-8 xl:right-8">
            <svg
              width="180"
              height="12"
              viewBox="0 0 200 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M1 4.77344C0.447723 4.77344 0 5.22115 0 5.77344C0 6.32572 0.447723 6.77344 1 6.77344V4.77344ZM199.774 5.77344L194 -6.53267e-05L188.226 5.77344L194 11.5469L199.774 5.77344ZM1 6.77344L194 6.77344V4.77344L1 4.77344V6.77344Z"
                fill="#BF9874"
              />
            </svg>
          </div>
        </div>

        <div className="relative z-10 flex flex-col justify-center px-10 py-14 md:px-8 md:py-16 lg:px-12 lg:py-20">
          <div className="mt-5 mb-6 flex items-center gap-3 md:mt-0">
            <span className="archivo text-[10px] uppercase tracking-[3px] text-[#BF9874] sm:text-[11px] lg:text-[16px]">
              Ending a relationship is hard. Finances should not be.
            </span>
          </div>

          <h2
            id="financial-settlements-heading"
            className="marcellus text-2xl uppercase leading-tight text-white sm:text-4xl md:text-4xl lg:text-5xl"
          >
            Financial Settlements
          </h2>

          <p className="archivo mt-6 max-w-sm text-sm leading-7 text-[#829BBC] md:text-base">
            What We Can Help With
          </p>

          <p className="archivo max-w-lg text-sm leading-7 text-white md:text-base">
            From the family home and savings to pensions, debts, and spousal
            maintenance, we guide you through dividing assets fairly,
            practically, and with your future in mind.
          </p>

          <p className="archivo mt-6 max-w-sm text-sm leading-7 text-[#829BBC] md:text-base">
            How We Help
          </p>

          <p className="archivo max-w-lg text-sm leading-7 text-white md:text-base">
            Whether your separation is amicable or complex, we&apos;ll clarify
            your rights, support negotiations, and prepare a legally binding
            Consent Order, protecting you from future claims.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
