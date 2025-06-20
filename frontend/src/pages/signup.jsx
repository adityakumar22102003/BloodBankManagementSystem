import React, { useState } from 'react';
import '../styles/Signup.css';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '', first_name: '', last_name: '', email: '', password: '',
    phone: '', address: '', city: '', state: '', pincode: '',
    blood_group: '', gender: '', age: '', height: '', role: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      alert('Signup successful!');
      // navigate('/login');
    } catch (error) {
      console.error(error);
      alert('Signup failed.');
    }
  };

  return (
    <div className="signup-wrapper">
      <div className="signup-left">
        <h1>BloodBank Portal</h1>
        <p>Your contribution can save lives. Sign up to become a donor or receiver today.</p>
        <img src="/blood-donation.jpg" alt="donate" />
      </div>
      <div className="signup-right">
        <form className="signup-form" onSubmit={handleSubmit}>
          <h2>Create Account</h2>
          <div className="form-grid">
            {Object.keys(formData).map((key) => (
              <input
                key={key}
                type={key === 'password' ? 'password' : key === 'email' ? 'email' : 'text'}
                name={key}
                placeholder={key.replace('_', ' ').toUpperCase()}
                value={formData[key]}
                onChange={handleChange}
                required
              />
            ))}
          </div>
          <div className="bottom-section">
            <button type="submit" className="signup-button">Register</button>
            <p className="login-link" onClick={() => navigate("/login")}>
              Already have an account? <span>Login</span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
