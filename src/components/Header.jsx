import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa'
import Fade from 'react-reveal/Fade';

function Header() {
    return (
        // Main Header
        <div className="section">
            <header className="header-img bg-primary text-white text-start" id="header">
            <div className="container d-flex align-items-start flex-column">
                    {/* Heading Info */}
                <Fade bottom>
                        <h1 className="image-heading text-md-start mb-0 align-items-end" id="header-info">Hello, my name is Juan |</h1>
                        <h2 className="image-subheading  mb-5" id="header-info2">Front-End Web Developer</h2>
                        {/* Divider */}
                        <div className="divider-custom divider-light">
                        <a className="btn btn-outline btn-social mx-1" href="https://twitter.com/moreno_dev" target="_blank" rel="noreferrer"><i><FaTwitter className="icon" size={35} /></i></a>
                        <a className="btn btn-outline btn-social mx-1" href="https://www.linkedin.com/in/juan-moreno-29b913123/" target="_blank" rel="noreferrer"><i><FaLinkedin className="icon" size={35} /></i></a>
                        <a className="btn btn-outline btn-social mx-1" href="https://github.com/JuanMore" target="_blank" rel="noreferrer"><i><FaGithub className="icon" size={35} /></i></a>
                        </div>
                 </Fade>
                </div>
            </header>
        </div>
    )
}

export default Header
