import React, { useEffect, useState } from "react";

const AdminViewTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState("All");

  useEffect(() => {
    const allTasks = JSON.parse(localStorage.getItem("allTasks")) || [];
    setTasks(allTasks);
    setFilteredTasks(allTasks);
  }, []);

  useEffect(() => {
    let filtered = tasks;

    if (selectedEmployee !== "All") {
      filtered = filtered.filter((task) => task.user === selectedEmployee);
    }

    if (selectedStatus !== "All") {
      filtered = filtered.filter(
        (task) => task.status.toLowerCase() === selectedStatus.toLowerCase()
      );
    }

    setFilteredTasks(filtered);
  }, [selectedEmployee, selectedStatus, tasks]);

  const employeeNames = ["All", ...new Set(tasks.map((task) => task.user))];

  return (
    <div style={{ padding: "20px" }}>
      <h2>All Employee Tasks</h2>

      <div style={{ marginBottom: "15px" }}>
        <label>Filter by Employee: </label>
        <select
          value={selectedEmployee}
          onChange={(e) => setSelectedEmployee(e.target.value)}
        >
          {employeeNames.map((name, i) => (
            <option key={i} value={name}>
              {name}
            </option>
          ))}
        </select>

        <label style={{ marginLeft: "20px" }}>Filter by Status: </label>
        <select
          value={selectedStatus}
          onChange={(e) => setSelectedStatus(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
      </div>

      {filteredTasks.length === 0 ? (
        <p>No tasks found.</p>
      ) : (
        <table
          border="1"
          cellPadding="8"
          style={{ borderCollapse: "collapse", width: "100%" }}
        >
          <thead>
            <tr>
              <th>Employee</th>
              <th>Task Name</th>
              <th>Deadline</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredTasks.map((task, index) => (
              <tr key={index}>
                <td>{task.user}</td>
                <td>{task.name}</td>
                <td>{task.deadline}</td>
                <td>{task.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AdminViewTasks;

