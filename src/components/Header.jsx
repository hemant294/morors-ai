import React, { useState, useEffect, useRef } from 'react';
import logo from '../assets/logo.png';
import './Header.css';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleClickOutside = (event) => {
    if (
      sidebarRef.current &&
      !sidebarRef.current.contains(event.target) &&
      !event.target.closest('.mobile-menu-icon') // ignore clicks on the icon
    ) {
      setSidebarOpen(false);
    }
  };

  useEffect(() => {
    if (sidebarOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [sidebarOpen]);

  return (
    <>
      <nav className="navbar navbar-expand-lg p-0 header-head">
        <div className="container-fluid d-flex justify-content-between align-items-end p-0">
          <div className="logo-head">
            <img src={logo} className="logo" alt="Logo" />
          </div>

          <div
            className={`d-flex right-navbar-head align-items-center desktop-menu ${
              sidebarOpen ? 'hide-on-mobile' : ''
            }`}
          >
            <div className="me-3 button-group">
              <button className="btn me-2">Buy</button>
              <button className="btn me-2">Sell</button>
              <button className="btn">Rent</button>
            </div>
            <button
              type="button"
              className="btn btn-outline-secondary rounded-pill signin-btn"
            >
              Sign in
            </button>
          </div>

          <div className="mobile-menu-icon pe-2" onClick={toggleSidebar}>
            {!sidebarOpen && <FaBars size={32} className='open-icon'/>}
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <div
        className={`mobile-sidebar ${sidebarOpen ? 'open' : ''}`}
        ref={sidebarRef}
      >
        <button className="btn">Buy</button>
        <button className="btn">Sell</button>
        <button className="btn">Rent</button>
        <button className="btn btn-outline-secondary rounded-pill signin-btn mt-3">
          Sign in
        </button>
      </div>
    </>
  );
};

export default Header;
