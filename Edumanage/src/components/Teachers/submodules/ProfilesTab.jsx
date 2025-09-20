import React from 'react';
import { User, Phone, Mail, Calendar, BookOpen, Edit, Plus } from 'lucide-react';

const ProfilesTab = ({ teachers, openModal }) => {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h3>Teacher Profiles</h3>
        <button className="btn btn-primary" onClick={() => openModal('add')}>
          <Plus size={16} />
          Add Teacher
        </button>
      </div>

      <div className="grid grid-2">
        {teachers.map((teacher) => (
          <div key={teacher.id} className="card">
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
                <h4>{teacher.name}</h4>
                <p style={{ color: '#666', marginBottom: '5px' }}>ID: {teacher.employeeId}</p>
                <p style={{ color: '#666' }}>{teacher.designation}</p>
              </div>
            </div>

            <div className="grid grid-2" style={{ gap: '10px', marginBottom: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Phone size={16} color="#666" />
                <span style={{ fontSize: '14px' }}>{teacher.phone}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Mail size={16} color="#666" />
                <span style={{ fontSize: '14px' }}>{teacher.email}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Calendar size={16} color="#666" />
                <span style={{ fontSize: '14px' }}>Joined: {teacher.dateOfJoining}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <BookOpen size={16} color="#666" />
                <span style={{ fontSize: '14px' }}>{teacher.experience}</span>
              </div>
            </div>

            <div style={{ marginBottom: '15px' }}>
              <strong>Subjects:</strong>
              <div style={{ marginTop: '8px', display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                {teacher.subjects.map((subject, index) => (
                  <span key={index} className="badge badge-info">
                    {subject}
                  </span>
                ))}
              </div>
            </div>

            <div style={{ marginBottom: '15px' }}>
              <strong>Classes:</strong>
              <div style={{ marginTop: '8px', display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                {teacher.classes.map((cls, index) => (
                  <span key={index} className="badge badge-success">
                    {cls}
                  </span>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', gap: '10px' }}>
              <button 
                className="btn btn-primary"
                onClick={() => openModal('edit', teacher)}
              >
                <Edit size={16} />
                Edit
              </button>
              <button 
                className="btn btn-secondary"
                onClick={() => openModal('view', teacher)}
              >
                <User size={16} />
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfilesTab;