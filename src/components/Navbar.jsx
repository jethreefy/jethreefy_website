// src/components/Navbar.jsx
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom"; // Import NavLink instead of Link
import "./Navbar.css";
import logo from "../assets/jethreefy logo.png";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <NavLink to="/">
          {/* Logo */}
          <div className="logo-container">
            <img src={logo} alt="Jeethreefy Logo" className="logo" />
            <span className="brand-name">JETHREEFY</span>
          </div>
          {/* <img
          src={logo}
          alt="Jeethreefy Logo"
          className="w-12 h-12 rounded-full object-cover"
        /> */}
        </NavLink>
      </div>

      {/* Hamburger Menu Icon for Mobile */}
      {width <= 768 && (
        <FaBars
          className="menu-icon"
          style={{ color: "black" }}
          onClick={() => setMenuOpen(!menuOpen)}
        />
      )}

      {/* Navigation Links */}
      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={() => setMenuOpen(false)}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={() => setMenuOpen(false)}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/programs"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={() => setMenuOpen(false)}
          >
            Services
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
