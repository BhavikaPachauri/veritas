const WorkingBanner: React.FC = () => {
  return (
    <section className="relative flex min-h-[50vh] w-full items-center justify-center overflow-hidden md:min-h-[85vh]">
      <img
        src="/img/supreme-court.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
        decoding="async"
      />
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 max-w-7xl px-4 text-center sm:px-6 md:px-10">
        <p className="marcellus mb-4 text-3xl uppercase text-white sm:text-xl md:text-5xl lg:text-6xl xl:text-7xl">
          Ready to Discuss Your Case. Schedule a Meeting Today
        </p>

        <a
          href="/#contact"
          className="group relative inline-flex items-center justify-center overflow-hidden px-8 py-2.5 tracking-tighter text-white"
        >
          <span className="absolute h-0 w-0 rounded-full bg-[#4d6afa] transition-all duration-500 ease-out group-hover:h-56 group-hover:w-56" />
          <span className="absolute inset-0 h-full w-full bg-[#001025] opacity-80" />
          <span className="archivo relative flex items-center justify-center gap-2 text-base text-white">
            <span className="uppercase">Schedule</span>
          </span>
        </a>
      </div>
    </section>
  );
};

export default WorkingBanner;
