import React from 'react';
import { FileText, Plus, Edit, Trash2, Eye } from 'lucide-react';

const ExpenseTab = ({ expenses, openModal }) => {
  const getStatusBadge = (status) => {
    switch (status) {
      case 'paid':
        return <span className="badge badge-success">Paid</span>;
      case 'pending':
        return <span className="badge badge-warning">Pending</span>;
      case 'approved':
        return <span className="badge badge-info">Approved</span>;
      default:
        return <span className="badge">{status}</span>;
    }
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h3>Expense Tracking</h3>
        <button className="btn btn-primary" onClick={() => openModal('createExpense')}>
          <Plus size={16} />
          Add Expense
        </button>
      </div>

      <div className="card">
        <table className="table">
          <thead>
            <tr>
              <th>Category</th>
              <th>Description</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense) => (
              <tr key={expense.id}>
                <td><strong>{expense.category}</strong></td>
                <td>{expense.description}</td>
                <td>₹{expense.amount.toLocaleString()}</td>
                <td>{expense.date}</td>
                <td>{getStatusBadge(expense.status)}</td>
                <td>
                  <div style={{ display: 'flex', gap: '5px' }}>
                    <button 
                      className="btn btn-primary"
                      onClick={() => openModal('editExpense', expense)}
                    >
                      <Edit size={14} />
                    </button>
                    <button 
                      className="btn btn-secondary"
                      onClick={() => openModal('viewExpense', expense)}
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
          <div className="stats-number">₹45.5K</div>
          <div className="stats-label">Total Expenses</div>
        </div>
        <div className="stats-card" style={{ background: 'linear-gradient(135deg, #28a745 0%, #20c997 100%)' }}>
          <div className="stats-number">₹35.5K</div>
          <div className="stats-label">Paid Expenses</div>
        </div>
        <div className="stats-card" style={{ background: 'linear-gradient(135deg, #ffc107 0%, #fd7e14 100%)' }}>
          <div className="stats-number">₹10K</div>
          <div className="stats-label">Pending Approval</div>
        </div>
        <div className="stats-card" style={{ background: 'linear-gradient(135deg, #17a2b8 0%, #6f42c1 100%)' }}>
          <div className="stats-number">8</div>
          <div className="stats-label">Expense Records</div>
        </div>
      </div>
    </div>
  );
};

export default ExpenseTab;