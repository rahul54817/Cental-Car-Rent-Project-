import React, { useEffect, useState } from "react";
import AdminSideBar from "./AdminSideBar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const UpdateCar = () => {
  const [name, setName] = useState('');
  const [model, setModel] = useState('');
  const [seater, setSeater] = useState(null);
  const [fuelType, setFuelType] = useState('');
  const [rent, setRent] = useState(null);
  const [image, setImage] = useState(null);

  const navigate = useNavigate();

  const updateHandler = (e) => {
    e.preventDefault();

    const car_id = localStorage.getItem('car_id');
    let formData = new FormData();

    

    formData.append("name", name);
    formData.append("model", model);
    formData.append('seater', seater);
    formData.append('fule_type', fuelType);
    formData.append('rent', rent);
    formData.append('image', image);

    // Iterate over FormData entries to see what it contains
    

    axios
      .put(`http://localhost:8080/api/car/car-update/${car_id}`, formData)
      .then((res) => {
        if (res.data.result) {
          toast.success('Update successfully');
          // navigate('/admin/dashboard');
        }
      })
      
      .catch((err) => {
        toast.error('Something went wrong');
      });
  };


  const getCarById = (id) => {
    axios
      .get(`http://localhost:8080/api/car/car-details/${id}`)
      .then((res) => {
        const car = res.data.car;
        console.log(car);
        
        setName(car.name);
        setModel(car.model);
        setSeater(car.seater);
        setFuelType(car.fule_type);
        setRent(car.rent);
        setImage(car.image)
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    const car_id = localStorage.getItem('car_id');
    getCarById(car_id);
  }, []);

  return (
    <>
      <ToastContainer />
      <div className="container-fluid">
        <div className="row">
          <AdminSideBar />
          <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 className="h2 text-primary display-6">Update Car Details</h1>
            </div>
            <section>
              <div className="container h-100 mb-5">
                <div className="row d-flex h-100">
                  <div className="col-lg-12 col-xl-11">
                    <div className="card text-black" style={{ borderRadius: 25 }}>
                      <div className="card-body p-md-5">
                        <div className="row">
                          <div className="">
                            <form className="mx-1 mx-md-4" onSubmit={updateHandler}>
                              <div className="d-flex mb-4">
                                <label className="form-label col-2" htmlFor="brand">Brand Name</label>
                                <div data-mdb-input-init className="form-outline flex-fill mb-0 col-10">
                                  <input
                                    type="text"
                                    id="brand"
                                    value={name}
                                    className="form-control"
                                    onChange={(e) => setName(e.target.value)}
                                  />
                                </div>
                              </div>
                              <div className="d-flex flex-row align-items-center mb-4">
                                <label className="form-label col-2" htmlFor="model">Model Name</label>
                                <div data-mdb-input-init className="form-outline flex-fill mb-0 col-10">
                                  <input
                                    type="text"
                                    id="model"
                                    value={model}
                                    className="form-control"
                                    onChange={(e) => setModel(e.target.value)}
                                  />
                                </div>
                              </div>
                              <div className="d-flex flex-row align-items-center mb-4">
                                <label className="form-label col-2" htmlFor="seats">Number of Seats</label>
                                <div data-mdb-input-init className="form-outline flex-fill mb-0 col-10">
                                  <input
                                    type="number"
                                    id="seats"
                                    value={seater}
                                    className="form-control"
                                    onChange={(e) => setSeater(e.target.value)}
                                  />
                                </div>
                              </div>
                              <div className="d-flex flex-row align-items-center mb-4">
                                <label className="form-label col-2" htmlFor="fuel">Fuel Type</label>
                                <div data-mdb-input-init className="form-outline flex-fill mb-0 col-10">
                                  <input
                                    type="text"
                                    id="fuel"
                                    value={fuelType}
                                    className="form-control"
                                    onChange={(e) => setFuelType(e.target.value)}
                                  />
                                </div>
                              </div>
                              <div className="d-flex flex-row align-items-center mb-4">
                                <label className="form-label col-2" htmlFor="rate">Rate</label>
                                <div data-mdb-input-init className="form-outline flex-fill mb-0 col-10">
                                  <input
                                    type="number"
                                    id="rate"
                                    value={rent}
                                    className="form-control"
                                    onChange={(e) => setRent(e.target.value)}
                                  />
                                </div>
                              </div>
                              <div className="d-flex flex-row align-items-center mb-4">
                                <label className="form-label col-2" htmlFor="img">Image</label>
                                <div data-mdb-input-init className="form-outline flex-fill mb-0 col-10">
                                  <input
                                    type="file"
                                    id="img"
                                    className="form-control"
                                    onChange={(e) => setImage(e.target.files[0])}
                                    accept="image/*"
                                  />
                                </div>
                              </div>
                              <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                <button type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-lg">
                                  Update Car
                                </button>
                              </div>
                            </form>
                          </div>
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

export default UpdateCar;
