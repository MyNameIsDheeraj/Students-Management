import React, { useState } from 'react'
import { DollarSign, FileText, Calendar, User, CreditCard } from 'lucide-react'
import FeeTab from './submodules/FeeTab'
import SalaryTab from './submodules/SalaryTab'
import ExpenseTab from './submodules/ExpenseTab'
import FinancialReportTab from './submodules/FinancialReportTab'
import FinanceModal from './submodules/FinanceModal'

const FeeManagement = () => {
  const [activeTab, setActiveTab] = useState('fees')
  const [showModal, setShowModal] = useState(false)
  const [modalType, setModalType] = useState('')
  const [selectedItem, setSelectedItem] = useState(null)

  // Mock data for fees
  const fees = [
    {
      id: 1,
      studentName: 'John Smith',
      rollNumber: 'STU001',
      class: '10A',
      totalAmount: 15000,
      paidAmount: 12000,
      pendingAmount: 3000,
      dueDate: '2025-02-15',
      status: 'pending'
    },
    {
      id: 2,
      studentName: 'Emma Johnson',
      rollNumber: 'STU002',
      class: '9B',
      totalAmount: 12000,
      paidAmount: 12000,
      pendingAmount: 0,
      dueDate: '2025-01-30',
      status: 'paid'
    },
    {
      id: 3,
      studentName: 'Michael Brown',
      rollNumber: 'STU003',
      class: '11A',
      totalAmount: 18000,
      paidAmount: 5000,
      pendingAmount: 13000,
      dueDate: '2025-01-25',
      status: 'overdue'
    }
  ]

  // Mock data for salaries
  const salaries = [
    {
      id: 1,
      employeeName: 'Dr. Sarah Johnson',
      employeeId: 'EMP001',
      designation: 'Mathematics Teacher',
      department: 'Academics',
      salary: 45000,
      paidDate: '2025-01-25',
      status: 'paid'
    },
    {
      id: 2,
      employeeName: 'Mr. David Wilson',
      employeeId: 'EMP002',
      designation: 'Physics Teacher',
      department: 'Academics',
      salary: 42000,
      paidDate: '2025-01-25',
      status: 'paid'
    },
    {
      id: 3,
      employeeName: 'Ms. Emily Brown',
      employeeId: 'EMP003',
      designation: 'English Teacher',
      department: 'Academics',
      salary: 40000,
      paidDate: '2025-01-25',
      status: 'pending'
    }
  ]

  // Mock data for expenses
  const expenses = [
    {
      id: 1,
      category: 'Infrastructure',
      description: 'Library furniture purchase',
      amount: 25000,
      date: '2025-01-20',
      status: 'approved'
    },
    {
      id: 2,
      category: 'Utilities',
      description: 'Electricity bill payment',
      amount: 8500,
      date: '2025-01-15',
      status: 'paid'
    },
    {
      id: 3,
      category: 'Maintenance',
      description: 'Lab equipment repair',
      amount: 12000,
      date: '2025-01-10',
      status: 'pending'
    }
  ]

  // Mock data for financial reports
  const financialReports = [
    {
      id: 1,
      title: 'Monthly Fee Collection Report',
      period: 'January 2025',
      totalIncome: 2450000,
      totalExpenses: 850000,
      netProfit: 1600000,
      status: 'generated'
    },
    {
      id: 2,
      title: 'Quarterly Financial Summary',
      period: 'Q4 2024',
      totalIncome: 7800000,
      totalExpenses: 2200000,
      netProfit: 5600000,
      status: 'generated'
    }
  ]

  const openModal = (type, item = null) => {
    setModalType(type)
    setSelectedItem(item)
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
    setSelectedItem(null)
    setModalType('')
  }

  return (
    <div className="container">
      <div style={{ marginBottom: '30px' }}>
        <h1>Finance Management</h1>
        <p style={{ color: '#666' }}>Manage fees, salaries, expenses, and financial reports</p>
      </div>

      <div className="nav-tabs">
        <button 
          className={`nav-tab ${activeTab === 'fees' ? 'active' : ''}`}
          onClick={() => setActiveTab('fees')}
        >
          <DollarSign size={16} style={{ marginRight: '5px' }} />
          Fee Management
        </button>
        <button 
          className={`nav-tab ${activeTab === 'salaries' ? 'active' : ''}`}
          onClick={() => setActiveTab('salaries')}
        >
          <CreditCard size={16} style={{ marginRight: '5px' }} />
          Salary Management
        </button>
        <button 
          className={`nav-tab ${activeTab === 'expenses' ? 'active' : ''}`}
          onClick={() => setActiveTab('expenses')}
        >
          <FileText size={16} style={{ marginRight: '5px' }} />
          Expense Tracking
        </button>
        <button 
          className={`nav-tab ${activeTab === 'reports' ? 'active' : ''}`}
          onClick={() => setActiveTab('reports')}
        >
          <Calendar size={16} style={{ marginRight: '5px' }} />
          Financial Reports
        </button>
      </div>

      {activeTab === 'fees' && (
        <FeeTab 
          fees={fees}
          openModal={openModal}
        />
      )}
      {activeTab === 'salaries' && (
        <SalaryTab 
          salaries={salaries}
          openModal={openModal}
        />
      )}
      {activeTab === 'expenses' && (
        <ExpenseTab 
          expenses={expenses}
          openModal={openModal}
        />
      )}
      {activeTab === 'reports' && (
        <FinancialReportTab 
          reports={financialReports}
          openModal={openModal}
        />
      )}

      <FinanceModal 
        showModal={showModal}
        modalType={modalType}
        selectedItem={selectedItem}
        closeModal={closeModal}
      />
    </div>
  )
}

export default FeeManagement