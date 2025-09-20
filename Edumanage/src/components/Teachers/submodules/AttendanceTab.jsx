import React from 'react';
import { Clock } from 'lucide-react';

const AttendanceTab = ({ teachers, leaveRequests, handleLeaveAction }) => {
  return (
    <div>
      <h3 style={{ marginBottom: '20px' }}>Teacher Attendance & Leave Management</h3>
      
      <div className="grid grid-2" style={{ marginBottom: '30px' }}>
        <div className="card">
          <h4>Monthly Attendance Summary</h4>
          <table className="table">
            <thead>
              <tr>
                <th>Teacher</th>
                <th>Present Days</th>
                <th>Attendance %</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {teachers.map((teacher) => (
                <tr key={teacher.id}>
                  <td>{teacher.name}</td>
                  <td>22/23</td>
                  <td>{teacher.attendance}%</td>
                  <td>
                    <span className={`badge ${teacher.attendance >= 95 ? 'badge-success' : teacher.attendance >= 90 ? 'badge-warning' : 'badge-danger'}`}>
                      {teacher.attendance >= 95 ? 'Excellent' : teacher.attendance >= 90 ? 'Good' : 'Poor'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="card">
          <h4>Leave Requests</h4>
          <div style={{ maxHeight: '300px', overflowY: 'auto' }}>
            {leaveRequests.map((request) => (
              <div key={request.id} style={{ 
                padding: '12px 0', 
                borderBottom: '1px solid #eee',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start'
              }}>
                <div>
                  <h5 style={{ fontSize: '14px', marginBottom: '5px' }}>{request.teacherName}</h5>
                  <p style={{ fontSize: '12px', color: '#666', marginBottom: '5px' }}>
                    {request.type}: {request.startDate} to {request.endDate}
                  </p>
                  <p style={{ fontSize: '12px', color: '#666' }}>{request.reason}</p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '5px' }}>
                  <span className={`badge ${request.status === 'Approved' ? 'badge-success' : request.status === 'Rejected' ? 'badge-danger' : 'badge-warning'}`}>
                    {request.status}
                  </span>
                  {request.status === 'Pending' && (
                    <div>
                      <button 
                        className="btn btn-success"
                        style={{ fontSize: '10px', padding: '4px 8px', marginRight: '5px' }}
                        onClick={() => handleLeaveAction(request.id, 'approve')}
                      >
                        Approve
                      </button>
                      <button 
                        className="btn btn-danger"
                        style={{ fontSize: '10px', padding: '4px 8px' }}
                        onClick={() => handleLeaveAction(request.id, 'reject')}
                      >
                        Reject
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttendanceTab;