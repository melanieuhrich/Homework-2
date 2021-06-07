import React from "react";
import './style.css';

function ContactPage() {
    return (
        <div>
            <h4 className="header contact-me">Contact Me</h4>
            <p className='blurb'>If you would like to get in touch regarding collaboration, freelance work, or employment, I'd love to hear from you!</p>
            <p className='blurb'>Please see my contact information below.</p>
            <div className="row">
                <div class="card text-dark bg-light mb-3 col-4 left">
                    <div class="card-body">
                        <h5 class="card-title">Phone</h5>
                        <span className="info" style={{color:'blue'}}>630-240-8262</span>
                    </div>
                </div>
                <div class="card text-dark bg-light mb-3 col-4 right">
                    <div class="card-body">
                        <h5 class="card-title">Email</h5>
                        <span className="info" style={{color:'blue'}}>muhrich6@gmail.com</span>
                    </div>
                </div>
            </div>
            <div className="row">
                <div class="card text-dark bg-light mb-3 col-4 left">
                    <div class="card-body">
                        <h5 class="card-title"><a className="info" href="https://github.com/melanieuhrich" target="blank">Github</a></h5>
                    </div>
                </div>
                <div class="card text-dark bg-light mb-3 col-4 right">
                    <div class="card-body">
                        <h5 class="card-title"><a className="info" href="https://www.linkedin.com/in/melanie-uhrich-7aab54173/" target="blank">LinkedIn</a></h5>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ContactPage;