// Dashboard.js
import React, { useState } from "react";
import "./Dashboard.css";

function Dashboard() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );
  const [isEditing, setIsEditing] = useState(false);
  const [currentTask, setCurrentTask] = useState(null);

  const addTask = (e) => {
    e.preventDefault();
    if (!isEditing) {
      const newTask = { id: Date.now(), name: task, completed: false };
      setTasks([...tasks, newTask]);
    } else {
      setTasks(
        tasks.map((t) => (t.id === currentTask ? { ...t, name: task } : t))
      );
      setIsEditing(false);
      setCurrentTask(null);
    }
    setTask("");
  };

  const editTask = (task) => {
    setTask(task.name);
    setIsEditing(true);
    setCurrentTask(task.id);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  React.useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="dashboard">
      <h1>My Day</h1>
      <form onSubmit={addTask}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          required
        />
        <button type="submit">{isEditing ? "Update Task" : "Add Task"}</button>
      </form>
      {tasks
        .filter((task) => !task.completed)
        .map((task) => (
          <div key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
            />
            <p className={task.completed ? "completed" : ""}>{task.name}</p>
            <div className="task-buttons" >
            <button onClick={() => editTask(task)}>Edit</button>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
            </div>
          </div>
        ))}
      {tasks
        .filter((task) => task.completed)
        .map((task) => (
          <div key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
            />
            <p className={task.completed ? "completed" : ""}>{task.name}</p>
            <div className="task-buttons" >
           <button onClick={() => editTask(task)}>Edit</button>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </div>
          </div>
        ))}
    </div>
  );
}

export default Dashboard;
