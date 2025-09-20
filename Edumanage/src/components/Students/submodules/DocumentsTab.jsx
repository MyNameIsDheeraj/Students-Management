import React from 'react';
import { FileText, Download, Upload, Trash2 } from 'lucide-react';

const DocumentsTab = ({ students, openModal }) => {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h3>Student Documents</h3>
        <button className="btn btn-primary" onClick={() => openModal('upload')}>
          <Upload size={16} />
          Upload Document
        </button>
      </div>

      {students.map((student) => (
        <div key={student.id} className="card" style={{ marginBottom: '20px' }}>
          <h4>{student.name} - Documents</h4>
          <table className="table">
            <thead>
              <tr>
                <th>Document Name</th>
                <th>Type</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {student.documents?.map((doc, index) => (
                <tr key={index}>
                  <td>{doc.name}</td>
                  <td>{doc.type}</td>
                  <td>
                    <span className={`badge ${doc.status === 'Uploaded' ? 'badge-success' : 'badge-warning'}`}>
                      {doc.status}
                    </span>
                  </td>
                  <td>
                    <button className="btn btn-secondary" style={{ marginRight: '5px' }}>
                      <Download size={14} />
                    </button>
                    <button className="btn btn-danger">
                      <Trash2 size={14} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default DocumentsTab;