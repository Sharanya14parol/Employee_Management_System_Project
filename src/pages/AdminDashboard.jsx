import React from 'react'
import users from '../api/mockData'

const AdminDashboard = () => {
const allTasks = JSON.parse(localStorage.getItem("allTasks")) || [];
const CompletedTasks = allTasks.filter((task)=> task.status.toLowerCase() === "completed");
const ProgressiveTasks = allTasks.filter((task)=> task.status.toLowerCase() === "in progress");
const PendingTasks = allTasks.filter((task)=> task.status.toLowerCase() === "pending");

  return (
    <div className="dashboard-container">
        <h2>Dashboard Page</h2>
        <h3>Summary</h3>
        <h4>Total Employees: {users.length-1}</h4>
        <h4> Total Completed tasks : {CompletedTasks.length}</h4>
        <h4> Total Progressive tasks : {ProgressiveTasks.length}</h4>
        <h4> Total Pending tasks : {PendingTasks.length}</h4>

    </div>
  )
}

export default AdminDashboard