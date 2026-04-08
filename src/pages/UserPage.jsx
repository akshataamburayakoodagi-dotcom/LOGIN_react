import React from "react";
import { useNavigate } from "react-router";

export default function UserPage() {
  const navigate = useNavigate();
  const savedUser = localStorage.getItem("loggedInUser") || "User";
  const nameOnly = savedUser.includes("@") ? savedUser.split("@")[0] : savedUser;

  function signOut() {
    localStorage.removeItem("loggedInUser");
    navigate("/");
  }

  return (
    <div className="dashboard-page">
      <div className="dashboard-box">
        <button className="signout-btn" onClick={signOut}>
          Sign Out
        </button>

        <h1 className="user-title">
          <span className="welcome-color">Welcome </span>{" "}
          <span className="user-color">{nameOnly}</span>
        </h1>

        <p className="dashboard-text">You have logged in successfully.</p>
      </div>
    </div>
  );
}