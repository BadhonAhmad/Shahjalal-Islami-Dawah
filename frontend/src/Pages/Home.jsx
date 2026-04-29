import React from 'react'
import ImageSlider from '../Components/ImageSlider/ImageSlider'
import AboutUs from '../Components/AboutUS/AboutUs'
import OurActivities from '../Components/OurActivities/OurActivities'
import DonateSection from '../Components/DonateSection/DonateSection'
import Contact from '../Components/Contact/Contact'

const Home = () => {
  return (
    <div>
      <ImageSlider />
      <AboutUs />
      <OurActivities />
      <DonateSection />
      <Contact />
    </div>
  )
}

export default Home
