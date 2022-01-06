import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
function Navbar() {
    return (
        // Navigation
        <nav className="navbar navbar-expand-lg fixed-top" id="mainNav">
            <div className="container">
                <a className="navbar-brand" href="https://www.juanmoreno.dev" target='_blank' rel="noreferrer">𝐉M<br />
                </a>
                <button className="navbar-toggler font-weight-bold text-white rounded" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon ={faBars} color="#000" />
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded" href="#about">About</a></li> 
                        <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded" href="#projects">Projects</a></li>   
                        <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded" href="#contact">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
