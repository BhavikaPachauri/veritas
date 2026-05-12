import { useEffect, useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const handleCall = () => {
    window.location.href = "tel:+442083990000";
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "contact", label: "Book An Appointment" },
  ];

  useEffect(() => {
    const sections = navItems.map((item) =>
      document.getElementById(item.id)
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.6,
      }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <nav
      className="fixed left-0 top-0 z-50 w-full bg-white shadow-sm"
      aria-label="Primary"
    >
      <div className="flex items-stretch">
        <div className="flex-shrink-0">
          <a href="/#home" aria-label="Go to the top of the page">
            <img
              src="/img/logo.webp"
              alt="Family McKenzie logo"
              width="96"
              height="96"
              className="h-16 w-16 object-cover sm:h-20 sm:w-20 md:h-24 md:w-24"
              fetchPriority="high"
              decoding="async"
            />
          </a>
        </div>

        <div className="flex min-w-0 flex-1 flex-col">
          <div className="hidden items-center gap-2 border-b border-[#BF9874] px-6 py-4 text-[16px] text-[#001025] md:flex lg:px-10 archivo" />

          <div className="flex items-center justify-between px-4 py-2 sm:px-6 lg:px-10">
            {/* Desktop Menu */}
            <div className="hidden items-center gap-6 text-[16px] font-medium md:flex lg:gap-10 archivo">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`/#${item.id}`}
                  className={`cursor-pointer transition-colors duration-300 ${
                    activeSection === item.id
                      ? "text-[#9F6907]"
                      : "text-[#001025] "
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Call Button */}
            <div className="hidden md:block">
              <button
                type="button"
                onClick={handleCall}
                aria-label="Call Family McKenzie at plus 44 208 399 0000"
                className="relative inline-flex h-9 overflow-hidden p-[2px] focus:outline-none"
              >
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#1f6ef7_0%,#001025_50%,#d8de6a_100%)]" />

                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center gap-2 bg-white px-7 text-sm font-medium text-[#001025] backdrop-blur-3xl">
                  <svg
                    width="18"
                    height="16"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M16.7178 12.7291V15.1377C16.7187 15.3613 16.6729 15.5827 16.5833 15.7875C16.4938 15.9924 16.3624 16.1763 16.1976 16.3275C16.0328 16.4786 15.8383 16.5937 15.6265 16.6654C15.4147 16.737 15.1902 16.7636 14.9675 16.7435C12.4969 16.475 10.1237 15.6308 8.03865 14.2786C6.09875 13.0459 4.45406 11.4012 3.22136 9.46135C1.86448 7.36679 1.02006 4.98206 0.756517 2.50036C0.736453 2.27834 0.762839 2.05457 0.833995 1.8433C0.905151 1.63203 1.01952 1.4379 1.16981 1.27325C1.32011 1.10861 1.50304 0.97706 1.70696 0.886987C1.91088 0.796914 2.13132 0.750288 2.35425 0.750078H4.7629C5.15254 0.746243 5.53028 0.884222 5.82572 1.1383C6.12116 1.39237 6.31413 1.74521 6.36866 2.13103C6.47032 2.90185 6.65886 3.6587 6.93068 4.38713C7.0387 4.6745 7.06208 4.98682 6.99804 5.28707C6.93401 5.58732 6.78525 5.86292 6.56938 6.08121L5.54972 7.10087C6.69267 9.11092 8.35696 10.7752 10.367 11.9182L11.3867 10.8985C11.605 10.6826 11.8806 10.5339 12.1808 10.4698C12.4811 10.4058 12.7934 10.4292 13.0808 10.5372C13.8092 10.809 14.566 10.9976 15.3369 11.0992C15.7269 11.1542 16.083 11.3507 16.3377 11.6512C16.5923 11.9517 16.7276 12.3353 16.7178 12.7291Z"
                      stroke="#BF9874"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  +44 208 399 0000
                </span>
              </button>
            </div>

            <div className="flex-1 md:hidden" />

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="flex h-9 w-9 flex-col items-center justify-center gap-[5px] md:hidden"
              onClick={() => setOpen((current) => !current)}
              aria-expanded={open}
              aria-controls="mobile-navigation"
              aria-label={open ? "Close menu" : "Open menu"}
            >
              <span
                className={`block h-[2px] w-6 bg-black transition-all duration-300 ${
                  open ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`block h-[2px] w-6 bg-black transition-all duration-300 ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-[2px] w-6 bg-black transition-all duration-300 ${
                  open ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        id="mobile-navigation"
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col space-y-4 border-t bg-white px-6 pb-6 pt-4">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`/#${item.id}`}
              onClick={() => setOpen(false)}
              className={`cursor-pointer text-[15px] transition-colors duration-300 ${
                activeSection === item.id
                  ? "text-[#9F6907]"
                  : "text-[#001025] "
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;