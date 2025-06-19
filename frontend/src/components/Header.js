// src/components/Header.js
import React from 'react';
import '../styles/header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="logo">🩸 BloodCare</div>
            <nav>
                <a href="/xya">Home</a>
                <a href="/xya">Camps</a>
                <a href="/xya">Blog</a>
                <a href="/xya">Login</a>
                <a href="/xya">Register</a>
            </nav>
        </header>
    );
};

export default Header;
