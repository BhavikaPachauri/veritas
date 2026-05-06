import React from "react";

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#071a2f] text-white archivo">
            {/* Top Section */}
            <div className="max-w-6xl mx-auto px-6 py-12 md:py-16 
                grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-16">

                {/* Column 1 */}
                <div>
                    <h3 className="text-sm font-semibold mb-4">Expertise</h3>
                    <ul className="space-y-2 text-sm text-gray-400">
                        <li><a href="#" className="hover:text-white transition">Divorce & Separation</a></li>
                        <li><a href="#" className="hover:text-white transition">Financial Settlement</a></li>
                        <li><a href="#" className="hover:text-white transition">Non-Molestation Order</a></li>
                        <li><a href="#" className="hover:text-white transition">Prenuptial Agreements</a></li>
                        <li><a href="#" className="hover:text-white transition">Domestic Abuse Support</a></li>
                        <li><a href="#" className="hover:text-white transition">Mediation Services</a></li>
                    </ul>
                </div>

                {/* Column 2 */}
                <div>
                    <h3 className="text-sm font-semibold mb-4">World Offices</h3>
                    <ul className="space-y-2 text-sm text-gray-400">
                        <li>London, United Kingdom</li>
                        <li>Edinburgh, Scotland</li>
                        <li>Dublin, Republic of Ireland</li>
                    </ul>
                </div>

                {/* Column 3 */}
                <div>
                    <h3 className="text-sm font-semibold mb-4">FAQ</h3>
                    <ul className="space-y-2 text-sm text-gray-400">
                        {[
                            "How do I start a divorce?",
                            "What is a clean break order?",
                            "How is custody determined?",
                            "Do I need a solicitor?",
                            "How long does divorce take?",
                            "Are you licensed in my country?"
                        ].map((item, index) => (
                            <li key={index}>
                                <button
                                    className="text-left w-full hover:text-white transition"
                                    aria-label={item}
                                >
                                    {item}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Column 4 */}
                <div>
                    <h3 className="text-sm font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-2 text-sm text-gray-400">
                        <li><a href="#" className="hover:text-white transition">About Our Firm</a></li>
                        <li><a href="#" className="hover:text-white transition">Meet the Team</a></li>
                        <li><a href="#" className="hover:text-white transition">Client Testimonials</a></li>
                        <li><a href="#" className="hover:text-white transition">Case Results</a></li>
                    </ul>
                </div>
            </div>

            {/* CTA Section */}
            <div className="max-w-6xl mx-auto px-6 pb-10 
                flex flex-col md:flex-row gap-6 
                justify-between items-start md:items-center">

                <h2 className="text-lg md:text-xl marcellus leading-snug max-w-md">
                    HIRE ONE OF OUR PROFESSIONAL <br />
                    LEGAL EXPERT NOW
                </h2>

                <p className="text-sm">
                    Emergency Call{" "}
                    <a href="tel:+442083990000" className="text-[#BF9874] hover:underline">
                        +44 208 399 0000
                    </a>
                </p>
            </div>

            {/* Bottom Bar */}
            <div className="bg-[#cfd5dd] text-[#1a2a3a] text-xs py-3">
                <div className="max-w-6xl mx-auto px-6 flex justify-center">
                    <span className="text-center">
                        Copyright @2026 Family Mckenzie, All Rights Reserved
                    </span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;