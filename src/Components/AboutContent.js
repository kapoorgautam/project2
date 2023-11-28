import { Link } from "react-router-dom"
import "./AboutContentStyles.css";
import dr from "../assets/dr.jpg"
import neuroweb from "../assets/about2.png"
import React from 'react'
import "./AboutcardStyles.css";



const AboutContent = () => {

  
  return (
    <>
 
    <div className="about">
      <div className="abouttext">
        <h1>Optima physiocare trusts</h1>
    
{/* <p className="pe"> Our Physiotherapist.. </p> */}

  </div>
  <div className="container">
  <div className="rightaboutimg">
        <img src= {neuroweb} alt="true" />
        <div className="aboutdr margin">
       
        <p>
        Welcome to Optima Physio Care, your trusted partner in achieving optimal health, where we are dedicated to restoring movement, enhancing functionality, and promoting overall well-being. Our team of experienced and compassionate physiotherapists is committed to providing personalized care that addresses your unique needs.</p>
        <h1>Personalized Care:</h1>
        <p>
        We recognize that every patient is different, and one-size-fits-all approaches simply don't work. That's why we take the time to conduct thorough assessments, listen to your concerns, and work collaboratively to develop personalized treatment plans. Your goals are our goals, and we are dedicated to helping you achieve them.</p>
        </div>
      </div>
      </div>

      <div className="leftaboutimg">
        
       
        <div className="aboutdr">
        <h1>Dr. Nikhil kapoor</h1>
        <p>
Meet Dr. Nikhil kapoor, the heart and soul of Optima Physio Care's exceptional physiotherapy team. With a passion for patient-centered care and a wealth of experience, Dr. kapoor is dedicated to guiding individuals on their path to optimal health and well-being..</p>
        <h1>Expertise and Experience:</h1>
        <p>
        Dr. kapoor brings a wealth of expertise to Optima Physio Care. With a background in physiotherapy and years of hands-on experience, Dr. kapoor has successfully treated a diverse range of conditions. Whether it's rehabilitation after surgery, managing chronic pain, or optimizing sports performance, Dr. kapoor combines extensive knowledge with a compassionate approach.</p>
        <h1>Community Involvement:</h1>
        <p>
        Beyond the clinic, Dr. [Last Name] is deeply involved in the community. Whether it's conducting workshops, participating in health fairs, or collaborating with local organizations, Dr. [Last Name] is passionate about spreading awareness regarding the benefits of physiotherapy and overall well-being.</p>
        </div>
        <img src= {dr} alt="true" />
        
     
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
                <h3> Right Infrastructure </h3>  
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
