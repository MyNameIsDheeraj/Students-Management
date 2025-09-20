import React from 'react';
import { Calendar, Plus, Eye, Download, BarChart3 } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const FinancialReportTab = ({ reports, openModal }) => {
  // Mock data for financial charts
  const monthlyData = [
    { month: 'Sep', income: 2400000, expenses: 800000 },
    { month: 'Oct', income: 2450000, expenses: 850000 },
    { month: 'Nov', income: 2300000, expenses: 900000 },
    { month: 'Dec', income: 2500000, expenses: 750000 },
    { month: 'Jan', income: 2450000, expenses: 850000 }
  ];

  const expenseCategories = [
    { name: 'Infrastructure', value: 35, color: '#007bff' },
    { name: 'Utilities', value: 25, color: '#28a745' },
    { name: 'Maintenance', value: 20, color: '#ffc107' },
    { name: 'Salaries', value: 15, color: '#dc3545' },
    { name: 'Others', value: 5, color: '#6f42c1' }
  ];

  const getStatusBadge = (status) => {
    switch (status) {
      case 'generated':
        return <span className="badge badge-success">Generated</span>;
      case 'draft':
        return <span className="badge badge-warning">Draft</span>;
      default:
        return <span className="badge">{status}</span>;
    }
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h3>Financial Reports</h3>
        <button className="btn btn-primary" onClick={() => openModal('createReport')}>
          <Plus size={16} />
          Generate Report
        </button>
      </div>

      <div className="grid grid-2" style={{ marginBottom: '30px' }}>
        <div className="card">
          <h4>Monthly Income vs Expenses</h4>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="income" fill="#28a745" name="Income" />
              <Bar dataKey="expenses" fill="#dc3545" name="Expenses" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="card">
          <h4>Expense Distribution</h4>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={expenseCategories}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={120}
                dataKey="value"
              >
                {expenseCategories.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div style={{ textAlign: 'center', marginTop: '10px' }}>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', flexWrap: 'wrap' }}>
              {expenseCategories.map((item, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <div style={{ 
                    width: '12px', 
                    height: '12px', 
                    backgroundColor: item.color, 
                    borderRadius: '50%' 
                  }}></div>
                  <span style={{ fontSize: '12px' }}>{item.name}: {item.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <h4>Generated Reports</h4>
        <table className="table">
          <thead>
            <tr>
              <th>Report Title</th>
              <th>Period</th>
              <th>Total Income</th>
              <th>Total Expenses</th>
              <th>Net Profit</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {reports.map((report) => (
              <tr key={report.id}>
                <td><strong>{report.title}</strong></td>
                <td>{report.period}</td>
                <td>₹{report.totalIncome.toLocaleString()}</td>
                <td>₹{report.totalExpenses.toLocaleString()}</td>
                <td>₹{report.netProfit.toLocaleString()}</td>
                <td>{getStatusBadge(report.status)}</td>
                <td>
                  <div style={{ display: 'flex', gap: '5px' }}>
                    <button 
                      className="btn btn-secondary"
                      onClick={() => openModal('viewReport', report)}
                    >
                      <Eye size={14} />
                    </button>
                    <button className="btn btn-primary">
                      <Download size={14} />
                    </button>
                    <button className="btn btn-success">
                      <BarChart3 size={14} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FinancialReportTab;