import * as React from "react"
import {BsLinkedin, BsGithub, BsTwitter, BsFillArrowUpSquareFill} from 'react-icons/bs';


const Footer = () => {
  return (
    <div id="footer" className="d-flex flex-column align-items-center justify-content-center bg-dark">

                <div className="contact-box text-light d-flex align-items-center justify-content-center flex-column">
                    <a href="#top"><BsFillArrowUpSquareFill className="text-light fs-2"/></a>
                    <div className="d-flex mt-4">
                    <div className="d-flex align-items-center justify-content-center me-3"><a href="https://twitter.com/codewithellie"><BsTwitter className="fs-3 text-light"/></a></div>
                    <div className="d-flex align-items-center justify-content-center me-3"><a href="https://github.com/elliefoote"><BsGithub className="fs-2 text-light" /></a></div>
                    <div className="d-flex align-items-center justify-content-center"><a href="https://www.linkedin.com/in/ellie-foote"><BsLinkedin className="fs-2 text-light" /></a></div>
                    </div>
                    <div className="text-muted mt-3">© 2022 Ellie Foote</div>
                </div>
        
    </div>
  )
}

export default Footer;