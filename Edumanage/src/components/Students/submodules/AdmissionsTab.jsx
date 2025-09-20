import React from 'react';
import { Plus } from 'lucide-react';

const AdmissionsTab = ({ admissionRequests, handleApproval }) => {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h3>Admission Requests</h3>
        <div>
          <span className="badge badge-warning" style={{ marginRight: '10px' }}>
            Pending: {admissionRequests.filter(req => req.status === 'Pending').length}
          </span>
          <button className="btn btn-primary">
            <Plus size={16} />
            Bulk Import
          </button>
        </div>
      </div>

      <div className="card">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Class Applied</th>
              <th>Date Submitted</th>
              <th>Documents</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {admissionRequests.map((request) => (
              <tr key={request.id}>
                <td>{request.name}</td>
                <td>{request.class}</td>
                <td>{request.dateSubmitted}</td>
                <td>
                  <span className="badge badge-info">
                    {request.documents.length} docs
                  </span>
                </td>
                <td>
                  <span className="badge badge-warning">{request.status}</span>
                </td>
                <td>
                  <button 
                    className="btn btn-success"
                    style={{ marginRight: '5px' }}
                    onClick={() => handleApproval(request.id, 'approve')}
                  >
                    Approve
                  </button>
                  <button 
                    className="btn btn-danger"
                    onClick={() => handleApproval(request.id, 'reject')}
                  >
                    Reject
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdmissionsTab;