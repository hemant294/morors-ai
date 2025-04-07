import React from 'react';
import { Link } from "react-router-dom";

const DummyHeader = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">Hero</Link>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link to="/home" className="nav-link" aria-current="page">Home</Link>
            <Link to="/carInfo" className="nav-link">CarInfo</Link>
            <Link to="/companyInfo" className="nav-link">Company info</Link>
            <Link to="/agentinfo" className="nav-link">Agent info</Link>
            <Link to="/about" className="nav-link">About Us</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default DummyHeader;
