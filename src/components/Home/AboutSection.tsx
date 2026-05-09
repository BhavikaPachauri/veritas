import { Link } from "react-scroll";

function AboutSection() {
    return (
        <>
            <div className="bg-[url('/img/img1.png')] bg-center bg-cover bg-no-repeat h-[40vh] md:h-[70vh]  ">
            </div>
            <section className="w-full bg-gray-300 py-6 sm:py-8 md:py-14 px-4 sm:px-6 md:px-10">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">

                    {/* Left Content */}
                    <div>
                        <h2 className="text-base text-center px-4 sm:px-26 md:px-0 sm:text-lg md:text-[18px] lg:text-[24px] font-medium text-[#001025] archivo ">
                            Understanding Your Rights: A Talk with Our Family Counsel
                        </h2>

                    </div>

                    {/* Button */}
                    <div className="flex justify-center md:justify-start w-full md:w-auto">
                        {/* <button className="w-full md:w-auto archivo font-semibold bg-[#001025] text-white text-xs md:text-[13px]  px-5 py-2.5  transition">
                            READ MORE
                        </button> */}
                        <Link key="about"
                         to="about"
                         smooth={true}
                         duration={500}
                         offset={-100}
                         spy={true}
                            className="relative inline-flex items-center justify-center px-8 py-2.5 overflow-hidden tracking-tighter text-white  group"
                        >
                            <span
                                className="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#052146] rounded-full group-hover:w-56 group-hover:h-56"
                            ></span>

                            <span
                                className="absolute inset-0 w-full h-full   opacity-80 bg-[#001025]"
                            ></span>
                            <span className="archivo flex items-center justify-center gap-2  relative text-white text-sm lg:text-base ">
                                <p className="uppercase archivo">Read More</p>
                            </span>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutSection;
