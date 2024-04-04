import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

export default function Login() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const from = state?.from || { pathname: "/" };
  const [redirectToReferrer, setRedirectToReferrer] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const login = (enteredUsername, enteredPassword) => {
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (
      storedUser &&
      storedUser.username === enteredUsername &&
      storedUser.password === enteredPassword
    ) {
      fakeAuth.authenticate(() => {
        setRedirectToReferrer(true);
      });
    } else {
      console.error("Authentication failed");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(username, password);
  };

  useEffect(() => {
    if (redirectToReferrer) {
      navigate(from.pathname, { replace: true });
    }
  }, [redirectToReferrer, navigate, from.pathname]);

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

/* A fake authentication function */
export const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100);
  },
};
