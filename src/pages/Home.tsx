
import Navbar from '../common/Navbar'
import AboutSection from '../components/Home/AboutSection'
import AttorneyHero from '../components/Home/AttorneyHero'
import ExpertiseIntro from '../components/Home/ExpertiseIntro'
import Faq from '../components/Home/Faq'
import FieldsOfExpertise from '../components/Home/FieldsOfExpertise'
import Hero from '../components/Home/Hero'
import Slider from '../components/Home/Slider'
import WorkingBanner from '../components/Home/WorkingBanner'
import ContactLocations from '../components/Home/ContactLocations'
import Testimonials from '../components/Home/Testimonials'
import InquirySection from '../components/Home/InquirySection'
import Footer from '../common/Footer'
import VeritasHighlight from '../components/Home/VeritasHighlight'



function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
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