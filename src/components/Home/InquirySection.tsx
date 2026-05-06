import React from "react";

const InquirySection: React.FC = () => {
    return (
        <section className="relative bg-[#f4f4f4] py-24 px-4 overflow-hidden">


            <div className="hidden md:block absolute right-0 bottom-0 ">
                <img
                    src="/img/img7.png"
                    alt="background"
                    className="object-contain w-[400px] md:w-[800px]"
                />
            </div>

            <div className="max-w-4xl mx-auto relative z-10">

                {/* Heading */}
                {/* <div className="flex items-center justify-center gap-8 md:gap-6">
                    <svg width="107" height="12" viewBox="0 0 107 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M105.773 6.77343C106.326 6.77343 106.773 6.32571 106.773 5.77343C106.773 5.22114 106.326 4.77343 105.773 4.77343L105.773 6.77343ZM-6.53267e-05 5.77344L5.77344 11.5469L11.5469 5.77344L5.77344 -6.53267e-05L-6.53267e-05 5.77344ZM105.773 4.77343L5.77344 4.77344L5.77344 6.77344L105.773 6.77343L105.773 4.77343Z" fill="#BF9874" />
                    </svg>


                    <h2 className=" text-base md:text-5xl marcellus  text-[#0f1b2d]">
                        MAKE AN INQUIRY
                    </h2>

                    <svg width="107" height="12" viewBox="0 0 107 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 4.77344C0.447716 4.77344 0 5.22115 0 5.77344C0 6.32572 0.447716 6.77344 1 6.77344V4.77344ZM106.774 5.77344L101 -6.53267e-05L95.2265 5.77344L101 11.5469L106.774 5.77344ZM1 6.77344L101 6.77344V4.77344L1 4.77344V6.77344Z" fill="#BF9874" />
                    </svg>

                </div> */}

                <div className="flex items-center justify-center  gap-3 sm:gap-5 md:gap-6 flex-wrap">

                    {/* Left Line */}
                    <svg
                        className="w-12 sm:w-20 md:w-[107px] h-auto"
                        viewBox="0 0 107 12"
                        fill="none"
                    >
                        <path d="M105.773 6.77343C106.326 6.77343 106.773 6.32571 106.773 5.77343C106.773 5.22114 106.326 4.77343 105.773 4.77343L105.773 6.77343ZM-6.53267e-05 5.77344L5.77344 11.5469L11.5469 5.77344L5.77344 -6.53267e-05L-6.53267e-05 5.77344ZM105.773 4.77343L5.77344 4.77344L5.77344 6.77344L105.773 6.77343L105.773 4.77343Z" fill="#BF9874" />
                    </svg>

                    {/* Text */}
                    <h2 className="text-sm sm:text-xl md:text-3xl lg:text-5xl 
        marcellus text-[#0f1b2d] text-center whitespace-nowrap">
                        BOOK AN APPOINTMENT
                    </h2>

                    {/* Right Line */}
                    <svg
                        className="w-12 sm:w-20 md:w-[107px] h-auto"
                        viewBox="0 0 107 12"
                        fill="none"
                    >
                        <path d="M1 4.77344C0.447716 4.77344 0 5.22115 0 5.77344C0 6.32572 0.447716 6.77344 1 6.77344V4.77344ZM106.774 5.77344L101 -6.53267e-05L95.2265 5.77344L101 11.5469L106.774 5.77344ZM1 6.77344L101 6.77344V4.77344L1 4.77344V6.77344Z" fill="#BF9874" />
                    </svg>

                </div>

                <p className="text-center text-[12px] archivo tracking-[3px] text-[#BF9874] mt-4">
                    WE WOULD LOVE TO WORK WITH YOU
                </p>

                {/* Form */}
                <form className="mt-16 space-y-10">

                    {/* Row 1 */}
                    <div className="grid md:grid-cols-2 gap-10">
                        <input
                            type="text"
                            placeholder="Full Name"
                            className="bg-transparent border-b border-[#BF9874] pb-2 text-sm archivo outline-none placeholder:text-gray-500 placeholder:italic"
                        />
                        <input
                            type="email"
                            placeholder="E-mail"
                            className="bg-transparent border-b border-[#BF9874] pb-2 text-sm archivo outline-none placeholder:text-gray-500 placeholder:italic"
                        />
                    </div>

                    {/* Business Dropdown */}
                    <div>
                        <select
                            className="w-full bg-transparent border-b border-[#BF9874] pb-2 text-sm archivo outline-none text-gray-600 placeholder:italic"
                        >
                            <option>Business</option>
                            <option>Legal</option>
                            <option>Finance</option>
                        </select>
                    </div>

                    {/* Message */}
                    <div className="relative">
                        <textarea
                            placeholder="Message"
                            rows={2}
                            className="w-full bg-transparent border-b border-[#BF9874] pb-2 text-sm archivo outline-none placeholder:text-gray-500 placeholder:italic resize-none"
                        />


                    </div>

                    {/* Button */}
                    <div className="flex justify-center mt-10">
                        <button
                            type="submit"
                            className="border archivo font-bold border-[#001025] px-6 py-2 text-[10px] md:text-[14px] tracking-[2px] text-[#001025] hover:bg-[#0f1b2d] hover:text-white transition-all duration-300"
                        >
                            REQUEST AN APPOINTMENT
                        </button>
                    </div>

                </form>
            </div>
        </section>
    );
};

export default InquirySection;