import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Hero from './Hero'
import FeaturedProducts from './FeaturedProducts'
import AboutUs from './AboutUs'

const Home = () => {
  return (
    <div className='overflow-x-hidden min-h-screen flex flex-col bg-[#faf8fb]'>
      <Navbar />
      <Hero />
      <FeaturedProducts />
      <AboutUs />
      <Footer />
    </div>
  )
}

export default Home
