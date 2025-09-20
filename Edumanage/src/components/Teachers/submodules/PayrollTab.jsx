import React from 'react';
import { DollarSign } from 'lucide-react';

const PayrollTab = ({ teachers }) => {
  return (
    <div>
      <h3 style={{ marginBottom: '20px' }}>Payroll Management</h3>
      
      <div className="card">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <h4>Monthly Salary Overview</h4>
          <button className="btn btn-primary">
            <DollarSign size={16} />
            Generate Payslips
          </button>
        </div>

        <table className="table">
          <thead>
            <tr>
              <th>Teacher</th>
              <th>Basic Salary</th>
              <th>Allowances</th>
              <th>Deductions</th>
              <th>Net Salary</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {teachers.map((teacher) => {
              const allowances = Math.round(teacher.salary * 0.2)
              const deductions = Math.round(teacher.salary * 0.1)
              const netSalary = teacher.salary + allowances - deductions
              
              return (
                <tr key={teacher.id}>
                  <td>{teacher.name}</td>
                  <td>₹{teacher.salary.toLocaleString()}</td>
                  <td>₹{allowances.toLocaleString()}</td>
                  <td>₹{deductions.toLocaleString()}</td>
                  <td><strong>₹{netSalary.toLocaleString()}</strong></td>
                  <td>
                    <span className="badge badge-success">Paid</span>
                  </td>
                  <td>
                    <button className="btn btn-secondary" style={{ marginRight: '5px' }}>
                      View Payslip
                    </button>
                    <button className="btn btn-primary">
                      Download
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PayrollTab;