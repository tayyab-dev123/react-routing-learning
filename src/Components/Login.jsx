import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { authenticate } from "../features/authSlice";

export default function Login() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const dispatch = useDispatch();
  const from = state?.from || { pathname: "/" };
  const [redirectToReferrer, setRedirectToReferrer] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const auth = useSelector((auth) => {
    console.log(auth.auth.isAuthenticated);
    return auth.auth.isAuthenticated;
  });

  const login = (enteredUsername, enteredPassword) => {
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (
      storedUser &&
      storedUser.username === enteredUsername &&
      storedUser.password === enteredPassword
    ) {
      dispatch(authenticate(true));
      navigate("/dashboard");
    } else {
      console.error("Authentication failed");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(username, password);
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <label className="block">
              <span className="text-gray-700">Username:</span>
              <input
                type="text"
                value={username}
                onChange={handleUsernameChange}
                className="mt-1 py-3 block w-full rounded-md border-gray-300 shadow-sm"
              />
            </label>
            <label className="block">
              <span className="text-gray-700">Password:</span>
              <input
                type="password"
                value={password}
                onChange={handlePasswordChange}
                className="mt-1 py-3 block w-full rounded-md border-gray-300 shadow-sm"
              />
            </label>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Sign in
            </button>
          </form>
          <button
            onClick={() => {
              navigate("/SignUp");
            }}
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-slate-600 hover:bg-slate-700"
          >
            Register
          </button>
        </div>
      </div>
    </>
  );
}
