import React from 'react';
import { User, Shield, Database, Mail, Smartphone, Bell, FileText, Users, Edit, Trash2, Plus } from 'lucide-react';

const AdminModal = ({ showModal, modalType, selectedItem, users, systemSettings, closeModal }) => {
  if (!showModal) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h3>
            {modalType === 'addUser' && 'Add New User'}
            {modalType === 'editUser' && 'Edit User'}
            {modalType === 'viewUser' && 'User Details'}
            {modalType === 'configureSystem' && 'Configure System'}
            {modalType === 'generateReport' && 'Generate Report'}
            {modalType === 'viewLog' && 'Audit Log Details'}
          </h3>
          <button className="close-btn" onClick={closeModal}>×</button>
        </div>
        
        {modalType === 'viewUser' && selectedItem && (
          <div>
            <h4>{selectedItem.name}</h4>
            <div className="grid grid-2" style={{ gap: '15px', marginBottom: '15px' }}>
              <div><strong>ID:</strong> {selectedItem.employeeId}</div>
              <div><strong>Designation:</strong> {selectedItem.designation}</div>
              <div><strong>Subject:</strong> {selectedItem.subject}</div>
              <div><strong>Classes:</strong> {selectedItem.classes.join(', ')}</div>
              <div><strong>Phone:</strong> {selectedItem.phone}</div>
              <div><strong>Email:</strong> {selectedItem.email}</div>
              <div><strong>Date of Joining:</strong> {selectedItem.dateOfJoining}</div>
              <div><strong>Experience:</strong> {selectedItem.experience}</div>
              <div><strong>Status:</strong> 
                <span className={`badge ${getStatusBadge(selectedItem.status)}`} style={{ marginLeft: '8px' }}>
                  {selectedItem.status}
                </span>
              </div>
            </div>
            <div style={{ marginBottom: '15px' }}>
              <strong>Address:</strong>
              <p style={{ marginTop: '8px', padding: '10px', backgroundColor: '#f8f9fa', borderRadius: '4px' }}>
                {selectedItem.address}
              </p>
            </div>
            <div style={{ marginBottom: '15px' }}>
              <strong>Qualifications:</strong>
              <div style={{ marginTop: '8px', display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                {selectedItem.qualifications.map((qual, index) => (
                  <span key={index} className="badge badge-info">
                    {qual}
                  </span>
                ))}
              </div>
            </div>
            <div style={{ marginBottom: '15px' }}>
              <strong>Subjects:</strong>
              <div style={{ marginTop: '8px', display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                {selectedItem.subjects.map((subject, index) => (
                  <span key={index} className="badge badge-success">
                    {subject}
                  </span>
                ))}
              </div>
            </div>
            <div style={{ marginBottom: '15px' }}>
              <strong>Classes:</strong>
              <div style={{ marginTop: '8px', display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                {selectedItem.classes.map((cls, index) => (
                  <span key={index} className="badge badge-warning">
                    {cls}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {(modalType === 'addUser' || modalType === 'editUser') && (
          <form>
            <div className="grid grid-2" style={{ gap: '15px' }}>
              <div className="form-group">
                <label className="form-label">Full Name</label>
                <input type="text" className="form-control" defaultValue={selectedItem?.name} />
              </div>
              <div className="form-group">
                <label className="form-label">Employee ID</label>
                <input type="text" className="form-control" defaultValue={selectedItem?.employeeId} />
              </div>
              <div className="form-group">
                <label className="form-label">Designation</label>
                <input type="text" className="form-control" defaultValue={selectedItem?.designation} />
              </div>
              <div className="form-group">
                <label className="form-label">Subject</label>
                <input type="text" className="form-control" defaultValue={selectedItem?.subject} />
              </div>
              <div className="form-group">
                <label className="form-label">Phone</label>
                <input type="tel" className="form-control" defaultValue={selectedItem?.phone} />
              </div>
              <div className="form-group">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" defaultValue={selectedItem?.email} />
              </div>
              <div className="form-group">
                <label className="form-label">Date of Joining</label>
                <input type="date" className="form-control" defaultValue={selectedItem?.dateOfJoining} />
              </div>
              <div className="form-group">
                <label className="form-label">Experience</label>
                <input type="text" className="form-control" defaultValue={selectedItem?.experience} />
              </div>
              <div className="form-group">
                <label className="form-label">Status</label>
                <select className="form-control" defaultValue={selectedItem?.status}>
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                  <option value="suspended">Suspended</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Classes (comma separated)</label>
                <input type="text" className="form-control" defaultValue={selectedItem?.classes?.join(', ')} />
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">Address</label>
              <textarea className="form-control" rows="3" defaultValue={selectedItem?.address}></textarea>
            </div>
            <div className="form-group">
              <label className="form-label">Qualifications (comma separated)</label>
              <input type="text" className="form-control" defaultValue={selectedItem?.qualifications?.join(', ')} />
            </div>
            <div className="form-group">
              <label className="form-label">Subjects (comma separated)</label>
              <input type="text" className="form-control" defaultValue={selectedItem?.subjects?.join(', ')} />
            </div>
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
              <button type="button" className="btn btn-secondary" onClick={closeModal}>
                Cancel
              </button>
              <button type="submit" className="btn btn-primary">
                {modalType === 'addUser' ? 'Add User' : 'Save Changes'}
              </button>
            </div>
          </form>
        )}

        {modalType === 'configureSystem' && (
          <form>
            <div className="grid grid-2" style={{ gap: '15px' }}>
              <div className="form-group">
                <label className="form-label">System Name</label>
                <input type="text" className="form-control" defaultValue={systemSettings.systemName} />
              </div>
              <div className="form-group">
                <label className="form-label">Version</label>
                <input type="text" className="form-control" defaultValue={systemSettings.version} />
              </div>
              <div className="form-group">
                <label className="form-label">Maintenance Mode</label>
                <select className="form-control" defaultValue={systemSettings.maintenanceMode}>
                  <option value="enabled">Enabled</option>
                  <option value="disabled">Disabled</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Default Language</label>
                <select className="form-control" defaultValue={systemSettings.defaultLanguage}>
                  <option value="en">English</option>
                  <option value="es">Spanish</option>
                  <option value="fr">French</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Timezone</label>
                <select className="form-control" defaultValue={systemSettings.timezone}>
                  <option value="UTC">UTC</option>
                  <option value="EST">Eastern Standard Time</option>
                  <option value="PST">Pacific Standard Time</option>
                  <option value="IST">Indian Standard Time</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Date Format</label>
                <select className="form-control" defaultValue={systemSettings.dateFormat}>
                  <option value="MM/DD/YYYY">MM/DD/YYYY</option>
                  <option value="DD/MM/YYYY">DD/MM/YYYY</option>
                  <option value="YYYY-MM-DD">YYYY-MM-DD</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">System Description</label>
              <textarea className="form-control" rows="3" defaultValue={systemSettings.description}></textarea>
            </div>
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
              <button type="button" className="btn btn-secondary" onClick={closeModal}>
                Cancel
              </button>
              <button type="submit" className="btn btn-primary">
                Save Configuration
              </button>
            </div>
          </form>
        )}

        {modalType === 'generateReport' && (
          <form>
            <div className="form-group">
              <label className="form-label">Report Type</label>
              <select className="form-control">
                <option value="">Select report type...</option>
                <option value="user-activity">User Activity Report</option>
                <option value="module-usage">Module Usage Report</option>
                <option value="system-performance">System Performance Report</option>
                <option value="security-audit">Security Audit Report</option>
              </select>
            </div>
            <div className="grid grid-2" style={{ gap: '15px' }}>
              <div className="form-group">
                <label className="form-label">Start Date</label>
                <input type="date" className="form-control" />
              </div>
              <div className="form-group">
                <label className="form-label">End Date</label>
                <input type="date" className="form-control" />
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">Format</label>
              <div style={{ display: 'flex', gap: '15px', marginTop: '8px' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <input type="radio" name="format" value="pdf" defaultChecked />
                  PDF
                </label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <input type="radio" name="format" value="excel" />
                  Excel
                </label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <input type="radio" name="format" value="csv" />
                  CSV
                </label>
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">Include Charts</label>
              <div style={{ display: 'flex', gap: '15px', marginTop: '8px' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <input type="checkbox" defaultChecked />
                  Bar Charts
                </label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <input type="checkbox" defaultChecked />
                  Line Charts
                </label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <input type="checkbox" />
                  Pie Charts
                </label>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
              <button type="button" className="btn btn-secondary" onClick={closeModal}>
                Cancel
              </button>
              <button type="submit" className="btn btn-primary">
                Generate Report
              </button>
            </div>
          </form>
        )}

        {modalType === 'viewLog' && selectedItem && (
          <div>
            <h4>Audit Log Details</h4>
            <div className="grid grid-2" style={{ gap: '15px', marginBottom: '15px' }}>
              <div><strong>Timestamp:</strong> {selectedItem.timestamp}</div>
              <div><strong>User:</strong> {selectedItem.user}</div>
              <div><strong>Action:</strong> 
                <span className={`badge ${
                  selectedItem.action === 'create' ? 'badge-success' :
                  selectedItem.action === 'update' ? 'badge-warning' :
                  selectedItem.action === 'delete' ? 'badge-danger' :
                  selectedItem.action === 'login' ? 'badge-info' :
                  selectedItem.action === 'logout' ? 'badge-secondary' : 'badge-primary'
                }`} style={{ marginLeft: '8px' }}>
                  {selectedItem.action}
                </span>
              </div>
              <div><strong>Module:</strong> {selectedItem.module}</div>
              <div><strong>IP Address:</strong> {selectedItem.ipAddress}</div>
              <div><strong>Status:</strong> 
                <span className={`badge ${selectedItem.status === 'Success' ? 'badge-success' : 'badge-danger'}`} style={{ marginLeft: '8px' }}>
                  {selectedItem.status}
                </span>
              </div>
            </div>
            <div style={{ marginBottom: '15px' }}>
              <strong>Description:</strong>
              <p style={{ marginTop: '8px', padding: '10px', backgroundColor: '#f8f9fa', borderRadius: '4px' }}>
                {selectedItem.description}
              </p>
            </div>
            <div style={{ marginBottom: '15px' }}>
              <strong>User Agent:</strong>
              <p style={{ marginTop: '8px', padding: '10px', backgroundColor: '#f8f9fa', borderRadius: '4px', fontSize: '12px' }}>
                {selectedItem.userAgent}
              </p>
            </div>
            <div style={{ marginBottom: '15px' }}>
              <strong>Session ID:</strong>
              <p style={{ marginTop: '8px', padding: '10px', backgroundColor: '#f8f9fa', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>
                {selectedItem.sessionId}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminModal;