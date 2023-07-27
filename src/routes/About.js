import React from 'react'
import Navbar from '../Components/Navbar';
import Footer from "../Components/Footer";
 import HeroImg2 from '../Components/HeroImg2';
import AboutContent from '../Components/AboutContent';

const About = () => {
  return (
    <><div>
      <Navbar />
      <HeroImg2 />
      <AboutContent />
      <Footer />
    </div><div className="text1">
        <h1>Why Choose Us ?</h1>
        <p>Treated 1000+ patient</p>
      </div></>
  )
}

export default About
