import React from "react";

const VeritasHighlight: React.FC = () => {
    return (
        <section className="relative w-full bg-[#d9dde2] py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-10 overflow-hidden">

            {/* Background Image (Right Side) */}
            <div className="hidden md:block absolute right-0 bottom-0 ">
                <img
                    src="/img/img7.png"
                    alt="background"
                    className="object-contain w-[400px] md:w-[600px]"
                />
            </div>

            {/* Main Grid */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center relative z-10">

                {/* LEFT (empty for now / future image) */}
                <div className="hidden md:block">
                    {/* You can add image here later */}
                </div>

                {/* RIGHT CONTENT */}
                <div className="text-left max-w-2xl">

                    {/* Name */}
                    <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif text-[#001025] tracking-wide marcellus">
                        JACK MORGAN MCGILLS
                    </h2>

                    {/* Subtitle */}
                    <p className="mt-4 text-xs sm:text-sm md:text-base tracking-wide uppercase text-[#001025] archivo">
                        Senior Attorney & Owner of Victoria Law Office
                    </p>

                    {/* Description */}
                    <p className="mt-6 text-sm sm:text-base text-[#667C99] leading-relaxed archivo">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu.
                    </p>

                    {/* Icons */}
                    <div className="flex items-center gap-6 mt-8">
                        <div className="w-14 h-14 rounded-full border border-gray-400 flex items-center justify-center">
                         <img src="/img/Vector.png" alt=""/>

                        </div>

                        <div className="w-14 h-14 rounded-full text-white flex items-center justify-center">
                             <img src="/img/Law.png" alt=""/>

                        </div>
                    </div>



                    {/* Button */}
                    <div className="mt-8">
                        <button className="border border-[#001025] text-[#1c2b3a] font-medium text-xs sm:text-sm px-6 py-3 uppercase tracking-wide hover:bg-[#001025] hover:text-white transition archivo">
                            Request an Appointment
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default VeritasHighlight;