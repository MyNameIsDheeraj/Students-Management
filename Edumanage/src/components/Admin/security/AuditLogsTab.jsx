import React from 'react';
import { FileText, Download, Filter, Search, Calendar, User, Edit, Trash2, Plus, Clock } from 'lucide-react';

const AuditLogsTab = ({ auditLogs, openModal }) => {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h3>Audit Logs</h3>
        <div style={{ display: 'flex', gap: '10px' }}>
          <div style={{ position: 'relative' }}>
            <Search size={20} style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: '#666' }} />
            <input
              type="text"
              placeholder="Search logs..."
              className="form-control"
              style={{ paddingLeft: '40px', width: '200px' }}
            />
          </div>
          <select className="form-control" style={{ width: '150px' }}>
            <option value="">All Users</option>
            <option value="admin">Admin</option>
            <option value="teacher">Teacher</option>
            <option value="student">Student</option>
            <option value="parent">Parent</option>
          </select>
          <select className="form-control" style={{ width: '150px' }}>
            <option value="">All Actions</option>
            <option value="create">Create</option>
            <option value="update">Update</option>
            <option value="delete">Delete</option>
            <option value="login">Login</option>
            <option value="logout">Logout</option>
          </select>
          <input type="date" className="form-control" style={{ width: '150px' }} />
          <button className="btn btn-primary">
            <Filter size={16} />
            Filter
          </button>
          <button className="btn btn-secondary">
            <Download size={16} />
            Export
          </button>
        </div>
      </div>

      <div className="card">
        <table className="table">
          <thead>
            <tr>
              <th>Timestamp</th>
              <th>User</th>
              <th>Action</th>
              <th>Module</th>
              <th>Description</th>
              <th>IP Address</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {auditLogs.map((log) => (
              <tr key={log.id}>
                <td>
                  <div>
                    <strong>{log.timestamp}</strong>
                    <br />
                    <small style={{ color: '#666' }}>{log.time}</small>
                  </div>
                </td>
                <td>
                  <div>
                    <strong>{log.user}</strong>
                    <br />
                    <small style={{ color: '#666' }}>{log.role}</small>
                  </div>
                </td>
                <td>
                  <span className={`badge ${
                    log.action === 'create' ? 'badge-success' :
                    log.action === 'update' ? 'badge-warning' :
                    log.action === 'delete' ? 'badge-danger' :
                    log.action === 'login' ? 'badge-info' :
                    log.action === 'logout' ? 'badge-secondary' : 'badge-primary'
                  }`}>
                    {log.action}
                  </span>
                </td>
                <td>{log.module}</td>
                <td>{log.description}</td>
                <td style={{ fontFamily: 'monospace', fontSize: '12px' }}>{log.ipAddress}</td>
                <td>
                  <span className={`badge ${log.status === 'Success' ? 'badge-success' : 'badge-danger'}`}>
                    {log.status}
                  </span>
                </td>
                <td>
                  <button 
                    className="btn btn-secondary"
                    onClick={() => openModal('viewLog', log)}
                  >
                    <FileText size={14} />
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="card" style={{ marginTop: '20px' }}>
        <h4 style={{ marginBottom: '20px' }}>
          <Clock size={20} style={{ marginRight: '8px', verticalAlign: 'middle' }} />
          Recent Activity Summary
        </h4>
        <div className="grid grid-4" style={{ gap: '20px', marginBottom: '20px' }}>
          <div className="stats-card">
            <div className="stats-number">{auditLogs.filter(log => log.action === 'login').length}</div>
            <div className="stats-label">Total Logins</div>
          </div>
          <div className="stats-card" style={{ background: 'linear-gradient(135deg, #28a745 0%, #20c997 100%)' }}>
            <div className="stats-number">{auditLogs.filter(log => log.action === 'create').length}</div>
            <div className="stats-label">Records Created</div>
          </div>
          <div className="stats-card" style={{ background: 'linear-gradient(135deg, #ffc107 0%, #fd7e14 100%)' }}>
            <div className="stats-number">{auditLogs.filter(log => log.action === 'update').length}</div>
            <div className="stats-label">Records Updated</div>
          </div>
          <div className="stats-card" style={{ background: 'linear-gradient(135deg, #17a2b8 0%, #6f42c1 100%)' }}>
            <div className="stats-number">{auditLogs.filter(log => log.action === 'delete').length}</div>
            <div className="stats-label">Records Deleted</div>
          </div>
        </div>

        <div className="grid grid-2" style={{ gap: '20px' }}>
          <div>
            <h5>Top Active Users</h5>
            <div style={{ marginTop: '15px' }}>
              {[
                { user: 'John Admin', role: 'Administrator', count: 45 },
                { user: 'Sarah Johnson', role: 'Teacher', count: 38 },
                { user: 'David Wilson', role: 'Teacher', count: 32 },
                { user: 'Michael Brown', role: 'Parent', count: 28 },
                { user: 'Emily Brown', role: 'Teacher', count: 25 }
              ].map((user, index) => (
                <div key={index} style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center', 
                  padding: '10px 0',
                  borderBottom: '1px solid #eee'
                }}>
                  <div>
                    <strong>{user.user}</strong>
                    <br />
                    <small style={{ color: '#666' }}>{user.role}</small>
                  </div>
                  <span className="badge badge-info">{user.count} activities</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h5>Most Active Modules</h5>
            <div style={{ marginTop: '15px' }}>
              {[
                { module: 'User Management', count: 120 },
                { module: 'Attendance', count: 95 },
                { module: 'Grades', count: 87 },
                { module: 'Assignments', count: 78 },
                { module: 'Finance', count: 65 }
              ].map((mod, index) => (
                <div key={index} style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center', 
                  padding: '10px 0',
                  borderBottom: '1px solid #eee'
                }}>
                  <div>
                    <strong>{mod.module}</strong>
                  </div>
                  <span className="badge badge-success">{mod.count} actions</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuditLogsTab;