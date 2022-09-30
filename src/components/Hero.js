import * as React from "react";

const Hero = () => {
  return (
    <div
      id="hero"
      className="container d-flex flex-column justify-content-center"
    >
      <div>
        <span className="display-1 hero-header">Hi, I'm </span>
        <span className="display-1 hero-name">Ellie.</span>
      </div>
      <div id="hero-body" className="display-6">
        I'm a software engineer and lifelong learner (aka a professional nerd).
        I'm working on a new site right now—if you'd like to get in touch, feel
        free to{" "}
        <a href="mailto:eleanorjfoote@gmail.com" className="text-dark">
          email me.
        </a>
      </div>
    </div>
  );
};

export default Hero;
