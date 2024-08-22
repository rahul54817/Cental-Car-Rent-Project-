import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Contact = () => {
  const [contactdetails, setContactDetails] = useState({})
  const getContactDetails = () => {
    axios
    .get('http://localhost:8080/api/contact/contact-details')
    .then((res) => {
      console.log(res.data.contact_details);
      setContactDetails(res.data.contact_details[0])
    })
    .catch(err =>  console.log(err))

  }
  useEffect(()=>{
    console.log("HIi in contact");
    getContactDetails();
  },[])
  return (
    <>
      <div className="container-fluid bg-breadcrumb">
        <div className="container text-center py-5" style={{ maxWidth: 900 }}>
          <h4
            className="text-white display-4 mb-4 wow fadeInDown"
            data-wow-delay="0.1s"
          >
            Contact Us
          </h4>
          <ol
            className="breadcrumb d-flex justify-content-center mb-0 wow fadeInDown"
            data-wow-delay="0.3s"
          >
            <li className="breadcrumb-item">
              <NavLink to = '/'>Home</NavLink>
            </li>
            <li className="breadcrumb-item">
              <a href="#">Pages</a>
            </li>
            <li className="breadcrumb-item active text-primary">Contact</li>
          </ol>
        </div>
      </div>

      <div className="container-fluid contact py-5">
        <div className="container py-5">
          <div
            className="text-center mx-auto pb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: 800 }}
          >
            <h1 className="display-5 text-capitalize text-primary mb-3">
              Contact Us
            </h1>
            <p className="mb-0">
              The contact form is currently inactive. Get a functional and
              working contact form with Ajax &amp; PHP in a few minutes. Just
              copy and paste the files, add a little code and you're done.{" "}
              <a
                className="text-primary fw-bold"
                href="https://htmlcodex.com/contact-form"
              >
                Download Now
              </a>
              .
            </p>
          </div>
          <div className="row g-5">
            <div className="col-12 wow fadeInUp" data-wow-delay="0.1s">
              <div className="row g-5">
                <div className="col-md-6 col-lg-6 col-xl-3">
                  <div className="contact-add-item p-4">
                    <div className="contact-icon mb-4">
                      <i className="fas fa-map-marker-alt fa-2x" />
                    </div>
                    <div>
                      <h4>Address</h4>
                      <p className="mb-0">{contactdetails.address}</p>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp"
                  data-wow-delay="0.3s"
                >
                  <div className="contact-add-item p-4">
                    <div className="contact-icon mb-4">
                      <i className="fas fa-envelope fa-2x" />
                    </div>
                    <div>
                      <h4>Mail Us</h4>
                      <p className="mb-0">{contactdetails.email}</p>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp"
                  data-wow-delay="0.5s"
                >
                  <div className="contact-add-item p-4">
                    <div className="contact-icon mb-4">
                      <i className="fa fa-phone-alt fa-2x" />
                    </div>
                    <div>
                      <h4>Telephone</h4>
                      <p className="mb-0">{contactdetails.contact_number}</p>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp"
                  data-wow-delay="0.7s"
                >
                  <div className="contact-add-item p-4">
                    <div className="contact-icon mb-4">
                      <i className="fab fa-firefox-browser fa-2x" />
                    </div>
                    <div>
                      <h4>Yoursite@ex.com</h4>
                      <p className="mb-0">{contactdetails.contact_number}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="bg-secondary p-5 rounded">
                <h4 className="text-primary mb-4">Send Your Message</h4>
                <form>
                  <div className="row g-4">
                    <div className="col-lg-12 col-xl-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          placeholder="Your Name"
                        />
                        <label htmlFor="name">Your Name</label>
                      </div>
                    </div>
                    <div className="col-lg-12 col-xl-6">
                      <div className="form-floating">
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          placeholder="Your Email"
                        />
                        <label htmlFor="email">Your Email</label>
                      </div>
                    </div>
                    <div className="col-lg-12 col-xl-6">
                      <div className="form-floating">
                        <input
                          type="phone"
                          className="form-control"
                          id="phone"
                          placeholder="Phone"
                        />
                        <label htmlFor="phone">Your Phone</label>
                      </div>
                    </div>
                    <div className="col-lg-12 col-xl-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="project"
                          placeholder="Project"
                        />
                        <label htmlFor="project">Your Project</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="subject"
                          placeholder="Subject"
                        />
                        <label htmlFor="subject">Subject</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <textarea
                          className="form-control"
                          placeholder="Leave a message here"
                          id="message"
                          style={{ height: 160 }}
                          defaultValue={""}
                        />
                        <label htmlFor="message">Message</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <button className="btn btn-light w-100 py-3">
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-12 col-xl-1 wow fadeInUp" data-wow-delay="0.3s">
              <div className="d-flex flex-xl-column align-items-center justify-content-center">
                <a
                  className="btn btn-xl-square btn-light rounded-circle mb-0 mb-xl-4 me-4 me-xl-0"
                  href = {contactdetails.facebook_link}
                >
                  <i className="fab fa-facebook-f" />
                </a>
                <a
                  className="btn btn-xl-square btn-light rounded-circle mb-0 mb-xl-4 me-4 me-xl-0"
                  href = {contactdetails.tweeter_link}
                >
                  <i className="fab fa-twitter" />
                </a>
                <a
                  className="btn btn-xl-square btn-light rounded-circle mb-0 mb-xl-4 me-4 me-xl-0"
                  href = {contactdetails.instagram_link}
                >
                  <i className="fab fa-instagram" />
                </a>
                <a
                  className="btn btn-xl-square btn-light rounded-circle mb-0 mb-xl-0 me-0 me-xl-0"
                  href = {contactdetails.linkedin_link}
                >
                  <i className="fab fa-linkedin-in" />
                </a>
              </div>
            </div>
            <div className="col-12 col-xl-5 wow fadeInUp" data-wow-delay="0.1s">
              <div className="p-5 bg-light rounded">
                <div className="bg-white rounded p-4 mb-4">
                  <h4 className="mb-3">Our Branch 01</h4>
                  <div className="d-flex align-items-center flex-shrink-0 mb-3">
                    <p className="mb-0 text-dark me-2">Address:</p>
                    <i className="fas fa-map-marker-alt text-primary me-2" />
                    <p className="mb-0">123 Street New York.USA</p>
                  </div>
                  <div className="d-flex align-items-center">
                    <p className="mb-0 text-dark me-2">Telephone:</p>
                    <i className="fa fa-phone-alt text-primary me-2" />
                    <p className="mb-0">(+012) 3456 7890</p>
                  </div>
                </div>
                <div className="bg-white rounded p-4 mb-4">
                  <h4 className="mb-3">Our Branch 02</h4>
                  <div className="d-flex align-items-center mb-3">
                    <p className="mb-0 text-dark me-2">Address:</p>
                    <i className="fas fa-map-marker-alt text-primary me-2" />
                    <p className="mb-0">123 Street New York.USA</p>
                  </div>
                  <div className="d-flex align-items-center">
                    <p className="mb-0 text-dark me-2">Telephone:</p>
                    <i className="fa fa-phone-alt text-primary me-2" />
                    <p className="mb-0">(+012) 3456 7890</p>
                  </div>
                </div>
                <div className="bg-white rounded p-4 mb-0">
                  <h4 className="mb-3">Our Branch 03</h4>
                  <div className="d-flex align-items-center mb-3">
                    <p className="mb-0 text-dark me-2">Address:</p>
                    <i className="fas fa-map-marker-alt text-primary me-2" />
                    <p className="mb-0">123 Street New York.USA</p>
                  </div>
                  <div className="d-flex align-items-center">
                    <p className="mb-0 text-dark me-2">Telephone:</p>
                    <i className="fa fa-phone-alt text-primary me-2" />
                    <p className="mb-0">(+012) 3456 7890</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="rounded">
                <iframe
                  className="rounded w-100"
                  style={{ height: 400 }}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387191.33750346623!2d-73.97968099999999!3d40.6974881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1694259649153!5m2!1sen!2sbd"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
