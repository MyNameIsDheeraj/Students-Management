import React from 'react';
import { Database, Download, Upload, RotateCcw } from 'lucide-react';

const DataManagement = ({ 
  backupHistory, 
  importType, 
  setImportType, 
  importFile, 
  setImportFile, 
  restoreFile, 
  setRestoreFile,
  handleImport,
  handleExport,
  handleBackup,
  handleRestore,
  handleBackupDownload,
  handleBackupRestore
}) => {
  return (
    <div>
      <div className="grid grid-2" style={{ marginBottom: '30px' }}>
        <div className="card">
          <h4>Data Import/Export</h4>
          <form onSubmit={handleImport}>
            <div style={{ marginBottom: '20px' }}>
              <h5>Import Data</h5>
              <div className="form-group">
                <label className="form-label">Select Data Type</label>
                <select className="form-control" value={importType} onChange={e => setImportType(e.target.value)}>
                  <option value="">Choose data type...</option>
                  <option value="students">Students</option>
                  <option value="teachers">Teachers</option>
                  <option value="grades">Grades</option>
                  <option value="attendance">Attendance</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Upload File (CSV/Excel)</label>
                <input type="file" className="form-control" accept=".csv,.xlsx,.xls" onChange={e => setImportFile(e.target.files[0])} />
              </div>
              <button className="btn btn-primary" type="submit">
                <Upload size={16} />
                Import Data
              </button>
            </div>
          </form>
          <div>
            <h5>Export Data</h5>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <button className="btn btn-secondary" type="button" onClick={() => handleExport('students')}>
                <Download size={16} />
                Export Students
              </button>
              <button className="btn btn-secondary" type="button" onClick={() => handleExport('teachers')}>
                <Download size={16} />
                Export Teachers
              </button>
              <button className="btn btn-secondary" type="button" onClick={() => handleExport('grades')}>
                <Download size={16} />
                Export Grades
              </button>
              <button className="btn btn-secondary" type="button" onClick={() => handleExport('attendance')}>
                <Download size={16} />
                Export Attendance
              </button>
            </div>
          </div>
        </div>
        <div className="card">
          <h4>Backup & Restore</h4>
          <div style={{ marginBottom: '20px' }}>
            <h5>Create Backup</h5>
            <p style={{ color: '#666', fontSize: '14px', marginBottom: '15px' }}>
              Create a complete backup of all system data including students, teachers, grades, and settings.
            </p>
            <div style={{ display: 'flex', gap: '10px' }}>
              <button className="btn btn-primary" type="button" onClick={() => handleBackup('Full Backup')}>
                <Database size={16} />
                Full Backup
              </button>
              <button className="btn btn-secondary" type="button" onClick={() => handleBackup('Database Only')}>
                <Database size={16} />
                Database Only
              </button>
            </div>
          </div>
          <form onSubmit={e => { e.preventDefault(); handleRestore(restoreFile) }}>
            <div>
              <h5>Restore from Backup</h5>
              <div className="form-group">
                <label className="form-label">Select Backup File</label>
                <input type="file" className="form-control" accept=".zip,.sql" onChange={e => setRestoreFile(e.target.files[0])} />
              </div>
              <button className="btn btn-warning" type="submit">
                <RotateCcw size={16} />
                Restore System
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="card">
        <h4>Backup History</h4>
        <table className="table">
          <thead>
            <tr>
              <th>Date & Time</th>
              <th>Type</th>
              <th>Size</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {backupHistory.map((backup) => (
              <tr key={backup.id}>
                <td>{backup.date}</td>
                <td>{backup.type}</td>
                <td>{backup.size}</td>
                <td>
                  <span className={`badge badge-${backup.status === 'Success' ? 'success' : 'danger'}`}>
                    {backup.status}
                  </span>
                </td>
                <td>
                  <button className="btn btn-secondary" style={{ marginRight: '5px' }} onClick={() => handleBackupDownload(backup.id)}>
                    <Download size={14} />
                    Download
                  </button>
                  <button className="btn btn-warning" onClick={() => handleBackupRestore(backup.id)}>
                    <RotateCcw size={14} />
                    Restore
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataManagement;