// import { Link } from "react-router-dom"
// import pt4 from "../assets/pt4.jpg"
import "./HomecontentStyle.css";
import d from "../assets/o1.png"
import a from "../assets/o2.png"
import b from "../assets/o3.png"

import e from "../assets/s1.png"
import f from "../assets/s2.png"
import g from "../assets/s3.jpg"





const Homecontent = () => {

  
    return (
      
      <><div className="big-feature">
        <div className="container flex big-f ">
          <div className="big-feature-img ds">
            <img src={d} alt="true" />
          </div>
          <div className="big-feature-des ">
            <h2> <span>Pain Relief and Wellness:</span> Your Journey to a Better You</h2>
            <p>Embark on a path to improved well-being with our comprehensive physiotherapy services. We're here to alleviate your pain, enhance your mobility, and help you rediscover a pain-free, active lifestyle. Explore our range of specialized treatments designed to address your unique needs and goals.</p>
          </div>
        </div>
        <div className="container flex big-f reverse">
          <div className="big-feature-img ds">
            <img src={a} alt="true" />
          </div>
          <div className="big-feature-des ">

            <h2> <span>Meet Our Expert Physiotherapy Team:</span> Your Health, Our Priority</h2>
            <p>At our clinic, you'll find a team of dedicated and experienced physiotherapists committed to your health and recovery. We pride ourselves on delivering personalized care to each patient, ensuring that you receive the highest level of treatment and support. Discover the difference our expertise can make in your life</p>
          </div>
        </div>

        <div className="container flex big-f ">
          <div className="big-feature-img ds">
            <img src={b} alt="true" />
          </div>
          <div className="big-feature-des ">

            <h2><span>Injury Rehabilitation Simplified: </span>Regain Your Strength and Confidence</h2>
            <p>Injury recovery shouldn't be complicated. Our approach is all about simplifying the process while achieving remarkable results. Whether you're recovering from surgery, a sports injury, or a musculoskeletal issue, we're here to guide you back to full strength and confidence. Begin your journey to recovery with us today.</p>
          </div>
        </div>
        <div className="service"><h4>Our Services</h4></div>
        <div className="feature-area flex">

          <div className="feature-card flex">
            <img src={e} alt="true" />
            <h3>Home service</h3>
            <p>Your Space, Your Health, Our Priority</p>
            <a href="./Treat"><button className="btn">Load more <span>→</span></button></a>
          </div>
          <div className="feature-card flex">
            <img src={g} alt="true" />
            <h3>Digital service</h3>
            <p>Online Physio: Where Care Knows No Boundaries</p>
            <a href="./Treat"><button className="btn">Load more <span>→</span></button></a>
          </div>
          <div className="feature-card flex">
            <img src={f} alt="true" />
            <h3>Clinical service</h3>
            <p>Clinical Mastery for Your Optimal Health</p>
            <a href="./Treat"><button className="btn">Load more <span>→</span></button></a>
          </div>
        </div>
        </div>
        
      </>
 
    )
  }
  
  export default Homecontent