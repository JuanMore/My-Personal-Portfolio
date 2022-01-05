import me from '../assets/img/portfolio/profile_2.jpg'

function About() {
    return (
        // About Section
        <section className="page-section bg-secondary text-white" id="about">
            <div className="container">
                {/* About Section Heading */}
                <h2 className="page-section-heading text-center mb-5 text-about">about me</h2>
                {/* About Section Content */}
                <div className="row">
                    <div className="col-lg-4 ms-auto"><p className="medium"><img className="card-img" src={me} alt="headshot" /> </p></div>
                    <div className="col-lg-4 me-auto"><p className="about-description">I'm a Front-End Web Developer from Las Vegas, NV.<br />
                        <br /> I recently became a dad and I love it. I received my A.S in Computer Science in 2018, where I learned valuable programming and life skills. Admittingly, college was a challenge but I embraced it. <br /><br />Fast forward to 2020, I discovered web development, 
                        where I'm self-taught and enthuasiastic about learning day-after-day and passionate about each line of code. I take pride in being highly adaptable, a strong problem solver and father.</p>
                    </div>
                </div>
                <div className="row">
                <h2 className="page-section-heading text-center mb-4 mt-5">toolbox</h2>
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
            
            </div>
        </section>
    )
}

export default About
