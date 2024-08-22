import React from "react";
import CentalServices from "../components/CentalServices";
import { NavLink } from "react-router-dom";
import FactCounter from "../components/FactCounter";
import Banner from "../components/Banner";
import Testimonials from "../components/Testimonials";

const Services = () => {
  return (
    <>
      <div className="container-fluid bg-breadcrumb">
        <div className="container text-center py-5" style={{ maxWidth: 900 }}>
          <h4
            className="text-white display-4 mb-4 wow fadeInDown"
            data-wow-delay="0.1s"
          >
            Our Services
          </h4>
          <ol
            className="breadcrumb d-flex justify-content-center mb-0 wow fadeInDown"
            data-wow-delay="0.3s"
          >
            <li className="breadcrumb-item">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="breadcrumb-item">
              <a href="#">Pages</a>
            </li>
            <li className="breadcrumb-item active text-primary">Service</li>
          </ol>
        </div>
      </div>

      <CentalServices />
      <FactCounter />
      <Testimonials />
    </>
  );
};

export default Services;
