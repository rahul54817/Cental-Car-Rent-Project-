import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserSideBar from "./UserSideBar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BookCar = () => {
  const [carType, setCarType] = useState("");
  const [pickUpPoint, setPickUpPoint] = useState("");
  const [dropPoint, setDropPoint] = useState("");
  const [pickUpDate, setPickUpDate] = useState("");
  const [pickUpTime, setPickUpTime] = useState("");
  const [dropDate, setDropDate] = useState("");
  const [dropTime, setDropTime] = useState("");
  const [carTypeList, setCarTypeList] = useState([]);
  const [carDetails, setCarDetails] = useState({});

  const navigate = useNavigate();

  const bookingHandler = async (e) => {
    e.preventDefault();
 
    let user_id = localStorage.getItem("_id");
    const data = {
      user_id,
      carType : carDetails.name,
      pickUpPoint,
      pickUpDate,
      pickUpTime,
      dropPoint,
      dropDate,
      dropTime,
      rent : carDetails.rent,
      token: localStorage.getItem("token"),
    };

    console.log(data)

    axios
    .post('http://localhost:8080/api/booking/add-booking',data)
    .then((res) => {
      toast.success(res.data.message);
    })
    .catch((err) => {toast.error("Error while booking the car. Please try again.");
    console.error(err)})
  };

 

  const getCarById = (id) => {
    axios
      .get(`http://localhost:8080/api/car/car-details/${id}`)
      .then((res) => {
        setCarDetails(res.data.car);
        
        
        
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {

    let car_id = localStorage.getItem("car_id");
    // getAllCars();
   
    getCarById(car_id);
  }, []);

  return (
    <>
      <ToastContainer />
      <div className="container-fluid">
        <div className="row">
          <UserSideBar />
          <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 className="h2 text-primary display-6">Book Your Car..</h1>
            </div>
            <section>
              <div className="container-fluid">
                <div className="row">
                  
                    <div className="col-4">
                      <img
                        src={`http://localhost:8080/${carDetails.image}`}
                        alt={carDetails.name}
                        style={{ width: "100%", height: "330px" }}
                      />
                    </div>
               
                  <div className="col-8">
                    <form onSubmit={bookingHandler}>
                      <div className="row g-3">
                        <h4>Car Type : {carDetails.name}</h4>

                        <div className="col-12">
                          <div className="input-group">
                            <div className="d-flex align-items-center bg-light text-body rounded-start p-2">
                              <span className="fas fa-map-marker-alt" />
                              <span className="ms-1">Pick Up</span>
                            </div>
                            <input
                              className="form-control"
                              type="text"
                              placeholder="Enter a City or Airport"
                              aria-label="Enter a City or Airport"
                              onChange={(e) => setPickUpPoint(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="col-12">
                          
                          <div className="input-group">
                            <div className="d-flex align-items-center bg-light text-body rounded-start p-2">
                              <span className="fas fa-map-marker-alt" />
                              <span className="ms-1">Drop off</span>
                            </div>
                            <input
                              className="form-control"
                              type="text"
                              placeholder="Enter a City or Airport"
                              aria-label="Enter a City or Airport"
                              onChange={(e) => setDropPoint(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="input-group">
                            <div className="d-flex align-items-center bg-light text-body rounded-start p-2">
                              <span className="fas fa-calendar-alt" />
                              <span className="ms-1">Pick Up</span>
                            </div>
                            <input
                              className="form-control"
                              type="date"
                              onChange={(e) => setPickUpDate(e.target.value)}
                            />
                            <select
                              className="form-select ms-3"
                              aria-label="Default select example"
                              onChange={(e) => setPickUpTime(e.target.value)}
                            >
                              {Array.from({ length: 24 }, (_, i) => (
                                <option
                                  key={i}
                                  value={`${i % 12 === 0 ? 12 : i % 12}:00${
                                    i < 12 ? "AM" : "PM"
                                  }`}
                                >
                                  {`${i % 12 === 0 ? 12 : i % 12}:00${
                                    i < 12 ? "AM" : "PM"
                                  }`}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="input-group">
                            <div className="d-flex align-items-center bg-light text-body rounded-start p-2">
                              <span className="fas fa-calendar-alt" />
                              <span className="ms-1">Drop off</span>
                            </div>
                            <input
                              className="form-control"
                              type="date"
                              onChange={(e) => setDropDate(e.target.value)}
                            />
                            <select
                              className="form-select ms-3"
                              aria-label="Default select example"
                              onChange={(e) => setDropTime(e.target.value)}
                            >
                              {Array.from({ length: 24 }, (_, i) => (
                                <option
                                  key={i}
                                  value={`${i % 12 === 0 ? 12 : i % 12}:00${
                                    i < 12 ? "AM" : "PM"
                                  }`}
                                >
                                  {`${i % 12 === 0 ? 12 : i % 12}:00${
                                    i < 12 ? "AM" : "PM"
                                  }`}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                        <div className="col-12">
                          <button
                            type="submit"
                            className="btn btn-light w-100 py-2"
                          >
                            Book Now
                          </button>
                        </div>
                      </div>
                    </form>
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

export default BookCar;
