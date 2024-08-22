import React from 'react'

const FactCounter = () => {
  return (
   <>
      <div className="container-fluid counter bg-secondary py-5">
  <div className="container py-5">
    <div className="row g-5">
      <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.1s">
        <div className="counter-item text-center">
          <div className="counter-item-icon mx-auto">
            <i className="fas fa-thumbs-up fa-2x" />
          </div>
          <div className="counter-counting my-3">
            <span className="text-white fs-2 fw-bold" data-toggle="counter-up">829</span>
            <span className="h1 fw-bold text-white">+</span>
          </div>
          <h4 className="text-white mb-0">Happy Clients</h4>
        </div>
      </div>
      <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.3s">
        <div className="counter-item text-center">
          <div className="counter-item-icon mx-auto">
            <i className="fas fa-car-alt fa-2x" />
          </div>
          <div className="counter-counting my-3">
            <span className="text-white fs-2 fw-bold" data-toggle="counter-up">56</span>
            <span className="h1 fw-bold text-white">+</span>
          </div>
          <h4 className="text-white mb-0">Number of Cars</h4>
        </div>
      </div>
      <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.5s">
        <div className="counter-item text-center">
          <div className="counter-item-icon mx-auto">
            <i className="fas fa-building fa-2x" />
          </div>
          <div className="counter-counting my-3">
            <span className="text-white fs-2 fw-bold" data-toggle="counter-up">127</span>
            <span className="h1 fw-bold text-white">+</span>
          </div>
          <h4 className="text-white mb-0">Car Center</h4>
        </div>
      </div>
      <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.7s">
        <div className="counter-item text-center">
          <div className="counter-item-icon mx-auto">
            <i className="fas fa-clock fa-2x" />
          </div>
          <div className="counter-counting my-3">
            <span className="text-white fs-2 fw-bold" data-toggle="counter-up">589</span>
            <span className="h1 fw-bold text-white">+</span>
          </div>
          <h4 className="text-white mb-0">Total kilometers</h4>
        </div>
      </div>
    </div>
  </div>
</div>

   </>
  )
}

export default FactCounter
