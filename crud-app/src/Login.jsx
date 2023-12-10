import React, { useState } from "react";
import axios from "axios";

const Login = ({ history }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    console.log('login')
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/login", {
        username,
        password,
      });
  
      const { role } = response.data;
  
      // Store role in local storage
      localStorage.setItem("userRole", role);
  
      // Redirect to appropriate page based on the role
      if (role === "admin") {
        history.push("/admin-dashboard"); // Redirect to admin dashboard route
      } else {
        history.push("/user-dashboard"); // Redirect to user dashboard route
      }
    } catch (error) {
      console.error("Login failed: ", error);
      setError("Invalid credentials. Please try again.");
    }
  };


  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-25 bg-white rounded p-3 d-flex flex-column justify-content-start">
        <h2 className="mb-3">Login</h2>
        <form onSubmit={handleLogin} className="d-flex flex-column gap-4">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="w-25 text-white bg-primary d-flex justify-content-center" type="submit">Login</button>
        </form>
        {error && <p className="text-danger">{error}</p>} {/* Display error message if there is an error */}
      </div>
    </div>
  );
};

export default Login;
