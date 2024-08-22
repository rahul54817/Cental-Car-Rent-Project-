import React from 'react'
import { NavLink } from 'react-router-dom'

const ErrorPage = () => {
  return (
   <>
    <div className="container-fluid bg-breadcrumb">
  <div className="container text-center py-5" style={{maxWidth: 900}}>
    <h4 className="text-white display-4 mb-4 wow fadeInDown" data-wow-delay="0.1s">404 Pages</h4>
    <ol className="breadcrumb d-flex justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s">
      <li className="breadcrumb-item"><NavLink to="/">Home</NavLink></li>
      <li className="breadcrumb-item"><NavLink to="#">Pages</NavLink></li>
      <li className="breadcrumb-item active text-primary">404 Page</li>
    </ol>    
  </div>
</div>

      <div className="container-fluid bg-light py-5">
  <div className="container py-5 text-center">
    <div className="row justify-content-center">
      <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
        <i className="bi bi-exclamation-triangle display-1 text-primary" />
        <h1 className="display-1">404</h1>
        <h1 className="mb-4">Page Not Found</h1>
        <p className="mb-4">We’re sorry, the page you have looked for does not exist in our website! Maybe go to our home page or try to use a search?</p>
        <NavLink className="btn btn-primary rounded-pill py-3 px-5" to="/">Go Back To Home</NavLink>
      </div>
    </div>
  </div>
</div>

   </>
  )
}

export default ErrorPage
