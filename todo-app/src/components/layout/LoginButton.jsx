// LoginButton.js
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./Button.css";

function LoginButton() {
  const { loginWithRedirect } = useAuth0();

  return (
  <div className="container">
    <button className="button" onClick={loginWithRedirect}>
      Log In
    </button>
    
  </div>
  );
}

export default LoginButton;
