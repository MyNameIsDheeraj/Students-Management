import React from 'react';
import { Book, User } from 'lucide-react';

const BorrowReturnTab = ({ borrowedBooks, openModal, getStatusBadge, calculateDaysOverdue }) => {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h3>Borrow/Return Management</h3>
        <div style={{ display: 'flex', gap: '10px' }}>
          <select className="form-control" style={{ width: '150px' }}>
            <option value="">All Status</option>
            <option value="Borrowed">Borrowed</option>
            <option value="Overdue">Overdue</option>
            <option value="Returned">Returned</option>
          </select>
          <button className="btn btn-primary" onClick={() => openModal('quickReturn')}>
            <Book size={16} />
            Quick Return
          </button>
        </div>
      </div>

      <div className="card">
        <table className="table">
          <thead>
            <tr>
              <th>Student</th>
              <th>Book</th>
              <th>Issue Date</th>
              <th>Due Date</th>
              <th>Status</th>
              <th>Fine</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {borrowedBooks.map((record) => (
              <tr key={record.id}>
                <td>
                  <div>
                    <strong>{record.studentName}</strong>
                    <br />
                    <small style={{ color: '#666' }}>{record.rollNumber}</small>
                  </div>
                </td>
                <td>{record.bookTitle}</td>
                <td>{record.issueDate}</td>
                <td>
                  {record.dueDate}
                  {record.status === 'Overdue' && (
                    <div style={{ fontSize: '12px', color: '#dc3545' }}>
                      {calculateDaysOverdue(record.dueDate)} days overdue
                    </div>
                  )}
                </td>
                <td>
                  <span className={`badge ${getStatusBadge(record.status)}`}>
                    {record.status}
                  </span>
                </td>
                <td>
                  {record.fine > 0 ? (
                    <span style={{ color: '#dc3545', fontWeight: 'bold' }}>
                      ₹{record.fine}
                    </span>
                  ) : (
                    '₹0'
                  )}
                </td>
                <td>
                  {record.status === 'Borrowed' || record.status === 'Overdue' ? (
                    <button 
                      className="btn btn-success"
                      onClick={() => openModal('returnBook', record)}
                    >
                      Return
                    </button>
                  ) : (
                    <button className="btn btn-secondary">
                      <User size={14} />
                      View
                    </button>
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

export default BorrowReturnTab;