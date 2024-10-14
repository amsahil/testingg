

import React from 'react';
import './HowItWorks.css';

const HowItWorks = () => {
  return (
    <div className="how-it-works-container">
      <h2>How It Works</h2>
      <div className="steps-container">
        <div className="step">
          <div className="circle">Easily enter details about your current projects, including title, description, tasks, and outcomes.</div>
          <p>Step 1: Input Your Project Details</p>
        </div>
        <div className="step">
          <div className="circle">Leverage the power of AI to convert your input into polished, professional journal entries.</div>
          
          <p>Step 2: Convert to Professional Entries</p>
        </div>
        <div className="step">
          <div className="circle">Maintain a chronological journal of your work experiences, skills, and achievements, accessible anytime.</div>
          <p>Step 3: Build Your Career Journal</p>
        </div>
        <div className="step">
          <div className="circle">Create customized CVs based on your journal entries and specific job descriptions, ensuring you always put your best foot forward!</div>
          <p>Step 4: Generate Tailored CVs</p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;