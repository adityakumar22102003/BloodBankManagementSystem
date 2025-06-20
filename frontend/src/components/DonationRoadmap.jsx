import React from 'react';
import { FaClipboardList, FaUserCheck, FaTint, FaGlassWhiskey, FaHeart } from 'react-icons/fa';
import '../styles/roadmap.css';

const steps = [
  { icon: <FaClipboardList />, label: 'Register' },
  { icon: <FaUserCheck />, label: 'Screening' },
  { icon: <FaTint />, label: 'Donation' },
  { icon: <FaGlassWhiskey />, label: 'Refreshments' },
  { icon: <FaHeart />, label: 'Thank You' },
];

export default function DonationRoadmap() {
  return (
    <section className="roadmap-section" id="donate">
      <h2>Blood Donation Process</h2>
      <div className="roadmap-stepper">
        {steps.map((step, i) => (
          <div className="roadmap-step" key={i} style={{ animationDelay: `${i * 0.2}s` }}>
            <div className="roadmap-icon">{step.icon}</div>
            <span className="roadmap-label">{step.label}</span>
            {i < steps.length - 1 && <div className="roadmap-arrow" />}
          </div>
        ))}
      </div>
    </section>
  );
} 