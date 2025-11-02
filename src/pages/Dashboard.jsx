import React from "react";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

const Dashboard = () => {
  const {
    tasks,
    setTasks,
    taskName,
    setTaskName,
    deadline,
    setDeadline,
    status,
    setStatus,
    error,
    setError,
    edit,
    setEdit,
    handleSubmit,
    handleEdit,
    handleDelete,
  } = useContext(TaskContext);

  const currentUser = localStorage.getItem("currentUser");
  const currentUserTasks = tasks.filter((task) => task.user === currentUser);

  const completedTasks = currentUserTasks.filter(
    (task) => task.status.toLowerCase() === "completed"
  );
  const progressiveTasks = currentUserTasks.filter(
    (task) => task.status.toLowerCase() === "in progress"
  );
  const pendingTasks = currentUserTasks.filter(
    (task) => task.status.toLowerCase() === "pending"
  );

  return (
    <div className="dashboard-container">
      <h2>Dashboard Page</h2>
      <h3>Summary</h3>
      <h4 style={{ color: "brown" }}>Total Tasks: {tasks.length}</h4>
      <h4>Completed Tasks :{completedTasks.length}</h4>
      {completedTasks.length > 0 ? (
        <ol>
          {completedTasks.map((task, index) => (
            <li key={index}>
              <p>Task name:{task.name} </p>
              <p>Deadline: {task.deadline}</p>
            </li>
          ))}
        </ol>
      ) : (
        <p>No tasks completed yet.</p>
      )}

      <h4>Tasks in Progress :{progressiveTasks.length}</h4>
      {progressiveTasks.length > 0 ? (
        <ol>
          {progressiveTasks.map((task, index) => (
            <li key={index}>
              <p>Task name:{task.name} </p>
              <p> Deadline: {task.deadline}</p>
            </li>
          ))}
        </ol>
      ) : (
        "No Tasks in Progress"
      )}
      <h4>Pending Tasks :{pendingTasks.length}</h4>
      {pendingTasks.length > 0 ? (
        <ol>
          {pendingTasks.map((task, index) => (
            <li key={index}>
              <p>Task name:{task.name}</p>
              <p> Deadline: {task.deadline}</p>
            </li>
          ))}
        </ol>
      ) : (
        "No Pending Tasks"
      )}
    </div>
  );
};

export default Dashboard;
