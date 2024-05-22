import React, {useEffect,useRef} from 'react'
import Navbar from '../Components/Navbar';
import HeroImg from "../Components/HeroImg";
// import Work from "../Components/Work";
import Homecontent from "../Components/Homecontent.js";
import { Helmet } from "react-helmet";
import { SpeedInsights } from '@vercel/speed-insights/react';
import LocomotiveScroll from 'locomotive-scroll';
import Footer from "../Components/Footer";
const Home = () => {

// 


  return (
  
   <div>
        <Helmet>
        <title>Home | Optima Physio Care</title>
        <meta name="providing personalized care that addresses your unique needs" content="Dr. Nikhil kapoor is deeply involved in the community. Whether it's conducting workshops, participating in health fairs, or collaborating with local organizations, Dr.kapoor is passionate about spreading awareness regarding the benefits of physiotherapy and overall well-being." />
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
