import React from 'react'
import Navbar from '../Components/Navbar';

import Footer from "../Components/Footer";
import HeroImg2 from '../Components/HeroImg2';
import { SpeedInsights } from '@vercel/speed-insights/react';

import Form from "../Components/Form"
import { Helmet } from "react-helmet";

const Contact = () => {
  return (
    <><div>
        <Helmet>
        <title>Contact us| Optima Physio Care</title>
        <meta name="providing personalized care that addresses your unique needs" content="Dr. Nikhil kapoor is deeply involved in the community. Whether it's conducting workshops, participating in health fairs, or collaborating with local organizations, Dr.kapoor is passionate about spreading awareness regarding the benefits of physiotherapy and overall well-being." />
    </Helmet>
      <Navbar />
      <HeroImg2/>

      <Form />
      <Footer />
      <SpeedInsights />
    </div><div className="text1">
        <h1>Contact</h1>
       
      </div></>
  )
}

export default Contact
