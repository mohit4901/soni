import React from 'react'
import Hero from '../components/Hero'
import Categories from '../components/Categories'
import LatestCollection from '../components/LatestCollection'
import AboutSection from '../components/AboutSection'
import Gallery from '../components/Gallery'
import Videos from '../components/Videos'
import ContactPreview from '../components/ContactPreview'

const Home = () => {
  return (
    <div className="w-full overflow-hidden">

      {/* Hero Section */}
      <Hero />

      {/* Categories */}
      <Categories />

      {/* Products */}
      <LatestCollection />

      {/* About Us */}
      <AboutSection />

      {/* Gallery */}
      <Gallery />

      {/* Videos */}
      <Videos />

      {/* Testimonials */}
    

      {/* Contact Preview */}
      <ContactPreview />

      

    </div>
  )
}

export default Home
