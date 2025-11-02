import users from "../api/mockData";
import Dashboard from "./Dashboard";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/App.css'

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username && !password) {
      setError("Enter username and password");
    } else if (!username) {
      setError("Enter username");
    } else if (!password) {
      setError("Enter password");
    } else {
      setError("");
    }

    const registeredUser = users.find(
      (user) => user.validname === username && user.validPassword === password
    );
    if (registeredUser) {
  const userData = {
    username: registeredUser.validname,
    role: registeredUser.role,
  };
  localStorage.setItem("currentUser", JSON.stringify(userData));

  if (registeredUser.role.toLowerCase() === "admin") {
    navigate("/adminDashboard");
  } else {
    navigate("/dashboard");
  }
} else {
  alert("Invalid User");
}
  }
  return (
    <>
    <h2>Login Page</h2>
    <div className="login-box">
      <div className="inner-loginBox">
      <h3>Login Form</h3>
      <form onSubmit={handleSubmit}>
        <p>
          
          <label htmlFor="username" className="login-label">Username</label>
          <input
          className="login-input"
            type="text"
            name="username"
            onChange={(e) => setUsername(e.target.value)}
          ></input>
        </p>
        <p>
          <label htmlFor="password" className="login-label">Password</label>
          <input
          className="login-input"
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </p>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit">Login</button>
      </form>
      </div>
    </div>
    </>
  );
};

export default Login;
