import React from "react";

type Location = {
  country: string;
  email: string;
};

const locations: Location[] = [
  {
    country: "Expertise",
    email: "Legal Excellence",
  },
  {
    country: "Compassion",
    email: "Client First",
  },
  {
    country: "Integrity",
    email: "Always Honest",
  },
  {
    country: "Discretion",
    email: "Fully Protected",
  },
];

const mobileColors = [
  "bg-[#FFFFFF]",
  "bg-[#F1F7FF]",
  "bg-[#DBEBFF]",
  "bg-[#ABC4E4]",
];

const ContactLocations: React.FC = () => {
  return (
    <section className="bg-[#EAF1FA] lg:py-8 lg:px-4">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between  lg:gap-16">
        
        {locations.map((loc, index) => (
          <div
            key={index}
            className={`
              flex items-center w-full lg:w-1/4 justify-center relative py-8 
              lg:bg-transparent
              ${mobileColors[index]}
            `}
          >
            {/* Content */}
            <div className="text-center archivo">
              <h3 className="text-[20px] font-medium text-[#001025]">
                {loc.country}
              </h3>

              <p className="text-[16px] text-[#667C99] mt-1">
                {loc.email}
              </p>
            </div>

            {/* Divider - Desktop only */}
            {index !== locations.length - 1 && (
              <div className="hidden lg:flex flex-col items-center absolute right-0 h-full justify-center">
                <svg
                  width="12"
                  height="112"
                  viewBox="0 0 12 112"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.77343 -6.10352e-05L-6.96978e-05 5.77344L5.77343 11.5469L11.5469 5.77344L5.77343 -6.10352e-05ZM5.77344 111.547L11.5469 105.773L5.77344 99.9999L-6.53267e-05 105.773L5.77344 111.547ZM4.77343 5.77344L4.77344 105.773L6.77344 105.773L6.77343 5.77344L4.77343 5.77344Z"
                    fill="#BF9874"
                  />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContactLocations;