import React from 'react';
import logo from '../assets/logo.png';
import "./Header.css";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg p-0 header-head">
      <div className="container-fluid d-flex justify-content-between align-items-end p-0">
        <div className="logo-head">
          <img src={logo} className="logo" alt="Logo" />
        </div>
        <div className="d-flex right-navbar-head align-items-center">
          <div className="me-3 button-group ">
            <button className="btn me-2">Buy</button>
            <button className="btn me-2">Sell</button>
            <button className="btn">Rent</button>
          </div>
          <div>
            <button type="button" className="btn btn-outline-secondary rounded-pill signin-btn">Sign in</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
