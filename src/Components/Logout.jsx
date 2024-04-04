import React from "react";
import { fakeAuth } from "./Login";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { authenticate } from "../features/authSlice";

const Logout = () => {
  const dispatch = useDispatch();
  const auth = useSelector((auth) => {
    console.log(auth.auth.isAuthenticated);
    return auth.auth.isAuthenticated;
  });
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(authenticate(false));
    localStorage.clear();
    navigate("/login");
  };

  return (
    <>
      <button
        onClick={handleLogout}
        className="group relative mt-10 w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-slate-600 hover:bg-slate-700"
      >
        Logout
      </button>
    </>
  );
};

export default Logout;
