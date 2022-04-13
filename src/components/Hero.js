import * as React from "react"
import { Link, animateScroll as scroll } from "react-scroll";

const Hero = () => {
  return (
    <div id="hero" className="container d-flex flex-column justify-content-center">
        <div><span className="display-1 hero-header">Hi, I'm </span><span className="display-1 hero-name">Ellie.</span></div>
        <div id="hero-body" className="display-6">I'm a software engineer and lifelong learner (aka a professional nerd). I love building responsive, user-friendly web sites and apps.</div>
        <div className="mt-5"><a href="mailto:eleanorjfoote@gmail.com" className="cta fs-4 py-2 px-3 me-3 text-light shadow">Want to chat?</a><Link to="about-me" className="my-secondary-btn fs-4 py-2 px-3">Learn more</Link></div>
    </div>
  )
}

export default Hero;