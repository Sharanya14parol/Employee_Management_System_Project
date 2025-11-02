import React, { createContext, useEffect } from "react";
import { useState } from "react";

export const TaskContext = createContext();
export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState("");
  const [deadline, setDeadline] = useState("");
  const [status, setStatus] = useState("pending");
  const [error, setError] = useState(false);
  const [edit, setEdit] = useState(null);
  const [isInitialized, setIsInitialized] = useState(false);

  const storedUser = localStorage.getItem("currentUser");
  const currentUser = storedUser ? JSON.parse(storedUser).username : null;

  useEffect(() => {
    if (currentUser) {
      const allTasks = JSON.parse(localStorage.getItem("allTasks")) || [];
      const userTasks = allTasks.filter((task) => task.user === currentUser);
      setTasks(userTasks);
        setIsInitialized(true);
    }
  }, [currentUser]);

  useEffect(() => {
    if (currentUser && isInitialized) {
      const allTasks = JSON.parse(localStorage.getItem("allTasks")) || [];
      const filteredTasks = allTasks.filter((task) => task.user !== currentUser);
      const updatedAllTasks = [...filteredTasks, ...tasks];
      localStorage.setItem("allTasks", JSON.stringify(updatedAllTasks));
    }
  }, [tasks,isInitialized]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskName || !deadline || !status) {
      setError(true);
      return;
    }
    setError(false);
    const newTask = {
      name: taskName,
      deadline: deadline,
      status: status,
      user: currentUser,
    };
    if (edit !== null) {
      const modifiedTasks = [...tasks];
      modifiedTasks[edit] = newTask;
      setTasks(modifiedTasks);
      setEdit(null);
    } else {
      setTasks([...tasks, newTask]);
    }
    setTaskName("");
    setDeadline("");
    setStatus("");
  };

  const handleEdit = (index) => {
    setEdit(index);
    setTaskName(tasks[index].name);
    setDeadline(tasks[index].deadline);
    setStatus(tasks[index].status);
  };

  const handleDelete = (indexOfItemToDelete) => {
    const updatedTasks = tasks.filter((task, index) => {
      return index !== indexOfItemToDelete;
    });
    setTasks(updatedTasks);
  };

  return (
    <TaskContext.Provider
      value={{
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
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
