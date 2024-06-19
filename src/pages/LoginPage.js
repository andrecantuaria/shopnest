import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/index.css';

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
    <div className="container mt-3 mb-3">
      <div className="left-panel">
        
      </div>
      <div className="right-panel">
        <div className="welcome-container">
          <h1>Welcome to Shopnest</h1>
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
          
        </div>
      
      </div>
    </div>
  );
};

export default LoginPage;
