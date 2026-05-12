const ExpertiseIntro = () => {
    return (
        <section id="about" className="w-full bg-[#001025] py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-10">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">

                {/* Left — Two Images */}
                <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6">
                    <div className="w-full h-[200px] sm:h-[280px] md:h-[340px] lg:h-[420px] overflow-hidden">
                        <img
                            src="/img/img3.webp"
                            alt="Lawyers team"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="w-full h-[200px] sm:h-[280px] md:h-[340px] lg:h-[420px] overflow-hidden">
                        <img
                            src="/img/img4.webp"
                            alt="Handshake"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Right — Content */}
                <div className="text-white pl-0 lg:pl-6 xl:pl-10">

                    {/* Drop cap paragraph */}
                    <div className="flex items-start gap-1">
                        <div className=" text-4xl sm:text-5xl text-[#c8a96a] leading-none marcellus flex-shrink-0 " style={{marginTop:"-5px"}}>
                            O
                        </div>
                        <p style={{marginTop:"-5px"}} className=" text-sm md:text-base max-w-xl md:max-w-2xl lg:max-w-[350px] text-justify archivo">ur comprehensive legal guide is designed to help you: Understand your rights and legal options while exploring practical solutions tailored to your situation. Make informed decisions with confidence as you navigate family law with clarity, care, and the support you need.
                        <p className="mt-2 text-sm md:text-base max-w-xl md:max-w-2xl lg:max-w-md text-justify archivo">Family law matters are deeply personal, and no two situations are ever the same. Whether you're facing a divorce, a custody dispute, or a financial settlement, having the right information at the right time makes all the difference. We're here to simplify the legal process, so you never have to face it alone.</p>
                        <p className="mt-2 text-sm md:text-base max-w-xl md:max-w-2xl lg:max-w-md text-justify archivo">
                         From your first question to your final resolution, our guide walks you through every step — offering honest, straightforward advice that puts your family's wellbeing first
                        </p>    
                        </p>
                        
                          
                      
                       
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ExpertiseIntro;