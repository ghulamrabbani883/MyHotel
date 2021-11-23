import React from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import Dummyblog from '../Components/Dummydata/DummyBlog'


const Events = () => {
    return (
        <>
         <Navbar />
         <div className="container-fluid ">
        <div className="container pt-5 pb-5">
          <div className="row gx-5-">
            <div className="col-md-8">
              <h4 className="text-center text-capitalize mb-4">
                <span className="border-bottom border-2 border-danger">
                  Read our blogs
                </span>
              </h4>
              {Dummyblog.map((data) => {
                return (
                  <div className="card mb-3">
                    <div className="row g-0">
                      <div className="col-md-4">
                        <img
                          src={data.image}
                          className="img-fluid rounded-start"
                          alt="..."
                        />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h5 className="card-title">{data.card_title}</h5>
                          <p className="card-text">{data.card_text} </p>
                          <p className="card-text">
                            <small className="text-muted">
                              {data.text_muted}
                            </small>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="col-md-4">
              <h4 className="text-center text-capitalize  mb-4">
                <span className="border-bottom border-2 border-danger">
                  latest News
                </span>
              </h4>
              <ol class="list-group list-group-numbered">
                <li className="list-group-item d-flex justify-content-between align-items-start">
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">Subheading</div>
                    Cras justo odio
                  </div>
                  <span className="badge bg-primary rounded-pill">14</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-start">
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">Subheading</div>
                    Cras justo odio
                  </div>
                  <span className="badge bg-primary rounded-pill">14</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-start">
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">Subheading</div>
                    Cras justo odio
                  </div>
                  <span className="badge bg-primary rounded-pill">14</span>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
         <Footer />
        </>
    )
}

export default Events
