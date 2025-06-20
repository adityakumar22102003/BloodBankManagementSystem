import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaTint } from 'react-icons/fa';
import '../styles/navbar.css';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/donate', label: 'Donate' },
  { to: '/events', label: 'Events' },
  { to: '/blog', label: 'Blog' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar" aria-label="Main Navigation">
      <div className="navbar-logo">
        <FaTint className="logo-icon" /> <span>BloodBank</span>
      </div>
      <button
        className="navbar-toggle"
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        {open ? <FaTimes /> : <FaBars />}
      </button>
      <ul className={`navbar-links ${open ? 'open' : ''}`}>
        {navLinks.map(link => (
          <li key={link.to}>
            <Link to={link.to} onClick={() => setOpen(false)}>{link.label}</Link>
          </li>
        ))}
        <li className="navbar-auth">
          <Link to="/login" className="btn btn-login">Login</Link>
          <Link to="/signup" className="btn btn-register">Register</Link>
        </li>
      </ul>
    </nav>
  );
} 