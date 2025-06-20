import React, { useState } from 'react';
import '../styles/Signup.css';


export default function Signup() {
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
      //await axios.post('http://localhost:8000/api/signup/', formData);
      alert('Signup successful!');
    } catch (error) {
      console.error(error);
      alert('Signup failed.');
    }
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
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
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
