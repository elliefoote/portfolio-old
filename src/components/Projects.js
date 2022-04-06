import * as React from "react";
import ProjectImage from './ProjectImage';

const Projects = () => {
    const projectData = [
        {
            id: 1,
            title: 'BookSwapper',
            description: 'Full stack app that allows users to list their pre-loved books and exchange messages to arrange book swaps.',
            liveLink: 'https://ejf-book-swapper.herokuapp.com/',
            codeLink: 'https://github.com/elliefoote/book-swap',
            img: 'BookSwapper.png',
            alt: 'BookSwapper app screenshot',
            leftOrRight: 'left'
        },
        {
            id: 2,
            title: 'E-Manager',
            description: 'Full stack app that allows small business owners to manage clients and allocate tasks.',
            liveLink: 'https://ejf-emanager.herokuapp.com/',
            codeLink: 'https://github.com/elliefoote/e-manager-app',
            img: 'EManager.png',
            alt: 'E-Manager app screenshot',
            leftOrRight: 'right'
        },
        {
            id: 3,
            title: 'Homegrown Bcn',
            description: 'Full stack ecommerce app that allows socially conscious shoppers to connect with local makers and artists.',
            liveLink: 'https://homegrown-bcn.herokuapp.com/',
            codeLink: 'https://github.com/elliefoote/e-manager-app',
            img: 'Homegrown.png',
            alt: 'Homegrown app screenshot',
            leftOrRight: 'left'
        },
        {
            id: 4,
            title: 'MarcTinent.com',
            description: 'One-page site for a professional author.',
            liveLink: 'https://www.marctinent.com',
            codeLink: 'https://github.com/elliefoote/marc-tinent/',
            img: 'MarcTinent.png',
            alt: 'Marc Tinent site screenshot',
            leftOrRight: 'right'
        }
    ]
  
    return (
    <div id="my-work" className="container">

        <h2 className="display-3 mb-4 text-dark">Projects</h2>

        <div className="container mt-5 d-flex flex-column align-items-center">

        {

            projectData.map(p => (

                <div className={p.leftOrRight==="left" ? "project-card row justify-content-center gx-5 mb-5 shadow" : "project-card row justify-content-center gx-5 mb-5 flex-row-reverse shadow"} key={p.id}>

                    <div className="project-image-container col-xl-8">
                    <ProjectImage alt={p.title} filename={p.img} />
                    </div>

                    <div className="col-xl-4">
                        <div className="fs-3">{p.title}</div>
                        <div className="fs-6">{p.description}</div>

                        <div className="mt-4">
                            
                            <a href={p.liveLink} className="cta text-light py-2 px-3 fs-6">View Live Version</a>
                            <a href={p.codeLink} className="gh-link ms-3">View On GitHub</a>
                            
                        </div>
                    </div>


                </div>

            ))



        }

        </div>
        
    </div>
  )
}

export default Projects;