import React from 'react';
import { Plus, Edit, Trash2 } from 'lucide-react';

const SubjectsTab = ({ subjects, openModal }) => {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h3>Subject Management</h3>
        <button className="btn btn-primary" onClick={() => openModal('createSubject')}>
          <Plus size={16} />
          Add Subject
        </button>
      </div>

      <div className="card">
        <table className="table">
          <thead>
            <tr>
              <th>Subject Name</th>
              <th>Code</th>
              <th>Credits</th>
              <th>Grade Level</th>
              <th>Teacher</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {subjects.map((subject) => (
              <tr key={subject.id}>
                <td>
                  <div>
                    <strong>{subject.name}</strong>
                    <br />
                    <small style={{ color: '#666' }}>{subject.description}</small>
                  </div>
                </td>
                <td>{subject.code}</td>
                <td>{subject.credits}</td>
                <td>{subject.gradeLevel}</td>
                <td>{subject.teacher}</td>
                <td>
                  <div style={{ display: 'flex', gap: '5px' }}>
                    <button 
                      className="btn btn-secondary"
                      onClick={() => openModal('editSubject', subject)}
                    >
                      <Edit size={14} />
                    </button>
                    <button className="btn btn-danger">
                      <Trash2 size={14} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SubjectsTab;