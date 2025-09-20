import React, { useState } from 'react'
import { User, Calendar, BookOpen, DollarSign, MessageSquare, TrendingUp } from 'lucide-react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts'
import DashboardTab from './submodules/DashboardTab'
import AttendanceTab from './submodules/AttendanceTab'
import GradesTab from './submodules/GradesTab'
import AssignmentsTab from './submodules/AssignmentsTab'
import FeesTab from './submodules/FeesTab'
import MessagesTab from './submodules/MessagesTab'

const ParentPortal = () => {
  const [activeTab, setActiveTab] = useState('dashboard')
  const [selectedChild, setSelectedChild] = useState(0)

  const children = [
    {
      id: 1,
      name: 'John Doe',
      rollNumber: 'SCH2025-001',
      className: '10A',
      gpa: 8.7,
      attendance: 96,
      pendingAssignments: 3,
      nextExam: 'Mathematics - Feb 5, 2025'
    },
    {
      id: 2,
      name: 'Jane Doe',
      rollNumber: 'SCH2025-045',
      className: '8B',
      gpa: 9.1,
      attendance: 98,
      pendingAssignments: 1,
      nextExam: 'Science - Feb 3, 2025'
    }
  ]

  const currentChild = children[selectedChild]

  const performanceData = [
    { month: 'Sep', gpa: 8.2 },
    { month: 'Oct', gpa: 8.4 },
    { month: 'Nov', gpa: 8.6 },
    { month: 'Dec', gpa: 8.5 },
    { month: 'Jan', gpa: 8.7 }
  ]

  const attendanceData = [
    { month: 'Sep', present: 22, absent: 1 },
    { month: 'Oct', present: 21, absent: 0 },
    { month: 'Nov', present: 20, absent: 2 },
    { month: 'Dec', present: 18, absent: 0 },
    { month: 'Jan', present: 20, absent: 1 }
  ]

  const assignments = [
    { id: 1, title: 'Algebra Problem Set', subject: 'Mathematics', dueDate: '2025-01-25', status: 'pending' },
    { id: 2, title: 'Physics Lab Report', subject: 'Physics', dueDate: '2025-01-22', status: 'submitted' },
    { id: 3, title: 'Essay Writing', subject: 'English', dueDate: '2025-01-20', status: 'graded', marks: 88 }
  ]

  const examResults = [
    { exam: 'Mid-term 2024', math: 92, physics: 88, chemistry: 85, english: 90, computer: 95, total: 450, percentage: 90 },
    { exam: 'Unit Test 3', math: 88, physics: 85, chemistry: 82, english: 87, computer: 92, total: 434, percentage: 86.8 }
  ]

  const feeData = {
    totalFees: 50000,
    paidFees: 45000,
    pendingFees: 5000,
    nextDueDate: '2025-01-30'
  }

  const messages = [
    { id: 1, from: 'Ms. Sarah Johnson (Math Teacher)', subject: 'Assignment Feedback', message: 'John has shown excellent improvement in algebra...', time: '2 hours ago', unread: true },
    { id: 2, from: 'Mr. David Wilson (Physics Teacher)', subject: 'Lab Performance', message: 'Great work on the recent physics experiment...', time: '1 day ago', unread: false },
    { id: 3, from: 'School Administration', subject: 'Parent-Teacher Meeting', message: 'Reminder: PTM scheduled for Jan 28...', time: '2 days ago', unread: false }
  ]

  const events = [
    { id: 1, title: 'Parent-Teacher Meeting', date: '2025-01-28', type: 'meeting' },
    { id: 2, title: 'Science Fair', date: '2025-02-05', type: 'event' },
    { id: 3, title: 'Final Exams Begin', date: '2025-02-10', type: 'exam' },
    { id: 4, title: 'Winter Break', date: '2025-02-20', type: 'holiday' }
  ]

  return (
    <div className="container">
      <div style={{ marginBottom: '30px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h1>Parent Portal</h1>
            <p style={{ color: '#666' }}>Monitor your child's academic progress and school activities</p>
          </div>
          
          {children.length > 1 && (
            <div>
              <label style={{ marginRight: '10px' }}>Select Child:</label>
              <select 
                className="form-control" 
                style={{ width: '200px', display: 'inline-block' }}
                value={selectedChild}
                onChange={(e) => setSelectedChild(parseInt(e.target.value))}
              >
                {children.map((child, index) => (
                  <option key={child.id} value={index}>
                    {child.name} - {child.className}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>
        
        <div style={{ marginTop: '15px', padding: '15px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <div style={{ 
              width: '50px', 
              height: '50px', 
              backgroundColor: '#007bff', 
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white'
            }}>
              <User size={25} />
            </div>
            <div>
              <h3 style={{ marginBottom: '5px' }}>{currentChild.name}</h3>
              <p style={{ color: '#666', marginBottom: '0' }}>
                Roll No: {currentChild.rollNumber} | Class: {currentChild.className}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="nav-tabs">
        <button 
          className={`nav-tab ${activeTab === 'dashboard' ? 'active' : ''}`}
          onClick={() => setActiveTab('dashboard')}
        >
          <User size={16} style={{ marginRight: '5px' }} />
          Dashboard
        </button>
        <button 
          className={`nav-tab ${activeTab === 'attendance' ? 'active' : ''}`}
          onClick={() => setActiveTab('attendance')}
        >
          <Calendar size={16} style={{ marginRight: '5px' }} />
          Attendance
        </button>
        <button 
          className={`nav-tab ${activeTab === 'grades' ? 'active' : ''}`}
          onClick={() => setActiveTab('grades')}
        >
          <BookOpen size={16} style={{ marginRight: '5px' }} />
          Grades
        </button>
        <button 
          className={`nav-tab ${activeTab === 'assignments' ? 'active' : ''}`}
          onClick={() => setActiveTab('assignments')}
        >
          <TrendingUp size={16} style={{ marginRight: '5px' }} />
          Assignments
        </button>
        <button 
          className={`nav-tab ${activeTab === 'fees' ? 'active' : ''}`}
          onClick={() => setActiveTab('fees')}
        >
          <DollarSign size={16} style={{ marginRight: '5px' }} />
          Fees
        </button>
        <button 
          className={`nav-tab ${activeTab === 'messages' ? 'active' : ''}`}
          onClick={() => setActiveTab('messages')}
        >
          <MessageSquare size={16} style={{ marginRight: '5px' }} />
          Messages
        </button>
      </div>

      {activeTab === 'dashboard' && (
        <DashboardTab 
          currentChild={currentChild}
          feeData={feeData}
          performanceData={performanceData}
          attendanceData={attendanceData}
          events={events}
        />
      )}
      {activeTab === 'attendance' && (
        <AttendanceTab 
          currentChild={currentChild}
          attendanceData={attendanceData}
        />
      )}
      {activeTab === 'grades' && (
        <GradesTab 
          examResults={examResults}
          performanceData={performanceData}
        />
      )}
      {activeTab === 'assignments' && (
        <AssignmentsTab 
          assignments={assignments}
        />
      )}
      {activeTab === 'fees' && (
        <FeesTab 
          feeData={feeData}
        />
      )}
      {activeTab === 'messages' && (
        <MessagesTab 
          messages={messages}
        />
      )}
    </div>
  )
}

export default ParentPortal
