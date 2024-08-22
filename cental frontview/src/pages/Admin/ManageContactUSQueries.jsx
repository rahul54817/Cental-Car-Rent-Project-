import React from "react";
import AdminSideBar from "./AdminSideBar";

const ManageContactUSQueries = () => {
  return (
    
      <>
        <div className="container-fluid">
          <div className="row">
            <AdminSideBar />

            <main role="main" className=" col-md-9 ml-sm-auto col-lg-10 px-4">
              <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2 text-primary display-6 ">
                  Manage Contact us Queries
                </h1>
              </div>

              {/* <section>
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
                              <form className="mx-1 mx-md-4">
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
                                      //   onChange={(e) => setEmail(e.target.value)}
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
                                      //   onChange={(e) => setPassword(e.target.value)}
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
                                      //   onChange={(e) => setPassword(e.target.value)}
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
                                      //   onChange={(e) => setPassword(e.target.value)}
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
                                      //   onChange={(e) => setPassword(e.target.value)}
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
                                      //   onChange={(e) => setPassword(e.target.value)}
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
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section> */}
            </main>
          </div>
        </div>
      </>
    
  );
};

export default ManageContactUSQueries;
