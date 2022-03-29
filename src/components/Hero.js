import * as React from "react"

const Hero = () => {
  return (
    <div id="hero" className="container d-flex flex-column justify-content-center">
        <div><span className="display-1 hero-header">Hi, I'm </span><span className="display-1 hero-name">Ellie.</span></div>
        <div id="hero-body" className="display-5">I'm a software engineer and lifelong learner who loves writing clean, performant code and building full-stack apps.</div>
        <div className="mt-5"><a href="#my-work" className="cta fs-4 py-2 px-3 text-light shadow">See my work</a></div>
    </div>
  )
}

export default Hero;