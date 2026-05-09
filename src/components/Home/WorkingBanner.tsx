import { Link } from "react-scroll";

const WorkingBanner: React.FC = () => {
  return (
    <section
      className="relative w-full min-h-[50vh] md:min-h-[85vh] flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/img/supreme-court.png')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 md:px-10 max-w-7xl">
        <p className="text-white marcellus text-3xl uppercase sm:text-xl md:text-5xl lg:text-6xl xl:text-7xl mb-4">
          Ready to Discuss Your Case.
          Schedule a Meeting Today
        </p>

       
        <Link
          key="contact"
          to="contact"
          smooth={true}
          duration={500}
          offset={-100}
          spy={true}
          className="relative inline-flex items-center justify-center px-8 py-2.5 overflow-hidden tracking-tighter text-white  group"
        >
          <span
            className="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#4d6afa] rounded-full group-hover:w-56 group-hover:h-56"
          ></span>

          <span
            className="absolute inset-0 w-full h-full   opacity-80 bg-[#001025]"
          ></span>
          <span className="archivo flex items-center justify-center gap-2  relative text-white text-base ">
            <p className="uppercase archivo">Schedule</p>
          </span>
        </Link>
      </div>
    </section>
  );
};

export default WorkingBanner;
