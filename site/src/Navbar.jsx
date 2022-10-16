import './index.css';

export function Navbar(props) {
    return (
        <div class="container-fluid black" id="navContainer">
            <div class="navbar navbar-expand-lg justify-content-end" id="navRow">
                <ul class="navbar-nav" id="navBar">
                    <li class="nav-item">
                        <a class="nav-link text-white" 
                            href="/index.html">//HOME
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white" 
                            href="/Blog.js">//BLOG
                            
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white" 
                            href="/pages/about-me.html">//ABOUT ME
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white" 
                            href="/pages/my-work.html">//MY WORK
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white" 
                            href="/pages/contact-card.html">//CONTACT ME
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}