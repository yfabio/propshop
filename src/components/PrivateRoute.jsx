import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../context/user/UserContext";

const PrivateRoute = () => {
  const { user, token } = useContext(UserContext);

  return user ? <Outlet /> : <Navigate to={"/login"} replace />;
};

export default PrivateRoute;
