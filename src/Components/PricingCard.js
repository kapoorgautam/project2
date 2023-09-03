import "./PricingCardStyles.css";

import React from 'react'
import { Link } from "react-router-dom";

const Pricingcard = () => {
  return (
    <div className="pricing">
       <h1 className="plans-heading">Services that we provide...</h1>
        <div className="card1-container">
       
            <div className="card1">
                <h3>- HOME SERVICE -</h3>
                <span className="bar"></span>
                <p className="btc"> Rs.500</p>
                
                <p>- Responsive Design -</p>
               <Link to="/contact" className="btn">  GET APPOINTED</Link>
            </div>
            <div className="card1">
                <h3>- CLINICSL SERVICE -</h3>
                <span className="bar"></span>
                <p className="btc"> Rs.350</p>
               
                <p>- Responsive Design -</p>
               <Link to="/contact" className="btn"> GET APPOINTED</Link>
            </div>
            <div className="card1">
                <h3>- ONLINE SERVICE -</h3>
                <span className="bar"></span>
                <p className="btc"> Rs.250</p>
                
                <p>- Responsive Design -</p>
               <Link to="/contact" className="btn"> GET APPOINTED</Link>
            </div>
              
              
        </div>
      
    </div>
  )
}

export default Pricingcard
