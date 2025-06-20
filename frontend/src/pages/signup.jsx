import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import '../styles/Signup.css';
import { Link } from 'react-router-dom';

const bloodGroups = [
  'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'
];

export default function Signup() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    bloodGroup: '',
    age: '',
    gender: '',
    phone: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [error, setError] = useState('');

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setError('');
    // Validation
    if (!form.name || !form.email || !form.password || !form.confirmPassword || !form.bloodGroup || !form.age || !form.gender || !form.phone) {
      setError('Please fill in all fields.');
      return;
    }
    if (form.password !== form.confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    // Simulate signup
    alert('Signup successful!');
  };

  return (
    <div className="auth-bg">
      <form className="auth-form signup-form" onSubmit={handleSubmit} aria-label="Signup form">
        <h2>Sign Up</h2>
        {error && <div className="auth-error">{error}</div>}
        <label htmlFor="signup-name">Name</label>
        <input
          id="signup-name"
          name="name"
          type="text"
          value={form.name}
          onChange={handleChange}
          required
          autoFocus
        />
        <label htmlFor="signup-email">Email</label>
        <input
          id="signup-email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <label htmlFor="signup-password">Password</label>
        <div className="auth-password-wrapper">
          <input
            id="signup-password"
            name="password"
            type={showPassword ? 'text' : 'password'}
            value={form.password}
            onChange={handleChange}
            required
          />
          <button
            type="button"
            className="auth-show-password"
            aria-label={showPassword ? 'Hide password' : 'Show password'}
            onClick={() => setShowPassword(s => !s)}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
        <label htmlFor="signup-confirm">Confirm Password</label>
        <div className="auth-password-wrapper">
          <input
            id="signup-confirm"
            name="confirmPassword"
            type={showConfirm ? 'text' : 'password'}
            value={form.confirmPassword}
            onChange={handleChange}
            required
          />
          <button
            type="button"
            className="auth-show-password"
            aria-label={showConfirm ? 'Hide password' : 'Show password'}
            onClick={() => setShowConfirm(s => !s)}
          >
            {showConfirm ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
        <label htmlFor="signup-blood">Blood Group</label>
        <select
          id="signup-blood"
          name="bloodGroup"
          value={form.bloodGroup}
          onChange={handleChange}
          required
        >
          <option value="">Select</option>
          {bloodGroups.map(bg => (
            <option key={bg} value={bg}>{bg}</option>
          ))}
        </select>
        <label htmlFor="signup-age">Age</label>
        <input
          id="signup-age"
          name="age"
          type="number"
          min="18"
          max="65"
          value={form.age}
          onChange={handleChange}
          required
        />
        <label htmlFor="signup-gender">Gender</label>
        <select
          id="signup-gender"
          name="gender"
          value={form.gender}
          onChange={handleChange}
          required
        >
          <option value="">Select</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <label htmlFor="signup-phone">Phone</label>
        <input
          id="signup-phone"
          name="phone"
          type="tel"
          pattern="[0-9]{10}"
          value={form.phone}
          onChange={handleChange}
          required
        />
        <button className="btn btn-primary" type="submit">Sign Up</button>
        <div className="auth-link">
          Already have an account? <Link to="/login">Login</Link>
        </div>
      </form>
    </div>
  );
}
