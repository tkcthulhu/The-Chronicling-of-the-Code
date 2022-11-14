import React from 'react';
import './index.css';
import { Blog } from './Blog'
import { AboutMe } from './About-Me';
import { ProjectsPage } from './Projects';
import { ContactCard } from './contact-card';


export function Navbar() {

    const [ page, setPage ] = React.useState('AboutMe')

    return (
        <>
        <div className="container-fluid black" id="navContainer">
            <div className="navbar navbar-expand-lg justify-content-center" id="navRow">
                <ul className="navbar-nav" id="navBar">
                    <li className="nav-item">
                        <div 
                            className="nav-link text-white nav-butt nav-button type1" 
                            onClick={() => setPage('Blog')}
                        >
                            <h4>//BLOG</h4>    
                        </div>
                    </li>
                    <li className="nav-item">
                        <div 
                            className="nav-link text-white nav-butt nav-button type1" 
                            onClick={() => setPage('AboutMe')}
                        >
                            <h4>//ABOUT ME</h4>
                        </div>
                    </li>
                    <li className="nav-item">
                        <div 
                            className="nav-link text-white nav-butt nav-button type1" 
                            onClick={() => setPage('MyWork')}
                        >
                            <h4>//MY WORK</h4>
                        </div>
                    </li>
                    <li className="nav-item">
                        <div 
                            className="nav-link text-white nav-butt nav-button type1" 
                            onClick={() => setPage('ContactMe')}
                        >
                            <h4>//CONTACT ME</h4>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        { page === 'Blog' && <Blog />}
        { page === 'AboutMe' && <AboutMe />}
        { page === 'MyWork' && <ProjectsPage />}
        { page === 'ContactMe' && <ContactCard />}

        </>
    )
}