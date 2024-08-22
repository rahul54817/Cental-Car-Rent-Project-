// import { useEffect, useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import { UserContext } from "./Contexts/UserContex";
// import jwtDecode from "jwt-decode";

// export const Protected = ({ ComponentName }) => {
//   const userContext = useContext(UserContext);
//   let navigate = useNavigate();

//   useEffect(() => {
//     const user = localStorage.getItem("_id");
//     const token = localStorage.getItem("token");

//     if (!user || !token) {
//       navigate("/login");
//       return;
//     }

//     try {
//       const decodedToken = jwtDecode(token);
//       userContext.setRole(decodedToken.role);

//       if (userContext.role !== "admin") {
//         navigate("/not-authorized");
//       }
//     } catch (error) {
//       console.error("Invalid token", error);
//       navigate("/login");
//     }
//   }, [navigate, userContext]);

//   return <ComponentName />;
// };


import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
// import {UserContext} from "../src"
import { UserContext } from "./Contexts/UserContex";
import { jwtDecode } from "jwt-decode";

export const Protected = ({ ComponentName }) => {
  const userContext = useContext(UserContext);

  let navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("_id");
    const token = localStorage.getItem("token");

    const decodeToken = jwtDecode(token);

    userContext.setRole(decodeToken.role);

    if (!user) {
      navigate("/login");
    }

    if (userContext.role !== "admin") {
      navigate("/not-authorized");
    }
  }, [0]);
  return (
    <div>
      <ComponentName />
    </div>
  );
};
