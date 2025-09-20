import React from 'react';
import { Calendar, CheckCircle } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const AttendanceTab = ({ currentChild, attendanceData }) => {
  return (
    <div>
      <div className="grid grid-2" style={{ marginBottom: '30px' }}>
        <div className="card">
          <h3 style={{ marginBottom: '20px' }}>Attendance Overview</h3>
          <div style={{ textAlign: 'center', marginBottom: '20px' }}>
            <div style={{ fontSize: '3rem', fontWeight: 'bold', color: '#28a745' }}>
              {currentChild.attendance}%
            </div>
            <p style={{ color: '#666' }}>Overall Attendance</p>
          </div>
          
          <div style={{ marginBottom: '15px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
              <span>Present Days</span>
              <span>101/105</span>
            </div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${currentChild.attendance}%` }}></div>
            </div>
          </div>

          <div className="alert alert-success">
            <CheckCircle size={16} style={{ marginRight: '8px' }} />
            Excellent attendance record!
          </div>
        </div>

        <div className="card">
          <h3 style={{ marginBottom: '20px' }}>Monthly Breakdown</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={attendanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="present" fill="#28a745" name="Present" />
              <Bar dataKey="absent" fill="#dc3545" name="Absent" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="card">
        <h3 style={{ marginBottom: '20px' }}>Attendance History</h3>
        <table className="table">
          <thead>
            <tr>
              <th>Month</th>
              <th>Working Days</th>
              <th>Present</th>
              <th>Absent</th>
              <th>Percentage</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {attendanceData.map((month, index) => {
              const total = month.present + month.absent
              const percentage = Math.round((month.present / total) * 100)
              return (
                <tr key={index}>
                  <td>{month.month}</td>
                  <td>{total}</td>
                  <td>{month.present}</td>
                  <td>{month.absent}</td>
                  <td>{percentage}%</td>
                  <td>
                    <span className={`badge ${percentage >= 95 ? 'badge-success' : percentage >= 85 ? 'badge-warning' : 'badge-danger'}`}>
                      {percentage >= 95 ? 'Excellent' : percentage >= 85 ? 'Good' : 'Poor'}
                    </span>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AttendanceTab;