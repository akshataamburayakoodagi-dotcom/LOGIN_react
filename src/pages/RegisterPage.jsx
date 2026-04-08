import React from "react";
import { Link } from "react-router";

export default function RegisterPage() {
  return (
    <div className="page">
      <header className="site-header">
        <h1>AK Registration Portal</h1>
        <p>Create your new account</p>
      </header>

      <main className="main-content">
        <div className="register-card">
          <h2 className="card-title">Create Account</h2>

          <form>
            <label htmlFor="fullName">Full Name</label>
            <input type="text" id="fullName" placeholder="Enter your full name" />

            <label htmlFor="regEmail">Gmail ID</label>
            <input type="email" id="regEmail" placeholder="Enter your Gmail ID" />

            <label htmlFor="newPassword">Password</label>
            <input type="password" id="newPassword" placeholder="Create password" />

            <label htmlFor="confirmPassword">Re-Enter Password</label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirm password"
            />

            <button type="submit">Register</button>
          </form>

          <p className="register-link">
            Already have an account? <Link to="/">Login</Link>
          </p>
        </div>
      </main>

      <footer className="site-footer">
        <p>© 2026 AK Portal | All Rights Reserved</p>
      </footer>
    </div>
  );
}