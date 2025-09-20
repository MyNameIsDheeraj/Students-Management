import React, { useState } from 'react'
import { Shield, Users, Settings, Database, BarChart, Home } from 'lucide-react'
import AdminDashboardTab from './AdminDashboardTab'
import UserManagementTab from './users/UserManagementTab'
import SystemConfigTab from './system/SystemConfigTab'
import AuditLogsTab from './security/AuditLogsTab'
import ReportsTab from './reports/ReportsTab'
import AdminModal from './AdminModal'

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState('dashboard')
  const [showModal, setShowModal] = useState(false)
  const [modalType, setModalType] = useState('')
  const [selectedItem, setSelectedItem] = useState(null)

  const users = [
    {
      id: 1,
      name: 'John Admin',
      employeeId: 'ADM2025-001',
      designation: 'System Administrator',
      subject: 'Information Technology',
      classes: ['All'],
      phone: '+91 9876543210',
      email: 'admin@school.edu',
      address: '123 Admin Street, City, State - 123456',
      qualifications: ['M.Sc Computer Science', 'Certified Information Systems Security Professional'],
      experience: '8 years',
      dateOfJoining: '2020-01-15',
      status: 'Active'
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      employeeId: 'TCH2025-001',
      designation: 'Senior Mathematics Teacher',
      subject: 'Mathematics',
      classes: ['10A', '10B', '11A'],
      phone: '+91 9876543211',
      email: 'sarah.johnson@school.edu',
      address: '456 Teacher Lane, City, State - 123457',
      qualifications: ['M.Sc Mathematics', 'B.Ed', 'Ph.D Mathematics'],
      experience: '10 years',
      dateOfJoining: '2018-08-20',
      status: 'Active'
    },
    {
      id: 3,
      name: 'David Wilson',
      employeeId: 'TCH2025-002',
      designation: 'Physics Teacher',
      subject: 'Physics',
      classes: ['9A', '9B', '11B'],
      phone: '+91 9876543212',
      email: 'david.wilson@school.edu',
      address: '789 Science Avenue, City, State - 123458',
      qualifications: ['M.Sc Physics', 'B.Ed'],
      experience: '6 years',
      dateOfJoining: '2020-03-10',
      status: 'Active'
    },
    {
      id: 4,
      name: 'Emily Brown',
      employeeId: 'TCH2025-003',
      designation: 'English Teacher',
      subject: 'English',
      classes: ['8A', '8B', '9A'],
      phone: '+91 9876543213',
      email: 'emily.brown@school.edu',
      address: '101 Literature Road, City, State - 123459',
      qualifications: ['M.A English Literature', 'B.Ed'],
      experience: '4 years',
      dateOfJoining: '2022-06-15',
      status: 'Active'
    }
  ]

  const systemSettings = {
    security: {
      twoFactorAuth: true,
      sessionTimeout: 30,
      passwordComplexity: 'high',
      loginAttempts: 3
    },
    database: {
      autoBackup: true,
      backupFrequency: 'daily',
      retentionPeriod: 30,
      compression: true
    },
    email: {
      smtpServer: 'smtp.school.edu',
      port: 587,
      username: 'admin@school.edu',
      password: '••••••••',
      fromEmail: 'noreply@school.edu'
    },
    sms: {
      provider: 'twilio',
      apiKey: '••••••••••••••••',
      senderId: 'SCHOOL',
      templateId: 'SMS_TEMPLATE_001',
      countryCode: '+91'
    },
    notifications: {
      email: {
        attendance: true,
        grades: true,
        fees: true,
        exams: true
      },
      sms: {
        emergency: true,
        holidays: true,
        events: false,
        assignments: false
      }
    }
  }

  const auditLogs = [
    {
      id: 1,
      timestamp: '2025-01-20',
      time: '10:30 AM',
      user: 'John Admin',
      role: 'Administrator',
      action: 'login',
      module: 'Authentication',
      description: 'Successful login to admin panel',
      ipAddress: '192.168.1.100',
      userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
      sessionId: 'SESS_1234567890ABCDEF',
      status: 'Success'
    },
    {
      id: 2,
      timestamp: '2025-01-20',
      time: '09:15 AM',
      user: 'Sarah Johnson',
      role: 'Teacher',
      action: 'create',
      module: 'Assignments',
      description: 'Created new mathematics assignment for class 10A',
      ipAddress: '192.168.1.101',
      userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36',
      sessionId: 'SESS_0987654321FEDCBA',
      status: 'Success'
    },
    {
      id: 3,
      timestamp: '2025-01-19',
      time: '02:45 PM',
      user: 'David Wilson',
      role: 'Teacher',
      action: 'update',
      module: 'Grades',
      description: 'Updated physics grades for class 11B',
      ipAddress: '192.168.1.102',
      userAgent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36',
      sessionId: 'SESS_1122334455ABCDE',
      status: 'Success'
    },
    {
      id: 4,
      timestamp: '2025-01-19',
      time: '07:30 PM',
      user: 'Emily Brown',
      role: 'Teacher',
      action: 'login',
      module: 'Authentication',
      description: 'Successful login to teacher portal',
      ipAddress: '192.168.1.103',
      userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X) AppleWebKit/605.1.15',
      sessionId: 'SESS_5544332211EDCBA',
      status: 'Success'
    },
    {
      id: 5,
      timestamp: '2025-01-18',
      time: '11:20 AM',
      user: 'John Admin',
      role: 'Administrator',
      action: 'delete',
      module: 'Users',
      description: 'Deleted user account for former employee',
      ipAddress: '192.168.1.100',
      userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
      sessionId: 'SESS_1234567890ABCDEF',
      status: 'Success'
    }
  ]

  const systemStats = {
    totalUsers: 150,
    activeUsers: 125,
    modules: 12,
    activities: 2450,
    performance: [
      { metric: 'CPU Usage', value: 45 },
      { metric: 'Memory Usage', value: 68 },
      { metric: 'Disk Usage', value: 32 },
      { metric: 'Network I/O', value: 75 },
      { metric: 'Response Time', value: 120 }
    ]
  }

  const userActivity = [
    { month: 'Sep', activeUsers: 110, newUsers: 15 },
    { month: 'Oct', activeUsers: 115, newUsers: 12 },
    { month: 'Nov', activeUsers: 120, newUsers: 18 },
    { month: 'Dec', activeUsers: 125, newUsers: 10 },
    { month: 'Jan', activeUsers: 130, newUsers: 20 }
  ]

  const moduleUsage = [
    { name: 'User Management', value: 25, color: '#007bff' },
    { name: 'Attendance', value: 20, color: '#28a745' },
    { name: 'Grades', value: 18, color: '#ffc107' },
    { name: 'Assignments', value: 15, color: '#dc3545' },
    { name: 'Communication', value: 12, color: '#17a2b8' },
    { name: 'Reports', value: 10, color: '#6f42c1' }
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

  const getStatusBadge = (status) => {
    const badges = {
      'Active': 'badge-success',
      'Inactive': 'badge-warning',
      'Suspended': 'badge-danger'
    }
    return badges[status] || 'badge-secondary'
  }

  return (
    <div className="container">
      <div style={{ marginBottom: '30px' }}>
        <h1>System Administration</h1>
        <p style={{ color: '#666' }}>Manage users, system configuration, audit logs, and reports</p>
      </div>

      <div className="nav-tabs">
        <button 
          className={`nav-tab ${activeTab === 'dashboard' ? 'active' : ''}`}
          onClick={() => setActiveTab('dashboard')}
        >
          <Home size={16} style={{ marginRight: '5px' }} />
          Dashboard
        </button>
        <button 
          className={`nav-tab ${activeTab === 'users' ? 'active' : ''}`}
          onClick={() => setActiveTab('users')}
        >
          <Users size={16} style={{ marginRight: '5px' }} />
          User Management
        </button>
        <button 
          className={`nav-tab ${activeTab === 'config' ? 'active' : ''}`}
          onClick={() => setActiveTab('config')}
        >
          <Settings size={16} style={{ marginRight: '5px' }} />
          System Configuration
        </button>
        <button 
          className={`nav-tab ${activeTab === 'logs' ? 'active' : ''}`}
          onClick={() => setActiveTab('logs')}
        >
          <Shield size={16} style={{ marginRight: '5px' }} />
          Audit Logs
        </button>
        <button 
          className={`nav-tab ${activeTab === 'reports' ? 'active' : ''}`}
          onClick={() => setActiveTab('reports')}
        >
          <BarChart size={16} style={{ marginRight: '5px' }} />
          Reports & Analytics
        </button>
      </div>

      {activeTab === 'dashboard' && (
        <AdminDashboardTab 
          users={users}
          systemStats={systemStats}
          userActivity={userActivity}
          moduleUsage={moduleUsage}
          auditLogs={auditLogs}
        />
      )}
      {activeTab === 'users' && (
        <UserManagementTab 
          users={users}
          openModal={openModal}
          getStatusBadge={getStatusBadge}
        />
      )}
      {activeTab === 'config' && (
        <SystemConfigTab 
          systemSettings={systemSettings}
          openModal={openModal}
        />
      )}
      {activeTab === 'logs' && (
        <AuditLogsTab 
          auditLogs={auditLogs}
          openModal={openModal}
        />
      )}
      {activeTab === 'reports' && (
        <ReportsTab 
          systemStats={systemStats}
          userActivity={userActivity}
          moduleUsage={moduleUsage}
          openModal={openModal}
        />
      )}

      <AdminModal 
        showModal={showModal}
        modalType={modalType}
        selectedItem={selectedItem}
        users={users}
        systemSettings={systemSettings}
        closeModal={closeModal}
        getStatusBadge={getStatusBadge}
      />
    </div>
  )
}

export default AdminPanel
