import * as React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";

const Navbar = () => {
  return (
    <nav className="navbar navbar-light navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand" href="#top"></a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarToggler"
          aria-controls="navbarToggler"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          id="navbarToggler"
          className="collapse navbar-collapse justify-content-end"
        >
          <ul className="navbar-nav">
            <li className="nav-item d-flex align-items-center justify-content-center me-3">
              <a href="https://github.com/elliefoote">
                <BsGithub className="fs-2 text-dark" />
              </a>
            </li>

            <li className="nav-item d-flex align-items-center justify-content-center">
              <a href="https://www.linkedin.com/in/ellie-foote">
                <BsLinkedin className="fs-2 text-dark" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
