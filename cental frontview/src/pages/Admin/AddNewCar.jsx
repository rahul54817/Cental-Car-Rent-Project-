import React, { useState } from "react";
import AdminSideBar from "./AdminSideBar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const AddNewCar = () => {
  const [name, setName] = useState("");
  const [model, setBrand] = useState("");
  const [seater, setSeater] = useState(null);
  const [fule_type, setFule_type] = useState("");
  const [rent, setRent] = useState(null);
  const [image, setImage] = useState("");

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();

    let fromData = new FormData();

    fromData.append("name", name);
    fromData.append("model", model);
    fromData.append("seater", seater);
    fromData.append("fule_type", fule_type);
    fromData.append("rent", rent);
    fromData.append("image", image);

    axios
      .post("http://localhost:8080/api/car/add-car", fromData)
      .then((res) => {
        console.log(res);
        if (res.data.result === true) {
          toast.success("Car added successfully");

          navigate("/admin/dashboard");
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error("Somthing went wrong");
      });
  };
  return (
    <>
      <ToastContainer />
      <div className="container-fluid">
        <div className="row">
          <AdminSideBar />

          <main role="main" className=" col-md-9 ml-sm-auto col-lg-10 px-4">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 className="h2 text-primary display-6">Add new Vhicle</h1>
            </div>

            <section>
              <div className="container h-100 mb-5">
                <div className="row d-flex  h-100">
                  <div className="col-lg-12 col-xl-11">
                    <div
                      className="card text-black"
                      style={{ borderRadius: 25 }}
                    >
                      <div className="card-body p-md-5">
                        <div className="row ">
                          <div className="">
                            <form
                              className="mx-1 mx-md-4"
                              onSubmit={submitHandler}
                            >
                              <div className="d-flex  mb-4">
                                <label
                                  className="form-label col-2"
                                  htmlFor="form3Example3c"
                                >
                                  Brand Name
                                </label>

                                <div
                                  data-mdb-input-init
                                  className="form-outline flex-fill mb-0 col-10"
                                >
                                  <input
                                    type="text"
                                    id="brand"
                                    className="form-control"
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                  />
                                </div>
                              </div>
                              <div className="d-flex flex-row align-items-center mb-4 ">
                                <label
                                  className="form-label col-2"
                                  htmlFor="form3Example4c"
                                >
                                  Model Name
                                </label>

                                <div
                                  data-mdb-input-init
                                  className="form-outline flex-fill mb-0 col-10"
                                >
                                  <input
                                    type="text"
                                    id="model"
                                    className="form-control"
                                    onChange={(e) => setBrand(e.target.value)}
                                    required
                                  />
                                </div>
                              </div>
                              <div className="d-flex flex-row align-items-center mb-4">
                                <label
                                  className="form-label col-2"
                                  htmlFor="seats"
                                >
                                  number of Seats
                                </label>

                                <div
                                  data-mdb-input-init
                                  className="form-outline flex-fill mb-0 col-10"
                                >
                                  <input
                                    type="number"
                                    id="seats"
                                    className="form-control"
                                    onChange={(e) => setSeater(e.target.value)}
                                    required
                                  />
                                </div>
                              </div>
                              <div className="d-flex flex-row align-items-center mb-4">
                                <label
                                  className="form-label col-2"
                                  htmlFor="fuel"
                                >
                                  Fuel Type
                                </label>
                                <div
                                  data-mdb-input-init
                                  className="form-outline flex-fill mb-0 col-10"
                                >
                                  <input
                                    type="text"
                                    id="fuel"
                                    className="form-control"
                                    onChange={(e) =>
                                      setFule_type(e.target.value)
                                    }
                                    required
                                  />
                                </div>
                              </div>
                              <div className="d-flex flex-row align-items-center mb-4">
                                <label
                                  className="form-label col-2"
                                  htmlFor="rate"
                                >
                                  Rate
                                </label>
                                <div
                                  data-mdb-input-init
                                  className="form-outline flex-fill mb-0 col-10"
                                >
                                  <input
                                    type="number"
                                    id="rate"
                                    className="form-control"
                                    onChange={(e) => setRent(e.target.value)}
                                    required
                                  />
                                </div>
                              </div>
                              <div className="d-flex flex-row align-items-center mb-4">
                                <label
                                  className="form-label col-2"
                                  htmlFor="img"
                                >
                                  Image
                                </label>
                                <div
                                  data-mdb-input-init
                                  className="form-outline flex-fill mb-0 col-10"
                                >
                                  <input
                                    type="file"
                                    id="img"
                                    className="form-control"
                                    onChange={(e) =>
                                      setImage(e.target.files[0])
                                    }
                                    required
                                    accept="/Image"
                                  />
                                </div>
                              </div>

                              <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                <button
                                  type="submit"
                                  data-mdb-button-init
                                  data-mdb-ripple-init
                                  className="btn btn-primary btn-lg"
                                >
                                  Add Car
                                </button>
                              </div>
                            </form>
                          </div>
                          {/* <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img
                        src="https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=600"
                        className="img-fluid"
                        alt="Sample image"
                        style={{ height: "550px", width: "600px" }}
                      />
                    </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  );
};

export default AddNewCar;
