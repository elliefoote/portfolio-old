import * as React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

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
                    <Link 
                    className="my-nav nav-link" 
                    aria-current="page" 
                    to="about-me">
                      About Me
                    </Link>
                    </li>
                    <li className="nav-item">
                    <Link 
                    className="my-nav nav-link" 
                    to="my-work">
                      My Work
                      </Link>
                    </li>
                    <li className="nav-item">
                    <Link 
                    className="my-nav nav-link" 
                    to="contact-me">
                      Contact Me
                      </Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar