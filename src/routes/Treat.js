import React from 'react'
import Navbar from '../Components/Navbar';

import Footer from "../Components/Footer";
import HeroImg2 from '../Components/HeroImg2';
import PricingCard from '../Components/PricingCard';
import Work from '../Components/Work';


const Treat = () => {
  return (
    <div>
        <Navbar/>
        <HeroImg2/>
        <Work/>
        <PricingCard/>
         <Footer/>
         <div className="text1">
          <h1>Treatment that we treat </h1>
          <p>Your good healt is our responsibility...</p>
        </div>
       
    </div>
  )
}

export default Treat
