import React from 'react';
import { Calendar, Filter, Download } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';

const Reports = ({ classes, attendanceData, classAttendance }) => {
  return (
    <div>
      <div className="grid grid-2" style={{ marginBottom: '30px' }}>
        <div className="card">
          <h3 style={{ marginBottom: '20px' }}>Monthly Attendance Trend</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={attendanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="present" stroke="#28a745" strokeWidth={2} name="Present %" />
              <Line type="monotone" dataKey="absent" stroke="#dc3545" strokeWidth={2} name="Absent %" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="card">
          <h3 style={{ marginBottom: '20px' }}>Class-wise Attendance</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={classAttendance}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="class" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="percentage" fill="#007bff" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="card">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <h3>Detailed Attendance Report</h3>
          <div style={{ display: 'flex', gap: '10px' }}>
            <select className="form-control" style={{ width: '150px' }}>
              <option value="">All Classes</option>
              {classes.map(cls => (
                <option key={cls} value={cls}>{cls}</option>
              ))}
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

        <table className="table">
          <thead>
            <tr>
              <th>Class</th>
              <th>Total Students</th>
              <th>Present</th>
              <th>Absent</th>
              <th>Late</th>
              <th>Excused</th>
              <th>Attendance %</th>
            </tr>
          </thead>
          <tbody>
            {classAttendance.map((cls) => (
              <tr key={cls.class}>
                <td>{cls.class}</td>
                <td>{cls.present + cls.absent}</td>
                <td style={{ color: '#28a745' }}>{cls.present}</td>
                <td style={{ color: '#dc3545' }}>{cls.absent}</td>
                <td style={{ color: '#ffc107' }}>0</td>
                <td style={{ color: '#17a2b8' }}>0</td>
                <td>
                  <span className={`badge ${cls.percentage >= 95 ? 'badge-success' : cls.percentage >= 85 ? 'badge-warning' : 'badge-danger'}`}>
                    {cls.percentage}%
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Reports;