import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
const RouteProtection = ({ children, redirect_to }) => {
  const { currentUser } = useSelector((state) => state.user);
  return currentUser ? children : <Navigate to={redirect_to} />;
};

export default RouteProtection;
