// Dashboard.js
import React, { useState } from "react";
import "./Dashboard.css";

function Dashboard() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  const addTask = (e) => {
    e.preventDefault();
    const newTask = { id: Date.now(), name: task, completed: false };
    setTasks([...tasks, newTask]);
    setTask("");
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  React.useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="dashboard">
      <form onSubmit={addTask}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          required
        />
        <button type="submit">Add Task</button>
      </form>
      {tasks.map((task) => (
        <div key={task.id}>
          <p>{task.name}</p>
          <button onClick={() => deleteTask(task.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default Dashboard;
