// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./components/layout/LoginButton";
// import LogoutButton from "./components/layout/LogoutButton";
import Profile from "./components/Profile";
import Dashboard from "./components/Dashboard";

import "./reset.css";
import "./App.css";

function App() {
   const { isLoading, isAuthenticated } = useAuth0();

  if (isLoading) return <div>Loading...</div>;

  return (
    <Router>
      <div className="App">
        {isAuthenticated ? <Profile /> : <LoginButton />}
        <Routes>
          {/* <Route path="/" element={<Profile />} /> */}
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

// TODO: 
// 
// Install the necessary packages.
// Import the necessary components and functions.
// Add date, time, and priority fields to the task state and the new task object in addTask.
// Add a DateTimePicker and a select dropdown to the task form in the render method.
// Modify the task display to include the date, time, and priority.
// Modify the setTasks calls in addTask, deleteTask, and toggleTask to sort tasks according to the new rules.
// Add a filter control to the render method to select the sorting method for uncompleted tasks.
// Modify the setTasks call in the filter control's change handler to sort tasks according to the selected method.