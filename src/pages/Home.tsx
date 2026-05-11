import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import ExpertiseIntro from "../components/Home/About";
import AboutSection from "../components/Home/AboutSection";
import InquirySection from "../components/Home/BookingAppointment";
import ContactLocations from "../components/Home/ContactLocations";
import Faq from "../components/Home/Faq";
import Testimonials from "../components/Home/FinancialSettlement";
import Hero from "../components/Home/Hero";
import LegalTopBar from "../components/Home/LegalTopBar";
import AttorneyHero from "../components/Home/LvivingTogether";
import VeritasHighlight from "../components/Home/PrenuptialAgreement";
import FieldsOfExpertise from "../components/Home/Service";
import Slider from "../components/Home/Slider";
import WorkingBanner from "../components/Home/WorkingBanner";

function Home() {
  return (
    <>
      <a
        href="/#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-[#001025] focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <LegalTopBar />
        <AboutSection />
        <ExpertiseIntro />
        <FieldsOfExpertise />
        <Slider />
        <WorkingBanner />
        <VeritasHighlight />
        <AttorneyHero />
        <Faq />
        <ContactLocations />
        <Testimonials />
        <InquirySection />
      </main>
      <Footer />
    </>
  );
}

export default Home;
