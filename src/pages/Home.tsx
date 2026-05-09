
import Navbar from '../common/Navbar'
import AboutSection from '../components/Home/AboutSection'
import AttorneyHero from '../components/Home/LvivingTogether'
import ExpertiseIntro from '../components/Home/About'
import Faq from '../components/Home/Faq'
import FieldsOfExpertise from '../components/Home/Service'
import Hero from '../components/Home/Hero'
import Slider from '../components/Home/Slider'
import WorkingBanner from '../components/Home/WorkingBanner'
import ContactLocations from '../components/Home/ContactLocations'
import Testimonials from '../components/Home/FinancialSettlement'
import InquirySection from '../components/Home/BookingAppointment'
import Footer from '../common/Footer'
import VeritasHighlight from '../components/Home/PrenuptialAgreement'
import LegalTopBar from '../components/Home/LegalTopBar'



function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <LegalTopBar/>
    <AboutSection/>
    <ExpertiseIntro/>
    <FieldsOfExpertise/>
    <Slider/>
    <WorkingBanner/>
    <VeritasHighlight/>
    <AttorneyHero/>
    <Faq/>
    <ContactLocations/>
    <Testimonials/>
    <InquirySection/>
    <Footer/>
    
    </>
  )
}

export default Home