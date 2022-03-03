import { FaGithub, FaLink } from 'react-icons/fa'
import project1 from '../assets/img/portfolio/buildguild1.png'
import project2 from '../assets/img/portfolio/project12.png'
import project3 from '../assets/img/portfolio/project11.png'
import Fade from 'react-reveal/Fade';


function Portfolio() {
    return (
        <section className="page-section projects" id="projects">
                <div className="container">
                {/* Project Section Heading */}
                <h2 className="page-section-heading text-center text-color-2 mb-5">Projects</h2>
                {/* Project Grid Items */}
                <div className="row justify-content-center">
                    {/* Project Item 1 */}
                    <Fade duration={1000} bottom>
                <div className="col-md-6 col-lg-4 mb-5">
                <div className="project-item mx-auto card">
                <div className="d-flex align-items-center justify-content-center">
                </div>
                <div className="card text-center">
                <div className="card-body">
                <a href="https://www.buildguild.online/pages" target="_blank" rel="noreferrer">
                <img className="img-fluid" src={project1} alt="..." />
                </a>
                </div>
                <div className="card-title mt-3">
                    Build Guild | PC Builder Community
                </div>
                <div className="card-body">
                     <p>This is a PC builder community website made with ExpressJS, Javascript, MongoDB, EJS, Bootstrap and Passport. I developed this website because I am currently building a new PC and I was inspired to create an application where anyone with a custom PC can go and show of their build, discuss them and meet like-minded people all in one place.</p>
                </div>
                <div className="card-subtitle">
                    <a href="https://github.com/JuanMore/Build-Guild" target="_blank" rel="noreferrer">
                    <i className="mr-1"><FaGithub size={20} /></i></a>
                    <a href="https://www.buildguild.online/pages" target="_blank" rel="noreferrer">
                     <i><FaLink size={20}/></i></a>
                </div>
                </div>
                </div>
            </div>
            </Fade>
                    {/* Project Item 2 */}
                    <Fade duration={2000} bottom>
            <div className="col-md-6 col-lg-4 mb-5">
                <div className="project-item mx-auto card">
                    <div className="d-flex align-items-center justify-content-center">
                    </div>
                    <div className="card text-center">
                    <div className="card-body">
                        <a href="https://nonproft.netlify.app/" target="_blank" rel="noreferrer">
                        <img className="img-fluid" src={project2} alt="..." />
                    </a>
                    </div>
                    <div className="card-title mt-3">
                        Here to Help | Nonprofit website
                    </div>
                    <div className="card-body">
                        <p>A makeshift nonprofit project. The idea to make this website sparked in me after seeing people in need out in my neighborhood and all through out Las Vegas. 
                            Made with HTML5, CSS3 and Javascript.</p>
                    </div>
                    <div className="card-subtitle">
                        <a href="https://github.com/JuanMore/Nonprofit" target="_blank" rel="noreferrer">
                          <i><FaGithub className="mr-1" size={20} /></i></a>
                            <a href="https://nonproft.netlify.app/" target="_blank" rel="noreferrer">
                         <i><FaLink size={20}/></i></a>
                    </div>
                </div>
                </div>
            </div>
            </Fade>
                    {/* Project Items 3 */}
                    <Fade duration={3000} bottom>
            <div className="col-md-6 col-lg-4 mb-5">
                <div className="project-item mx-auto card">
                    <div className="d-flex align-items-center justify-content-center">
                    </div>
                    <div className="card text-center">
                    <div className="card-body">
                        <a href="https://lucid-lalande-036bc3.netlify.app/" target="_blank" rel="noreferrer">
                        <img className="img-fluid" src={project3} alt="..." />
                        </a>
                    </div>
                    <div className="card-title mt-3 py-2">
                        Gifscroller | A Fun Place for Funny Gifs
                    </div>
                    <div className="card-body">
                    <p>This is a fun gif project made with the Giphy API, HTML, CSS and React for the front end. My goal with this project was to build a funny side project utilzing an API. Design Inspired by <a href="https://scrolller.com/">Srolller.com</a>.</p>
                    </div>
                    <div className="card-subtitle">
                        <a href="https://github.com/JuanMore/Gifscroller" target="_blank" rel="noreferrer">
                        <i><FaGithub className="mr-1" size={20} /></i></a>
                        <a href="https://gifscroller.netlify.app/" target="_blank" rel="noreferrer">
                         <i><FaLink size={20}/></i></a>
                    </div>
                </div>
                </div>
            </div>
            </Fade>
        </div>
            </div>
</section>
    )
}

export default Portfolio
