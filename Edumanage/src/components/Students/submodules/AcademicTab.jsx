import React from 'react';
import { BookOpen, Edit, Plus } from 'lucide-react';

const AcademicTab = ({ students, openModal }) => {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h3>Academic Information</h3>
        <button className="btn btn-primary" onClick={() => openModal('academic')}>
          <Plus size={16} />
          Assign Subjects
        </button>
      </div>

      <div className="grid grid-2">
        {students.map((student) => (
          <div key={student.id} className="card">
            <h4>{student.name}</h4>
            <p style={{ color: '#666', marginBottom: '15px' }}>Roll No: {student.rollNumber}</p>
            
            <div style={{ marginBottom: '15px' }}>
              <strong>Subjects:</strong>
              <div style={{ marginTop: '8px', display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                {student.subjects.map((subject, index) => (
                  <span key={index} className="badge badge-info">
                    {subject}
                  </span>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span><strong>Academic Year:</strong> {student.academicYear}</span>
              <button className="btn btn-secondary">
                <Edit size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AcademicTab;