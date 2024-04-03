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

export default function App() {
  return (
    <div>
      {console.log(fakeAuth.isAuthenticated)}
      {fakeAuth.isAuthenticated && <Navbar />}

      <Routes>
        <Route
          path="/login"
          element={
            <AuthenticatedRoute>
              <Login />
            </AuthenticatedRoute>
          }
        />

        <Route
          path="/SignUp"
          element={
            <AuthenticatedRoute>
              <SignUpForm />
            </AuthenticatedRoute>
          }
        />

        <Route
          path="/Logout"
          element={
            <PrivateRoute>
              <Logout />
            </PrivateRoute>
          }
        />

        <Route
          path="/categories"
          element={
            <PrivateRoute>
              <Categories />
            </PrivateRoute>
          }
        >
          <Route path="laptops" element={<Laptops />} />
          <Route path="desktops" element={<Desktops />} />
        </Route>
        <Route
          path="products/*"
          element={
            <PrivateRoute>
              <Products />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin"
          element={
            <PrivateRoute>
              <Admin />
            </PrivateRoute>
          }
        />

        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
}
