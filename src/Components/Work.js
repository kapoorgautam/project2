import "./WorkCardStyles.css";
import WorkCard from "./WorkCard";
import WorkCardData from "./WorkCardData"
import React from 'react'



function Work() {
    return (
        <div className="work-container">

<Helmet>
        <title> Treatment | Optima Physio Care</title>
        <meta name="providing personalized care that addresses your unique needs" content="Dr. Nikhil kapoor is deeply involved in the community. Whether it's conducting workshops, participating in health fairs, or collaborating with local organizations, Dr.kapoor is passionate about spreading awareness regarding the benefits of physiotherapy and overall well-being." />
    </Helmet>
            
            <h1 className="project-heading">Here are the conditions that we treat</h1>
            <div className="project-container">
               {WorkCardData.map((val,ind)  =>{
                return(
                    <WorkCard
                    key={ind}
                    imgsrc={val.imgsrc}
                    title={val.title}
                    text={val.text}
                    view={val.view}
                    />
                )
               }  )

               }
            </div>

        </div>
    );
}

export default Work
