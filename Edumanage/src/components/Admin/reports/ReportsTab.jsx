import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { Download, FileText, Users, BookOpen, DollarSign, Calendar, TrendingUp } from 'lucide-react';

const ReportsTab = ({ systemStats, userActivity, moduleUsage, openModal }) => {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h3>System Reports & Analytics</h3>
        <div style={{ display: 'flex', gap: '10px' }}>
          <input type="date" className="form-control" style={{ width: '150px' }} />
          <input type="date" className="form-control" style={{ width: '150px' }} />
          <button className="btn btn-primary">
            <Download size={16} />
            Export Report
          </button>
        </div>
      </div>

      <div className="grid grid-4" style={{ marginBottom: '30px' }}>
        <div className="stats-card">
          <div className="stats-number">{systemStats.totalUsers}</div>
          <div className="stats-label">Total Users</div>
        </div>
        <div className="stats-card" style={{ background: 'linear-gradient(135deg, #28a745 0%, #20c997 100%)' }}>
          <div className="stats-number">{systemStats.activeUsers}</div>
          <div className="stats-label">Active Users</div>
        </div>
        <div className="stats-card" style={{ background: 'linear-gradient(135deg, #ffc107 0%, #fd7e14 100%)' }}>
          <div className="stats-number">{systemStats.modules}</div>
          <div className="stats-label">Active Modules</div>
        </div>
        <div className="stats-card" style={{ background: 'linear-gradient(135deg, #17a2b8 0%, #6f42c1 100%)' }}>
          <div className="stats-number">{systemStats.activities}</div>
          <div className="stats-label">Total Activities</div>
        </div>
      </div>

      <div className="grid grid-2" style={{ marginBottom: '30px' }}>
        <div className="card">
          <h4 style={{ marginBottom: '20px' }}>
            <Users size={20} style={{ marginRight: '8px', verticalAlign: 'middle' }} />
            User Activity Trends
          </h4>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={userActivity}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="activeUsers" stroke="#007bff" strokeWidth={3} name="Active Users" />
              <Line type="monotone" dataKey="newUsers" stroke="#28a745" strokeWidth={2} name="New Users" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="card">
          <h4 style={{ marginBottom: '20px' }}>
            <BarChart size={20} style={{ marginRight: '8px', verticalAlign: 'middle' }} />
            Module Usage Distribution
          </h4>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={moduleUsage}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={120}
                dataKey="value"
              >
                {moduleUsage.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', flexWrap: 'wrap' }}>
              {moduleUsage.map((item, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{ 
                    width: '12px', 
                    height: '12px', 
                    backgroundColor: item.color, 
                    borderRadius: '50%' 
                  }}></div>
                  <span style={{ fontSize: '12px' }}>{item.name}: {item.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-2" style={{ marginBottom: '30px' }}>
        <div className="card">
          <h4 style={{ marginBottom: '20px' }}>
            <TrendingUp size={20} style={{ marginRight: '8px', verticalAlign: 'middle' }} />
            System Performance Metrics
          </h4>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={systemStats.performance}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="metric" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#007bff" name="Performance" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="card">
          <h4 style={{ marginBottom: '20px' }}>
            <Calendar size={20} style={{ marginRight: '8px', verticalAlign: 'middle' }} />
            Activity Heatmap
          </h4>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '300px' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '14px', color: '#666', marginBottom: '10px' }}>
                Activity heatmap visualization would appear here
              </div>
              <div style={{ 
                width: '200px', 
                height: '200px', 
                backgroundColor: '#f8f9fa', 
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '2px dashed #dee2e6'
              }}>
                <Calendar size={48} color="#666" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <h4 style={{ marginBottom: '0' }}>
            <FileText size={20} style={{ marginRight: '8px', verticalAlign: 'middle' }} />
            Generated Reports
          </h4>
          <div style={{ display: 'flex', gap: '10px' }}>
            <select className="form-control" style={{ width: '150px' }}>
              <option value="">Report Type</option>
              <option value="user-activity">User Activity Report</option>
              <option value="module-usage">Module Usage Report</option>
              <option value="system-performance">System Performance Report</option>
              <option value="security-audit">Security Audit Report</option>
            </select>
            <button className="btn btn-primary" onClick={() => openModal('generateReport')}>
              <Download size={16} />
              Generate Report
            </button>
          </div>
        </div>

        <table className="table">
          <thead>
            <tr>
              <th>Report Name</th>
              <th>Type</th>
              <th>Generated Date</th>
              <th>Generated By</th>
              <th>Format</th>
              <th>Size</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {[
              { id: 1, name: 'Monthly User Activity Report', type: 'User Activity', date: '2025-01-01', by: 'System', format: 'PDF', size: '2.5 MB' },
              { id: 2, name: 'Module Usage Statistics', type: 'Module Usage', date: '2024-12-31', by: 'Admin', format: 'Excel', size: '1.8 MB' },
              { id: 3, name: 'System Performance Metrics', type: 'System Performance', date: '2024-12-30', by: 'System', format: 'PDF', size: '3.2 MB' },
              { id: 4, name: 'Security Audit Log', type: 'Security Audit', date: '2024-12-29', by: 'Admin', format: 'CSV', size: '5.1 MB' },
              { id: 5, name: 'User Registration Summary', type: 'User Activity', date: '2024-12-28', by: 'System', format: 'PDF', size: '1.5 MB' }
            ].map((report) => (
              <tr key={report.id}>
                <td>
                  <div>
                    <strong>{report.name}</strong>
                    <br />
                    <small style={{ color: '#666' }}>{report.description}</small>
                  </div>
                </td>
                <td>{report.type}</td>
                <td>{report.date}</td>
                <td>{report.by}</td>
                <td>
                  <span className="badge badge-info">{report.format}</span>
                </td>
                <td>{report.size}</td>
                <td>
                  <div style={{ display: 'flex', gap: '5px' }}>
                    <button className="btn btn-secondary" style={{ marginRight: '5px' }}>
                      <Download size={14} />
                      Download
                    </button>
                    <button className="btn btn-primary">
                      <FileText size={14} />
                      View
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReportsTab;