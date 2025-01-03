import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/Home.css"

const Navbar = () => {
  return (
    <nav>
      <div className="nav-container">
        <div className="logo">
          🗑️ SmartBin
        </div>
        <div className="nav-links">
          <Link to="/" className="active">Home</Link>
          <Link to="#">About Us</Link>
          <Link to="#">Contact</Link>
          <div className="butto">
            <Link to="/login">Get Started</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;