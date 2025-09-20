import React from 'react';

const PermissionsModal = ({ showPermModal, permRole, permEdit, closePermModal, handlePermChange, handlePermSave }) => {
  if (!showPermModal) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h3>Edit Permissions for {permRole.charAt(0).toUpperCase() + permRole.slice(1)}</h3>
          <button className="close-btn" onClick={closePermModal}>×</button>
        </div>
        <form onSubmit={handlePermSave}>
          {permEdit.map((perm, idx) => (
            <div className="form-group" key={idx}>
              <input
                type="text"
                className="form-control"
                value={perm}
                onChange={e => handlePermChange(idx, e.target.value)}
              />
            </div>
          ))}
          <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
            <button type="button" className="btn btn-secondary" onClick={closePermModal}>
              Cancel
            </button>
            <button type="submit" className="btn btn-primary">
              Save Permissions
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PermissionsModal;