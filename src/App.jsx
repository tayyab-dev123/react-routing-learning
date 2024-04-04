import { Link, Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import Dashboard from "./Components/Dashboard";
import { Categories, Desktops, Laptops } from "./Components/Categories";
import Products from "./Components/Products";
import PrivateRoute from "./Components/PrivateRoute";
import SignUpForm from "./Components/SignUp";
import AuthenticatedRoute from "./Components/AuthenticatedRoute";
import Navbar from "./Components/Navbar";
import { fakeAuth } from "./Components/Login";
import Home from "./Components/Home";
import Admin from "./Components/Admin";
import Logout from "./Components/Logout";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

export default function App() {
  const auth = useSelector((auth) => {
    console.log(auth.auth.isAuthenticated);
    return auth.auth.isAuthenticated;
  });
  return (
    <div>
      {console.log(auth)}
      {auth && <Navbar />}

      <Routes>
        <Route path="" element={<AuthenticatedRoute />}>
          <Route path="/login" element={<Login />} />

          <Route path="/SignUp" element={<SignUpForm />} />
        </Route>

        <Route path="" element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="products/*" element={<Products />} />
          <Route path="/admin" element={<Admin />} />

          <Route path="/categories" element={<Categories />}>
            <Route path="laptops" element={<Laptops />} />
            <Route path="desktops" element={<Desktops />} />
          </Route>
          <Route path="/logout" element={<Logout />} />
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}
