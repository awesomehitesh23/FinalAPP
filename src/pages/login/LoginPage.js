import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import Swal from "sweetalert2";
import "./Login.css";

const LoginPage = ({ login }) => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ userId: '', password: '' });

  const handleChange = (event) => {
    console.log(credentials)
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('sending login request');
    axios
      .post("http://localhost:8086/auth/login", credentials)
      .then((response) => {
        console.log(response.data);
        // Handle success response here
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("userId",response.data.userId);
        // localStorage.setItem("userId", response.data.token);
        login(response.data.token, response.data.userId);
        // Redirect to the HomePage page
        navigate("/home");
      })
      .catch((error) => {
        console.error(error);
        // Handle error here
        //alert('Invalid login credentials');
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Oops! Something went wrong!",
          text: "Invalid Login Credentials!",
          showConfirmButton: true,
          timer: 10000,
        });
      });
  };

  return (

    <React.Fragment>
      <div className="header">
        <h1 class="display-4">Welcome to the Crystal Evenster App Portal!</h1>
      </div>
      <div className="contaoner-fluid">
        <div className="login-container">
          <div className="login-form">
            <form onSubmit={handleSubmit}>
              <h5 className="text-center" style={{ marginBottom: "20px" }}>
                Login Please!
              </h5>
              <div className="form-group">
                <input
                  type="number"
                  id="userId"
                  name="userId"
                  placeholder="Enter userID"
                  value={credentials.userId}
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter Password"
                  value={credentials.password}
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Continue
              </button>
              <div style={{ marginTop: 10 }}>
                <label htmlFor="register">
                  Don't have an account? <Link to="/register">Register</Link>
                </label>
              </div>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default LoginPage;
