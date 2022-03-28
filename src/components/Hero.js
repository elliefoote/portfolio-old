import * as React from "react"

const Hero = () => {
  return (
    <div id="hero" className="container d-flex flex-column justify-content-center">
        <h1 className="display-1 hero-header">Hi, I'm Ellie.</h1>.
        <div id="hero-body" className="display-5">I'm a software engineer who loves building beautiful, responsive full-stack apps.</div>
        <div className="mt-5"><a href="#my-work" className="cta fs-4 py-2 px-3 text-light">See my work</a></div>
    </div>
  )
}

export default Hero;