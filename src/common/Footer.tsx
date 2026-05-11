const Footer: React.FC = () => {
  return (
    <footer className="bg-[#071a2f] text-white archivo">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-12 sm:grid-cols-2 md:grid-cols-4 md:gap-16 md:py-16">
        <div>
          <h3 className="mb-4 text-base font-semibold">Expertise</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li className="transition hover:text-white">Divorce &amp; Separation</li>
            <li className="transition hover:text-white">Financial Settlement</li>
            <li className="transition hover:text-white">Non-Molestation Order</li>
            <li className="transition hover:text-white">Prenuptial Agreements</li>
            <li className="transition hover:text-white">Domestic Abuse Support</li>
            <li className="transition hover:text-white">Mediation Services</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-base font-semibold">World Offices</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>London, United Kingdom</li>
            <li>Edinburgh, Scotland</li>
            <li>Dublin, Republic of Ireland</li>
          </ul>
        </div>

        <div>
          <a href="/#faq" className="mb-4 inline-block text-base font-semibold">
            FAQ
          </a>
          <ul className="space-y-2 text-sm text-gray-400">
            {[
              "How do I start a divorce?",
              "What is a clean break order?",
              "How is custody determined?",
              "Do I need a solicitor?",
              "How long does divorce take?",
              "Are you licensed in my country?",
            ].map((item, index) => (
              <li key={index}>
                <a href="/#faq" className="w-full text-left transition hover:text-white" aria-label={item}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-base font-semibold">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            {[
              { id: "home", label: "Home" },
              { id: "about", label: "About" },
              { id: "services", label: "Services" },
              { id: "contact", label: "Book an Appointment" },
            ].map((item) => (
              <li key={item.id} className="transition hover:text-white">
                <a href={`/#${item.id}`} className="cursor-pointer transition-colors duration-300">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="bg-[#cfd5dd] py-3 text-base text-[#667C99]">
        <div className="mx-auto flex max-w-6xl justify-center px-6">
          <span className="text-center">
            Copyright @2026 Family Mckenzie, All Rights Reserved
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
