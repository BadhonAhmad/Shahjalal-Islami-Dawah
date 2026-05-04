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

      {/* Location section */}
      <section className="bg-gray-900 text-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-white mb-2">ঠিকানা</h3>
            <p className="text-gray-400">শাহজালাল ইসলামী দাওয়াহ সেন্টার, সিলেট</p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-700/50">
            <iframe
              title="আমাদের অবস্থান"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d500!2d91.8983769!3d24.9083835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1&z=17"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="text-center mt-4">
            <a
              href="https://www.google.com/maps?q=24.9083835,91.8983769&z=17&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors text-sm"
            >
              <span>বড় করে দেখুন</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Contact section */}
      <div id="contact-page">
        <Contact />
      </div>
    </div>
  )
}

export default Home
