



import React from 'react';
import './Headers.css';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
    
      <div className="header-content">
        <div className="logo">
          <h1>Skill Sketch</h1>
          <p>"sketching skills, one project at a time"</p>
        </div>
        <nav className="nav">
          <a href="/home">Home</a>
          <a href="/login">Login</a>
          <a href="/signup">Signup</a>
        </nav>
      </div>
      <span></span>




    </header>
  );
};

export default Header;
