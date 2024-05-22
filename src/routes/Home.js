import React from 'react'
import Navbar from '../Components/Navbar';
import HeroImg from "../Components/HeroImg";
// import Work from "../Components/Work";
import Homecontent from "../Components/Homecontent.js";
import { Helmet } from "react-helmet";
import { SpeedInsights } from '@vercel/speed-insights/react';
// import LocomotiveScroll from 'locomotive-scroll';
import Footer from "../Components/Footer";
const Home = () => {

// 


  return (
  
   <div>
        <Helmet>
        <title>Home | Optima Physio Care</title>
        <meta name="providing personalized care that addresses your unique needs" content="    Optima Physio Care, your trusted partner in achieving optimal health where we are dedicated to restoring movement, enhancing functionality, and promoting overall well-being." description="Optima Physio Care, your trusted partner in achieving optimal health where we are dedicated to restoring movement, enhancing functionality, and promoting overall well-being. " />
    </Helmet>
    
      <Navbar/>
      <HeroImg/>
      
      <Homecontent/>
     
      <Footer/>
      <SpeedInsights />
      </div>
    
  );
};

export default Home
