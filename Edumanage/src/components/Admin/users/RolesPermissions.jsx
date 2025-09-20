import React from 'react';
import { Shield } from 'lucide-react';

const RolesPermissions = ({ permissions, openPermModal }) => {
  return (
    <div>
      <h3 style={{ marginBottom: '20px' }}>Role-Based Permissions</h3>
      <div className="grid grid-2">
        {Object.entries(permissions).map(([role, perms]) => (
          <div className="card" key={role}>
            <h4>{role.charAt(0).toUpperCase() + role.slice(1)}</h4>
            <p style={{ color: '#666', marginBottom: '15px' }}>
              {role === 'admin' && 'Full system access and control'}
              {role === 'teacher' && 'Academic and student management'}
              {role === 'student' && 'Personal academic access'}
              {role === 'parent' && 'Child monitoring and communication'}
            </p>
            <div style={{ marginBottom: '15px' }}>
              <strong>Permissions:</strong>
              <ul style={{ marginTop: '8px', paddingLeft: '20px' }}>
                {perms.map((perm, idx) => <li key={idx}>{perm}</li>)}
              </ul>
            </div>
            <button className="btn btn-primary" onClick={() => openPermModal(role)}>Edit Permissions</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RolesPermissions;