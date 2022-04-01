import * as React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-light navbar-expand-lg">
        <div className="container-fluid">
            <a className="navbar-brand" href="#top"></a>
            
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>

            <div id="navbarToggler" className="collapse navbar-collapse justify-content-end">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <a className="my-nav nav-link" aria-current="page" href="#about-me">About Me</a>
                    </li>
                    <li className="nav-item">
                    <a className="my-nav nav-link" href="#my-work">My Work</a>
                    </li>
                    <li className="nav-item">
                    <a className="my-nav nav-link" href="#contact-me">Contact Me</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar