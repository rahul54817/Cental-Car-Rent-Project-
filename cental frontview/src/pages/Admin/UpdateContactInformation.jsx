import React, { useState } from "react";
import AdminSideBar from "./AdminSideBar";
import axios from "axios";

const UpdateContactInformation = () => {

  const [address, setAddress] = useState('')
  const [email, setEmail] = useState('')
  const [contactNumber, setContactNumber] = useState(null)
  const [branches, setBranches] = useState([])
  const [branchAddress, setBranchAddress] = useState('')

  const [branchContact, setBranchContact] = useState(null)
  const [facebook , setFacebook] = useState('')
  const [instagram, setInstagram] = useState('')
  const [tweeter, setTweeter] = useState('')
  const [linkedin, setLinkedin] = useState('')
  const [website, setWebsite] = useState('')


  const addContactInformation = (e) => {
    e.preventDefault()

    const data = {
      address : address,
      email : email,
      contact_number : contactNumber,
      branches : setBranches((prev)=> [...prev,{address : branchAddress, contact : branchContact}]),
      facebook_link : facebook,
      tweeter_link : tweeter,
      instagram_link : instagram,
      linkedin_link : linkedin,
      website : website
    }

    axios
    .post('http://localhost:8080/api/contact/add-contact-details', data)
    .then((res)=> {
      console.log(res)
    })
    .catch(err => console.log(err))

  }

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <AdminSideBar />

          <main role="main" className=" col-md-9 ml-sm-auto col-lg-10 px-4">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 className="h2 text-primary display-6 ">
                Update Contact Information
              </h1>
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
                            <form className="mx-1 mx-md-4" onSubmit={addContactInformation}>
                              <h3 className="h2 text-primary display-8 ">
                                Basic Details :{" "}
                              </h3>
                              <div className="d-flex  mb-4 mt-3">
                                <label
                                  className="form-label col-2"
                                  htmlFor="form3Example3c"
                                >
                                  Address
                                </label>

                                <div
                                  data-mdb-input-init
                                  className="form-outline flex-fill mb-0 col-10"
                                >
                                  <input
                                    type="text"
                                    id="address"
                                    className="form-control"
                                    onChange={(e) => setAddress(e.target.value)}
                                    required
                                  />
                                </div>
                              </div>
                              <div className="d-flex flex-row align-items-center mb-4 ">
                                <label
                                  className="form-label col-2"
                                  htmlFor="form3Example4c"
                                >
                                  Email
                                </label>

                                <div
                                  data-mdb-input-init
                                  className="form-outline flex-fill mb-0 col-10"
                                >
                                  <input
                                    type="email"
                                    id="email"
                                    className="form-control"
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                  />
                                </div>
                              </div>
                              <div className="d-flex flex-row align-items-center mb-4">
                                <label
                                  className="form-label col-2"
                                  htmlFor="seats"
                                >
                                  Contact Number
                                </label>

                                <div
                                  data-mdb-input-init
                                  className="form-outline flex-fill mb-0 col-10"
                                >
                                  <input
                                    type="number"
                                    id="contactNumber"
                                    className="form-control"
                                    onChange={(e) => setContactNumber(e.target.value)}
                                    required
                                  />
                                </div>
                              </div>
                              <div className="d-flex flex-row align-items-center mb-4">
                                <label
                                  className="form-label col-2"
                                  htmlFor="fuel"
                                >
                                  Website
                                </label>
                                <div
                                  data-mdb-input-init
                                  className="form-outline flex-fill mb-0 col-10"
                                >
                                  <input
                                    type="text"
                                    id="website"
                                    className="form-control"
                                    onChange={(e) => setWebsite(e.target.value)}
                                    required
                                  />
                                </div>
                              </div>

                              <h3 className="h2 text-primary display-8 ">
                                Branches :
                              </h3>
                              <div className="d-flex  mb-4 mt-3 ">
                                <label
                                  className="form-label col-2"
                                  htmlFor="form3Example3c"
                                >
                                  Address
                                </label>

                                <div
                                  data-mdb-input-init
                                  className="form-outline flex-fill mb-0 col-10"
                                >
                                  <input
                                    type="text"
                                    id="address"
                                    className="form-control"
                                    onChange={(e) => setBranchAddress(e.target.value)}
                                    required
                                  />
                                </div>
                              </div>
                              
                              <div className="d-flex flex-row align-items-center mb-4">
                                <label
                                  className="form-label col-2"
                                  htmlFor="seats"
                                >
                                  Contact Number
                                </label>

                                <div
                                  data-mdb-input-init
                                  className="form-outline flex-fill mb-0 col-10"
                                >
                                  <input
                                    type="number"
                                    id="contactNumber"
                                    className="form-control"
                                    onChange={(e) => setBranchContact(e.target.value)}
                                    required
                                  />
                                </div>
                              </div>
                              <button
                                type="button"
                                data-mdb-button-init
                                data-mdb-ripple-init
                                className="btn btn-primary btn-sm"
                              >
                                New Branch
                              </button>

                              <h3 className="h2 text-primary display-8 mt-3 ">
                                Social Accounts Links :
                              </h3>
                              <div className="d-flex  mb-4 mt-3">
                                <label
                                  className="form-label col-2"
                                  htmlFor="facebook"
                                >
                                 Facebook
                                </label>

                                <div
                                  data-mdb-input-init
                                  className="form-outline flex-fill mb-0 col-10"
                                >
                                  <input
                                    type="text"
                                    id="facebook"
                                    className="form-control"
                                    onChange={(e) => setFacebook(e.target.value)}
                                    required
                                  />
                                </div>
                              </div>
                              
                              <div className="d-flex flex-row align-items-center mb-4">
                                <label
                                  className="form-label col-2"
                                  htmlFor="tweeter"
                                >
                                Tweeter
                                </label>

                                <div
                                  data-mdb-input-init
                                  className="form-outline flex-fill mb-0 col-10"
                                >
                                  <input
                                    type="text"
                                    id="tweeter"
                                    className="form-control"
                                    onChange={(e) => setTweeter(e.target.value)}
                                    required
                                  />
                                </div>
                              </div>
                              <div className="d-flex flex-row align-items-center mb-4">
                                <label
                                  className="form-label col-2"
                                  htmlFor="instagram"
                                >
                                Instagram
                                </label>

                                <div
                                  data-mdb-input-init
                                  className="form-outline flex-fill mb-0 col-10"
                                >
                                  <input
                                    type="text"
                                    id="instagram"
                                    className="form-control"
                                    onChange={(e) => setInstagram(e.target.value)}
                                    required
                                  />
                                </div>
                              </div>
                              <div className="d-flex flex-row align-items-center mb-4">
                                <label
                                  className="form-label col-2"
                                  htmlFor="linkedin"
                                >
                                LinkedIn
                                </label>

                                <div
                                  data-mdb-input-init
                                  className="form-outline flex-fill mb-0 col-10"
                                >
                                  <input
                                    type="text"
                                    id="linkedin"
                                    className="form-control"
                                    onChange={(e) => setLinkedin(e.target.value)}
                                    required
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
                                  Update Contact Information
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

export default UpdateContactInformation;
