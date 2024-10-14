
import React, { useState } from 'react';
import './Dashboard.css';

const Dashboard = () => {
  const [fileName, setFileName] = useState('File Name.pdf');
  const handleFileUpload = (e) => {
    if (e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    }
  };

  return (
    <div className="dashboard-container">
      <section className="create-new-entry">
        <h2>Create New Entry</h2>
        <div className="tab-buttons">
          <button>Professional</button>
          <button>Educational</button>
        </div>
        <textarea placeholder="Write about your work / Project / Duration"></textarea>
        <button className="submit-btn">Submit</button>
      </section>

      <section className="bulk-entry">
        <h2>Bulk Entry</h2>
        <div className="upload-section">
          <label>Upload Old CV</label>
          <input type="file" onChange={handleFileUpload} />
          <button>Upload</button>
          <span>{fileName}</span>
          <button>Submit</button>
        </div>
        {/* Entry Form */}
        {[1, 2, 3].map((item, index) => (
          <div key={index} className="entry">
            <div className="entry-header">
              <span>Date: 02/09/2024</span>
              <input type="text" placeholder="Short Description" />
            </div>
            <textarea placeholder="Detail Description"></textarea>
            <div className="entry-actions">
              <button>Edit</button>
              <button>Record</button>
            </div>
          </div>
        ))}
      </section>

      <section className="view-journal">
        <h2>View Journal</h2>
        <div className="journal-filters">
          <input type="text" placeholder="Keywords" />
          <input type="date" placeholder="From" />
          <input type="date" placeholder="To" />
          <button>Search</button>
        </div>
        {/* Journal Entries */}
        {[1, 2, 3, 4].map((item, index) => (
          <div key={index} className="entry">
            <div className="entry-header">
              <span>Date: 02/09/2024</span>
              <input type="text" placeholder="Short Description" />
            </div>
            <textarea placeholder="Detail Description"></textarea>
          </div>
        ))}
      </section>

      <section className="generate-cv">
        <h2>Generate CV</h2>
        <div className="upload-section">
          <label>Upload JD</label>
          <input type="file" onChange={handleFileUpload} />
          <button>Upload</button>
          <span>{fileName}</span>
          <button>Generate</button>
        </div>
      </section>

      <section className="generate-report">
        <h2>Generate Appraisal Report</h2>
        <div className="appraisal-section">
          <input type="month" placeholder="From" />
          <input type="month" placeholder="To" />
          <button>Generate</button>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
