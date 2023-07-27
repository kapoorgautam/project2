import { Link } from "react-router-dom"
import "./AboutContentStyles.css";
import dr from "../assets/dr.jpg"
import neuroweb from "../assets/neuroweb.jpg"
import React from 'react'
import "./AboutcardStyles.css";


const AboutContent = () => {

  
  return (
    <>
 
    <div className="about">
      <div className="abouttext">
        <h1>Optima physiocare trusts</h1>
        <p>
        Currently working in Jivisha advanced medical centre,paschim vihar,Delhi...
Treated 200 + patient in clinical practice..
Also have 6 months experience from "Rohtak PGIMS"

</p>
<p> Our Physiotherapist.. </p>
{/* <h3>Dr. Nikhil kapoor</h3>     */}
  </div>
  <div className="container">
      <div className="leftaboutimg">
        <img src= {dr} alt="true" />
        <h1>Dr. Nikhil kapoor</h1>
        <h2> Currently working in Jivisha advanced medical centre,paschim vihar,Delhi...
Treated 200 + patient in clinical practice..
        </h2>
      </div>
      <div className="rightaboutimg">
        <img src= {neuroweb} alt="true" />
      </div>
      </div>
          <div>
          <div className="acard">
       
        <div className="acard1-container">
       
            <div className="acard1">
                <h3>Expert Physiotherapist</h3>
                <p>Team certified & trained in latest advanced physio techniques</p>
            </div>
            <div className="acard1">
                <h3> Highly Rated </h3>
                 <p>+4.8 Star Rating for quality physiotherapy care and service</p>
              </div>
            <div className="acard1">
                <h3> Unique Approach </h3>
                <p>Combination of manual therapy and exercise therapy</p>
              
            </div>
            <div className="acard1">
                <h3>Personalized Care </h3>
                <p> Unique treatment for your specific ailment </p>

              
            </div>
            <div className="acard1">
                <h3> RIGHT INFRASTRUCTURE </h3>  
                <p> World-class equipment and modalities</p>
              
            </div>
      
    </div>
         
      
</div>
</div>

< div className="aboutreq">

<h1>Get your appointment right now...</h1>
<div className="aboutb">   <Link to="/Contact" className="btn"> Contact </Link></div>

</div>
    </div></>

  )
}

export default AboutContent
