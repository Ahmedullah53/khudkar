import React from "react";
import { Link } from "react-router-dom";

const Contactus = () => (
    <>  
        <div className="mt-n9" style={styles["contact-banner"]}>
            <img src={require("../assets/contact-banner.png")} alt='contact kodoone' width="100%" />
        </div>
        <div className="container">
            <div className="row pb-0 pe-lg-0 pt-lg-5 pb-lg-5 align-items-center">
                <div className="col-lg-6 justify-content-start">
                    <h2 style={styles["contact-heading"]}>
                        We’re the full package.<br/>
                        reach out and we'll see how we<br/>
                        can help.
                    </h2>
                </div>
                <div className="col-lg-5 pt-lg-5">
                    <form id='contact-form'>
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control border-top-0 border-start-0 border-end-0" id="floatingName" placeholder="John Doe" required="True"/>
                            <label for="floatingName">Name *</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="email" className="form-control border-top-0 border-start-0 border-end-0" id="floatingEmail" placeholder="name@example.com" required="true"/>
                            <label for="floatingEmail">Email address *</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control border-top-0 border-start-0 border-end-0" id="floatingCompany" placeholder="Company .inc" />
                            <label for="floatingCompany">Company</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control border-top-0 border-start-0 border-end-0" id="floatingContact" placeholder="name@example.com" />
                            <label for="floatingContact">Phone Number</label>
                        </div>
                        <div className="form-floating">
                            <input type="text" className="form-control border-top-0 border-start-0 border-end-0" id="floatingSource" placeholder="How did you hear about ous" />
                            <label for="floatingSource">How did you hear about us?</label>
                        </div>
                        <br/>
                        <div className="form-floating">
                            <textarea className="form-control border-top-0 border-start-0 border-end-0" placeholder="Leave a comment here" id="floatingMessage" style={{maxHeight:"100px", height:"100px"}}></textarea>
                            <label for="floatingMessage">Message</label>
                        </div>
                        <div className="mt-lg-5 d-flex justify-content-center">
                            <button type="submit" className="btn btn-outline-primary py-2 px-5">Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>
);

const styles = {
    'contact-banner':{
        'margin-top': '-9rem',    
    },
    'contact-heading': {
        'margin-top': '-8rem' 
    }
}

export default Contactus;
