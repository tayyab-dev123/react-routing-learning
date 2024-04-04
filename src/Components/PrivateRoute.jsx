import { useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { fakeAuth } from "./Login";

const PrivateRoutes = () => {
  return fakeAuth.isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
