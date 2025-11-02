import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/App.css"
const Navbar = () => {
  const navigate = useNavigate();
  const [theme, setTheme] = useState("light");
const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const logout = () => {
    localStorage.removeItem("currentUser");
    navigate("/");
  };

  useEffect(() => {
    document.body.style.backgroundColor = theme === "light" ? "white" : "black";
    document.body.style.color = theme === "light" ? "black" : "white";
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  };
  return (
    <div>
      <h2>Employee Task Management System</h2>

      <nav className="navbar">
        {currentUser?.role === "admin" ? <Link to="/adminDashboard" className="nav-Link">Dashboard</Link>: <Link to="/dashboard" className="nav-Link">Dashboard</Link>}
        {currentUser?.role!=="admin" && (<Link to="/tasks" className="nav-Link">Tasks</Link>)}

        {currentUser?.role === "admin" && (
            <>
          <Link to="/employeeList" className="nav-Link">Employees</Link>
          <Link to="/viewAllTasks" className="nav-Link">View all Tasks</Link>
          </>
        )}
        <button onClick={toggleTheme} className="nav-button">
          {theme === "light" ? "Dark theme" : "Light Theme"}
        </button>

        {currentUser && <button onClick={logout} className="nav-button">Logout</button>}
      </nav>
    </div>
  );
};

export default Navbar;
