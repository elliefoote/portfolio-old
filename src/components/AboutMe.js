import * as React from "react"
import { StaticImage } from "gatsby-plugin-image";
import EllieFooteCV from '../images/EllieFooteCV.pdf';
import {Link} from 'react-scroll';

const AboutMe = () => {
  return (
    <div id="about-me" className="text-light diagonal">

        <h2 className="display-3 mb-4">About Me</h2>
        
        <div className="container w-75">
        <div className="row mt-3">
        
        <div className="col-md-5 d-flex justify-content-center">

        <div className="about-me-container rounded mb-4 mt-3">
        <StaticImage 
            src='../images/Ellie_Work1.jpg'
            className="about-me-pic rounded"
            alt="Ellie Foote"
        />
        </div>

        </div>

        <div className="about-me-text col-md-7 pe-2">
        <p>I love a challenge. That’s why I moved halfway across the world from my small hometown in Australia to Barcelona, and it's why I decided to change my career and become a software engineer.</p>

        <p>My favourite things about coding are analyzing, researching and learning new tools to solve tricky problems. You can check out <Link to="my-work" className="about-me-link text-light">my latest projects below</Link>.</p> 

        <p>In my spare time, I love travelling (30+ countries so far!) and trying new recipes—my next non-tech project is learning to bake bread.</p> 

        <p>If you'd like to know more or have any bread-baking tips, you can <a href={EllieFooteCV} className="about-me-link text-light">download my CV</a> or <a href="mailto:eleanorjfoote@gmail.com" className="about-me-link text-light">send me an email</a>.</p>
        </div>
        </div>
        </div>

    </div>
  )
}

export default AboutMe;