import React from 'react';
import { Users, Plus, Edit, Trash2 } from 'lucide-react';

const UserManagementTab = ({ users, openModal, getStatusBadge }) => {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h3>User Management</h3>
        <button className="btn btn-primary" onClick={() => openModal('addUser')}>
          <Plus size={16} />
          Add User
        </button>
      </div>

      <div className="grid grid-1">
        {Array.isArray(users) ? users.map((user) => (
          <div key={user.id} className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '15px' }}>
              <div>
                <h4>{user.name}</h4>
                <p style={{ color: '#666' }}>
                  ID: {user.employeeId} | {user.designation}
                </p>
                <p style={{ color: '#666' }}>
                  {user.subject} | {Array.isArray(user.classes) ? user.classes.join(', ') : user.classes}
                </p>
              </div>
              <div style={{ textAlign: 'right' }}>
                <span className={`badge ${getStatusBadge(user.status)}`} style={{ marginBottom: '10px' }}>
                  {user.status}
                </span>
                <div style={{ fontSize: '14px', color: '#666' }}>
                  Joined: {user.dateOfJoining}
                </div>
              </div>
            </div>

            <div className="grid grid-2" style={{ gap: '10px', marginBottom: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '14px' }}>{user.phone}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '14px' }}>{user.email}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '14px' }}>{user.experience}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '14px' }}>Classes: {Array.isArray(user.classes) ? user.classes.length : user.classes ? 1 : 0}</span>
              </div>
            </div>

            <div style={{ marginBottom: '15px' }}>
              <strong>Qualifications:</strong>
              <div style={{ marginTop: '8px', display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                {Array.isArray(user.qualifications) ? (
                  user.qualifications.map((qual, index) => (
                    <span key={index} className="badge badge-info">
                      {qual}
                    </span>
                  ))
                ) : user.qualifications ? (
                  <span className="badge badge-info">
                    {user.qualifications}
                  </span>
                ) : null}
              </div>
            </div>

            <div style={{ marginBottom: '15px' }}>
              <strong>Subjects:</strong>
              <div style={{ marginTop: '8px', display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                {Array.isArray(user.subjects) ? (
                  user.subjects.map((subject, index) => (
                    <span key={index} className="badge badge-success">
                      {subject}
                    </span>
                  ))
                ) : user.subject ? (
                  <span className="badge badge-success">
                    {user.subject}
                  </span>
                ) : null}
              </div>
            </div>

            <div style={{ marginBottom: '15px' }}>
              <strong>Classes:</strong>
              <div style={{ marginTop: '8px', display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                {Array.isArray(user.classes) ? (
                  user.classes.map((cls, index) => (
                    <span key={index} className="badge badge-warning">
                      {cls}
                    </span>
                  ))
                ) : user.classes ? (
                  <span className="badge badge-warning">
                    {user.classes}
                  </span>
                ) : null}
              </div>
            </div>

            <div style={{ display: 'flex', gap: '10px' }}>
              <button 
                className="btn btn-primary"
                onClick={() => openModal('editUser', user)}
              >
                <Edit size={16} />
                Edit
              </button>
              <button 
                className="btn btn-secondary"
                onClick={() => openModal('viewUser', user)}
              >
                <Users size={16} />
                View Details
              </button>
              <button className="btn btn-danger">
                <Trash2 size={16} />
                Delete
              </button>
            </div>
          </div>
        )) : null}
      </div>
    </div>
  );
};

export default UserManagementTab;