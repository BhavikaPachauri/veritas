function Hero() {
  const handleCall = () => {
    window.location.href = "tel:+442083990000";
  };

  return (
    <section id="home">
      <div className="relative flex min-h-[70vh] items-center overflow-hidden px-6 py-30 sm:px-10 md:min-h-[90vh] md:px-20 md:py-40 lg:px-32 lg:py-30 xl:py-24">
        <img
          src="/img/img6.webp"
          alt="Family law hero background image"
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-[#001025]/55" />

        <div className="absolute right-0 top-26 z-20 block md:hidden">
          <div className="rounded-l-2xl px-3 py-3 animate-[blinkColor_1.2s_ease-in-out_infinite]">
            <button
              type="button"
              onClick={handleCall}
              aria-label="Call Family McKenzie at plus 44 208 399 0000"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M16.7178 12.7291V15.1377C16.7187 15.3613 16.6729 15.5827 16.5833 15.7875C16.4938 15.9924 16.3624 16.1763 16.1976 16.3275C16.0328 16.4786 15.8383 16.5937 15.6265 16.6654C15.4147 16.737 15.1902 16.7636 14.9675 16.7435C12.4969 16.475 10.1237 15.6308 8.03865 14.2786C6.09875 13.0459 4.45406 11.4012 3.22136 9.46135C1.86448 7.36679 1.02006 4.98206 0.756517 2.50036C0.736453 2.27834 0.762839 2.05457 0.833995 1.8433C0.905151 1.63203 1.01952 1.4379 1.16981 1.27325C1.32011 1.10861 1.50304 0.97706 1.70696 0.886987C1.91088 0.796914 2.13132 0.750288 2.35425 0.750078H4.7629C5.15254 0.746243 5.53028 0.884222 5.82572 1.1383C6.12116 1.39237 6.31413 1.74521 6.36866 2.13103C6.47032 2.90185 6.65886 3.6587 6.93068 4.38713C7.0387 4.6745 7.06208 4.98682 6.99804 5.28707C6.93401 5.58732 6.78525 5.86292 6.56938 6.08121L5.54972 7.10087C6.69267 9.11092 8.35696 10.7752 10.367 11.9182L11.3867 10.8985C11.605 10.6826 11.8806 10.5339 12.1808 10.4698C12.4811 10.4058 12.7934 10.4292 13.0808 10.5372C13.8092 10.809 14.566 10.9976 15.3369 11.0992C15.7269 11.1542 16.083 11.3507 16.3377 11.6512C16.5923 11.9517 16.7276 12.3353 16.7178 12.7291Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="relative z-10 max-w-3xl text-white">
          <p className="mb-3 text-sm text-[#9F6907] md:text-base archivo">
            HOME OF LAW &amp; ORDER
          </p>

          <h1 className="marcellus mb-4 text-2xl leading-tight sm:text-5xl md:text-5xl lg:text-[70px]">
            EMPOWERING YOU TO NAVIGATE FAMILY LAW
          </h1>

          <p className="max-w-md text-sm text-[#FFFFFF] sm:text-base md:max-w-md md:text-lg archivo">
            At Family McKenzie, we understand that family law can feel complex
            and overwhelming.
          </p>

          <div className="mt-8 md:mt-12">
            <a
              href="/#services"
              className="group relative inline-flex items-center justify-center overflow-hidden px-8 py-2.5 tracking-tighter text-white"
            >
              <span className="absolute h-0 w-0 rounded-full bg-[#9F6907] transition-all duration-500 ease-out group-hover:h-56 group-hover:w-56" />
              <span className="absolute inset-0 h-full w-full bg-[#FFA400] opacity-60" />
              <span className="relative flex items-center justify-center gap-2 text-sm text-white md:text-base archivo">
                <span>FIND OUT MORE</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
