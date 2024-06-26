// LogoutButton.js
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./Button.css";

function LogoutButton() {
  const { logout } = useAuth0();

  return (
    <div >
      <button
        className="button-logout"
        onClick={() => logout({ returnTo: window.location.origin })}
      >
        Log Out
      </button>
    </div>
  );
}

export default LogoutButton;
