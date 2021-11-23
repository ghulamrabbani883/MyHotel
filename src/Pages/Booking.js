import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const Booking = () => {
  return (
    <>
      <Navbar />

      <div className="container py-lg-5">
          <h1 className="border-bottom border-info border-2 w-50 mx-auto text-center mb-5">Book your Room Here</h1>
        <div className="row">
          <div className="col-lg-4 col-md-6 col-12">
            <div class="mb-3">
              <label for="nameInput" className="form-label">
                Enter your Name
              </label>
              <input
                type="text"
                className="form-control border-0 border-bottom border-2 border-warning "
                id="nameInput"
                placeholder="Enter your Name"
              />
            </div>
            <div className="mb-3">
              <label for="adressInput" className="form-label">
                Adress
              </label>
              <textarea
                className="form-control border-0 border-bottom border-2 border-warning"
                id="adressInput"
                rows="1"
              ></textarea>
            </div>
            <div class="mb-3">
              <label for="childInput" className="form-label">
                Number of Children
              </label>
              <input type="number" className="form-control border-0 border-bottom border-2 border-warning" id="childInput" />
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div class="mb-3">
              <label for="EmailInput" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control border-0 border-bottom border-2 border-warning"
                id="EmailInput"
                placeholder="name@example.com"
              />
            </div>
            <div class="mb-3">
              <label for="roomsInput" className="form-label">
                Room type
              </label>
              <br />
              <select name="rooms" id="roomsInput"  className="py-2 border-0 border-bottom border-2 border-warning">
                <option value="">Select rooms</option>
                <option value="single">Single</option>
                <option value="double">Double</option>
                <option value="queen">Queen</option>
                <option value="king">King</option>
                <option value="twin">Twin</option>
              </select>
            </div>
            <div class="mb-3">
              <label for="checkInput" className="form-label">
                Check In
              </label>
              <input type="date" className="form-control border-0 border-bottom border-2 border-warning" id="checkInput" />
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div class="mb-3">
              <label for="phoneInput" className="form-label">
                Mobile Number
              </label>
              <input type="phone" className="form-control border-0 border-bottom border-2 border-warning" id="phoneInput" />
            </div>
            <div class="mb-3">
              <label for="adultInput" className="form-label">
                Number of Adult
              </label>
              <input type="number" className="form-control border-0 border-bottom border-2 border-warning" id="adultInput" />
            </div>
            <div class="mb-3">
              <label for="checkOutput" className="form-label">
                Check In
              </label>
              <input type="date" className="form-control border-0 border-bottom border-2 border-warning" id="checkOutput" />
            </div>
          </div>
          <div className="mb-3">
              <label for="messageInput" className="form-label">
                Message
              </label>
              <textarea
                className="form-control border-0 border-bottom border-2 border-warning"
                id="messageInput"
                rows="1"
              ></textarea>
            </div>
            <div className="btn-group d-flex justify-content-center mt-5 mb-5 " role="group" >
            <button type="button" className="px-5 py-2  border-0 btn-warning">Book Now</button>
            <button type="button" className="px-lg-5 py-2 border-0 btn-danger">Clear</button>
            </div>
            

        </div>
      </div>
      <Footer />
    </>
  );
};

export default Booking;
