function AboutSection() {
  return (
    <>
      <div className="relative h-[40vh] overflow-hidden md:h-[70vh]">
        <img
          src="/img/img1.png"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover"
          loading="lazy"
          decoding="async"
        />
      </div>
      <section className="w-full bg-gray-300 px-4 py-6 sm:px-6 sm:py-8 md:px-10 md:py-14">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div>
            <h2 className="archivo px-4 text-center text-base font-medium text-[#001025] sm:px-26 sm:text-lg md:px-0 md:text-[18px] lg:text-[24px]">
              Understanding Your Rights: A Talk with Our Family Counsel
            </h2>
          </div>

          <div className="flex w-full justify-center md:w-auto md:justify-start">
            <a
              href="/#about"
              className="group relative inline-flex items-center justify-center overflow-hidden px-8 py-2.5 tracking-tighter text-white"
            >
              <span className="absolute h-0 w-0 rounded-full bg-[#052146] transition-all duration-500 ease-out group-hover:h-56 group-hover:w-56" />
              <span className="absolute inset-0 h-full w-full bg-[#001025] opacity-80" />
              <span className="archivo relative flex items-center justify-center gap-2 text-sm text-white lg:text-base">
                <span className="uppercase">Read More</span>
              </span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutSection;
