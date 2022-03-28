import * as React from "react"


const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="#top">Ellie Foote</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarToggler">
                <div class="navbar-nav">
                    <div class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#about-me">About Me</a>
                    </div>
                    <div class="nav-item">
                    <a class="nav-link" href="#my-work">My Work</a>
                    </div>
                    <div class="nav-item">
                    <a class="nav-link" href="#contact-me">Contact Me</a>
                    </div>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar