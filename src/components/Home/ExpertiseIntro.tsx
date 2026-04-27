const ExpertiseIntro = () => {
    return (
        <section className="w-full bg-[#041c34] py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-10">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">

                {/* Left — Two Images */}
                <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6">
                    <div className="w-full h-[200px] sm:h-[280px] md:h-[340px] lg:h-[380px] overflow-hidden">
                        <img
                            src="/img/img3.png"
                            alt="Lawyers team"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="w-full h-[200px] sm:h-[280px] md:h-[340px] lg:h-[380px] overflow-hidden">
                        <img
                            src="/img/img4.png"
                            alt="Handshake"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Right — Content */}
                <div className="text-white pl-0 lg:pl-6 xl:pl-10">

                    {/* Drop cap paragraph */}
                    <div className="flex items-start gap-1">
                        <span className="text-4xl sm:text-5xl text-[#c8a96a] leading-none marcellus flex-shrink-0 mt-0.5">
                            O
                        </span>
                     
                        <ul className="space-y-3 text-sm sm:text-base text-gray-400 archivo">
                            <p className="mt-2">ur comprehensive legal guide is designed to help you:</p>
                            <li className="flex items-start gap-2">
                                <span className="text-[#c8a96a] mt-1">•</span>
                                <span>Understand your rights and legal options</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-[#c8a96a] mt-1">•</span>
                                <span>Explore practical solutions for your situation</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-[#c8a96a] mt-1">•</span>
                                <span>Make informed decisions with confidence</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-[#c8a96a] mt-1">•</span>
                                <span>Navigate family law with clarity and care</span>
                            </li>
                        </ul>
                    </div>

                    {/* Second Paragraph */}
                    {/* <p className="mt-6 text-sm sm:text-base leading-relaxed text-gray-400 archivo">
                        Helping individuals navigate personal family matters with privacy,
                        professionalism, and clarity. Our team focuses on peaceful resolution
                        and structured support.
                    </p> */}
                </div>

            </div>
        </section>
    );
};

export default ExpertiseIntro;