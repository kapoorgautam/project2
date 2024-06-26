import React from 'react'
import Navbar from '../Components/Navbar';
import Footer from "../Components/Footer";
 import HeroImg2 from '../Components/HeroImg2';
import AboutContent from '../Components/AboutContent';
import { Helmet } from "react-helmet";
import { SpeedInsights } from '@vercel/speed-insights/react';

// import ProfileSlider from '../Components/ProfileSlider';

import "./Frontstyle.css";

const About = () => {
  return (
    <><div>
        <Helmet>
        <title>About | Optima Physio Care</title>
        <meta name="providing personalized care that addresses your unique needs" content="Dr. Nikhil kapoor is deeply involved in the community. Whether it's conducting workshops, participating in health fairs, or collaborating with local organizations, Dr.kapoor is passionate about spreading awareness regarding the benefits of physiotherapy and overall well-being." />
    </Helmet>
      <Navbar />
      <HeroImg2 />
      <AboutContent />
      <Footer />
      <SpeedInsights />
    </div> </>
  )
}

export default About
