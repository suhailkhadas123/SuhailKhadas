import React from 'react'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import HeroSection from '../section/herosection.jsx'
function Mainlayout() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Footer />
    </div>
  )
}

export default Mainlayout
