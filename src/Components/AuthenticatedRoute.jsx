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

// import { useEffect } from "react";
// import { useNavigate, useLocation, Outlet, Navigate } from "react-router-dom";
// import { fakeAuth } from "./Login";
// import { useSelector, useDispatch } from "react-redux";

// const AuthenticatedRoute = ({ children }) => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const auth = useSelector((auth) => {
//     console.log(auth.auth.isAuthenticated);
//     return auth.auth.isAuthenticated;
//   });

//   useEffect(() => {
//     console.log(location); // Log the current location to the console

//     if (fakeAuth.isAuthenticated) {
//       navigate("/dashboard");
//     } else {
//       navigate("/login", {
//         state: { from: location },
//         replace: true,
//       });
//     }
//   }, [fakeAuth.isAuthenticated]);

//   return !fakeAuth.isAuthenticated ? children : null;
// };

// export default AuthenticatedRoute;
