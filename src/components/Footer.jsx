import {FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa'

function Footer() {
    return (
        <div>
            {/*  Footer */}
        <footer class="footer text-center">
            <div class="container">
                <div class="row">
                    {/*  Footer Location */}
                    <div class="col-lg-4 mb-5 mb-lg-0">
                        <h4 class="mb-4">Location</h4>
                        <p class="lead mb-0">
                            Las Vegas, Nevada.
                        </p>
                    </div>
                    {/*  Footer Social Icons */}
                    <div class="col-lg-4 mb-5 mb-lg-0">
                        <h4 class="mb-4">Check these out</h4>
                        <a className="btn btn-outline btn-social mx-1" href="https://twitter.com/moreno_dev" target="_blank" rel="noreferrer"><i><FaTwitter className="icon" size={30} /></i></a>
                        <a className="btn btn-outline btn-social mx-1" href="https://www.linkedin.com/in/juan-moreno-29b913123/" target="_blank" rel="noreferrer"><i><FaLinkedin className="icon"  size={30} /></i></a>
                        <a className="btn btn-outline btn-social mx-1" href="https://github.com/JuanMore" target="_blank" rel="noreferrer"><i><FaGithub className="icon" size={30} /></i></a>
                    </div>
                    {/*  Footer About Text */}
                    <div class="col-lg-4">
                        <h4 class="mb-4">Juan Moreno</h4>
                        <h5 class="mb-4">info(at)juanmoreno.dev</h5>
                        </div>
                        <p class="lead mt-5 text-center">
                            Copyright &copy; 2022 Built By Juan Moreno
                             {/* <a href="link-to-something"></a>  */}
                            
                        </p>
                </div>
            </div>
        </footer>
        </div>
    )
}

export default Footer
