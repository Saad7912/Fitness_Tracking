import React from 'react';
import { NavLink } from 'react-router-dom';
import logoImage from '../assets/navbarlogo.png';
import profileImage from '../assets/profile.jpeg';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logoImage} alt="Fitness Tracking" />
      </div>
      <div className="navbar-links">
        <NavLink to="/home" className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
        <NavLink to="/set-goals" className={({ isActive }) => isActive ? 'active' : ''}>Set Goals</NavLink>
        <NavLink to="/track-food" className={({ isActive }) => isActive ? 'active' : ''}>Track Food</NavLink>
        <NavLink to="/track-fitness" className={({ isActive }) => isActive ? 'active' : ''}>Track Fitness</NavLink>
      </div>
      <div className="navbar-profile">
        <NavLink to="/profile" className={({ isActive }) => isActive ? 'active' : ''}>
          <img src={profileImage} alt="Profile" />
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
