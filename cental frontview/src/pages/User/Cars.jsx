import React, { useEffect, useState } from "react";
import UserSideBar from "./UserSideBar";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { NavLink } from "react-router-dom";

// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';

const Cars = () => {
  const [cars, setCars] = useState([]);

  const [carType, setCarType] = useState("");
  const [pickUpPoint, setPickUpPoint] = useState("");
  const [dropPoint, setDropPoint] = useState("");
  const [pickUpDate, setPickUpDate] = useState("");
  const [pickUpTime, setPickUpTime] = useState("");
  const [dropDate, setDropDate] = useState("");
  const [dropTime, setDropTime] = useState("");

  const getAllCars = () => {
    axios
      .get("http://localhost:8080/api/car/get-cars")
      .then((res) => {
        setCars(res.data.all_cars);
        toast.success("Cars loaded successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  
  const bookingHandler = (car_id) => {
    localStorage.setItem('car_id', car_id)
    
  };

  useEffect(() => {
    getAllCars();
  }, [0]);
  return (
    <>
      <ToastContainer />
      <div className="container-fluid">
        <div className="row">
          <UserSideBar />

          <main role="main" className=" col-md-9 ml-sm-auto col-lg-10 px-4">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 className="h2 text-primary display-6 ">Book Your Car..</h1>
            </div>
            <section>
              <div className="container-fluid d-flex categories gap-4 ">
              <div className="row">

                {cars.map((car) => (
                  <div className="col-md-4 mb-3 ">
                  <div className="categories-item p-4">
                    <div className="categories-item-inner">
                      <div className="categories-img rounded-top">
                        <img
                          src={`http://localhost:8080/${car.image}`}
                          style={{
                            height: "250px",
                            width: "300px",
                          }}
                          className="img-fluid w-100 rounded-top"
                          alt="Mercedes Benz R3"
                        />
                      </div>
                      <div className="categories-content rounded-bottom p-4">
                        <h4>{car.name}</h4>
                        <div className="categories-review mb-4">
                          <div className="me-3">4.5 Review</div>
                          <div className="d-flex justify-content-center text-secondary">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star text-body" />
                          </div>
                        </div>
                        <div className="mb-4">
                          <h4 className="bg-white text-primary rounded-pill py-2 px-4 mb-0">
                            ${car.rent}/Day
                          </h4>
                        </div>
                        <div className="row gy-2 gx-0 text-center mb-4">
                          <div className="col-4 border-end border-white">
                            <i className="fa fa-users text-dark" />{" "}
                            <span className="text-body ms-1">
                              {car.seater} Seat
                            </span>
                          </div>
                          <div className="col-4 border-end border-white">
                            <i className="fa fa-car text-dark" />{" "}
                            <span className="text-body ms-1">AT/MT</span>
                          </div>
                          <div className="col-4">
                            <i className="fa fa-gas-pump text-dark" />{" "}
                            <span className="text-body ms-1">
                              {car.fule_type}
                            </span>
                          </div>
                          <div className="col-4 border-end border-white">
                            <i className="fa fa-car text-dark" />{" "}
                            <span className="text-body ms-1"> {car.model}</span>
                          </div>
                          <div className="col-4 border-end border-white">
                            <i className="fa fa-cogs text-dark" />{" "}
                            <span className="text-body ms-1">AUTO</span>
                          </div>
                          <div className="col-4">
                            <i className="fa fa-road text-dark" />{" "}
                            <span className="text-body ms-1">27K</span>
                          </div>
                        </div>
                        <NavLink
                          to={'/user/book-car'}
                          onClick={()=> bookingHandler(car._id)}
                          className="btn btn-primary rounded-pill justify-content-center     d-flex  py-3"
                        >
                          Book Now
                        </NavLink>
                      </div>
                    </div>
                  </div>
                  </div>
                ))}
              </div>
              </div>


             
            </section>
          </main>
        </div>
      </div>
    </>
  );
};

export default Cars;
