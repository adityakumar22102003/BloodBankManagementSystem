import React, { useState } from 'react';
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
    </div>
  );
}
