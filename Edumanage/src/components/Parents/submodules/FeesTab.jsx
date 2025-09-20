import React from 'react';
import { DollarSign, Clock, Download } from 'lucide-react';

const FeesTab = ({ feeData }) => {
  return (
    <div>
      <div className="grid grid-2" style={{ marginBottom: '30px' }}>
        <div className="card">
          <h3 style={{ marginBottom: '20px' }}>Fee Summary</h3>
          <div style={{ marginBottom: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
              <span>Total Annual Fees:</span>
              <strong>₹{feeData.totalFees.toLocaleString()}</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
              <span>Amount Paid:</span>
              <span style={{ color: '#28a745' }}>₹{feeData.paidFees.toLocaleString()}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
              <span>Pending Amount:</span>
              <span style={{ color: '#dc3545' }}>₹{feeData.pendingFees.toLocaleString()}</span>
            </div>
            
            <div className="progress-bar" style={{ marginBottom: '15px' }}>
              <div 
                className="progress-fill" 
                style={{ width: `${(feeData.paidFees / feeData.totalFees) * 100}%` }}
              ></div>
            </div>
            
            <p style={{ fontSize: '12px', color: '#666', textAlign: 'center' }}>
              {((feeData.paidFees / feeData.totalFees) * 100).toFixed(1)}% paid
            </p>
          </div>

          <div className="alert alert-warning" style={{ marginBottom: '15px' }}>
            <Clock size={16} style={{ marginRight: '8px' }} />
            Next payment due: {feeData.nextDueDate}
          </div>

          <button className="btn btn-primary" style={{ width: '100%' }}>
            <DollarSign size={16} />
            Pay Now - ₹{feeData.pendingFees.toLocaleString()}
          </button>
        </div>

        <div className="card">
          <h3 style={{ marginBottom: '20px' }}>Payment History</h3>
          <div style={{ maxHeight: '300px', overflowY: 'auto' }}>
            <div style={{ padding: '12px 0', borderBottom: '1px solid #eee' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <strong>First Installment</strong>
                  <p style={{ fontSize: '12px', color: '#666', margin: '2px 0' }}>
                    Transaction ID: TXN123456789
                  </p>
                  <p style={{ fontSize: '12px', color: '#666', margin: '2px 0' }}>
                    Paid on: Dec 15, 2024
                  </p>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <strong style={{ color: '#28a745' }}>₹25,000</strong>
                  <br />
                  <button className="btn btn-secondary" style={{ fontSize: '10px', padding: '4px 8px' }}>
                    <Download size={10} />
                    Receipt
                  </button>
                </div>
              </div>
            </div>
            
            <div style={{ padding: '12px 0', borderBottom: '1px solid #eee' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <strong>Second Installment</strong>
                  <p style={{ fontSize: '12px', color: '#666', margin: '2px 0' }}>
                    Transaction ID: TXN123456788
                  </p>
                  <p style={{ fontSize: '12px', color: '#666', margin: '2px 0' }}>
                    Paid on: Nov 15, 2024
                  </p>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <strong style={{ color: '#28a745' }}>₹20,000</strong>
                  <br />
                  <button className="btn btn-secondary" style={{ fontSize: '10px', padding: '4px 8px' }}>
                    <Download size={10} />
                    Receipt
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeesTab;