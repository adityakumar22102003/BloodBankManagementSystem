import React, { useState } from 'react';
import '../styles/BloodCamp.css';
import { toast } from 'react-toastify';

export default function BloodCamp() {
  const [campData, setCampData] = useState({
    name: '',
    location: '',
    date: '',
    time: '',
    organizer: '',
    contact: '',
    description: '',
  });

  const handleChange = (e) => {
    setCampData({ ...campData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Blood Camp Created!');
    console.log('Camp Data:', campData);
  };

  return (
    <div className="camp-wrapper">
      <div className="camp-left">
        <h1>Organize a Blood Camp</h1>
        <p>Save lives by organizing a donation camp. Every drop counts!</p>
        <img src="/blood-donation.jpg" alt="Blood Donation" />
      </div>

      <div className="camp-right">
        <form className="camp-form" onSubmit={handleSubmit}>
          <h2>Blood Camp Details</h2>

          <input type="text" name="name" placeholder="Camp Name" value={campData.name} onChange={handleChange} required />
          <input type="text" name="location" placeholder="Location" value={campData.location} onChange={handleChange} required />
          <input type="date" name="date" value={campData.date} onChange={handleChange} required />
          <input type="time" name="time" value={campData.time} onChange={handleChange} required />
          <input type="text" name="organizer" placeholder="Organizer Name" value={campData.organizer} onChange={handleChange} required />
          <input type="text" name="contact" placeholder="Contact Number" value={campData.contact} onChange={handleChange} required />
          <textarea name="description" placeholder="Additional Information" value={campData.description} onChange={handleChange}></textarea>

          <button type="submit" className="camp-button">Create Camp</button>
        </form>
      </div>
    </div>
  );
}
