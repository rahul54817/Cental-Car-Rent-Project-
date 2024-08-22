import React, { useContext, useEffect, useState } from "react";
import AdminSideBar from "./AdminSideBar";
import axios from "axios";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const ManageCars = () => {
  const [cars, setCars] = useState([]);

  const navigate = useNavigate();

  const getAllCars = () => {
    axios
      .get("http://localhost:8080/api/car/get-cars")
      .then((res) => {
        // console.log(res.data.all_cars);

        setCars(res.data.all_cars);
        toast.success("Cars loaded successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateCar = (car_id) => {
    localStorage.setItem("car_id", car_id);
    navigate("/admin/update-car");
  };

  const deleteCar = (car_id) => {
    axios
      .put(`http://localhost:8080/api/car/car-delete/${car_id}`)
      .then((res) => {
        if (res.data.result === true) {
          toast.success(res.data.message);
          getAllCars();
        }
      })
      .catch((err) => {
        toast.error(err);
      });
  };
  
  useEffect(() => {
    getAllCars();
  }, [0]);

 


  return (
    <>
      <ToastContainer />
      <div className="container-fluid">
        <div className="row">
          <AdminSideBar />

          <main role="main" className=" col-md-9 ml-sm-auto col-lg-10 px-4">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 className="h2 text-primary display-6">Car Types</h1>
            </div>

            <section>
              <div className="container-fluid d-flex categories gap-4 ">
                <div className="row ">
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
                                ${car.rent} /Day
                              </h4>
                            </div>
                            <div className="row gy-2 gx-0 text-center mb-4">
                              <div className="col-4 border-end border-white">
                                <i className="fa fa-users text-dark" />{" "}
                                <span className="text-body ms-1">
                                  {car.seater}
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
                                <span className="text-body ms-1">
                                  {car.model}
                                </span>
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

                            <div className="d-flex justify-content-between">
                              <button
                                className="btn btn-primary rounded-pill d-flex justify-content-center py-1 px-4"
                                onClick={() => updateCar(car._id)}
                              >
                                Update
                              </button>
                              <button
                                className="btn btn-primary rounded-pill d-flex justify-content-center py-1 px-4"
                                onClick={() => deleteCar(car._id)}
                              >
                                Delete
                              </button>
                            </div>
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

export default ManageCars;
