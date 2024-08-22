import React from "react";
import CentalAbout from "../components/CentalAbout";
import { NavLink } from "react-router-dom";
import FactCounter from "../components/FactCounter";
import Features from "../components/Features"
import CarSteps from "../components/CarSteps";
import Teams from "../components/Teams";
import Banner from "../components/Banner";

const About = () => {
  return (
    <>
      <div className="container-fluid bg-breadcrumb">
        <div className="container text-center py-5" style={{ maxWidth: 900 }}>
          <h4
            className="text-white display-4 mb-4 wow fadeInDown"
            data-wow-delay="0.1s"
          >
            About Us
          </h4>
          <ol
            className="breadcrumb d-flex justify-content-center mb-0 wow fadeInDown"
            data-wow-delay="0.3s"
          >
            <li className="breadcrumb-item">
              <NavLink to = '/'>Home</NavLink>
            </li>
            <li className="breadcrumb-item">
              <a >Pages</a>
            </li>
            <li className="breadcrumb-item active text-primary">About</li>
          </ol>
        </div>
      </div>

      <CentalAbout />
      <FactCounter />
      <Features />
      <CarSteps />
      <Teams />
      <Banner />  
      
    </>
  );
};

export default About;
