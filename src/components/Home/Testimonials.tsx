function Testimonials() {
    return (
        <div className="relative bg-[#001025] overflow-hidden">

            {/* Background Image — right side, desktop only */}
            <div className="hidden md:block absolute right-0 bottom-0 w-[40%] lg:w-[45%] pointer-events-none select-none">
                <img
                    src="/img/img7.png"
                    alt=""
                    className="w-full h-full object-contain object-bottom"
                />
            </div>

            {/* Layout */}
            <div className="flex flex-col md:grid md:grid-cols-2 min-h-[420px]">

                {/* Left — decorative arrow, hidden on mobile */}
                <div className="hidden md:flex justify-end items-start pt-20 pr-10 lg:pr-16">
                    <svg width="150" height="20" viewBox="0 0 200 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M1 4.77344C0.447723 4.77344 0 5.22115 0 5.77344C0 6.32572 0.447723 6.77344 1 6.77344V4.77344ZM199.774 5.77344L194 -6.53267e-05L188.226 5.77344L194 11.5469L199.774 5.77344ZM1 6.77344L194 6.77344V4.77344L1 4.77344V6.77344Z"
                            fill="#BF9874"
                        />
                    </svg>
                </div>

                {/* Right — content */}
                <div className="relative z-10 px-6 sm:px-10 md:px-8 lg:px-12 py-14 md:py-16 lg:py-20 flex flex-col justify-center">

                    {/* Label */}
                    <div className="flex items-center gap-3 mb-6">
                        <span className="text-[10px] sm:text-[11px] tracking-[3px] text-[#BF9874] archivo uppercase">
                            Testimonials
                        </span>
                    </div>

                    {/* Heading */}
                    <h2 className="text-2xl sm:text-4xl md:text-4xl lg:text-5xl text-white leading-tight marcellus">
                        CLIENT HAVE <br />
                        CONFIDENCE IN US
                    </h2>

                    {/* Quote */}
                    <p className="text-sm text-[#829BBC] mt-6 max-w-sm leading-7 archivo">
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua."
                    </p>

                    {/* Author */}
                    <div className="mt-6">
                        <p className="font-medium text-lg sm:text-xl text-white archivo">Walter Lexlay</p>
                        <p className="text-[8px] tracking-[2px] text-white mt-1 archivo uppercase">
                            Entrepreneur
                        </p>
                    </div>

                    {/* Slider Controls */}
                    <div className="flex items-center gap-3 mt-10">
                        <svg width="40" height="24" viewBox="0 0 58 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M55.5469 13.5469C56.6514 13.5469 57.5469 12.6514 57.5469 11.5469C57.5469 10.4423 56.6514 9.54688 55.5469 9.54688V13.5469ZM-0.000130653 11.5469L11.5469 23.0939L23.0939 11.5469L11.5469 -0.000130653L-0.000130653 11.5469ZM55.5469 9.54688H11.5469V13.5469H55.5469V9.54688Z"
                                fill="#BF9874"
                            />
                        </svg>
                        <div className="w-2 h-2 bg-white rotate-45 flex-shrink-0" />
                        <div className="w-2 h-2 bg-white rotate-45 flex-shrink-0" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials