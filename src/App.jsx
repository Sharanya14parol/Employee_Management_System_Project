import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Tasks from "./pages/Tasks";
import Employees from "./pages/Employees";
import Navbar from "./components/Navbar";
import AdminViewTasks from "./pages/AdminViewTasks";
import AdminDashboard from "./pages/AdminDashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/*" element={
          <>
            <Navbar />
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/adminDashboard" element={<AdminDashboard />} />
              <Route path="/tasks" element={<Tasks />} />
              <Route path="/employeeList" element={<Employees />} />
              <Route path="/viewAllTasks" element={<AdminViewTasks />} />
              <Route path="*" element={<Dashboard />} />
            </Routes>
          </>
        } />
      </Routes>
    </Router>
  );
}


export default App;
