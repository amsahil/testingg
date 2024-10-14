import React, { useState } from 'react';
import './BulkEntry.css';

const BulkEntryForm = () => {
  const [file, setFile] = useState(null);
  const [formEntries, setFormEntries] = useState([{}, {}, {}]); // Example of 3 entries

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleInputChange = (index, e) => {
    const { name, value } = e.target;
    const updatedEntries = [...formEntries];
    updatedEntries[index] = { ...updatedEntries[index], [name]: value };
    setFormEntries(updatedEntries);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form Submitted', formEntries, file);
  };

  return (
    <div className="bulk-entry-form">
      <button className="bulk-entry-btn">Bulk Entry</button>

      <div className="file-upload-section">
        <label className="upload-label">Upload Old CV</label>
        <input type="file" onChange={handleFileChange} className="file-input" />
        <button className="upload-btn" disabled={!file}>
          Upload
        </button>
        {file && <span className="file-name">{file.name}</span>}
        <button className="submit-btn" onClick={handleSubmit}>Submit</button>
      </div>

      {formEntries.map((entry, index) => (
        <div key={index} className="form-entry">
          <div className="entry-date">Date: 02/09/2024</div>
          <input
            type="text"
            name="shortDescription"
            value={entry.shortDescription || ''}
            onChange={(e) => handleInputChange(index, e)}
            placeholder="Short Description"
            className="input-short-description"
          />
          <textarea
            name="detailDescription"
            value={entry.detailDescription || ''}
            onChange={(e) => handleInputChange(index, e)}
            placeholder="Detail Description"
            className="input-detailed-description"
          />
          <div className="action-buttons">
            <button className="edit-btn">Edit</button>
            <button className="record-btn">Record</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BulkEntryForm;
