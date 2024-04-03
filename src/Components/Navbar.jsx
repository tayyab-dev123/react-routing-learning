import React from "react";
import { Link, Route, Routes } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="bg-blue-500 p-6">
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="text-white hover:text-gray-200">
              Home
            </Link>
          </li>
          {/* <li>
            <Link to="/login" className="text-white hover:text-gray-200">
              Login
            </Link>
          </li> */}
          <li>
            <Link to="/dashboard" className="text-white hover:text-gray-200">
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/Categories" className="text-white hover:text-gray-200">
              Categories
            </Link>
          </li>
          <li>
            <Link to="/Products" className="text-white hover:text-gray-200">
              Products
            </Link>
          </li>
          <li>
            <Link to="/Admin" className="text-white hover:text-gray-200">
              Admin area
            </Link>
          </li>
          <li>
            <Link to="/logout" className="text-white hover:text-gray-200">
              Logout
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
