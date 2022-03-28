import * as React from "react";
import BookSwapper from '../images/BookSwapper.png';
import EManager from '../images/EManager.png';
import Homegrown from '../images/Homegrown.png';
import MarcTinent from '../images/MarcTinent.png';
import { StaticImage } from "gatsby-plugin-image";

const Projects = () => {
    const projectData = [
        {
            id: 1,
            title: 'BookSwapper',
            description: 'Full stack app that allows users to list their pre-loved books and exchange messages to arrange book swaps.',
            liveLink: 'https://ejf-book-swapper.herokuapp.com/',
            codeLink: 'https://github.com/elliefoote/book-swap',
            img: BookSwapper,
            leftOrRight: 'left'
        },
        {
            id: 2,
            title: 'E-Manager',
            description: 'Full stack app that allows small business owners to manage clients and allocate tasks.',
            liveLink: 'https://ejf-emanager.herokuapp.com/',
            codeLink: 'https://github.com/elliefoote/e-manager-app',
            img: EManager,
            leftOrRight: 'right'
        },
        {
            id: 3,
            title: 'Homegrown Bcn',
            description: 'Full stack ecommerce app that allows socially conscious shoppers to connect with local makers and artists.',
            liveLink: 'https://homegrown-bcn.herokuapp.com/',
            codeLink: 'https://github.com/elliefoote/e-manager-app',
            img: Homegrown,
            leftOrRight: 'left'
        },
        {
            id: 4,
            title: 'MarcTinent.com',
            description: 'One-page site for a professional author.',
            liveLink: 'https://www.marctinent.com',
            codeLink: 'https://github.com/elliefoote/marc-tinent/',
            img: MarcTinent,
            leftOrRight: 'right'
        }
    ]
  
    return (
    <div id="my-work" className="container">

        <h2 className="display-3 mb-4 text-dark">Projects</h2>

        <div className="container mt-5">

        {

            projectData.map(p => (

                <div className={p.leftOrRight==="left" ? "project-card row justify-content-center gx-5 mb-5" : "project-card row justify-content-center gx-5 mb-5 flex-row-reverse"} key={p.id}>

                    <div className="project-image-container col-8">
                    <img alt={p.title} src={p.img} className="project-image" />
                    </div>

                    <div className="col-4 border">
                        <div className="fs-3">{p.title}</div>
                        <div className="fs-6">{p.description}</div>
                        <div className="mt-4"><a href={p.liveLink} className="cta text-light py-2 px-3 fs-6 me-3">View Live Version</a> <a href={p.codeLink} className="gh-link">View On GitHub</a></div>
                    </div>


                </div>

            ))



        }

        </div>
        
    </div>
  )
}

export default Projects;