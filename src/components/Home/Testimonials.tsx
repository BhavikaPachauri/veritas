function Testimonials() {
    return (
        <div className="relative bg-[#001025] overflow-hidden">

            {/* Background Image — right side */}
            <div className="hidden md:block absolute right-0 bottom-0 w-[40%] lg:w-[45%] pointer-events-none select-none">
                <img
                    src="/img/img7.png"
                    alt=""
                    className="w-full h-full object-contain object-bottom"
                />
            </div>

            {/* Layout */}
            <div className="flex flex-col md:grid md:grid-cols-2 min-h-[500px]">

                {/* ✅ LEFT SIDE — FIXED */}
                <div className="relative w-full h-full min-h-[500px] hidden md:block">

                    <img
                        src="/img/Financial_settlement.png"
                        alt="Financial Settlement"
                        className="absolute inset-0 w-[550px] h-full object-cover"
                    />



                    {/* Arrow */}
                    <div className="absolute top-20 right-10 lg:right-8 flex items-center">
                        <svg width="180" height="12" viewBox="0 0 200 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 4.77344C0.447723 4.77344 0 5.22115 0 5.77344C0 6.32572 0.447723 6.77344 1 6.77344V4.77344ZM199.774 5.77344L194 -6.53267e-05L188.226 5.77344L194 11.5469L199.774 5.77344ZM1 6.77344L194 6.77344V4.77344L1 4.77344V6.77344Z" fill="#BF9874" />
                        </svg>

                    </div>
                </div>

                {/* RIGHT CONTENT */}
                <div className="relative z-10 px-6 sm:px-10 md:px-8 lg:px-12 py-14 md:py-16 lg:py-20 flex flex-col justify-center">

                    {/* Label */}
                    <div className="flex items-center gap-3 mb-6">
                        <span className="text-[10px] sm:text-[11px] tracking-[3px] text-[#BF9874] uppercase archivo">
                            Ending a relationship is hard—finances shouldn’t be.
                        </span>
                    </div>

                    {/* Heading */}
                    <h2 className="text-2xl sm:text-4xl md:text-4xl lg:text-5xl text-white leading-tight marcellus">
                        Financial Settlements
                    </h2>

                    {/* Content */}
                    <p className="text-sm text-[#829BBC] mt-6 max-w-sm leading-7 archivo">
                        What We Can Help With
                    </p>

                    <p className="text-sm text-white mt-2 max-w-sm leading-7 archivo">
                        From the family home and savings to pensions, debts, and spousal maintenance, we guide you through dividing assets fairly, practically, and with your future in mind.
                    </p>

                    <p className="text-sm text-[#829BBC] mt-6 max-w-sm leading-7 archivo">
                        How We Help
                    </p>

                    <p className="text-sm text-white mt-2 max-w-sm leading-7 archivo">
                        Whether your separation is amicable or complex, we'll clarify your rights, support negotiations, and prepare a legally binding Consent Order — protecting you from future claims.
                    </p>

                    {/* Controls */}
                    <div className="flex items-center gap-3 mt-10">
                        <svg width="40" height="24" viewBox="0 0 58 24" fill="none">
                            <path
                                d="M55.5469 13.5469C56.6514 13.5469 57.5469 12.6514 57.5469 11.5469C57.5469 10.4423 56.6514 9.54688 55.5469 9.54688V13.5469ZM-0.000130653 11.5469L11.5469 23.0939L23.0939 11.5469L11.5469 -0.000130653L-0.000130653 11.5469ZM55.5469 9.54688H11.5469V13.5469H55.5469V9.54688Z"
                                fill="#BF9874"
                            />
                        </svg>

                        <div className="w-2 h-2 bg-white rotate-45" />
                        <div className="w-2 h-2 bg-white rotate-45" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Testimonials;