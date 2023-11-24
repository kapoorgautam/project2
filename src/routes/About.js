import React from 'react'
import Navbar from '../Components/Navbar';
import Footer from "../Components/Footer";
 import HeroImg2 from '../Components/HeroImg2';
import AboutContent from '../Components/AboutContent';
// import ProfileSlider from '../Components/ProfileSlider';

import "./Frontstyle.css";

const About = () => {
  return (
    <><div>
      <Navbar />
      <HeroImg2 />
      {/* <div className='p'><ProfileSlider /></div> */}

      <AboutContent />
      <Footer />
    </div> </>
  )
}

export default About
