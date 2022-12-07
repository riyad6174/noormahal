import React from 'react'
import AboutSection from '../Components/AboutSection'
import Banner from '../Components/Banner'
import DrinkAndDine from '../Components/DrinkAndDine'
import FacilitiesSection from '../Components/FacilitiesSection'
import FixedSection from '../Components/FixedSection'
import Footer from '../Components/Footer'
import GuestReview from '../Components/GuestReview'
import MeetingAndEvents from '../Components/MeetingAndEvents'
import Navbar from '../Components/Navbar'
import OfferSection from '../Components/OfferSection'
import SuitsSection from '../Components/SuitsSection'

const HomePage = () => {
  return (
    <div>
  <Navbar />
  <Banner />
  <AboutSection />
  <SuitsSection />
  <DrinkAndDine />
  <FacilitiesSection  />
  <MeetingAndEvents />
  <FixedSection />
  <OfferSection />
  <GuestReview />
  <Footer />
    </div>
  )
}

export default HomePage