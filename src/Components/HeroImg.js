import "./HeroImgStyles.css"
import React from 'react'
import ptImg from "../assets/pt1.jpg"
import { Link } from "react-router-dom"

 
const HeroImg = () => {
  return (
   <> <div className="hero">
      <div className="mask">
            <img className="into-img" src={ptImg} alt="IntroImg" />

            </div>
            <div className="content">
               <p>We are Here, for your good health</p>
                <h1>Optima Physio Care</h1>
           
          <div>
                <Link to="/Treat" className=" btn">Treatments</Link>
                 <Link to="/contact" className=" btn btn-light">Appoinment</Link>
        
       </div>
         </div>
      </div>
    
    </>
  )
}

export default HeroImg
