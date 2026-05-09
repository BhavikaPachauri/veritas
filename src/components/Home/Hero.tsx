import { Link } from "react-scroll";

function Hero() {
    return (
        <section id="home">

            <div className="
            bg-[url('/img/img6.png')] bg-cover bg-center 
            min-h-[70vh] md:min-h-[90vh]
            flex items-center
            px-6 sm:px-10 md:px-20 lg:px-32
            py-16 md:py-24
        ">
                <div className="text-white max-w-3xl">

                    <p className="text-xs sm:text-sm md:text-base archivo text-[#9F6907] mb-3">
                        HOME OF LAW & ORDER
                    </p>

                    <h1 className="
                    text-3xl sm:text-5xl md:text-6xl lg:text-[70px]
                    leading-tight marcellus mb-4">
                        EMPOWERING YOU TO NAVIGATE FAMILY LAW
                    </h1>

                    <p className="
                    text-sm sm:text-base md:text-lg 
                    text-[#FFFFFF] archivo
                    max-w-md md:max-w-md">
                        At Family McKenzie, we understand that family law can feel complex and overwhelming.
                    </p>

                    <div className="mt-8 md:mt-12">
                        {/* <Link
                            to="/contact"
                            className="
                            inline-block
                            bg-[#9F6907] 
                            text-xs sm:text-sm
                            py-2 px-4 sm:px-6
                            archivo text-[#FFFFFF]
                        "
                        >
                            FIND OUT MORE
                        </Link> */}
                        <Link
                            key="services"
                            to="services"
                            smooth={true}
                            duration={500}
                            offset={-100}
                            spy={true}
                            className="relative inline-flex items-center justify-center px-8 py-2.5 overflow-hidden tracking-tighter text-white  group"
                        >
                            <span
                                className="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#9F6907] rounded-full group-hover:w-56 group-hover:h-56"
                            ></span>

                            <span
                                className="absolute inset-0 w-full h-full   opacity-60 bg-[#FFA400]"
                            ></span>
                            <span className="archivo flex items-center justify-center gap-2  relative text-white text-base ">
                                <p>FIND OUR MORE</p>

                            </span>
                        </Link>
                    </div>

                </div>
            </div>
        </section>

    );
}

export default Hero;
