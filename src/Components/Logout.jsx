import React from "react";
import { fakeAuth } from "./Login";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    fakeAuth.isAuthenticated = false;
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
