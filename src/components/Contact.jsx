function Contact() {
    return (
        //  Contact Section
        <section className="page-section" id="contact">
            <div className="container">
                {/* Contact Section Heading */}
                <h2 className="page-section-heading text-center text-contact mb-5">lets work together</h2>
                {/* Contact Section Form */}
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-xl-5">
                        <form id="contactForm" data-sb-form-api-token="33fd980a-527e-4823-8966-10d414f155ba">
                            {/* Name input */}
                            <div className="form-floating mb-3">
                                <input className="form-control" id="name" type="text" placeholder="Enter your name..." data-sb-validations="required" />
                                <label for="name">Full name</label>
                                <div className="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
                            </div>
                            {/* Email address input */}
                            <div className="form-floating mb-3">
                                <input className="form-control" id="email" type="email" placeholder="name@example.com" data-sb-validations="required,email" />
                                <label for="email">Email address</label>
                                <div className="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
                                <div className="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
                            </div>
                            {/* Message input */}
                            <div className="form-floating mb-3">
                                <textarea className="form-control" id="message" type="text" placeholder="Enter your message here..." style={{height: "10rem"}} data-sb-validations="required"></textarea>
                                <label for="message">Message</label>
                                <div className="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
                            </div>
                            {/*  Submit success message */}
                            <div className="d-none" id="submitSuccessMessage">
                                <div className="text-center mb-3">
                                    <div className="fw-bolder text-success">Message Sent!</div>
                                    I'll get back to you soon.
                                </div>
                            </div>
                            {/* Submit error message */}
                            <div className="d-none" id="submitErrorMessage"><div className="text-center text-danger mb-3">Error sending message!</div></div>
                            {/*  Submit Button */}
                            <button className="btn btn-dark btn-xl disabled" id="submitButton" type="submit">Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
