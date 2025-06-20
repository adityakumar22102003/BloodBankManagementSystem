import React from 'react';
import { FaTint } from 'react-icons/fa';
import '../styles/hero.css';
import heroImg from '../asset/blood photo.webp';

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Donate Blood, Save Lives</h1>
        <p>Your small act today can be someone's hope tomorrow.</p>
        <div className="hero-buttons">
          <a href="#donate" className="btn btn-primary">Donate Now</a>
          <a href="#learn" className="btn btn-secondary">Learn More</a>
        </div>
      </div>
      <div className="hero-img-wrapper">
        <img src={heroImg} alt="Blood donation illustration" className="hero-img" />
        <FaTint className="hero-icon-animated" />
      </div>
    </section>
  );
} 