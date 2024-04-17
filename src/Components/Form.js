import "./FormStyles.css"
import React from 'react'
import d from "../assets/contact1.png"


<Helmet>
<title>Contact us| Optima Physio Care</title>
<meta name="providing personalized care that addresses your unique needs" content="Dr. Nikhil kapoor is deeply involved in the community. Whether it's conducting workshops, participating in health fairs, or collaborating with local organizations, Dr.kapoor is passionate about spreading awareness regarding the benefits of physiotherapy and overall well-being." />
</Helmet>

const Form = () => {
   return (

      <><div id ="n">
       <h2>Connect with Us for a Pain-Free Tomorrow..🩺</h2>
       </div>
       <div className="form-container">
      <div className="l-form">
      <img src= {d} alt="true" />
      <h1>Get in Touch with Us 👇</h1>
      <h5>We are here to support you on your journey to recovery and well-being.Thank you for considering Optima Physio Care for your physiotherapy needs. Whether you have questions, want to schedule an appointment, or simply seek more information, our team is here to assist you. Feel free to reach out</h5>
      <h5>At Optima Physio Care,Our team of experienced physiotherapists is here to support you on your journey to recovery and well-being. we're here to answer your questions, provide guidance, and schedule your first appointment. Take the first step towards a healthier,happier you – get in touch with us today!</h5>

      </div>

      
      
      <div className="form">
            <form action="https://formspree.io/f/mleyrpky" method="POST">
               <label>Name</label>
               <input name="Name" type="text"></input>
               <label class="form-check-label" htmlFor="flexRadioDefault2">Gender </label>
               <input name="Gender" type="text" className="form-check-label" id="flexRadioDefault2" />
               <label>Age</label>
               <input name="Age" type="int"></input>
               <label>Email</label>
               <input name="email" type="email"></input>
               <label>CONTACT NO</label>
               <input name="Phone no" type="text"></input>
               <label>Condition for which you seek physiotherapy</label>
               <textarea name="Condition" rows="6" placeholder="Type your Condition HERE!" />
               <button className="btn" type="submit">Submit</button>
            </form>
         </div>
         </div>

         <div class="mapouter">
            <div class="gmap_canvas">
               {/* eslint-disable-next-line */}
               <iframe width="100%" height="100%" id="gmap_canvas"

                  src="https://maps.google.com/maps?q=N.K. physiotherapy clinic A-26, shiv bux park, Shiv Park, Nangloi, Delhi, 110041&t=&z=12&ie=UTF8&iwloc=&output=embed"
                  frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>


            </div>
         </div></>
   )
}

export default Form
