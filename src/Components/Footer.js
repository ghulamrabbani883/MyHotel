import React from "react";
import "./stye.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer id="footer" className="footer-1">
        <div className="main-footer widgets-dark typo-light">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-6 col-md-3">
                <div className="widget subscribe no-box">
                  <h5 className="widget-title">
                    My-Hotel<span></span>
                  </h5>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis consequatur ad sint necessitatibus laboriosam dicta saepe! Quae est, libero consequuntur praesentium aspernatur architecto voluptatem non, excepturi enim animi omnis esse?</p>
                </div>
              </div>

              <div className="col-xs-12 col-sm-6 col-md-3">
                <div className="widget no-box">
                  <h5 className="widget-title">
                    Quick Links<span></span>
                  </h5>
                  <ul className="thumbnail-widget">
                    <li>
                      <div className="thumb-content">
                        <Link to="/" className="thumb-link">Home</Link>
                      </div>
                    </li>
                    <li>
                      <div className="thumb-content">
                      <Link to="/rooms" className="thumb-link">Rooms/Suited</Link>
                      </div>
                    </li>
                    <li>
                      <div className="thumb-content">
                      <Link to="/gallary" className="thumb-link">Gallary</Link>
                      </div>
                    </li>
                    <li>
                      <div className="thumb-content">
                      <Link to="/events" className="thumb-link">Meetings/Events</Link>
                      </div>
                    </li>
                    <li>
                      <div className="thumb-content">
                      <Link to="/contact" className="thumb-link">Contact</Link>
                      </div>
                    </li>
                    <li>
                      <div className="thumb-content">
                      <Link to="/booking" className="thumb-link">Booking</Link>
                      </div>
                    </li>  
                      
                  </ul>
                </div>
              </div>

              <div className="col-xs-12 col-sm-6 col-md-3">
                <div className="widget no-box">
                  <h5 className="widget-title">
                    Get Started<span></span>
                  </h5>
                  <p>Get access to your full Training and Marketing Suite.</p>
                  <Link
                    className="btn"
                    to="/"
                    target="_blank"
                  >
                    Subscribe Now
                  </Link>
                </div>
              </div>

              <div className="col-xs-12 col-sm-6 col-md-3">
                <div className="widget no-box">
                  <h5 className="widget-title">
                    Social Contact<span></span>
                  </h5>

                  <p>
                    <Link to="/" title="glorythemes">
                      info@domain.com
                    </Link>
                  </p>
                  <ul className="social-footer2">
                    <li className="">
                      <Link
                        title="youtube"
                        target="_blank"
                        to="https://bit.ly/3m9avif"
                      >
                        <i className="fa fa-youtube" aria-hidden="true"></i>
                      </Link>
                    </li>
                    <li className="">
                      <Link
                        to="https://www.facebook.com/"
                        target="_blank"
                        title="Facebook"
                      >
                        <i className="fa fa-facebook-square" aria-hidden="true"></i>
                      </Link>
                    </li>
                    <li className="">
                      <Link
                        to="https://twitter.com"
                        target="_blank"
                        title="Twitter"
                      >
                        <i className="fa fa-twitter-square" aria-hidden="true"></i>
                      </Link>
                    </li>
                    <li className="">
                      <Link
                        title="instagram"
                        target="_blank"
                        to="https://www.instagram.com/"
                      >
                        <i className="fa fa-instagram"></i>
                      </Link>
                    </li>
                    <p>FA icon doesn't work that's why I did like this</p>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-copyright">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <p>Copyright Company Name © 2021. All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
