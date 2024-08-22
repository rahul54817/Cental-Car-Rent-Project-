import React, { useContext, useEffect } from "react";
import "../../CSS/index.css";
import { NavLink } from "react-router-dom";
import { GrDashboard, GrHistory } from "react-icons/gr";
import { FaUsers } from "react-icons/fa";
import { BsBorderAll } from "react-icons/bs";
import { BiMessageRoundedDots } from "react-icons/bi";
import { IoCarSportSharp, IoLogOut } from "react-icons/io5";
import { RiContactsFill } from "react-icons/ri";
import { GrContact } from "react-icons/gr";
import { FaCarSide } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { LiaCarSideSolid } from "react-icons/lia";
import { ImProfile } from "react-icons/im";

const UserSideBar = () => {
  


  return (
    <>
      <nav className="col-md-2 bg-light sidebar">
        <div className="sidebar-sticky">
          <ul className="nav flex-column">
            <li className="nav-item d-flex " style={{color : 'black'}}>
            <CgProfile className="mt-2" size={24} />
              <NavLink className="nav-link"   to="/user/profile">
                Profile
              </NavLink>
            </li>
            <li className="nav-item d-flex">
            
            <IoCarSportSharp className="mt-2" size={24}  style={{color : 'black'}}/>
              <NavLink className="nav-link"  to="/user/cars">
                Cars
              </NavLink>
            </li>
            
            <li className="nav-item d-flex">
            <LiaCarSideSolid className="mt-2" size={24}  style={{color : 'black'}} />
              <NavLink className="nav-link" to="/user/bookings">

                My Bookings
              </NavLink>
            </li>
           
            <li className="nav-item d-flex">
            <ImProfile className="mt-2" size={25} style={{color: 'black'}} />
              <NavLink className="nav-link" to = '/user/update-profile'>
                Update Profile
              </NavLink>
            </li>
            <li className="nav-item d-flex">
            <GrHistory  className="mt-2" size={25} style={{color: 'black'}}/>
              <NavLink
                className="nav-link"
                to="/user/history"
              >
              Histroy
              </NavLink>
            </li>
            <li className="nav-item d-flex">
            <IoLogOut   className="mt-2" size={24}  style={{color : 'black'}}/>

              <NavLink className="nav-link"  style={{color : 'black'}} onClick={()=> alert("logout")}>
                Logout
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default UserSideBar;
