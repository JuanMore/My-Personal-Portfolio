import { FaGithub, FaLink } from 'react-icons/fa'
import project1 from '../assets/img/portfolio/buildguild1.png'
import project2 from '../assets/img/portfolio/project12.png'
import project3 from '../assets/img/portfolio/dopesetups.png'
import Fade from 'react-reveal/Fade';


function Portfolio() {
    return (
        <section className="page-section projects" id="projects">
                <div className="container">
                {/* Project Section Heading */}
                <h2 className="page-section-heading text-center text-color-2 mb-5">Projects</h2>
                {/* Project Grid Items */}
                <div className="row justify-content-center d-flex align-items-stretch">
                {/* Project Item 1 */}
                <Fade duration={1500} bottom>
                <div className="col-md-6 col-lg-4 mb-5">
                <div className="project-item mx-auto card">
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
                     <p>This is a PC builder community website built with ExpressJS, Javascript, MongoDB, EJS, Bootstrap and Passport.
                    I built this application because I was inspired to create a network for people to post their awesome
                      PC builds.</p>
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
                
                    {/* Project Items 2 */}
                    <Fade duration={2000} bottom>
            <div className="col-md-6 col-lg-4 mb-5">
                <div className="project-item mx-auto card">
                    <div className="card text-center">
                    <div className="card-body">
                        <a href="https://www.dopesetups.com/" target="_blank" rel="noreferrer">
                        <img className="img-fluid" src={project3} alt="..." />
                        </a>
                    </div>
                    <div className="card-title mt-3 py-2">
                        DopeSetups | Upload your Workstation
                    </div>
                    <div className="card-body">
                          <p>This is an application for users to check out cool workstations or setups uploaded by other users. I built this with React, CSS3 and Firebase for the database. Deployed on Vercel.</p>
                    </div>
                    <div className="card-subtitle">
                        <a href="https://github.com/JuanMore/dope-setups" target="_blank" rel="noreferrer">
                        <i><FaGithub className="mr-1" size={20} /></i></a>
                        <a href="https://www.dopesetups.com" target="_blank" rel="noreferrer">
                         <i><FaLink size={20}/></i></a>
                    </div>
                </div>
                </div>
            </div>
                    </Fade>
                    {/* Project Item 3 */}
                    <Fade duration={2500} bottom>
            <div className="col-md-6 col-lg-4 mb-5">
                <div className="project-item mx-auto card">
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
                            Built with HTML5, CSS3 and Javascript.</p>
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
        </div>
            </div>
</section>
    )
}

export default Portfolio
