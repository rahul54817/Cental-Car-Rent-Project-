import React, { useEffect, useState } from "react";
import UserSideBar from "./UserSideBar";
import axios from "axios";

const UserBookings = () => {
  const [bookingList, setBookingList] = useState([]);

  const getMyBookings = (user_id) => {
    axios
      .get(`http://localhost:8080/api/booking/get-booking-by-user/${user_id}`)
      .then((res) => {
        setBookingList(res.data.user_bookings);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    let user_id = localStorage.getItem("_id");
    getMyBookings(user_id);
  }, []);

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <UserSideBar />

          <main role="main" className=" col-md-9 ml-sm-auto col-lg-10 px-4">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 className="h2 text-primary display-6 ">My Bookings</h1>
            </div>

            <section >
              <div style={{ maxHeight: "400px", overflowY: "auto" }}>
                <table className="table table-hover">
                  <thead className="table-danger">
                    <tr>
                      <th scope="col">No.</th>
                      <th scope="col">Car Type</th>
                      <th scope="col">Pick up Place</th>
                      <th scope="col">Pick up Date</th>
                      <th scope="col">Drop Place</th>
                      <th scope="col">Drop Date</th>
                      <th scope="col">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bookingList.map((booking, key) => (
                      <tr key={key}>
                        <th scope="row">{key + 1}</th>
                        <td>{booking.carType}</td>
                        <td>{booking.pickUpPoint}</td>
                        <td>{booking.pickUpDate}</td>
                        <td>{booking.dropPoint}</td>
                        <td>{booking.dropDate}</td>
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

export default UserBookings;
