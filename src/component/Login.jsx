import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = ({ setUser }) => {
  const navigate = useNavigate();

  const [input, setInput] = useState({ username: "", password: "" });
  const [allData, setAllData] = useState([]);

  const changeHandle = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const clickHandle = (e) => {
    e.preventDefault();

    // Retrieve user data from localStorage
    let users = JSON.parse(localStorage.getItem("user")) || [];
    console.log(users)

    // Check if username and password match
    let user = users.find(
      (ele) => ele.username === input.username && ele.password === input.password
    );

    if (user) {
      setUser(user); // Set user state

      // Store logged-in user info
      localStorage.setItem(
        "loggedIn",
        JSON.stringify({ username: user.username, name: user.name })
      );

      toast.success("Logged in successfully!", {
        position: "top-center",
        autoClose: 3000,
      });
      setInput({ username: "", password: "" });
      navigate("/");
    } else {
      toast.warn("Please use valid data!", { position: "top-center" });
    }
  };

  return (
    <form
      style={{
        border: "2px solid #102447",
        width: "40rem",
        margin: "auto",
        marginTop: "2rem",
        borderRadius: "8px",
      }}
    >
      <h1 style={{ marginLeft: "16rem", color: "#102447" }}>Login</h1>
      <div className="mb-3">
        <label htmlFor="username" className="form-label">Username</label>
        <input
          type="text"
          name="username"
          onChange={changeHandle}
          value={input.username}
          className="form-control"
          id="username"
          placeholder="Enter your username"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">Password</label>
        <input
          type="password"
          name="password"
          onChange={changeHandle}
          value={input.password}
          className="form-control"
          id="password"
        />
      </div>
      <button
        type="submit"
        className="btn btn-dark"
        onClick={clickHandle}
        style={{ borderRadius: "5px", marginLeft: "17rem" }}
      >
        Submit
      </button>
      <Link to="/Signup">
        <p>Create a new Account</p>
      </Link>
    </form>
  );
};

export default Login;
