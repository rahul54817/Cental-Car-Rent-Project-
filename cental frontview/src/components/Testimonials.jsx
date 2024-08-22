import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import "font-awesome/css/font-awesome.min.css"; // Ensure FontAwesome is imported

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Show 2 items per slide
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container-fluid testimonial pb-5 mt-5">
      <div className="container pb-5">
        <div
          className="text-center mx-auto pb-5 wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ maxWidth: 800 }}
        >
          <h1 className="display-5 text-capitalize mb-3">
            Our Clients<span className="text-primary"> Reviews</span>
          </h1>
          <p className="mb-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut amet
            nemo expedita asperiores commodi accusantium at cum harum,
            excepturi, quia tempora cupiditate! Adipisci facilis modi quisquam
            quia distinctio.
          </p>
        </div>
        

        <Slider {...settings}>
        
          <div className="testimonial-item bg-white border rounded p-4 gap-4">
            <div className="testimonial-quote text-center">
              <i className="fa fa-quote-right fa-2x" />
            </div>
            <div className="testimonial-inner d-flex align-items-center">
              <img src="img/testimonial-1.jpg" className="img-fluid rounded-circle" alt="Testimonial 1" />
              <div className="ms-4">
                <h4>Person Name</h4>
                <p>Profession</p>
                <div className="d-flex text-primary">
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" style={{ color: '#ccc' }} />
                </div>
              </div>
            </div>
            <div className="border-top rounded-bottom p-4">
              <p className="mb-0">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                soluta neque ab repudiandae reprehenderit ipsum eos cumque esse
                repellendus impedit.
              </p>
            </div>
          </div>
          <div className="testimonial-item bg-white border rounded p-4 gap-4">
            <div className="testimonial-quote text-center">
              <i className="fa fa-quote-right fa-2x" />
            </div>
            <div className="testimonial-inner d-flex align-items-center">
              <img src="img/testimonial-2.jpg" className="img-fluid rounded-circle" alt="Testimonial 2" />
              <div className="ms-4">
                <h4>Person Name</h4>
                <p>Profession</p>
                <div className="d-flex text-primary">
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" style={{ color: '#ccc' }} />
                  <i className="fa fa-star" style={{ color: '#ccc' }} />
                </div>
              </div>
            </div>
            <div className="border-top rounded-bottom p-4">
              <p className="mb-0">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                soluta neque ab repudiandae reprehenderit ipsum eos cumque esse
                repellendus impedit.
              </p>
            </div>
          </div>
          <div className="testimonial-item bg-white border rounded p-4  gap-4   ">
            <div className="testimonial-quote text-center">
              <i className="fa fa-quote-right fa-2x" />
            </div>
            <div className="testimonial-inner d-flex align-items-center">
              <img src="img/testimonial-3.jpg" className="img-fluid rounded-circle" alt="Testimonial 3" />
              <div className="ms-4">
                <h4>Person Name</h4>
                <p>Profession</p>
                <div className="d-flex text-primary">
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" style={{ color: '#ccc' }} />
                  <i className="fa fa-star" style={{ color: '#ccc' }} />
                  <i className="fa fa-star" style={{ color: '#ccc' }} />
                </div>
              </div>
            </div>
            <div className="border-top rounded-bottom p-4">
              <p className="mb-0">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                soluta neque ab repudiandae reprehenderit ipsum eos cumque esse
                repellendus impedit.
              </p>
            </div>
          </div>
         
          {/* Add more testimonial items here if needed */}
        </Slider>
       
      </div>
    </div>
  );
};

export default Testimonials;
