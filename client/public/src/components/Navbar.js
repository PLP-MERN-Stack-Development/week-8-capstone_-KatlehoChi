import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <Link to="/">🌍 Foodverse</Link>
    <div className="nav-links">
      <Link to="/africa">Africa</Link>
      <Link to="/asia">Asia</Link>
      <Link to="/europe">Europe</Link>
      <Link to="/americas">Americas</Link>
      <Link to="/oceania">Oceania</Link>
    </div>
  </nav>
);

export default Navbar;
