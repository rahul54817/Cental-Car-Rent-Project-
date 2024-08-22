import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../Contexts/UserContex";
import axios from "axios";
import { FaBell, FaUserAlt } from "react-icons/fa";
import "../CSS/userAcc.css";

const NavBar = () => {
  const navigate = useNavigate();
  const userContext = useContext(UserContext);

  const logoutHandler = () => {
    localStorage.removeItem("_id");
    localStorage.removeItem("token");
    userContext.setRole("");

    navigate("/");
  };

  return (
    <>
      <div className="container-fluid nav-bar sticky-top px-0 px-lg-4 py-2 py-lg-0">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light">
            <a href="" className="navbar-brand p-0">
              <h1 className="display-6 text-primary">
                <i className="fas fa-car-alt me-3" />
                Cental
              </h1>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            >
              <span className="fa fa-bars" />
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <div className="navbar-nav mx-auto py-0">
                <NavLink to="/" className="nav-item nav-link ">
                  Home
                </NavLink>
                <NavLink to="/about" className="nav-item nav-link">
                  About
                </NavLink>
                <NavLink to="/services" className="nav-item nav-link ">
                  Services
                </NavLink>
                <NavLink to="/blogs" className="nav-item nav-link ">
                  Blogs
                </NavLink>

                <div className="nav-item dropdown">
                  <a
                    href="#"
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    Pages
                  </a>
                  <div className="dropdown-menu m-0">
                    <NavLink to="/features" className="dropdown-item">
                      Our Feature
                    </NavLink>
                    <NavLink to="/cars" className="dropdown-item">
                      Our Cars
                    </NavLink>
                    <NavLink to="/teams" className="dropdown-item">
                      Our Team
                    </NavLink>
                    <NavLink to="/testimonials" className="dropdown-item">
                      Testimonial
                    </NavLink>
                    <NavLink to="/page-not-found" className="dropdown-item">
                      404 Page
                    </NavLink>
                  </div>
                </div>
                <NavLink to="/contact" className="nav-item nav-link">
                  Contact
                </NavLink>
                {userContext.role === "admin" ? (
                  <NavLink to="/admin/dashboard" className="nav-item nav-link">
                    Dashboard
                  </NavLink>
                ) : (
                  ""
                )}
                {userContext.role === "user" ? (
                  <NavLink to="/user/profile" className="nav-item nav-link">
                    Dashboard
                  </NavLink>
                ) : (
                  ""
                )}

              </div>

              {localStorage.getItem("_id") ? (
                <>
                <div className="user-info">
                <FaBell className="bell-icon" color="red" size={28} />
                <div className="user-details">
                  <FaUserAlt className="user-avatar" color="red" />
                  {/* <img  alt="User" /> */}
                  <span className="user-role me-3" >
                    {userContext.decodeToken.name}
                  </span>
                </div>
              </div>
                </>
                
              ) : ""}
              {localStorage.getItem("_id") ? (
                <button
                  className="btn btn-primary rounded-pill py-1.5 px-3 mx-2"
                  onClick={logoutHandler}
                >
                  Logout
                </button>
              ) : (
                <>
                  <NavLink
                    to="/register"
                    className="btn btn-primary rounded-pill py-2 px-4"
                  >
                    Register
                  </NavLink>
                  <NavLink
                    to="/login"
                    className="btn btn-primary rounded-pill py-2 px-4 mx-2"
                  >
                    Login
                  </NavLink>
                </>
              )}

              
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default NavBar;
