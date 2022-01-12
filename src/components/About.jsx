import me from '../assets/img/portfolio/profile_2.jpg'
import Fade from 'react-reveal/Fade';


function About() {
    return (
            // About Section
        <section className="page-section bg-secondary text-white" id="about">
            <div className="container">
                {/* About Section Heading */}
                <Fade bottom>
                        <h2 className="page-section-heading text-center mb-5 text-about">About me</h2>
                        {/* About Section Content */}
                        <div className="row">
                        <div className="col-lg-4 ms-auto"><p className="medium"><img className="card-img" src={me} alt="headshot" /> </p></div>
                        <div className="col-lg-4 me-auto"><p className="about-description">I'm a Front-End Web Developer from Las Vegas, NV.<br />
                        <br /> I recently became a dad and I love it. I received my A.S in Computer Science in 2018, where I learned valuable programming and life skills. Admittingly, college was a challenge but I embraced it. <br /><br />Fast forward to 2020, I discovered web development, 
<<<<<<< HEAD
                        where I'm self-taught and enthuasiastic about learning day-after-day and pAAassionate about each line of code. I take pride in being highly adaptable, a strong problem solver and father.</p>
                        </div>
=======
                        where I'm self-taught and enthusiastic about learning day-after-day and passionate about each line of code. I take pride in being highly adaptable, a strong problem solver and father.</p>
                    </div>
>>>>>>> 5dbb9f975c4b6baaca231b8593e77ce363df7e19
                </div>
                </Fade>
                <Fade bottom>
                <div className="row">
                    <h2 className="page-section-heading text-center mb-4 mt-5">Toolbox</h2>
                    <div className="row languages">
                    <div className="col-lg-14 flex justify-content-center align-items-center">
                            {/* Tools */}
                <div className="col-sm-2 card">
                    <h4>HTML5</h4>
                </div>
                <div className="col-sm-2 card">
                    <h4>CSS3</h4>
                </div>
                <div className="col-sm-2 card">
                    <h4>Javascript</h4>
                </div>
                <div className="col-sm-2 card">
                    <h4>Bootstrap</h4>
                </div>
                <div className="col-sm-2 card">
                    <h4>MongoDB</h4>
                </div>
                <div className="col-sm-2 card">
                    <h4>ExpressJS</h4>
                </div>
                <div className="col-sm-2 card">
                    <h4>ReactJS</h4>
                </div>
                <div className="col-sm-2 card">
                    <h4>NodeJS</h4>
                </div>
                <div className="col-sm-2 card">
                    <h4>Github</h4>
                </div>
                <div className="col-sm-2 card">
                    <h4>Netlify</h4>
                </div>
                <div className="col-sm-2 card">
                    <h4>VSCode</h4>
                </div>
                </div>
                </div>
                </div>
                {/* End Tols */}
                </Fade>

            
            </div>
        </section>
            
    )
}

export default About
