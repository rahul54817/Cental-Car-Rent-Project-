import React from "react";
import UserSideBar from "./UserSideBar";

const History = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <UserSideBar />

          <main role="main" className=" col-md-9 ml-sm-auto col-lg-10 px-4">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 className="h2 text-primary display-6 ">
                History....
              </h1>
            </div>

           
          </main>
        </div>
      </div>
    </>
  );
};

export default History;
