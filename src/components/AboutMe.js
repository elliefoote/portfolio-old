import * as React from "react"
import { StaticImage } from "gatsby-plugin-image";
import EllieWork from '../images/Ellie_Work1.jpg';
import EllieFooteCV from '../images/EllieFooteCV.pdf';

const AboutMe = () => {
  return (
    <div id="about-me" className="text-light diagonal">

        <h2 className="display-3 mb-4">About Me</h2>
        
        <div className="container w-75">
        <div className="row mt-3">
        
        <div className="col-md-5 d-flex justify-content-center">

        <div className="about-me-container rounded mb-4 mt-3">
        <img 
            src={EllieWork}
            className="about-me-pic rounded"
            alt="Ellie Foote"
        />
        </div>

        </div>

        <div className="about-me-text col-md-7 fs-5 d-flex flex-column pe-3">
        <h3>The story so far</h3>
        My career (and life) journey has taken me from a small country town in Australia to my current home in Barcelona. 
        <br /><br/>
        My greatest strengths are my creativity, flexibility and adaptability. I'm attracted to tech because I love solving tricky problems and being pushed to learn and develop. 
        <br /><br/>
        <h3>My tech stack:</h3> React.js | HTML/CSS/Bootstrap | Node.js | Express.js | MySQL <br /><br/>
        <h3>Currently learning:</h3> Gatsby.js (I used it to build this site!)
        <div className="d-flex justify-content-start mt-4 w-100"><a href={EllieFooteCV} className="contact-btn text-light fs-5 py-2 px-3">My CV</a></div>
        </div>
        

        </div>
        </div>

    </div>
  )
}

export default AboutMe;