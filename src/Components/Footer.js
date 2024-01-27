import "./FooterStyles.css";
import React from 'react'
import { Link } from "react-router-dom"
import {FaHome, FaPhone,FaMailBulk, FaFacebook, FaInstagram, FaLinkedin} from "react-icons/fa";



const Footer = () => {
  return (
<div className="footer" >
    <div className="footer-container">
       <div className="left">
       <div className="location">
            <h4><FaHome className="h"size ={20} style={{marginRight: "2rem"}} /><a href="https://maps.google.com/maps?q=N.K. physiotherapy clinic A-26, shiv bux park, Shiv Park, Nangloi, Delhi, 110041"> NANGLOI DELHI-41,India</a></h4>
            <div>
               
               
            </div>

        </div>
         <div className="Phone">
         <h4><FaPhone  className="h "size ={20} style={{marginRight: "2rem"}}/><a href='tel:8447646815'> +91 8447646815</a> </h4>
         </div>
         <div className="email">
            <h4><FaMailBulk  className="h"size ={20} style={{marginRight: "2rem"}}/><a href= 'mailto:nikhilkapoor9540@gmail.com'>nikhilkapoor9540@gmail</a></h4>
         </div>
         <div className="social">
        <div className="fab">
        <Link to="https://www.facebook.com/profile.php?id=100094770625926&mibextid=ZbWKwL">
      <FaFacebook  className="h"  />
      </Link>
      <Link to="https://instagram.com/optimaphysiocare?igshid=MzMyNGUyNmU2YQ==">
      <FaInstagram className="h" /> </Link>
      <Link to="https://www.linkedin.com/in/nikhil-kapoor-68072b24a">
      <FaLinkedin className="h"/> </Link>
     
      </div>
      </div>
       </div>
       <div className="right">
        <h1>About Organization</h1>
        <p>We provide hand on manual therapy as well as through electro modalities.
        As a physiotherapist we come across many different patients with different types of disability such as ,PIVD , Cervical problems, scoliosis, osteo-arthritis,Low back ache and many more body ache issue and we provide best physio care to each and every person with 1-on-1 session also we are giving 24*7 hour service.</p>
  
       </div>
     </div>
     <p className="last"> Copyrights © 2023 Optima physio care. All Rights Reserved</p>
      
</div>
  )
}

export default Footer
