import { Link } from "react-router-dom";

function Hero() {
    return (
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
                    text-3xl sm:text-5xl md:text-6xl lg:text-[80px]
                    leading-tight marcellus mb-4">
                    Empowering You to Navigate Family Law
                </h1>

                <p className="
                    text-sm sm:text-base md:text-lg 
                    text-[#FFFFFF] archivo
                    max-w-md md:max-w-md">
                   At Family McKenzie, we understand that family law can feel complex and overwhelming.
                </p>

                <div className="mt-8 md:mt-12">
                    <Link
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
                    </Link>
                </div>

            </div>
        </div>
    );
}

export default Hero;