// Profile.js
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./Profile.css";
import LogoutButton from "./layout/LogoutButton";
import Dashboard from "./Dashboard";

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();

  console.log("User:", user);
  console.log("Is Authenticated:", isAuthenticated);

  return (
    isAuthenticated && (
      <div>
        <div className="profile">
          <div className="welcome-message">
            <img src={user.picture} alt={user.name} />
            <h3>
              {" "}
              Welcome <br></br>
              {user.name}
            </h3>
          </div>
          <LogoutButton />
        </div>
        <Dashboard />
      </div>
    )
  );
};

export default Profile;
