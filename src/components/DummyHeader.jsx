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
            <Link to="/pricing" className="nav-link">Pricing</Link>
            <span className="nav-link disabled">Disabled</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default DummyHeader;
