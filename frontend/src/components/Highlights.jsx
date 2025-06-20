import React from 'react';
import { FaClock, FaShieldAlt, FaGift, FaHospital, FaCheckCircle } from 'react-icons/fa';
import '../styles/highlights.css';

const features = [
  { icon: <FaHospital />, title: 'Verified Camps', desc: 'All camps are verified for safety and quality.' },
  { icon: <FaCheckCircle />, title: 'Real-Time Availability', desc: 'See available donation slots instantly.' },
  { icon: <FaGift />, title: 'Donor Rewards', desc: 'Earn rewards and recognition for your donations.' },
  { icon: <FaShieldAlt />, title: 'Secure Data', desc: 'Your information is protected and confidential.' },
];

export default function Highlights() {
  return (
    <section className="highlights-section" id="learn">
      <h2>Why Choose Us?</h2>
      <div className="highlights-grid">
        {features.map((f, i) => (
          <div className="highlight-card" key={i}>
            <div className="highlight-icon">{f.icon}</div>
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
} 