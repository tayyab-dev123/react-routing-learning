import { useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const AuthenticatedRoute = () => {
  const auth = useSelector((auth) => {
    console.log(auth.auth.isAuthenticated);
    return auth.auth.isAuthenticated;
  });

  return auth ? <Navigate to="/dashboard" /> : <Outlet />;
};

export default AuthenticatedRoute;
