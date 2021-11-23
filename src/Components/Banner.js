import React from "react";

const Banner = () => {
  return (
    <>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://media.istockphoto.com/photos/downtown-cleveland-hotel-entrance-and-waiting-taxi-cab-picture-id472899538?b=1&k=20&m=472899538&s=170667a&w=0&h=oGDM26vWKgcKA3ARp2da-H4St2dMEhJg23TTBeJgPDE="
              className="d-block w-100"
              alt="Hotel management system"
              height="600px"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Welcome to My-Hotel</h5>
              <p>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, amet distinctio cum maxime quaerat tempore accusantium non illo adipisci.              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://media.istockphoto.com/photos/african-american-concierge-checking-in-two-smiling-hotel-guests-picture-id1304058498?b=1&k=20&m=1304058498&s=170667a&w=0&h=NWLzholSypx7Dq8tSZseeESB7xqAFFe_3Uh1qmjiR4k="
              className="d-block w-100"
              alt="Hotel management system"
              height="600px"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>We are Best</h5>
              <p>
                Some representative placeholder content for the second slide.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://media.istockphoto.com/photos/modern-offices-lobby-interior-area-with-elevators-and-stairs-and-with-picture-id1279050214?b=1&k=20&m=1279050214&s=170667a&w=0&h=naDYrcrXBuxrKbw9BqDE7L0j49FX1T_BGc_Tjw8npGk="
              className="d-block w-100"
              alt="Hotel management system"
              height="600px"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Best Hotel Ever in Bilaspur</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum et animi magni rem esse quas unde ut, atque adipisci placeat suscipit labore fugit distinctio iusto necessitatibus perspiciatis fuga nostrum provident!
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Banner;
