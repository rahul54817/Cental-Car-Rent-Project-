import React, { useEffect } from "react";
import AdminSideBar from "./AdminSideBar";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ManageTestinominals = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [personName, setPersonName] = useState("");
  const [Proffession, setProffession] = useState("");
  const [image, setImage] = useState("");
  const [message, setMessage] = useState("");

  const [testimonials, setTestimonials] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    let formdata = new FormData();

    formdata.append("person_name", personName);
    formdata.append("proffession", Proffession);
    formdata.append("image", image);
    formdata.append("message", message);

    

    

    axios
      .post(
        "http://localhost:8080/api/testimonial/add-testimonial",
        formdata
      )
      .then((res) => {
        if (res.data.result === true) {
          toast.success(res.data.message);
          getTestimonials()
        }
      })
      .catch((err) => console.log(err));


    handleClose();
  };

  const getTestimonials = () => {
    axios
      .get("http://localhost:8080/api/testimonial/get-testimonials")
      .then((res) => {
        if (res.data.result === true) {
          setTestimonials(res.data.testimonials);
          console.log(testimonials);
        }
      })
      .catch((err) => console.log(err));
  };

  const deleteHandler = (id) => {

    axios
    .put(`http://localhost:8080/api/testimonial/delete-testimonial/${id}`)
    .then((res) => {
      if(res.data.result === true) {
        getTestimonials()
        toast.success(res.data.message);
      }
    })
    .catch((err) => console.log(err));
    
  }
  useEffect(() => {
    getTestimonials();
  }, []);

  return (
    <>
      <ToastContainer />

      <div className="container-fluid">
        <div className="row">
          <AdminSideBar />

          <main role="main" className=" col-md-9 ml-sm-auto col-lg-10 px-4">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 className="h2  text-primary display-6">
                Manage Testimonials
              </h1>
            </div>

            <section>
              <Button variant="primary" onClick={handleShow}>
                Add Testinominal
              </Button>

              <div style={{ maxHeight: "650px", overflowY: "auto" }}>
              {
                testimonials && (
                <table class="table table-hover">
                  <thead>
                    <tr className="table-danger">
                      <th scope="col">No.</th>
                      <th scope="col">Profile </th>
                      <th scope="col">Person Name</th>
                      <th scope="col">Proffession</th>
                      <th scope="col">Message</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {testimonials.map((testinominal, index) => (
                      <tr className="mt-5">
                        <td>{index + 1}</td>
                        <td>
                          <img
                            src={`http://localhost:8080/${testinominal.profile_img}`}
                            style={{ height: "60px", width: "60px" }}
                          />
                        </td>
                        <td>{testinominal.person_name}</td>
                        <td>{testinominal.proffession}</td>
                        <td style={{ width: "400px" }}>
                          {testinominal.message}
                        </td>

                        <td>
                          <td>
                            <button className="btn btn-secondary m-2">
                              Update
                            </button>
                          </td>
                          <td>
                            <button className="btn btn-danger m-2"
                            onClick={()=> deleteHandler(testinominal._id)}
                            >
                              Delete
                            </button>
                          </td>
                          <td></td>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                )
              }
              </div>

              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>
                    Fill the Details about Testinominal ..
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>
                    <div className="d-flex  mb-4">
                      <label
                        className="form-label col-2"
                        htmlFor="form3Example3c"
                      >
                        Person Name
                      </label>

                      <div
                        data-mdb-input-init
                        className="form-outline flex-fill mb-0 col-10 ms-5"
                      >
                        <input
                          type="text"
                          id="brand"
                          className="form-control"
                          onChange={(e) => setPersonName(e.target.value)}
                          placeholder="Jhon"
                          required
                        />
                      </div>
                    </div>
                    <div className="d-flex flex-row align-items-center mb-4 ">
                      <label
                        className="form-label col-2"
                        htmlFor="form3Example4c"
                      >
                        Proffession
                      </label>

                      <div
                        data-mdb-input-init
                        className="form-outline flex-fill mb-0 col-10 ms-5"
                      >
                        <input
                          type="text"
                          id="model"
                          className="form-control"
                          onChange={(e) => setProffession(e.target.value)}
                          placeholder="Software Developer"
                          required
                        />
                      </div>
                    </div>

                    <div className="d-flex flex-row align-items-center mb-4">
                      <label className="form-label col-2" htmlFor="img">
                        Image
                      </label>
                      <div
                        data-mdb-input-init
                        className="form-outline flex-fill mb-0 col-10 ms-5"
                      >
                        <input
                          type="file"
                          id="img"
                          className="form-control"
                          onChange={(e) => setImage(e.target.files[0])}
                          required
                          accept="/Image"
                        />
                      </div>
                    </div>

                    <div className="d-flex flex-row align-items-center mb-4">
                      <label className="form-label col-2" htmlFor="seats">
                        Message
                      </label>

                      <div
                        data-mdb-input-init
                        className="form-outline flex-fill mb-0 col-10 ms-5"
                      >
                        <textarea
                          name="messge"
                          id=""
                          rows={3}
                          className="w-100 form-control"
                          placeholder="write message here ...."
                          onChange={(e) => setMessage(e.target.value)}
                        ></textarea>
                      </div>
                    </div>

                    <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                      <button
                        type="submit"
                        data-mdb-button-init
                        data-mdb-ripple-init
                        className="btn btn-primary btn-lg"
                      >
                        Add
                      </button>
                    </div>
                  </form>
                </Modal.Body>
              </Modal>
            </section>
          </main>
        </div>
      </div>
    </>
  );
};

export default ManageTestinominals;
