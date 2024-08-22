import React, { useEffect, useState } from "react";
import AdminSideBar from "./AdminSideBar";
import axios from "axios";

const ManageTotalBookings = () => {
  const [allBookings, setAllBooling] = useState([]);

  const getAllBookings = () => {
    axios
      .get("http://localhost:8080/api/booking/all-bookings")
      .then((res) => {
        console.log(res.data.bookings);

        setAllBooling(res.data.bookings)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getAllBookings();
  }, [0]);

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <AdminSideBar />

          <main role="main" className=" col-md-9 ml-sm-auto col-lg-10 px-4">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 className="h2 text-primary display-6 ">Total Bookings</h1>
            </div>
            <section>
             <div style={{ maxHeight: "650px", overflowY: "auto" }}>
              <table class="table table-hover">
                <thead>
                  <tr className="table-danger">
                    <th scope="col">No.</th>
                    <th scope="col">Customer Name</th>
                    <th scope="col">Customer Email</th>
                    <th scope="col">Car Type</th>
                    <th scope="col">Pick up Place</th>
                    <th scope="col">pick up Date</th>
                    <th scope="col">pick up Time</th>
                    <th scope="col"> Drop Place</th>
                    <th scope="col"> Drop Date</th>
                    <th scope="col"> Drop Time</th>
                    <th scope="col"> Payment</th>
                  </tr>
                </thead>
                <tbody>
                  {allBookings.reverse().map((booking, key) => (
                    <tr>
                      <th scope="row">{key + 1}</th>
                      <td>{booking.customer_details.name}</td>
                      <td>{booking.customer_details.email}</td>
                      <td>{booking.carType}</td>
                      <td>{booking.pickUpPoint}</td>
                      <td>{booking.pickUpDate}</td>
                      <td>{booking.pickUpTime}</td>
                      <td>{booking.dropPoint}</td>
                      <td>{booking.dropDate}</td>
                      <td>{booking.dropTime}</td>
                      <td>{booking.amount}</td>
                     
                     
                    </tr>
                  ))}
                </tbody>
              </table>

            </div>
            </section>
          </main>
        </div>
      </div>
    </>
  );
};

export default ManageTotalBookings;
