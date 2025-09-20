import React from 'react';
import { Smartphone, Plus, Edit, Trash2, Mail, Bell } from 'lucide-react';

const NotificationsTab = ({ notifications, openModal, getStatusBadge }) => {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h3>Notification Management</h3>
        <button className="btn btn-primary" onClick={() => openModal('createNotification')}>
          <Plus size={16} />
          Schedule Notification
        </button>
      </div>

      <div className="card">
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Recipients</th>
              <th>Channels</th>
              <th>Scheduled Time</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {notifications.map((notification) => (
              <tr key={notification.id}>
                <td>
                  <div>
                    <strong>{notification.title}</strong>
                    <div style={{ fontSize: '12px', color: '#666', marginTop: '2px' }}>
                      {notification.message}
                    </div>
                  </div>
                </td>
                <td>
                  {notification.recipients.map((recipient, index) => (
                    <span key={index} className="badge badge-info" style={{ marginRight: '5px' }}>
                      {recipient}
                    </span>
                  ))}
                </td>
                <td>
                  {notification.channels.map((channel, index) => (
                    <span key={index} className="badge badge-secondary" style={{ marginRight: '5px' }}>
                      {channel}
                    </span>
                  ))}
                </td>
                <td>{notification.scheduledTime}</td>
                <td>
                  <span className={`badge ${getStatusBadge(notification.status)}`}>
                    {notification.status}
                  </span>
                </td>
                <td>
                  <div style={{ display: 'flex', gap: '5px' }}>
                    <button className="btn btn-secondary">
                      <Edit size={14} />
                    </button>
                    <button className="btn btn-danger">
                      <Trash2 size={14} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="card" style={{ marginTop: '20px' }}>
        <h4>Notification Settings</h4>
        <div className="grid grid-2" style={{ gap: '20px', marginTop: '15px' }}>
          <div>
            <h5>Email Notifications</h5>
            <div style={{ marginBottom: '10px' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <input type="checkbox" defaultChecked />
                Attendance alerts to parents
              </label>
            </div>
            <div style={{ marginBottom: '10px' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <input type="checkbox" defaultChecked />
                Grade notifications
              </label>
            </div>
            <div style={{ marginBottom: '10px' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <input type="checkbox" defaultChecked />
                Fee payment reminders
              </label>
            </div>
          </div>
          <div>
            <h5>SMS Notifications</h5>
            <div style={{ marginBottom: '10px' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <input type="checkbox" />
                Exam schedule updates
              </label>
            </div>
            <div style={{ marginBottom: '10px' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <input type="checkbox" />
                Emergency alerts
              </label>
            </div>
            <div style={{ marginBottom: '10px' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <input type="checkbox" />
                Holiday notifications
              </label>
            </div>
          </div>
        </div>
        <button className="btn btn-primary" style={{ marginTop: '15px' }}>
          Save Settings
        </button>
      </div>
    </div>
  );
};

export default NotificationsTab;