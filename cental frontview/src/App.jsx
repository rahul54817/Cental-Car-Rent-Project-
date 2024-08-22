import React, { useContext, useEffect } from "react";
import TopBar from "./components/TopBar";
import NavBar from "./components/NavBar";
import Carousel from "./components/Carousel";
import Features from "./components/Features";
import About from "./pages/About";
import Services from "./pages/Services";

// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'jquery/dist/jquery.min';
import 'popper.js/dist/umd/popper.min';

import Footer from "./components/Footer";
import Copyright from "./components/Copyright";
import Home from "./pages/Home";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Registration from "./pages/Registration";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import ErrorPage from "./pages/ErrorPage";
import Blog from "./pages/Blog";
import AdminDashbord from "./pages/AdminDashbord";
import AddNewCar from "./pages/Admin/AddNewCar";

import { Protected } from "./Protected";
import GetAllUsers from "./pages/Admin/GetAllUsers";
import ManageTotalBookings from "./pages/Admin/ManageTotalBookings";
import ManageTestinominals from "./pages/Admin/ManageTestinominals";
import ManageContactUSQueries from "./pages/Admin/ManageContactUSQueries";
import ManageCars from "./pages/Admin/ManageCars";
import UpdateContactInformation from "./pages/Admin/UpdateContactInformation";
import ManageSubscribers from "./pages/Admin/ManageSubscribers";
import UnAuthorizedRole from "./components/UnAuthorizedRole";

import { UserContext } from "./Contexts/UserContex";
import { jwtDecode } from "jwt-decode";
import Teams from "./components/Teams";
import Testimonials from "./components/Testimonials";
import CarSteps from "./components/CarSteps";
import CarsCategories from "./components/CarsCategories";
import Profile from "./pages/User/Profile";
import UserBookings from "./pages/User/UserBookings";
import Cars from "./pages/User/Cars";
import UpdateProfile from "./pages/User/UpdateProfile";
import History from "./pages/User/History";
import { Protect } from "./Protect";
import BookCar from "./pages/User/BookCar";
import UpdateCar from "./pages/Admin/UpdateCar";
// import Modal from "./components/Modal";
const App = () => {
  const userContext = useContext(UserContext);

  useEffect(() => {
    const user = localStorage.getItem("_id");
    const token = localStorage.getItem("token");

    if (user && token) {
      const decodeToken = jwtDecode(token);
      userContext.setRole(decodeToken.role);
    }
  }, []);

  return (
    <>
      <TopBar />

      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={<ErrorPage />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/cars" element={<CarsCategories />} />
        <Route path="/features" element={<Features />} />
        // Admin Routing
        <Route
          path="/admin/dashboard"
          element={<Protected ComponentName={AdminDashbord} />}
        />
        <Route
          path="/admin/add-new-car"
          element={<Protected ComponentName={AddNewCar} />}
        />
        <Route
          path="/admin/all-users"
          element={<Protected ComponentName={GetAllUsers} />}
        />
        <Route
          path="/admin/total-bookings"
          element={<Protected ComponentName={ManageTotalBookings} />}
        />
        <Route
          path="/admin/testimonials"
          element={<Protected ComponentName={ManageTestinominals} />}
        />
        <Route
          path="/admin/contact-queries"
          element={<Protected ComponentName={ManageContactUSQueries} />}
        />
        <Route
          path="/admin/car-types"
          element={<Protected ComponentName={ManageCars} />}
        />
        <Route
          path="/admin/update-contact-information"
          element={<Protected ComponentName={UpdateContactInformation} />}
        />
        <Route
          path="/admin/subscribers"
          element={<Protected ComponentName={ManageSubscribers} />}
        />
        <Route
          path="/admin/update-car"
          element={<Protected ComponentName={UpdateCar} />}
        />
        <Route path="/not-authorized" element={<UnAuthorizedRole />} />


        {/* User Routings */}
        <Route
          path="/user/profile"
          element={<Protect ComponentName={Profile} />}
        />
        <Route
          path="/user/bookings"
          element={<Protect ComponentName={UserBookings} />}
        />
        <Route path="/user/cars" element={<Protect ComponentName={Cars} />} />
        <Route
          path="/user/update-profile"
          element={<Protect ComponentName={UpdateProfile} />}
        />
        <Route
          path="/user/history"
          element={<Protect ComponentName={History} />}
        />
        <Route
          path="/user/book-car"
          element={<Protect ComponentName={BookCar} />}
        />

      </Routes>

      <Footer />
      <Copyright />
    </>
  );
};

export default App;
