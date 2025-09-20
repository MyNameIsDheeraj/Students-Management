import React from 'react';

const UserModal = ({ showModal, modalType, editUser, closeModal, handleAddUser, handleEditUser }) => {
  if (!showModal) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h3>{modalType === 'addUser' ? 'Add New User' : 'Edit User'}</h3>
          <button className="close-btn" onClick={closeModal}>×</button>
        </div>
        <form onSubmit={modalType === 'addUser' ? handleAddUser : handleEditUser}>
          <div className="grid grid-2" style={{ gap: '15px' }}>
            <div className="form-group">
              <label className="form-label">Full Name</label>
              <input type="text" name="fullName" className="form-control" placeholder="Enter full name" defaultValue={editUser?.name || ''} required />
            </div>
            <div className="form-group">
              <label className="form-label">Email Address</label>
              <input type="email" name="email" className="form-control" placeholder="Enter email address" defaultValue={editUser?.email || ''} required />
            </div>
            <div className="form-group">
              <label className="form-label">Role</label>
              <select name="role" className="form-control" defaultValue={editUser?.role || ''} required>
                <option value="">Select role...</option>
                <option value="admin">Administrator</option>
                <option value="teacher">Teacher</option>
                <option value="student">Student</option>
                <option value="parent">Parent</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Status</label>
              <select name="status" className="form-control" defaultValue={editUser?.status || 'active'}>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>
          </div>
          {modalType === 'addUser' && (
            <div className="form-group">
              <label className="form-label">Temporary Password</label>
              <input type="password" name="password" className="form-control" placeholder="Enter temporary password" required />
              <small style={{ color: '#666' }}>User will be required to change password on first login</small>
            </div>
          )}
          <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
            <button type="button" className="btn btn-secondary" onClick={closeModal}>
              Cancel
            </button>
            <button type="submit" className="btn btn-primary">
              {modalType === 'addUser' ? 'Create User' : 'Save Changes'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserModal;