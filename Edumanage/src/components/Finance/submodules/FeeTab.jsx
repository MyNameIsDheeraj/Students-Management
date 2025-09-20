import React from 'react';
import { DollarSign, Plus, Edit, Trash2, Eye } from 'lucide-react';

const FeeTab = ({ fees, openModal }) => {
  const getStatusBadge = (status) => {
    switch (status) {
      case 'paid':
        return <span className="badge badge-success">Paid</span>;
      case 'pending':
        return <span className="badge badge-warning">Pending</span>;
      case 'overdue':
        return <span className="badge badge-danger">Overdue</span>;
      default:
        return <span className="badge">{status}</span>;
    }
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h3>Fee Management</h3>
        <button className="btn btn-primary" onClick={() => openModal('createFee')}>
          <Plus size={16} />
          Add Fee Record
        </button>
      </div>

      <div className="card">
        <table className="table">
          <thead>
            <tr>
              <th>Student</th>
              <th>Class</th>
              <th>Total Amount</th>
              <th>Paid Amount</th>
              <th>Pending Amount</th>
              <th>Due Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {fees.map((fee) => (
              <tr key={fee.id}>
                <td>
                  <div>
                    <strong>{fee.studentName}</strong>
                    <div style={{ fontSize: '12px', color: '#666' }}>{fee.rollNumber}</div>
                  </div>
                </td>
                <td>{fee.class}</td>
                <td>₹{fee.totalAmount.toLocaleString()}</td>
                <td>₹{fee.paidAmount.toLocaleString()}</td>
                <td>₹{fee.pendingAmount.toLocaleString()}</td>
                <td>{fee.dueDate}</td>
                <td>{getStatusBadge(fee.status)}</td>
                <td>
                  <div style={{ display: 'flex', gap: '5px' }}>
                    <button 
                      className="btn btn-primary"
                      onClick={() => openModal('editFee', fee)}
                    >
                      <Edit size={14} />
                    </button>
                    <button 
                      className="btn btn-secondary"
                      onClick={() => openModal('viewFee', fee)}
                    >
                      <Eye size={14} />
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

      <div className="grid grid-4" style={{ marginTop: '30px' }}>
        <div className="stats-card">
          <div className="stats-number">₹45.0L</div>
          <div className="stats-label">Total Receivable</div>
        </div>
        <div className="stats-card" style={{ background: 'linear-gradient(135deg, #28a745 0%, #20c997 100%)' }}>
          <div className="stats-number">₹38.5L</div>
          <div className="stats-label">Total Collected</div>
        </div>
        <div className="stats-card" style={{ background: 'linear-gradient(135deg, #ffc107 0%, #fd7e14 100%)' }}>
          <div className="stats-number">₹4.2L</div>
          <div className="stats-label">Pending Collection</div>
        </div>
        <div className="stats-card" style={{ background: 'linear-gradient(135deg, #dc3545 0%, #e83e8c 100%)' }}>
          <div className="stats-number">₹2.3L</div>
          <div className="stats-label">Overdue Amount</div>
        </div>
      </div>
    </div>
  );
};

export default FeeTab;