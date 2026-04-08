import React from "react";
import { useState } from "react";
import { useNavigate, Link } from "react-router";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const navigate = useNavigate();

  const adminEmail = "admin@gmail.com";
  const adminPassword = "Admin@123";

  function handleSubmit(e) {
    e.preventDefault();

    setEmailError("");
    setPasswordError("");

    if (email.trim() === "") {
      setEmailError("User ID cannot be empty.");
      return;
    }

    if (password.trim() === "") {
      setPasswordError("Password cannot be empty.");
      return;
    }

    localStorage.setItem("loggedInUser", email);

    if (email === adminEmail && password === adminPassword) {
      navigate("/admin");
    } else {
      navigate("/user");
    }
  }

  return (
    <div className="page">
      <header className="site-header">
        <h1>AK Login Portal</h1>
        <p>Secure access for people</p>
      </header>

      <main className="main-content">
        <div className="login-card">
          <img src="/logo.png" alt="Portal Logo" className="logo" />

          <h2 className="card-title">Sign In</h2>

          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Gmail ID</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your Gmail ID"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <small className="error-message">{emailError}</small>

            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <small className="error-message">{passwordError}</small>

            <button type="submit">Login</button>

            <p className="register-link">
              Don’t have an account? <Link to="/register">Create Account</Link>
            </p>
          </form>
        </div>
      </main>

      <footer className="site-footer">
        <p>© 2026 AK Portal | All Rights Reserved</p>
      </footer>
    </div>
  );
}