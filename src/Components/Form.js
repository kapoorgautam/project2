import "./FormStyles.css"
import React from 'react'
import d from "../assets/dr-c.jpg"
// import p from "../assets/pt2.jpg"




const Form = () => {
   return (

      <>
       <h2>We are here to help you...🩺</h2>
       <div className="form-container">
      <div className="l-form">
      <img src= {d} alt="true" />
      {/* <img src= {p} alt="true" /> */}
      {/* <h2>We are here to help you...🩺</h2> */}
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
