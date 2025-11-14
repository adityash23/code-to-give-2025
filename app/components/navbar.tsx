import React from "react";

export default function Navbar() {
  return (
    <header className="banner">
      <div className="left-section">
        <div className="logo-placeholder">LOGO</div>
      </div>

      <nav className="nav-section">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Donate</a>
        <a href="#">Contact</a>
      </nav>

      <div className="right-section">
        <button className="placeholder-button">Sign In</button>
      </div>
    </header>
  );
}