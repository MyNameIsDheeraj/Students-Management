import React, { useState, useEffect } from 'react';
import { X, DollarSign, CreditCard, FileText, Calendar } from 'lucide-react';

const FinanceModal = ({ showModal, modalType, selectedItem, closeModal }) => {
  const [formData, setFormData] = useState({
    studentName: '',
    rollNumber: '',
    class: '',
    totalAmount: '',
    paidAmount: '',
    pendingAmount: '',
    dueDate: '',
    status: 'pending',
    employeeName: '',
    employeeId: '',
    designation: '',
    department: '',
    salary: '',
    paidDate: '',
    category: '',
    description: '',
    amount: '',
    date: '',
    reportTitle: '',
    period: '',
    totalIncome: '',
    totalExpenses: '',
    netProfit: ''
  });

  useEffect(() => {
    if (selectedItem) {
      setFormData(prev => ({
        ...prev,
        ...selectedItem
      }));
    } else {
      setFormData({
        studentName: '',
        rollNumber: '',
        class: '',
        totalAmount: '',
        paidAmount: '',
        pendingAmount: '',
        dueDate: '',
        status: 'pending',
        employeeName: '',
        employeeId: '',
        designation: '',
        department: '',
        salary: '',
        paidDate: '',
        category: '',
        description: '',
        amount: '',
        date: '',
        reportTitle: '',
        period: '',
        totalIncome: '',
        totalExpenses: '',
        netProfit: ''
      });
    }
  }, [selectedItem]);

  if (!showModal) return null;

  const getTitle = () => {
    switch (modalType) {
      case 'createFee':
      case 'editFee':
      case 'viewFee':
        return modalType.includes('create') ? 'Add Fee Record' : modalType.includes('edit') ? 'Edit Fee Record' : 'View Fee Record';
      case 'createSalary':
      case 'editSalary':
      case 'viewSalary':
        return modalType.includes('create') ? 'Add Salary Record' : modalType.includes('edit') ? 'Edit Salary Record' : 'View Salary Record';
      case 'createExpense':
      case 'editExpense':
      case 'viewExpense':
        return modalType.includes('create') ? 'Add Expense' : modalType.includes('edit') ? 'Edit Expense' : 'View Expense';
      case 'createReport':
      case 'editReport':
      case 'viewReport':
        return modalType.includes('create') ? 'Generate Report' : modalType.includes('edit') ? 'Edit Report' : 'View Report';
      default:
        return 'Finance Record';
    }
  };

  const getIcon = () => {
    switch (modalType) {
      case 'createFee':
      case 'editFee':
      case 'viewFee':
        return <DollarSign size={20} />;
      case 'createSalary':
      case 'editSalary':
      case 'viewSalary':
        return <CreditCard size={20} />;
      case 'createExpense':
      case 'editExpense':
      case 'viewExpense':
        return <FileText size={20} />;
      case 'createReport':
      case 'editReport':
      case 'viewReport':
        return <Calendar size={20} />;
      default:
        return null;
    }
  };

  const isViewMode = modalType.includes('view');
  const isEditMode = modalType.includes('edit') || modalType.includes('create');

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, this would send data to an API
    console.log('Form submitted:', formData);
    closeModal();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const renderFeeForm = () => (
    <div className="grid grid-2" style={{ gap: '20px' }}>
      <div className="form-group">
        <label className="form-label">Student Name</label>
        <input
          type="text"
          className="form-control"
          name="studentName"
          value={formData.studentName}
          onChange={handleChange}
          disabled={isViewMode}
          required
        />
      </div>
      <div className="form-group">
        <label className="form-label">Roll Number</label>
        <input
          type="text"
          className="form-control"
          name="rollNumber"
          value={formData.rollNumber}
          onChange={handleChange}
          disabled={isViewMode}
          required
        />
      </div>
      <div className="form-group">
        <label className="form-label">Class</label>
        <input
          type="text"
          className="form-control"
          name="class"
          value={formData.class}
          onChange={handleChange}
          disabled={isViewMode}
          required
        />
      </div>
      <div className="form-group">
        <label className="form-label">Total Amount (₹)</label>
        <input
          type="number"
          className="form-control"
          name="totalAmount"
          value={formData.totalAmount}
          onChange={handleChange}
          disabled={isViewMode}
          required
        />
      </div>
      <div className="form-group">
        <label className="form-label">Paid Amount (₹)</label>
        <input
          type="number"
          className="form-control"
          name="paidAmount"
          value={formData.paidAmount}
          onChange={handleChange}
          disabled={isViewMode}
        />
      </div>
      <div className="form-group">
        <label className="form-label">Pending Amount (₹)</label>
        <input
          type="number"
          className="form-control"
          name="pendingAmount"
          value={formData.pendingAmount}
          onChange={handleChange}
          disabled={isViewMode}
        />
      </div>
      <div className="form-group">
        <label className="form-label">Due Date</label>
        <input
          type="date"
          className="form-control"
          name="dueDate"
          value={formData.dueDate}
          onChange={handleChange}
          disabled={isViewMode}
        />
      </div>
      <div className="form-group">
        <label className="form-label">Status</label>
        <select
          className="form-control"
          name="status"
          value={formData.status}
          onChange={handleChange}
          disabled={isViewMode}
        >
          <option value="pending">Pending</option>
          <option value="paid">Paid</option>
          <option value="overdue">Overdue</option>
        </select>
      </div>
    </div>
  );

  const renderSalaryForm = () => (
    <div className="grid grid-2" style={{ gap: '20px' }}>
      <div className="form-group">
        <label className="form-label">Employee Name</label>
        <input
          type="text"
          className="form-control"
          name="employeeName"
          value={formData.employeeName}
          onChange={handleChange}
          disabled={isViewMode}
          required
        />
      </div>
      <div className="form-group">
        <label className="form-label">Employee ID</label>
        <input
          type="text"
          className="form-control"
          name="employeeId"
          value={formData.employeeId}
          onChange={handleChange}
          disabled={isViewMode}
          required
        />
      </div>
      <div className="form-group">
        <label className="form-label">Designation</label>
        <input
          type="text"
          className="form-control"
          name="designation"
          value={formData.designation}
          onChange={handleChange}
          disabled={isViewMode}
        />
      </div>
      <div className="form-group">
        <label className="form-label">Department</label>
        <input
          type="text"
          className="form-control"
          name="department"
          value={formData.department}
          onChange={handleChange}
          disabled={isViewMode}
        />
      </div>
      <div className="form-group">
        <label className="form-label">Monthly Salary (₹)</label>
        <input
          type="number"
          className="form-control"
          name="salary"
          value={formData.salary}
          onChange={handleChange}
          disabled={isViewMode}
          required
        />
      </div>
      <div className="form-group">
        <label className="form-label">Last Paid Date</label>
        <input
          type="date"
          className="form-control"
          name="paidDate"
          value={formData.paidDate}
          onChange={handleChange}
          disabled={isViewMode}
        />
      </div>
      <div className="form-group">
        <label className="form-label">Status</label>
        <select
          className="form-control"
          name="status"
          value={formData.status}
          onChange={handleChange}
          disabled={isViewMode}
        >
          <option value="pending">Pending</option>
          <option value="paid">Paid</option>
        </select>
      </div>
    </div>
  );

  const renderExpenseForm = () => (
    <div className="grid grid-2" style={{ gap: '20px' }}>
      <div className="form-group">
        <label className="form-label">Category</label>
        <select
          className="form-control"
          name="category"
          value={formData.category}
          onChange={handleChange}
          disabled={isViewMode}
          required
        >
          <option value="">Select Category</option>
          <option value="Infrastructure">Infrastructure</option>
          <option value="Utilities">Utilities</option>
          <option value="Maintenance">Maintenance</option>
          <option value="Salaries">Salaries</option>
          <option value="Supplies">Supplies</option>
          <option value="Others">Others</option>
        </select>
      </div>
      <div className="form-group">
        <label className="form-label">Date</label>
        <input
          type="date"
          className="form-control"
          name="date"
          value={formData.date}
          onChange={handleChange}
          disabled={isViewMode}
        />
      </div>
      <div className="form-group" style={{ gridColumn: 'span 2' }}>
        <label className="form-label">Description</label>
        <textarea
          className="form-control"
          name="description"
          value={formData.description}
          onChange={handleChange}
          disabled={isViewMode}
          rows="3"
          required
        />
      </div>
      <div className="form-group">
        <label className="form-label">Amount (₹)</label>
        <input
          type="number"
          className="form-control"
          name="amount"
          value={formData.amount}
          onChange={handleChange}
          disabled={isViewMode}
          required
        />
      </div>
      <div className="form-group">
        <label className="form-label">Status</label>
        <select
          className="form-control"
          name="status"
          value={formData.status}
          onChange={handleChange}
          disabled={isViewMode}
        >
          <option value="pending">Pending</option>
          <option value="approved">Approved</option>
          <option value="paid">Paid</option>
        </select>
      </div>
    </div>
  );

  const renderReportForm = () => (
    <div className="grid grid-2" style={{ gap: '20px' }}>
      <div className="form-group">
        <label className="form-label">Report Title</label>
        <input
          type="text"
          className="form-control"
          name="reportTitle"
          value={formData.reportTitle}
          onChange={handleChange}
          disabled={isViewMode}
          required
        />
      </div>
      <div className="form-group">
        <label className="form-label">Period</label>
        <input
          type="text"
          className="form-control"
          name="period"
          value={formData.period}
          onChange={handleChange}
          disabled={isViewMode}
        />
      </div>
      <div className="form-group">
        <label className="form-label">Total Income (₹)</label>
        <input
          type="number"
          className="form-control"
          name="totalIncome"
          value={formData.totalIncome}
          onChange={handleChange}
          disabled={isViewMode}
        />
      </div>
      <div className="form-group">
        <label className="form-label">Total Expenses (₹)</label>
        <input
          type="number"
          className="form-control"
          name="totalExpenses"
          value={formData.totalExpenses}
          onChange={handleChange}
          disabled={isViewMode}
        />
      </div>
      <div className="form-group">
        <label className="form-label">Net Profit (₹)</label>
        <input
          type="number"
          className="form-control"
          name="netProfit"
          value={formData.netProfit}
          onChange={handleChange}
          disabled={isViewMode}
        />
      </div>
    </div>
  );

  const renderFormContent = () => {
    if (modalType.includes('Fee')) {
      return renderFeeForm();
    } else if (modalType.includes('Salary')) {
      return renderSalaryForm();
    } else if (modalType.includes('Expense')) {
      return renderExpenseForm();
    } else if (modalType.includes('Report')) {
      return renderReportForm();
    }
    return null;
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content" style={{ maxWidth: '600px' }}>
        <div className="modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            {getIcon()}
            <h3>{getTitle()}</h3>
          </div>
          <button className="btn btn-icon" onClick={closeModal}>
            <X size={20} />
          </button>
        </div>
        
        <div className="modal-body">
          <form onSubmit={handleSubmit}>
            {renderFormContent()}
            
            {isEditMode && (
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={closeModal}>
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  {modalType.includes('create') ? 'Create' : 'Update'}
                </button>
              </div>
            )}
            
            {isViewMode && (
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={closeModal}>
                  Close
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default FinanceModal;