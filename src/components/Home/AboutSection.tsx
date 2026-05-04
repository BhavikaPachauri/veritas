function AboutSection() {
    return (
        <>
            <div  className="bg-[url('/img/img1.png')] bg-cover bg-center h-[70vh] mt-32 ">
            </div>
            <section className="w-full bg-gray-300 py-6 sm:py-8 md:py-10 px-4 sm:px-6 md:px-10">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">

                    {/* Left Content */}
                    <div>
                        <h2 className="text-base sm:text-lg md:text-[26px] font-medium text-[#001025] archivo ">
                            An interview with our senior family counsel
                        </h2>
                        <p className="text-xs archivo  sm:text-base text-gray-600 mt-1 tracking-wide uppercase">
                            Read More
                        </p>
                    </div>

                    {/* Button */}
                    <div className="w-full md:w-auto">
                        <button className="w-full md:w-auto archivo font-semibold bg-[#001025] text-white text-xs sm:text-base px-5 py-2.5 rounded-sm hover:bg-blue-800 transition">
                            READ MORE
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutSection;