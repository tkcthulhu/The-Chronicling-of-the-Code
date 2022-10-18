import React from 'react';
import './index.css';
import { Blog } from './Blog'
import { ContactCard } from './contact-card';

export function Navbar() {

    const [ page, setPage ] = React.useState('Home')

    return (
        <>
        <div class="container-fluid black" id="navContainer">
            <div class="navbar navbar-expand-lg justify-content-end" id="navRow">
                <ul class="navbar-nav" id="navBar">
                    <li class="nav-item">
                        <a 
                            class="nav-link text-white" 
                            onClick={() => setPage('Home')}
                        >
                        //HOME
                        </a>
                    </li>
                    <li class="nav-item">
                        <a 
                            class="nav-link text-white" 
                            onClick={() => setPage('Blog')}
                        >
                        //BLOG    
                        </a>
                    </li>
                    <li class="nav-item">
                        <a 
                            class="nav-link text-white" 
                            onClick={() => setPage('AboutMe')}
                        >
                        //ABOUT ME
                        </a>
                    </li>
                    <li class="nav-item">
                        <a 
                            class="nav-link text-white" 
                            onClick={() => setPage('MyWork')}
                        >
                        //MY WORK
                        </a>
                    </li>
                    <li class="nav-item">
                        <a 
                            class="nav-link text-white" 
                            onClick={() => setPage('ContactMe')}
                        >
                        //CONTACT ME
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        {/* { page === 'Home' && <Home />} */}
        { page === 'Blog' && <Blog />}
        {/* { page === 'Home' && <Home />} */}
        {/* { page === 'Home' && <Home />} */}
        { page === 'ContactMe' && <ContactCard />}

        </>
    )
}