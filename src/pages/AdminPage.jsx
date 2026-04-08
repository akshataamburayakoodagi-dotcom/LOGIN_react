import React from "react";
import { useNavigate } from "react-router";

export default function AdminPage() {
  const navigate = useNavigate();

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

        <h1 className="admin-title">
          <span className="welcome-color">Welcome</span>{" "}
          <span className="admin-color">Admin</span>
        </h1>

        <p className="dashboard-text">You have logged in successfully.</p>
      </div>
    </div>
  );
}