import React from 'react';
import { Heart, Edit } from 'lucide-react';

const HealthTab = ({ students }) => {
  return (
    <div>
      <h3 style={{ marginBottom: '20px' }}>Health Records</h3>
      <div className="grid grid-2">
        {students.map((student) => (
          <div key={student.id} className="card">
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
              <Heart size={20} color="#dc3545" style={{ marginRight: '10px' }} />
              <h4>{student.name}</h4>
            </div>
            
            <div style={{ marginBottom: '10px' }}>
              <strong>Blood Group:</strong> {student.bloodGroup}
            </div>
            <div style={{ marginBottom: '10px' }}>
              <strong>Allergies:</strong> {student.allergies}
            </div>
            <div style={{ marginBottom: '10px' }}>
              <strong>Medical Conditions:</strong> {student.medicalConditions}
            </div>
            <div style={{ marginBottom: '15px' }}>
              <strong>Emergency Contact:</strong> {student.emergencyContact}
            </div>

            <button className="btn btn-primary" style={{display: 'flex', justifyContent: 'center' }}>
              <Edit size={16} />
              Update Health Info
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HealthTab;