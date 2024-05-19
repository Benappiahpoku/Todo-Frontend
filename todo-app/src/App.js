// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { useAuth0 } from "@auth0/auth0-react";
// import LoginButton from "./components/layout/LoginButton";
// import LogoutButton from "./components/layout/LogoutButton";
// import Profile from "./components/Profile";
import Dashboard from "./components/Dashboard";

import "./reset.css";
import "./App.css";

function App() {
  //  const { isLoading, isAuthenticated } = useAuth0();

  // if (isLoading) return <div>Loading...</div>;

  return (
    <Router>
      <div className="App">
        {/* {isAuthenticated ? <LogoutButton /> : <LoginButton />} */}

        <Routes>
          {/* <Route path="/" element={<Profile />} /> */}
          <Route path="/" element={<Dashboard />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;

// TODO: 
// 1.Find out why the AuthO works but the routes do not work
// 2. Why it is not redirecting to the profile page
// 3. Fix the routes
// 4. Fix the css on profile page & dashboard page