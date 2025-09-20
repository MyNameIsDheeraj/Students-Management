import React from 'react';
import { Download } from 'lucide-react';

const ReportsTab = ({ books, borrowedBooks }) => {
  const getStatusBadge = (status) => {
    const badges = {
      'Available': 'badge-success',
      'Out of Stock': 'badge-danger',
      'Borrowed': 'badge-info',
      'Overdue': 'badge-warning',
      'Returned': 'badge-success',
      'Active': 'badge-success'
    }
    return badges[status] || 'badge-secondary'
  }

  return (
    <div>
      <h3 style={{ marginBottom: '20px' }}>Library Reports</h3>
      
      <div className="grid grid-2" style={{ marginBottom: '30px' }}>
        <div className="card">
          <h4>Quick Statistics</h4>
          <div style={{ marginTop: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
              <span>Total Books:</span>
              <strong>{books.reduce((sum, book) => sum + book.copies, 0)}</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
              <span>Available Books:</span>
              <strong style={{ color: '#28a745' }}>{books.reduce((sum, book) => sum + book.available, 0)}</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
              <span>Borrowed Books:</span>
              <strong style={{ color: '#007bff' }}>{borrowedBooks.filter(b => b.status === 'Borrowed').length}</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
              <span>Overdue Books:</span>
              <strong style={{ color: '#dc3545' }}>{borrowedBooks.filter(b => b.status === 'Overdue').length}</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
              <span>Total Fines:</span>
              <strong style={{ color: '#ffc107' }}>₹{borrowedBooks.reduce((sum, b) => sum + b.fine, 0)}</strong>
            </div>
          </div>
        </div>

        <div className="card">
          <h4>Popular Categories</h4>
          <div style={{ marginTop: '20px' }}>
            <div style={{ marginBottom: '15px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
                <span>Science</span>
                <span>45%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: '45%' }}></div>
              </div>
            </div>
            <div style={{ marginBottom: '15px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
                <span>Mathematics</span>
                <span>30%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: '30%' }}></div>
              </div>
            </div>
            <div style={{ marginBottom: '15px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
                <span>History</span>
                <span>15%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: '15%' }}></div>
              </div>
            </div>
            <div style={{ marginBottom: '15px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
                <span>Literature</span>
                <span>10%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: '10%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <h4>Generate Reports</h4>
          <div style={{ display: 'flex', gap: '10px' }}>
            <select className="form-control" style={{ width: '150px' }}>
              <option value="">Report Type</option>
              <option value="inventory">Inventory Report</option>
              <option value="borrowing">Borrowing Report</option>
              <option value="overdue">Overdue Report</option>
              <option value="fines">Fines Report</option>
            </select>
            <input type="date" className="form-control" style={{ width: '150px' }} />
            <button className="btn btn-primary">
              <Download size={16} />
              Generate
            </button>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
          <button className="btn btn-secondary">
            <Download size={16} />
            Book Inventory (PDF)
          </button>
          <button className="btn btn-secondary">
            <Download size={16} />
            Borrowing History (Excel)
          </button>
          <button className="btn btn-secondary">
            <Download size={16} />
            Overdue Books (PDF)
          </button>
          <button className="btn btn-secondary">
            <Download size={16} />
            Fine Collection (Excel)
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReportsTab;