import React from 'react';
import { CreditCard, Plus, Edit, Trash2, Eye } from 'lucide-react';

const SalaryTab = ({ salaries, openModal }) => {
  const getStatusBadge = (status) => {
    switch (status) {
      case 'paid':
        return <span className="badge badge-success">Paid</span>;
      case 'pending':
        return <span className="badge badge-warning">Pending</span>;
      default:
        return <span className="badge">{status}</span>;
    }
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h3>Salary Management</h3>
        <button className="btn btn-primary" onClick={() => openModal('createSalary')}>
          <Plus size={16} />
          Add Salary Record
        </button>
      </div>

      <div className="card">
        <table className="table">
          <thead>
            <tr>
              <th>Employee</th>
              <th>Designation</th>
              <th>Department</th>
              <th>Salary</th>
              <th>Last Paid Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {salaries.map((salary) => (
              <tr key={salary.id}>
                <td>
                  <div>
                    <strong>{salary.employeeName}</strong>
                    <div style={{ fontSize: '12px', color: '#666' }}>{salary.employeeId}</div>
                  </div>
                </td>
                <td>{salary.designation}</td>
                <td>{salary.department}</td>
                <td>₹{salary.salary.toLocaleString()}</td>
                <td>{salary.paidDate || 'N/A'}</td>
                <td>{getStatusBadge(salary.status)}</td>
                <td>
                  <div style={{ display: 'flex', gap: '5px' }}>
                    <button 
                      className="btn btn-primary"
                      onClick={() => openModal('editSalary', salary)}
                    >
                      <Edit size={14} />
                    </button>
                    <button 
                      className="btn btn-secondary"
                      onClick={() => openModal('viewSalary', salary)}
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
          <div className="stats-number">₹1.28L</div>
          <div className="stats-label">Total Monthly Salary</div>
        </div>
        <div className="stats-card" style={{ background: 'linear-gradient(135deg, #28a745 0%, #20c997 100%)' }}>
          <div className="stats-number">₹1.15L</div>
          <div className="stats-label">Paid This Month</div>
        </div>
        <div className="stats-card" style={{ background: 'linear-gradient(135deg, #ffc107 0%, #fd7e14 100%)' }}>
          <div className="stats-number">₹13K</div>
          <div className="stats-label">Pending Payment</div>
        </div>
        <div className="stats-card" style={{ background: 'linear-gradient(135deg, #17a2b8 0%, #6f42c1 100%)' }}>
          <div className="stats-number">12</div>
          <div className="stats-label">Employees</div>
        </div>
      </div>
    </div>
  );
};

export default SalaryTab;