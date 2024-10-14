
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="quick-links">
          <span>Quick Link :</span>
          <nav className="footer-nav">
            <a href="/home">Home</a>
            <a href="/login">Login</a>
            <a href="/signup">Signup</a>
            <a href="/contact">Contact</a>
          </nav>
        </div>
        
        <div className="copyright">
          <p>Copyright @ 2024</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
