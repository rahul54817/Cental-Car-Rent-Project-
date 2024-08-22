import axios from "axios";
import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../Contexts/UserContex";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
// import { useUser } from "../Contexts/UserContex";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userContext = useContext(UserContext)
 

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      email: email,
      password: password,
    };

    axios
      .post("http://localhost:8080/api/login", data)
      .then((response) => {
        userContext.setRole(response.data.data.role)
     

        

        if(response.data.result = true) {
          toast.success('login succesfully')
          localStorage.setItem('_id', response.data.data._id)
          localStorage.setItem('token', response.data.data.token)

          if(response.data.data.role === 'admin'){
            navigate('/admin/dashboard')
            
          }else {
            navigate('/')
          }
        }

        
      })
      .catch((err) => {
        toast.error('login Failed...!')
        console.log("Errot :  ", err);
      });
  };
  return (
    <>
    <ToastContainer />
      <div>
        <section className="vh-100">
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-lg-12 col-xl-11">
                <div className="card text-black" style={{ borderRadius: 25 }}>
                  <div className="card-body p-md-5">
                    <div className="row justify-content-center">
                      <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                        <p className=" h1 text-primary   display-6 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                          Login
                        </p>
                        <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>
                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                            <div
                              data-mdb-input-init
                              className="form-outline flex-fill mb-0"
                            >
                              <input
                                type="email"
                                id="form3Example3c"
                                className="form-control"
                                onChange={(e) => setEmail(e.target.value)}
                                required
                              />
                              <label
                                className="form-label"
                                htmlFor="form3Example3c"
                              >
                                Your Email
                              </label>
                            </div>
                          </div>
                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-lock fa-lg me-3 fa-fw" />
                            <div
                              data-mdb-input-init
                              className="form-outline flex-fill mb-0"
                            >
                              <input
                                type="password"
                                id="form3Example4c"
                                className="form-control"
                                onChange={(e) => setPassword(e.target.value)}
                                required
                              />
                              <label
                                className="form-label"
                                htmlFor="form3Example4c"
                              >
                                Password
                              </label>
                            </div>
                          </div>

                          <div className="form-check d-flex justify-content-center mb-5">
                            
                            <label
                              className="form-check-label"
                              htmlFor="form2Example3"
                            >
                              Forgot Password Click here {" "}
                              <NavLink to = "/*">Reset password</NavLink>
                            </label>
                          </div>
                          <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                            <button
                              type="submit"
                              data-mdb-button-init
                              data-mdb-ripple-init
                              className="btn btn-primary btn-lg"
                            >
                              Login
                            </button>
                          </div>
                        </form>
                      </div>
                      <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                        <img
                          src="https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=600"
                          className="img-fluid"
                          alt="Sample image"
                          style={{ height: "550px", width: "600px" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Login;
