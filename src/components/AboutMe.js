import * as React from "react"
import { StaticImage } from "gatsby-plugin-image";
import EllieWork from '../images/Ellie_Work1.jpg';


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

        <div className="col-md-7 fs-5 d-flex flex-column justify-content-center align-items-center pe-3">
        My career journey has taken me from Melbourne to Barcelona, and from social policy to English teaching to software development. Many elements of software development are a great fit for my skills, including my love of solving problems and my drive to constantly learn new things. 
        <br /><br />
        On the front end, I love working with React.js, and I make everything look beautiful using HTML, vanilla CSS, and frameworks like Bootstrap. On the back end, I use Node.js and Express.js. When I’m building static sites (like this one!), I love using Gatsby.js. 
        <div className="d-flex justify-content-start mt-4 w-100"><a href="mailto:eleanorjfoote@gmail.com" className="contact-btn text-light fs-5 py-2 px-3">My CV</a></div>
        </div>
        

        </div>
        </div>

    </div>
  )
}

export default AboutMe;