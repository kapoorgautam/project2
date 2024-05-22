import React from 'react'
import Navbar from '../Components/Navbar';
import { Helmet } from "react-helmet";
import Footer from "../Components/Footer";
import HeroImg2 from '../Components/HeroImg2';
import PricingCard from '../Components/PricingCard';
import Work from '../Components/Work';
import { SpeedInsights } from '@vercel/speed-insights/react';


const Treat = () => {
  return (
    <div>
      <div>
      
   

        </div>

        <Helmet>
        <title> Treatment | Optima Physio Care</title>
        <meta name="providing personalized care that addresses your unique needs" content="Dr. Nikhil kapoor is deeply involved in the community. Whether it's conducting workshops, participating in health fairs, or collaborating with local organizations, Dr.kapoor is passionate about spreading awareness regarding the benefits of physiotherapy and overall well-being." />
    </Helmet>
        <Navbar/>
        <HeroImg2/>
        <Work/>
        <PricingCard/>
         <Footer/>
         <SpeedInsights />
         <div className="text1">
          {/* <h1>Treatment that we treat </h1> */}
          <p>Your good health is our responsibility...</p>
        </div>
       
    </div>
  )
}

export default Treat
