import React from 'react';
import './Contact.css'

const Contact = () => {
          return (
            <section className="contact my-5 py-5">
              <div className="container">
                <div className="section-header text-center mb-5">
                  <h4 className="text-primary">Contact</h4>
                  <h1 className="text-white">Always connect with us</h1>
                </div>
                <div className="col-md-9 p-3 mx-auto">
                  <form action="">
                    <div className="mb-4">
                      <input
                        type="email"
                        className="form-control form-control-lg"
                        placeholder="Email Address *"
                      />
                    </div>
                    <div className="mb-4">
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Subject *"
                      />
                    </div>
                    <div className="mb-4">
                      <textarea
                        name=""
                        className="form-control"
                        id=""
                        cols="30"
                        rows="10"
                        placeholder="Message *"
                      ></textarea>
                    </div>
                    <div className="form-group text-center">
                      <button type="button" className="btn btn-lg btn-success px-4">
                        {" "}
                        Submit{" "}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </section>
          );
};

export default Contact;