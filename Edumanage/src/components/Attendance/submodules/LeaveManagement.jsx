import React from 'react';
import { Clock } from 'lucide-react';

const LeaveManagement = ({ leaveRequests, handleLeaveAction }) => {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h3>Leave Management</h3>
        <div>
          <span className="badge badge-warning" style={{ marginRight: '10px' }}>
            Pending: {leaveRequests.filter(req => req.status === 'Pending').length}
          </span>
          <span className="badge badge-success">
            Approved: {leaveRequests.filter(req => req.status === 'Approved').length}
          </span>
        </div>
      </div>

      <div className="card">
        <table className="table">
          <thead>
            <tr>
              <th>Student</th>
              <th>Class</th>
              <th>Leave Type</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Reason</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {leaveRequests.map((request) => (
              <tr key={request.id}>
                <td>{request.studentName}</td>
                <td>{request.class}</td>
                <td>{request.type}</td>
                <td>{request.startDate}</td>
                <td>{request.endDate}</td>
                <td>{request.reason}</td>
                <td>
                  <span className={`badge ${
                    request.status === 'Approved' ? 'badge-success' : 
                    request.status === 'Rejected' ? 'badge-danger' : 'badge-warning'
                  }`}>
                    {request.status}
                  </span>
                </td>
                <td>
                  {request.status === 'Pending' && (
                    <div style={{ display: 'flex', gap: '5px' }}>
                      <button 
                        className="btn btn-success"
                        style={{ fontSize: '12px', padding: '4px 8px' }}
                        onClick={() => handleLeaveAction(request.id, 'approve')}
                      >
                        Approve
                      </button>
                      <button 
                        className="btn btn-danger"
                        style={{ fontSize: '12px', padding: '4px 8px' }}
                        onClick={() => handleLeaveAction(request.id, 'reject')}
                      >
                        Reject
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LeaveManagement;