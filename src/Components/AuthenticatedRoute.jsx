import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { fakeAuth } from "./Login";

const AuthenticatedRoute = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    console.log(location); // Log the current location to the console

    if (fakeAuth.isAuthenticated) {
      navigate("/dashboard");
    } else {
      navigate("/login", {
        state: { from: location },
        replace: true,
      });
    }
  }, [fakeAuth.isAuthenticated]);

  return !fakeAuth.isAuthenticated ? children : null;
};

export default AuthenticatedRoute;
