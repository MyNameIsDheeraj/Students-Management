import React, { useState } from 'react'
import { Users, Upload, Calendar, Clock } from 'lucide-react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts'
import MarkAttendance from './submodules/MarkAttendance'
import BulkUpload from './submodules/BulkUpload'
import Reports from './submodules/Reports'
import LeaveManagement from './submodules/LeaveManagement'

const AttendanceManagement = () => {
  const [activeTab, setActiveTab] = useState('mark')
  const [selectedClass, setSelectedClass] = useState('10A')
  const [selectedDate, setSelectedDate] = useState('2025-01-20')

  const classes = ['8A', '8B', '9A', '9B', '10A', '10B', '11A', '11B']
  
  const students = [
    { id: 1, name: 'John Doe', rollNumber: 'SCH2025-001', status: 'present' },
    { id: 2, name: 'Sarah Wilson', rollNumber: 'SCH2025-002', status: 'present' },
    { id: 3, name: 'Michael Brown', rollNumber: 'SCH2025-003', status: 'absent' },
    { id: 4, name: 'Emma Davis', rollNumber: 'SCH2025-004', status: 'present' },
    { id: 5, name: 'James Johnson', rollNumber: 'SCH2025-005', status: 'late' },
    { id: 6, name: 'Lisa Anderson', rollNumber: 'SCH2025-006', status: 'present' },
    { id: 7, name: 'David Miller', rollNumber: 'SCH2025-007', status: 'present' },
    { id: 8, name: 'Anna Taylor', rollNumber: 'SCH2025-008', status: 'excused' }
  ]

  const attendanceData = [
    { month: 'Sep', present: 92, absent: 8 },
    { month: 'Oct', present: 94, absent: 6 },
    { month: 'Nov', present: 89, absent: 11 },
    { month: 'Dec', present: 96, absent: 4 },
    { month: 'Jan', present: 93, absent: 7 }
  ]

  const classAttendance = [
    { class: '8A', present: 28, absent: 2, percentage: 93.3 },
    { class: '8B', present: 30, absent: 0, percentage: 100 },
    { class: '9A', present: 25, absent: 5, percentage: 83.3 },
    { class: '9B', present: 27, absent: 3, percentage: 90 },
    { class: '10A', present: 32, absent: 3, percentage: 91.4 },
    { class: '10B', present: 29, absent: 1, percentage: 96.7 }
  ]

  const leaveRequests = [
    { id: 1, studentName: 'John Doe', class: '10A', type: 'Sick Leave', startDate: '2025-01-22', endDate: '2025-01-23', reason: 'Fever', status: 'Pending' },
    { id: 2, studentName: 'Sarah Wilson', class: '10A', type: 'Family Function', startDate: '2025-01-25', endDate: '2025-01-25', reason: 'Wedding ceremony', status: 'Approved' },
    { id: 3, studentName: 'Michael Brown', class: '9A', type: 'Medical', startDate: '2025-01-20', endDate: '2025-01-21', reason: 'Doctor appointment', status: 'Pending' }
  ]

  const handleStatusChange = (studentId, newStatus) => {
    console.log(`Student ${studentId} marked as ${newStatus}`)
  }

  const handleMarkAll = (status) => {
    console.log(`All students marked as ${status}`)
  }

  const handleLeaveAction = (requestId, action) => {
    console.log(`${action} leave request ${requestId}`)
  }

  return (
    <div className="container">
      <div style={{ marginBottom: '30px' }}>
        <h1>Attendance Management</h1>
        <p style={{ color: '#666' }}>Track and manage student attendance efficiently</p>
      </div>

      <div className="nav-tabs">
        <button 
          className={`nav-tab ${activeTab === 'mark' ? 'active' : ''}`}
          onClick={() => setActiveTab('mark')}
        >
          <Users size={16} style={{ marginRight: '5px' }} />
          Mark Attendance
        </button>
        <button 
          className={`nav-tab ${activeTab === 'bulk' ? 'active' : ''}`}
          onClick={() => setActiveTab('bulk')}
        >
          <Upload size={16} style={{ marginRight: '5px' }} />
          Bulk Upload
        </button>
        <button 
          className={`nav-tab ${activeTab === 'reports' ? 'active' : ''}`}
          onClick={() => setActiveTab('reports')}
        >
          <Calendar size={16} style={{ marginRight: '5px' }} />
          Reports
        </button>
        <button 
          className={`nav-tab ${activeTab === 'leave' ? 'active' : ''}`}
          onClick={() => setActiveTab('leave')}
        >
          <Clock size={16} style={{ marginRight: '5px' }} />
          Leave Management
        </button>
      </div>

      {activeTab === 'mark' && (
        <MarkAttendance 
          classes={classes}
          selectedClass={selectedClass}
          setSelectedClass={setSelectedClass}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          students={students}
          handleStatusChange={handleStatusChange}
          handleMarkAll={handleMarkAll}
        />
      )}
      {activeTab === 'bulk' && (
        <BulkUpload 
          classes={classes}
        />
      )}
      {activeTab === 'reports' && (
        <Reports 
          classes={classes}
          attendanceData={attendanceData}
          classAttendance={classAttendance}
        />
      )}
      {activeTab === 'leave' && (
        <LeaveManagement 
          leaveRequests={leaveRequests}
          handleLeaveAction={handleLeaveAction}
        />
      )}
    </div>
  )
}

export default AttendanceManagement
