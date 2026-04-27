import { Link } from "react-router-dom";

const WorkingBanner: React.FC = () => {
  return (
    <section
      className="relative w-full min-h-[60vh] flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/img/img9.png')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 md:px-10 max-w-7xl">
        <p className="text-white marcellus text-3xl sm:text-xl md:text-7xl mb-4">
          we are open for meeting every working day
        </p>

        <Link
          to="/contact"
          className="inline-block bg-[#001025] text-white text-xs sm:text-sm md:text-base px-5 py-2.5 mt-8  hover:bg-blue-800 transition"
        >
          FIND OUR MORE
        </Link>
      </div>
    </section>
  );
};

export default WorkingBanner;