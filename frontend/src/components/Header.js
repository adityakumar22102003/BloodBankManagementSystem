// src/components/Header.js
import React from 'react';
import '../styles/header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="logo">🩸 BloodCare</div>
            <nav>
                <a href="/xya">Home</a>
                <a href="/camps">Camps</a>
                <a href="/xya">Blog</a>
                <a href="/login">Login</a>
                <a href="/signup">Register</a>
            </nav>
        </header>
    );
};

export default Header;
