import React, { useContext, useEffect } from "react";
import "../../CSS/index.css";
import { NavLink } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { UserContext } from "../../Contexts/UserContex";
import { GrDashboard } from "react-icons/gr";
import { FaUsers } from "react-icons/fa";
import { BsBorderAll } from "react-icons/bs";
import { BiMessageRoundedDots } from "react-icons/bi";
import { IoCarSportSharp } from "react-icons/io5";
import { RiContactsFill } from "react-icons/ri";
import { GrContact } from "react-icons/gr";
import { FaCarSide } from "react-icons/fa";

const AdminSideBar = () => {
  


  return (
    <>
      <nav className="col-md-2 bg-light sidebar">
        <div className="sidebar-sticky">
          <ul className="nav flex-column">
            <li className="nav-item d-flex " style={{color : 'black'}}>
            <GrDashboard className="mt-2" size={24} />
              <NavLink className="nav-link   "   to="/admin/dashboard">
                Dashboard
              </NavLink>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="#">
                Admin
              </a>
            </li> */}
            <li className="nav-item d-flex">
            <IoCarSportSharp className="mt-2" size={24}  style={{color : 'black'}} />
              <NavLink className="nav-link" to="/admin/add-new-car">

                Add New Vehicle
              </NavLink>
            </li>
            <li className="nav-item d-flex">
            
            <FaUsers  className="mt-2" size={24}  style={{color : 'black'}}/>
              <NavLink className="nav-link"  to="/admin/all-users">
                Registerd Users
              </NavLink>
            </li>
            <li className="nav-item d-flex">
            <BsBorderAll className="mt-2" size={24} style={{color: 'black'}}/>
              <NavLink className="nav-link "  to="/admin/total-bookings">
                Total Bookings
              </NavLink>
            </li>
            <li className="nav-item  d-flex " style={{color : 'black'}}>
            <BiMessageRoundedDots className="mt-2" size={25} style={{color: 'black'}} />
              <NavLink className="nav-link "  to="/admin/testimonials">
                Manage Testimonials
              </NavLink>
            </li>
            <li className="nav-item d-flex">
            <RiContactsFill className="mt-2" size={25} style={{color: 'black'}}  />
              <NavLink className="nav-link" to="/admin/contact-queries">
                Manage Contact us Queries
              </NavLink>
            </li>
            <li className="nav-item d-flex">
            <FaCarSide className="mt-2" size={25} style={{color: 'black'}} />
              <NavLink className="nav-link" to = '/admin/car-types'>
                Car Types
              </NavLink>
            </li>
            <li className="nav-item d-flex">
            <GrContact  className="mt-2" size={25} style={{color: 'black'}}/>
              <NavLink
                className="nav-link"
                to="/admin/update-contact-information"
              >
                Update Contact Information
              </NavLink>
            </li>
            <li className="nav-item d-flex">
            <FaUsers  className="mt-2" size={24}  style={{color : 'black'}}/>

              <NavLink className="nav-link" to="/admin/subscribers">
                Manage Subscibers
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default AdminSideBar;
