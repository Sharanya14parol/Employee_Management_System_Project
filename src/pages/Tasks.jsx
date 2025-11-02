import React, { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";
import TaskCard from "../components/TaskCard";
import "../styles/App.css";

const Tasks = () => {
  const {
    tasks,setTasks,
    taskName,setTaskName,
    deadline,setDeadline,
    status,setStatus,
    error,setError,
    edit,setEdit,
    handleSubmit,handleEdit,handleDelete,
  } = useContext(TaskContext);

  const currentUser = localStorage.getItem("currentUser");
  const currentUserTasks = tasks;

  // 🔍 New: Search state
  const [searchTerm, setSearchTerm] = useState("");

  // 🔍 Filter tasks by title
  const filteredTasks = currentUserTasks.filter((task) =>
    (task.name || "").toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="task-container">
      <h3>List of Tasks</h3>

      <input
        type="text"
        placeholder="Search task by title..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-box"
      />

      {filteredTasks.length === 0 ? (
        <p>No Tasks found</p>
      ) : (
        filteredTasks.map((task, index) => (
          <TaskCard
            key={index}
            task={task}
            onEdit={() => handleEdit(index)}
            onDelete={() => handleDelete(index)}
          />
        ))
      )}

      <h3>{edit === null ? "Add a Task" : "Edit a Task"}</h3>
      <form onSubmit={handleSubmit}>
        <p>
          <label htmlFor="taskName">Enter Task Name</label>
          <input
            type="text"
            name="taskName"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
          />
        </p>

        <p>
          <label htmlFor="deadline">Deadline</label>
          <input
            type="date"
            name="deadline"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
          />
        </p>

        <p>
          <label htmlFor="status">Status</label>
          <select
            name="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="pending">Pending</option>
            <option value="in progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
        </p>

        <p>
          <button className="task-button">
            {edit === null ? "Add Task" : "Update Task"}
          </button>
        </p>

        {error && <p style={{ color: "red" }}>All Fields are Required</p>}
      </form>
    </div>
  );
};

export default Tasks;

