import React from 'react';
import './index.css';
import { Home } from './Home';
import { Blog } from './Blog'
import { AboutMe } from './About-Me';
import { ProjectsPage } from './Projects';
import { ContactCard } from './contact-card';

export function Navbar() {

    const [ page, setPage ] = React.useState('AboutMe')

    return (
        <>
        <div class="container-fluid black" id="navContainer">
            <div class="navbar navbar-expand-lg justify-content-center" id="navRow">
                <ul class="navbar-nav" id="navBar">
                    <li class="nav-item">
                        <a 
                            class="nav-link text-white" 
                            onClick={() => setPage('Blog')}
                        >
                        <h4>//BLOG</h4>    
                        </a>
                    </li>
                    <li class="nav-item">
                        <a 
                            class="nav-link text-white" 
                            onClick={() => setPage('AboutMe')}
                        >
                        <h4>//ABOUT ME</h4>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a 
                            class="nav-link text-white" 
                            onClick={() => setPage('MyWork')}
                        >
                        <h4>//MY WORK</h4>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a 
                            class="nav-link text-white" 
                            onClick={() => setPage('ContactMe')}
                        >
                        <h4>//CONTACT ME</h4>
                        </a>
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