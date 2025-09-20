import React from 'react';
import { UserPlus, Edit, Key, Trash2 } from 'lucide-react';

const UserManagement = ({ users, openModal, handleDeleteUser, handleResetPassword }) => {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h3>User Management</h3>
        <button className="btn btn-primary" onClick={() => openModal('addUser')}>
          <UserPlus size={16} />
          Add User
        </button>
      </div>
      <div className="card">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
              <th>Last Login</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <span className={`badge badge-${
                    user.role === 'admin' ? 'danger' :
                    user.role === 'teacher' ? 'success' :
                    user.role === 'student' ? 'info' : 'warning'
                  }`}>
                    {user.role}
                  </span>
                </td>
                <td>
                  <span className={`badge badge-${user.status === 'active' ? 'success' : 'danger'}`}>
                    {user.status}
                  </span>
                </td>
                <td>{user.lastLogin}</td>
                <td>
                  <button className="btn btn-secondary" style={{ marginRight: '5px' }} onClick={() => openModal('editUser', user)}>
                    <Edit size={14} />
                  </button>
                  <button className="btn btn-warning" style={{ marginRight: '5px' }} onClick={() => handleResetPassword(user.id)}>
                    <Key size={14} />
                  </button>
                  <button className="btn btn-danger" onClick={() => handleDeleteUser(user.id)}>
                    <Trash2 size={14} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserManagement;