// Profile.js
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import "./Profile.css";

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();

  console.log("User:", user);
  console.log("Is Authenticated:", isAuthenticated);

  return (
    isAuthenticated && (
      <div className="profile">
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <Link to="/dashboard">Go to Dashboard</Link>
      </div>
    )
  );
};

export default Profile;
