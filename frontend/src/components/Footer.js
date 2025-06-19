// src/components/Footer.js
import React from 'react';
import '../styles/footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <p>&copy; 2025 BloodCare. All rights reserved.</p>
            <div className="footer-links">
                <a href="/xya">Privacy</a>
                <a href="/xya">Terms</a>
                <a href="/xya">Contact Us</a>
            </div>
        </footer>
    );
};

export default Footer;
