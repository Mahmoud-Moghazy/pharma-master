// ProtectedRoute.js
import React from "react";
import { Route, Navigate } from "react-router-dom";
import useAuth from "../Custom-hooks/UseAuth";

const ProtectedRoute = ({ path, redirectTo, children }) => {
  const currentUser = useAuth(); // Retrieve currentUser from the hook

  return currentUser ? (
    <Route path={path} element={children} />
  ) : (
    <Navigate to={redirectTo} />
  );
};

export default ProtectedRoute;
