import React from 'react';
import { User, Phone, Mail, Calendar, MapPin, Edit } from 'lucide-react';

const ProfileTab = ({ students, openModal }) => {
  return (
    <div className="grid grid-2">
      {students.map((student) => (
        <div key={student.id} className="card">
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
            <div style={{ 
              width: '80px', 
              height: '80px', 
              backgroundColor: '#f0f0f0', 
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: '20px'
            }}>
              <User size={40} color="#666" />
            </div>
            <div>
              <h3>{student.name}</h3>
              <p style={{ color: '#666' }}>ID: {student.rollNumber}</p>
              <p style={{ color: '#666' }}>Class: {student.class} | Age: {student.age}</p>
            </div>
          </div>

          <div className="grid grid-2" style={{ gap: '10px', marginBottom: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Phone size={16} color="#666" />
              <span style={{ fontSize: '14px' }}>{student.phone}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Mail size={16} color="#666" />
              <span style={{ fontSize: '14px' }}>{student.email}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Calendar size={16} color="#666" />
              <span style={{ fontSize: '14px' }}>{student.dateOfBirth}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <MapPin size={16} color="#666" />
              <span style={{ fontSize: '14px' }}>Class {student.class}</span>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
            <button 
              className="btn btn-primary"
              onClick={() => openModal('edit', student)}
            >
              <Edit size={16} />
              Edit
            </button>
            <button 
              className="btn btn-secondary"
              onClick={() => openModal('view', student)}
            >
              <User size={16} />
              View Details
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProfileTab;