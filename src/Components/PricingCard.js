import "./PricingCardStyles.css";

import React from 'react'

import { Link } from "react-router-dom";

const Pricingcard = () => {
  return (
    <div className="pricing">
       <h1 className="plans-heading">Services that we provide...</h1>
        <div className="card1-container">
       
            <div className="card1">
                <h3>-HOME SERVICE-</h3>
                <span className="bar"></span>
                <p className="btc"> Rs.600</p>
                
                <p>~Your Space, Your Health, Our Priority</p>
               <Link to="/contact" className="btn">  GET APPOINTED</Link>
            </div>
            <div className="card1">
                <h3>- CLINICAL SERVICE -</h3>
                <span className="bar"></span>
                <p className="btc"> Rs.400</p>
               
                <p>~Clinical Mastery for Your Optimal Health</p>
               <Link to="/contact" className="btn"> GET APPOINTED</Link>
            </div>
            <div className="card1">
                <h3>- ONLINE SERVICE -</h3>
                <span className="bar"></span>
                <p className="btc"> Rs.200</p>
                
                <p>~Online Physio: Where Care Knows No Boundaries</p>
               <Link to="/contact" className="btn"> GET APPOINTED</Link>
            </div>
              
              
        </div>
      
    </div>
  )
}

export default Pricingcard
