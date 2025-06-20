import React, { useState } from 'react';
<<<<<<< HEAD
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import '../styles/Login.css';
import { Link } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    setError('');
    // Add your login logic here
    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }
    // Simulate login
    alert('Logged in!');
  };

  return (
    <div className="auth-bg main-content">
      <form className="auth-form login-form" onSubmit={handleSubmit} aria-label="Login form">
        <h2>Login</h2>
        {error && <div className="auth-error">{error}</div>}
        <label htmlFor="login-email">Email</label>
        <input
          id="login-email"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          autoFocus
        />
        <label htmlFor="login-password">Password</label>
        <div className="auth-password-wrapper">
          <input
            id="login-password"
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={e => setPassword(e.target.value)}
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
        <button className="btn btn-primary" type="submit">Login</button>
        <div className="auth-link">
          Don&apos;t have an account? <Link to="/signup">Sign up</Link>
        </div>
      </form>
=======
import '../styles/Login.css';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function Login() {
  const [formData, setFormData] = useState({ email: '', password: '', remember: false });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Login Successful!');
    navigate('/');
  };

  return (
    <div className="login-wrapper">
      <div className="login-left">
        <h1>Welcome Back</h1>
        <p>Login to continue saving lives with <strong>BloodBank</strong></p>
        <img src="/blood-donation.jpg" alt="Blood Donation" />
      </div>

      <div className="login-right">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>Sign In</h2>

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <div className="form-options">
            <label>
              <input
                type="checkbox"
                name="remember"
                checked={formData.remember}
                onChange={handleChange}
              />
              Remember Me
            </label>
            <span className="link" onClick={() => navigate("/signup")}>
              New here? Create Account
            </span>
          </div>

          <button type="submit" className="login-button">Login</button>
        </form>
      </div>
>>>>>>> 5353d376ff751638047bd5632c5a630683cc1b3e
    </div>
  );
}
