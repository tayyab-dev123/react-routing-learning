import { useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const PrivateRoutes = () => {
  const auth = useSelector((auth) => {
    console.log(auth.auth.isAuthenticated);
    return auth.auth.isAuthenticated;
  });

  return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
