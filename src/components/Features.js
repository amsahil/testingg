
import React from 'react';
import './Features.css';

const Features = () => {
  return (
    <div className="features-container">
      <h2>Features</h2>
      <div className="features-grid">
        <div className="feature-item">
          <h3>Effortless Documentation</h3>
          <p>Streamline the process of recording your work experiences and achievements.</p>
        </div>
        <div className="feature-item">
          <h3>AI-Powered Writing</h3>
          <p>Use cutting-edge AI to craft professional journal entries that highlight your skills and impact.</p>
        </div>
        <div className="feature-item">
          <h3>Comprehensive Journal Management</h3>
          <p>Easily search, filter, and manage your entries to keep your career journey organized.</p>
        </div>
        <div className="feature-item">
          <h3>Custom CV Generator</h3>
          <p>Generate CVs tailored to any job description by leveraging your past journal entries.</p>
        </div>
      </div>
    </div>
  );
};

export default Features;
