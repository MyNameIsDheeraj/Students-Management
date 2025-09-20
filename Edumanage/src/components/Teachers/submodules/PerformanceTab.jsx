import React from 'react';
import { Award, User } from 'lucide-react';

const PerformanceTab = ({ teachers }) => {
  return (
    <div>
      <h3 style={{ marginBottom: '20px' }}>Teacher Performance</h3>
      
      <div className="grid grid-2">
        {teachers.map((teacher) => (
          <div key={teacher.id} className="card">
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
              <div style={{ 
                width: '60px', 
                height: '60px', 
                backgroundColor: '#f0f0f0', 
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: '15px'
              }}>
                <User size={30} color="#666" />
              </div>
              <div>
                <h4>{teacher.name}</h4>
                <p style={{ color: '#666' }}>{teacher.designation}</p>
              </div>
            </div>

            <div style={{ marginBottom: '15px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span>Overall Rating:</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <Award size={16} color="#ffc107" />
                  <strong>{teacher.performance}/5.0</strong>
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span>Attendance:</span>
                <strong>{teacher.attendance}%</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span>Student Success Rate:</span>
                <strong>87%</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span>Classes Assigned:</span>
                <strong>{teacher.classes.length}</strong>
              </div>
            </div>

            <div style={{ marginBottom: '15px' }}>
              <strong>Recent Feedback:</strong>
              <div style={{ marginTop: '8px', padding: '10px', backgroundColor: '#f8f9fa', borderRadius: '4px' }}>
                <p style={{ fontSize: '12px', color: '#666', marginBottom: '5px' }}>
                  "Excellent teaching methodology and student engagement."
                </p>
                <p style={{ fontSize: '11px', color: '#999' }}>- Principal Review, Jan 2025</p>
              </div>
            </div>

            <button className="btn btn-primary" style={{ width: '100%' }}>
              View Detailed Report
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PerformanceTab;