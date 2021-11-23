import React from "react";
import Navbar from "../Components/Navbar";
import Footer from '../Components/Footer'

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="container py-5">
        <div className="row">
          <div className="col-md-6 col-12">
            <h2 className="py-3 border-bottom border-primary border-2 w-50 mx-auto text-center text-info">General Enquiry</h2>
          <div class="mb-3">
              <label for="nameInput" className="form-label">
                Enter your Name
              </label>
              <input
                type="text"
                className="form-control"
                id="nameInput"
                placeholder="Enter your Name"
              />
            </div>
            <div class="mb-3">
              <label for="EmailInput" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="EmailInput"
                placeholder="name@example.com"
              />
            </div>
            <div class="mb-3">
              <label for="phoneInput" className="form-label">
                Mobile Number
              </label>
              <input
                type="phone"
                className="form-control"
                id="phoneInput"
              />
            </div>
            <div class="mb-3">
              <label for="subjectInput" className="form-label">
                Subject
              </label>
              <input
                type="text"
                className="form-control"
                id="subjectInput"
                placeholder="Subject"
              />
            </div>
            <div className="mb-3">
              <label for="messageInput" className="form-label">
                Message
              </label>
              <textarea
                className="form-control"
                id="messageInput"
                rows="3"
              ></textarea>
            </div>
            <button className="btn btn-primary px-5 border-0">Send</button>
          </div>
          
          <div className="col-md-6 col-12">
            <div className="adress">
              <h2 className="py-3 border-bottom border-primary border-2 w-25 mx-auto text-center text-info">Adress</h2>
              <h3 c>My Chouksey Hotel</h3>
              <p>Lalkhadan Bilaspur Chhattisgarh 495001</p>
              <p> <span className="fw-bold">Phone:  </span> +91 7752 409412 / 13 / 14 </p>
              <p> <span className="fw-bold">Mobile: </span>  +91 875634219  </p>
              <p> <span className="fw-bold">Email: </span> example@gmailc.om, example2@outlook.com </p>
              <p> <span className="fw-bold">Website: </span> www.exapmple.com </p>
            </div>
            <div className="location">
              <h2 className="py-3 border-bottom border-primary border-2 w-25 mx-auto text-center text-info">Location</h2>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3698.09003985397!2d82.20529231426377!3d22.046150957644862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a2875516f8fa33f%3A0xffe9332ade51d40b!2sChouksey%20Engineering%20College!5e0!3m2!1sen!2sin!4v1635403904011!5m2!1sen!2sin" width="600" height="200"  allowfullscreen="" loading="lazy"></iframe>
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
