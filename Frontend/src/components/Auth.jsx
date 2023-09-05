import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authAction } from "../store";
const Auth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isSignup, setIsSignup] = useState(false);
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleToggle = () => {
    setIsSignup(!isSignup);
  };

  const sendRequest = async (type = "login") => {
    const res = await axios
      .post(`http://localhost:5000/api/user/${type}`, {
        name: user.name,
        email: user.email,
        password: user.password,
      })
      .catch((err) => {
        console.log(err);
      });
    const data = await res.data;
    return data;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignup) {
      sendRequest("signup")
        .then((data) => localStorage.setItem("userId", data.user._id))
        .then(() => dispatch(authAction.login()))
        .then(() => navigate("/blogs"));
    } else {
      sendRequest()
        .then((data) => localStorage.setItem("userId", data.user._id))
        .then(() => dispatch(authAction.login()))
        .then(() => navigate("/blogs"));
    }
  };
  return (
    <div className="w-full h-full flex items-center justify-center bg-gray-50">
      <div>
        <div>
          <h2>{isSignup ? "Sing up" : "Log in"}</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div>
            {isSignup ? (
              <div>
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  autoComplete="name"
                  required
                  value={user.name}
                  onChange={handleChange}
                />
              </div>
            ) : (
              ""
            )}
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="text"
                id="email"
                name="email"
                autoComplete="email"
                required
                value={user.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                autoComplete="password"
                required
                value={user.password}
                onChange={handleChange}
              />
            </div>
            <div>
              <button
                type="submit"
                className="flex justify-center p-2 text-lg font-medium rounded-md text-white bg-blue-600 mt-2"
              >
                {isSignup ? "Sign Up" : "Log In"}
              </button>
            </div>
            <div className="mt-4">
              <button
                type="button"
                onClick={handleToggle}
                className="py-2 text-md text-indigo-800 hover:text-indigo-500 focus:outline-none focus:underline "
              >
                {isSignup
                  ? "Already have an account? Login"
                  : "Don't have an account? Sing up"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Auth;
