import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/index.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === 'shopnest' && password === 'shopnest') {
      localStorage.setItem('email', email);
      localStorage.setItem('password', password);
      alert('Login successful!');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="container">
      <div className="left-panel">
        <div className="company-logo">
          <div className="company-name">
            SHOP<span className="highlight">nest</span>
          </div>
          <i className="fas fa-check-circle check-icon"></i>
        </div>
      </div>
      <div className="right-panel">
        <div className="welcome-container">
          <h1>Welcome</h1>
          <form onSubmit={handleLogin}>
            <div className="input-group">
              <input
                type="email"
                placeholder="Email or Phone"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input-group">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {error && <div className="error-message-container">
              <span id="error-message">{error}</span>
            </div>}
            <a href="#" className="forgot-password">Forgot password?</a>
            <div className="buttons">
              <button type="submit" className="login-btn">Login</button>
              <button type="button" className="signup-btn">Sign up</button>
            </div>
          </form>
          <p className="mt-2">
            <Link to="/contact">Contact Us</Link>
          </p>
        </div>
        <footer>
          <p>© 2024 Shopnest. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default LoginPage;
