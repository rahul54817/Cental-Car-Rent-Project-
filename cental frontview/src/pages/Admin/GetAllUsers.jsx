import React, { useEffect, useState } from "react";
import AdminSideBar from "./AdminSideBar";
import axios from "axios";

const GetAllUsers = () => {

  const [users, setUsers] = useState([])


  const getUsers = () => {
    axios.get("http://localhost:8080/api/all_users").then((response) => {
      console.log(response);
      setUsers(response.data.users)
      
    });
  };

  useEffect(() => {
    getUsers();
  }, [0]);
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <AdminSideBar />

          <main role="main" className=" col-md-9 ml-sm-auto col-lg-10 px-4">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 className="h2 text-primary display-6 ">
                All Registerd Users
              </h1>
            </div>
 
            <table class="table table-hover">
              <thead>
                <tr className="table-danger">
                  <th scope="col">No.</th>
                  <th scope="col">Full Name</th>
                  <th scope="col">Contact Number</th>
                  <th scope="col">Role</th>
                  <th scope="col">Email</th>
                </tr>
              </thead>
              <tbody>
             {users.map((user, key)=> 
              (
                <tr>
                  <th scope="row">{key + 1}</th>
                  <td>{user.name}</td>
                  <td>78287167</td>
                  <td>{user.role}</td>
                  <td>{user.email}</td>
                </tr>

              )
             )}
               
              </tbody>
            </table>
          </main>
        </div>
      </div>
    </>
  );
};

export default GetAllUsers;
