import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css';

function Signup({ onSignup }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match!');
      return;
    }

    // Save the new user data
    onSignup({ username, password });
    
    // Navigate to login after successful signup
    navigate('/login');
  };

  return (
    <div className="signup-container">
      <h1>Signup</h1>
      <form onSubmit={handleSignup} className="signup-form">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button type="submit">Signup</button>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </form>
      <p>Already have an account? <a href="/login">Login</a></p>
    </div>
  );
}

export default Signup;
