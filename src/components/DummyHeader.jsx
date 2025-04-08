import React, { useState } from 'react';
import { Link } from "react-router-dom";

const DummyHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">Hero</Link>

        <button
          className="navbar-toggler fs-6"
          type="button"
          onClick={toggleNavbar}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link to="/home" className="nav-link">Home</Link>
            <Link to="/carInfo" className="nav-link">CarInfo</Link>
            <Link to="/companyInfo" className="nav-link">Company info</Link>
            <Link to="/agentinfo" className="nav-link">Agent info</Link>
            <Link to="/about" className="nav-link">About Us</Link>
            <Link to="/policy" className="nav-link">Privacy Policy</Link>
            <Link to="/help" className="nav-link">Help and F&Q</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default DummyHeader;
