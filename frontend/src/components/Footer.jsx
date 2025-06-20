import React from 'react';
import { FaArrowUp } from 'react-icons/fa';
import '../styles/footer.css';

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="#about">About</a>
        <a href="#privacy">Privacy</a>
        <a href="#terms">Terms</a>
        <a href="#contact">Contact</a>
        <a href="#social">Social</a>
      </div>
      <div className="footer-copy">
        &copy; {new Date().getFullYear()} BloodBank. All rights reserved.
      </div>
      <button className="back-to-top" aria-label="Back to top" onClick={scrollToTop}>
        <FaArrowUp />
      </button>
    </footer>
  );
} 