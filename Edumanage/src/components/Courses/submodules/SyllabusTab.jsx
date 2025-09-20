import React from 'react';
import { Plus, FileText, Edit } from 'lucide-react';

const SyllabusTab = ({ syllabi, openModal }) => {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h3>Syllabus Management</h3>
        <button className="btn btn-primary" onClick={() => openModal('uploadSyllabus')}>
          <Plus size={16} />
          Upload Syllabus
        </button>
      </div>

      <div className="grid grid-1">
        {syllabi.map((syllabus) => (
          <div key={syllabus.id} className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '15px' }}>
              <div>
                <h4>{syllabus.subjectName} - {syllabus.class}</h4>
                <p style={{ color: '#666', marginBottom: '5px' }}>Uploaded: {syllabus.uploadDate}</p>
                <span className={`badge badge-${syllabus.status === 'Active' ? 'success' : 'warning'}`}>
                  {syllabus.status}
                </span>
              </div>
            </div>

            <div style={{ marginBottom: '15px' }}>
              <strong>Chapters/Topics:</strong>
              <div style={{ marginTop: '8px' }}>
                {syllabus.chapters.map((chapter, index) => (
                  <div key={index} style={{ 
                    padding: '8px 12px', 
                    backgroundColor: '#f8f9fa', 
                    borderRadius: '4px',
                    marginBottom: '5px',
                    fontSize: '14px'
                  }}>
                    {index + 1}. {chapter}
                  </div>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', gap: '10px' }}>
              <button className="btn btn-primary">
                <FileText size={16} />
                View Syllabus
              </button>
              <button className="btn btn-secondary">
                <Edit size={16} />
                Edit
              </button>
              <button className="btn btn-warning">
                <Plus size={16} />
                Update
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SyllabusTab;