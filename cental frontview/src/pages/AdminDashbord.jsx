import React from "react";
// import './AdminPage.css';  // Create a CSS file to add custom styles
import "../CSS/index.css";
import { NavLink } from "react-router-dom";
import AdminSideBar from "./Admin/AdminSideBar";

import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";

const AdminDashbord = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <AdminSideBar />
       
        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 className="h2 text-primary display-6">Dashboard</h1>
          </div>

          <div className="row text-center">
            <div className="col-md-4">
              <div className="card mb-4 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title text-primary display-8">Total car owner</h5>
                  <p className="card-text ">23</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <small className="text-muted">Today - 4</small>
                    <small className="text-muted">This month - 4</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title text-primary display-8">Total passengers</h5>
                  <p className="card-text">71</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <small className="text-muted">Today - 8</small>
                    <small className="text-muted">This month - 4</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title text-primary display-8">Total car list</h5>
                  <p className="card-text">60</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <small className="text-muted">Today - 4</small>
                    <small className="text-muted">This year - 60</small>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-3">
              <div className="card mb-4 shadow-sm">
                <div className="card-body text-center">
                <FaFacebookSquare size={35} color="blue" className="mb-2"/>
                  <h5 className="card-title">50%</h5>
                  <p className="card-text">49 Users</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card mb-4 shadow-sm">
                <div className="card-body text-center">
                
                <FaLinkedin size={35} color=" blue" className="mb-2"/>
                  <h5 className="card-title">20%</h5>
                  <p className="card-text">20 Users</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card mb-4 shadow-sm">
                <div className="card-body text-center">
                <MdOutlineMail size={35} color="red" className="mb-2"/>
                  <h5 className="card-title">10%</h5>
                  <p className="card-text">11 Users</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card mb-4 shadow-sm">
                <div className="card-body text-center">
                <FcGoogle size={35} color="red" className="mb-2"/>
                  <h5 className="card-title">10%</h5>
                  <p className="card-text">11 Users</p>
                </div>
              </div>
            </div>
          </div>

          <h2 className= "text-primary display-8">Recent car bookings</h2>
          <div className="table-responsive">
            <table className="table table-striped table-sm">
              <thead>
                <tr>
                  <th>Booking</th>
                  <th>Subject</th>
                  <th>Status</th>
                  <th>Date</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>EN1501488</td>
                  <td>BMW 3</td>
                  <td>Done</td>
                  <td>26 Sep 2019</td>
                  <td>$1000.00</td>
                </tr>
                <tr>
                  <td>EN1501438</td>
                  <td>Brand new ferrari</td>
                  <td>Progress</td>
                  <td>26 Sep 2019</td>
                  <td>$500.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashbord;
