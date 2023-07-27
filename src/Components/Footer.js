import "./FooterStyles.css";
import React from 'react'
import { Link } from "react-router-dom"
import {FaHome, FaPhone,FaMailBulk, FaFacebook, FaInstagram, FaLinkedin, FaSnapchat} from "react-icons/fa";



const Footer = () => {
  return (
<div className="footer" >
    <div className="footer-container">
       <div className="left">
       <div className="location">
            <FaHome size ={20} style={{color:"white" ,marginRight: "2rem"}}/>
            <div>
                <p>NANGLOI DELHI-41,India</p>
               
            </div>

        </div>
         <div className="Phone">
         <h4><FaPhone size ={20} style={{color:"white" ,marginRight: "2rem"}}/> 91-8447646815</h4>
         </div>
         <div className="email">
            <h4><FaMailBulk size ={20} style={{color:"white" ,marginRight: "2rem"}}/> nikhilkapoor9540@gmail.com</h4>
         </div>
         <div className="social">
        <div className="fab">
        <Link to="https://www.facebook.com/profile.php?id=100094770625926&mibextid=ZbWKwL">
      <FaFacebook size ={30} style={{color:"white" ,marginRight: "1rem"}} />
      </Link>
      <Link to="https://wa.me/918447646815?text=hello">
      <FaInstagram size ={30} style={{color:"white" ,marginRight: "1rem"}} /> </Link>
      <Link to="https://wa.me/918447646815?text=hello">
      <FaLinkedin size ={30} style={{color:"white" ,marginRight: "1rem"}}/> </Link>
      <Link to="https://wa.me/918447646815?text=hello">
      <FaSnapchat size ={30} style={{color:"white" ,marginRight: "1rem"}}/> </Link>
      </div>
      </div>
       </div>
       <div className="right">
        <h1>ABOUT MYSELF</h1>
        <p>we provide hand on manual therapy as well as through electro modalities.
        As a physiotherapist we come across many different patients with different types of disability such as ,PIVD , Cervical problems, scoliosis, osteo-arthritis,Low back ache and many more body ache issue....and we provide best physio care to each and every person with 1-on-1 session... also we are giving 24*7 hour service.</p>
  
       </div>
     </div>
     <p className="last"> Copyrights © 2023 Optima physio care. All Rights Reserved</p>
      
</div>
  )
}

export default Footer
