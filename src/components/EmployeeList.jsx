import users  from "../api/mockData";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import '../styles/App.css'
const EmployeeList = () => {
const allTasks = JSON.parse(localStorage.getItem("allTasks")) || [];
  const employee = users.filter((user) => user.role !== "admin");

  return (
    <div>
      <h2>Employee List</h2>
      <div className="table-container">
      <table className="emp-table"
        border="2"
        cellPadding="6"
        style={{ borderCollapse: "collapse", padding: "5px" }}
      >
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Total Tasks</th>
          <th>Completed Tasks</th>
          <th>Tasks In Progress</th>
          <th>Pending Tasks</th>
        </tr>
        {employee.map((emp) => {
          const empTasks = allTasks.filter((task) => task.user === emp.validname);
          const empCompletedTasks = empTasks.filter(
            (task) => task.status.toLowerCase() === "completed"
          );
          const empProgressTasks = empTasks.filter(
            (task) => task.status.toLowerCase() === "in progress"
          );
          const empPendingTasks = empTasks.filter(
            (task) => task.status.toLowerCase() === "pending"
          );

          return (
            <tr>
              <td>{emp.validname}</td>
              <td>{emp.email}</td>
              <td>{emp.phone}</td>
              <td>{empTasks.length}</td>
              <td>{empCompletedTasks.length}</td>
              <td>{empProgressTasks.length}</td>
              <td>{empPendingTasks.length}</td>
            </tr>
          );
        })}
      </table>
      </div>
    </div>
  );
};

export default EmployeeList;
