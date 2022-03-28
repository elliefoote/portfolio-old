import * as React from "react"
import { StaticImage } from "gatsby-plugin-image";


const AboutMe = () => {
  return (
    <div id="about-me" className="text-light diagonal">


        <div className="non-diagonal">
        <h2 className="display-3 mb-4">About Me</h2>
        
        <div className="container">
        <div className="row">
        
        <div className="col-md-6 d-flex justify-content-center">

        <div className="img-container">
        <StaticImage alt="Ellie Foote" src="../images/Ellie_Work1.jpg" className="px-5 aboutme-pic"/>
        </div>

        </div>

        <div className="col-md-6 fs-5">
        My career journey has taken me from Melbourne to Barcelona, and from social policy to English teaching to software development. Many elements of software development are a great fit for my skills, including my love of solving problems and my drive to constantly learn new things. 
        <br /><br />
        On the front end, I love working with React.js, and I make everything look beautiful using HTML, vanilla CSS, and frameworks like Bootstrap. On the back end, I use Node.js and Express.js. When I’m building static sites (like this one!), I love using Gatsby.js. 
        </div>

        </div>
        </div>
        </div>

    </div>
  )
}

export default AboutMe;