import React, { useState } from "react";
import "../styles/Login.css";
import {Link} from 'react-router-dom';

const Login = () => {
  const [loginData, setLoginData] = useState({
    identifier: "", // This will hold either email or username
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data Submitted:", loginData);
    // Add your submission logic here, e.g., API call
  };

  return (
    <main className="login-page">
      <div className="container">
        <form onSubmit={handleSubmit} className="login-form">
          <h1>Login</h1>
          <div className="login-form-group">
            <label htmlFor="identifier">Email or Username</label>
            <input
              type="text"
              id="identifier"
              name="identifier"
              value={loginData.identifier}
              onChange={handleChange}
              placeholder="Enter your email or username"
              required
            />
          </div>
          <div className="login-form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={loginData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit" className="submit-btn">Login</button>
          <p>Not a User? <Link to="/register">sign up</Link></p>
        </form>
      </div>
    </main>
  );
};

export default Login;
