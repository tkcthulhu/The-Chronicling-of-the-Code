import logo from './img/logo.png'
import './index.css';



export function Header() {
    return(
        <div className="container-fluid black" id='header'>
            <div className="row jusifty-content-center">
                <img className="col-3" 
                    id="logo" 
                    src={logo} 
                    alt="logo"/>
                <div className="col text-white" id="title">
                    <h1><strong>Tyler Consalvi</strong></h1>
                    <br/>
                    <h3>Full Stack Developer</h3>
                </div>
            </div>
        </div>
    )
}