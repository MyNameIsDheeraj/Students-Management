import React from 'react';
import { Upload, Download } from 'lucide-react';

const BulkUpload = ({ classes }) => {
  return (
    <div className="card">
      <h3 style={{ marginBottom: '20px' }}>Bulk Attendance Upload</h3>
      
      <div style={{ marginBottom: '30px' }}>
        <h4>Upload Instructions</h4>
        <ul style={{ marginTop: '10px', paddingLeft: '20px', color: '#666' }}>
          <li>Download the template file and fill in the attendance data</li>
          <li>Use the following status codes: P (Present), A (Absent), L (Late), E (Excused)</li>
          <li>Ensure all student roll numbers are correct</li>
          <li>Save the file in CSV or Excel format</li>
        </ul>
      </div>

      <div className="grid grid-2" style={{ gap: '30px' }}>
        <div>
          <h4>Step 1: Download Template</h4>
          <p style={{ color: '#666', marginBottom: '15px' }}>
            Download the attendance template with student information pre-filled.
          </p>
          <button className="btn btn-secondary">
            <Download size={16} />
            Download Template
          </button>
        </div>

        <div>
          <h4>Step 2: Upload Completed File</h4>
          <div className="form-group">
            <label className="form-label">Select Class</label>
            <select className="form-control">
              {classes.map(cls => (
                <option key={cls} value={cls}>{cls}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label className="form-label">Select Date</label>
            <input type="date" className="form-control" />
          </div>
          <div className="form-group">
            <label className="form-label">Upload File</label>
            <input type="file" className="form-control" accept=".csv,.xlsx,.xls" />
          </div>
          <button className="btn btn-primary">
            <Upload size={16} />
            Upload Attendance
          </button>
        </div>
      </div>
    </div>
  );
};

export default BulkUpload;