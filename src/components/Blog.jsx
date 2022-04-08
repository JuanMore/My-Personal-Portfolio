import expressBlog from '../assets/blog_images/express.png'
import Fade from 'react-reveal/Fade';

function Blog() {
    return (
        //  Contact Section
        <section className="page-section" id="contact">
            <div className="container">
                {/* Contact Section Heading */}
                <Fade bottom>
                <h2 className="page-section-heading text-center text-contact mb-5">Blog</h2>
                    <div className="row justify-content-center d-flex align-items-stretch">
                    <Fade duration={1500} bottom>
                <div className="col-md-6 col-md-4 mb-5">
                <div className="project-item mx-auto card">
                <div className="card text-center">
                <div className="card-body">
                <a href="https://dev.to/moreno_dev/your-first-restful-route-with-node-and-express-3l5e" target="_blank" rel="noreferrer">
                <img className="img-fluid" src={expressBlog} alt="blog post" />
                </a>
                </div>
                <div className="card-title mt-3">
                Your first RESTful route with Node and Express
                </div>
                <div className="card-body">
                <p>For those of you who aren't familiar with Node and Express. Node.js is simply an open source javascript
                web server environment that lets developers write command line tools and server-side scripts outside of a browser
                -couple that with Express.js... <a href="https://dev.to/moreno_dev/your-first-restful-route-with-node-and-express-3l5e" target="_blank" rel="noreferrer">Read More</a> </p>
                </div>
                </div>
                </div>
            </div>
            </Fade>
                </div>
                </Fade>
            </div>
        </section>
    )
}

export default Blog
