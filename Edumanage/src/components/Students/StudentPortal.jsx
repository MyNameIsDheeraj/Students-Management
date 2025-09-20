import React, { useState } from 'react'
import { User, Calendar, FileText, BookOpen, Users, DollarSign, Bell, Download, Upload, Clock, CheckCircle, AlertCircle } from 'lucide-react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts'

const StudentPortal = () => {
  const [activeTab, setActiveTab] = useState('dashboard')

  const studentData = {
    name: 'John Doe',
    rollNumber: 'SCH2025-001',
    class: '10A',
    gpa: 8.7,
    attendance: 96,
    pendingAssignments: 3,
    totalFees: 50000,
    paidFees: 45000,
    pendingFees: 5000
  }

  const performanceData = [
    { month: 'Jan', gpa: 8.2 },
    { month: 'Feb', gpa: 8.4 },
    { month: 'Mar', gpa: 8.6 },
    { month: 'Apr', gpa: 8.5 },
    { month: 'May', gpa: 8.7 }
  ]

  const subjectPerformance = [
    { subject: 'Math', marks: 92 },
    { subject: 'Physics', marks: 88 },
    { subject: 'Chemistry', marks: 85 },
    { subject: 'English', marks: 90 },
    { subject: 'Computer', marks: 95 }
  ]

  const timetable = [
    { time: '9:00 - 9:45', monday: 'Math', tuesday: 'Physics', wednesday: 'Chemistry', thursday: 'English', friday: 'Computer' },
    { time: '10:00 - 10:45', monday: 'Physics', tuesday: 'Math', wednesday: 'English', thursday: 'Chemistry', friday: 'Physics' },
    { time: '11:00 - 11:45', monday: 'Chemistry', tuesday: 'English', wednesday: 'Math', thursday: 'Computer', friday: 'Math' },
    { time: '12:00 - 12:45', monday: 'English', tuesday: 'Computer', wednesday: 'Physics', thursday: 'Math', friday: 'Chemistry' },
    { time: '1:45 - 2:30', monday: 'Computer', tuesday: 'Chemistry', wednesday: 'Computer', thursday: 'Physics', friday: 'English' }
  ]

  const assignments = [
    { id: 1, title: 'Algebra Problem Set', subject: 'Mathematics', dueDate: '2025-01-25', status: 'pending', marks: null },
    { id: 2, title: 'Physics Lab Report', subject: 'Physics', dueDate: '2025-01-22', status: 'submitted', marks: null },
    { id: 3, title: 'Chemical Equations', subject: 'Chemistry', dueDate: '2025-01-28', status: 'pending', marks: null },
    { id: 4, title: 'Essay Writing', subject: 'English', dueDate: '2025-01-20', status: 'graded', marks: 88 },
    { id: 5, title: 'Programming Project', subject: 'Computer Science', dueDate: '2025-01-30', status: 'pending', marks: null }
  ]

  const examSchedule = [
    { id: 1, subject: 'Mathematics', date: '2025-02-05', time: '9:00 AM', venue: 'Room 101' },
    { id: 2, subject: 'Physics', date: '2025-02-07', time: '9:00 AM', venue: 'Room 102' },
    { id: 3, subject: 'Chemistry', date: '2025-02-10', time: '9:00 AM', venue: 'Room 103' },
    { id: 4, subject: 'English', date: '2025-02-12', time: '9:00 AM', venue: 'Room 104' },
    { id: 5, subject: 'Computer Science', date: '2025-02-14', time: '9:00 AM', venue: 'Lab 1' }
  ]

  const examResults = [
    { exam: 'Mid-term 2024', math: 92, physics: 88, chemistry: 85, english: 90, computer: 95, total: 450, percentage: 90 },
    { exam: 'Unit Test 3', math: 88, physics: 85, chemistry: 82, english: 87, computer: 92, total: 434, percentage: 86.8 }
  ]

  const attendanceData = [
    { month: 'Jan', present: 22, absent: 1 },
    { month: 'Feb', present: 20, absent: 0 },
    { month: 'Mar', present: 21, absent: 2 },
    { month: 'Apr', present: 23, absent: 0 },
    { month: 'May', present: 20, absent: 1 }
  ]

  const notifications = [
    { id: 1, title: 'Assignment Due Tomorrow', message: 'Algebra Problem Set is due tomorrow', time: '2 hours ago', type: 'warning' },
    { id: 2, title: 'Exam Schedule Updated', message: 'Physics exam has been rescheduled', time: '1 day ago', type: 'info' },
    { id: 3, title: 'Fee Payment Reminder', message: 'Next installment due on Jan 30', time: '2 days ago', type: 'warning' },
    { id: 4, title: 'New Study Material', message: 'Chemistry notes uploaded', time: '3 days ago', type: 'success' }
  ]

  const renderDashboard = () => (
    <div>
      <div className="grid grid-4" style={{ marginBottom: '30px' }}>
        <div className="stats-card">
          <div className="stats-number">{studentData.gpa}</div>
          <div className="stats-label">Current GPA</div>
        </div>
        <div className="stats-card" style={{ background: 'linear-gradient(135deg, #28a745 0%, #20c997 100%)' }}>
          <div className="stats-number">{studentData.attendance}%</div>
          <div className="stats-label">Attendance</div>
        </div>
        <div className="stats-card" style={{ background: 'linear-gradient(135deg, #ffc107 0%, #fd7e14 100%)' }}>
          <div className="stats-number">{studentData.pendingAssignments}</div>
          <div className="stats-label">Pending Assignments</div>
        </div>
        <div className="stats-card" style={{ background: 'linear-gradient(135deg, #dc3545 0%, #e83e8c 100%)' }}>
          <div className="stats-number">₹{studentData.pendingFees.toLocaleString()}</div>
          <div className="stats-label">Pending Fees</div>
        </div>
      </div>

      <div className="grid grid-2" style={{ marginBottom: '30px' }}>
        <div className="card">
          <h3 style={{ marginBottom: '20px' }}>Academic Progress</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis domain={[7, 10]} />
              <Tooltip />
              <Line type="monotone" dataKey="gpa" stroke="#007bff" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="card">
          <h3 style={{ marginBottom: '20px' }}>Subject-wise Performance</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={subjectPerformance}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="subject" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="marks" fill="#28a745" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-2">
        <div className="card">
          <h3 style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Bell size={20} />
            Recent Notifications
          </h3>
          <div style={{ maxHeight: '300px', overflowY: 'auto' }}>
            {notifications.map((notification) => (
              <div key={notification.id} style={{ 
                padding: '12px 0', 
                borderBottom: '1px solid #eee',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start'
              }}>
                <div>
                  <h4 style={{ fontSize: '14px', marginBottom: '5px' }}>{notification.title}</h4>
                  <p style={{ fontSize: '12px', color: '#666', marginBottom: '5px' }}>{notification.message}</p>
                  <span style={{ fontSize: '11px', color: '#999' }}>{notification.time}</span>
                </div>
                <span className={`badge badge-${notification.type}`}>
                  {notification.type}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <h3 style={{ marginBottom: '20px' }}>Quick Actions</h3>
          <div className="grid grid-2" style={{ gap: '10px' }}>
            <button className="btn btn-primary" onClick={() => setActiveTab('assignments')}>
              <FileText size={16} />
              View Assignments
            </button>
            <button className="btn btn-success" onClick={() => setActiveTab('timetable')}>
              <Calendar size={16} />
              My Timetable
            </button>
            <button className="btn btn-warning" onClick={() => setActiveTab('exams')}>
              <BookOpen size={16} />
              Exam Schedule
            </button>
            <button className="btn btn-info" onClick={() => setActiveTab('fees')}>
              <DollarSign size={16} />
              Pay Fees
            </button>
          </div>
        </div>
      </div>
    </div>
  )

  const renderTimetable = () => (
    <div className="card">
      <h3 style={{ marginBottom: '20px' }}>Weekly Timetable - Class {studentData.class}</h3>
      <div style={{ overflowX: 'auto' }}>
        <table className="table">
          <thead>
            <tr>
              <th>Time</th>
              <th>Monday</th>
              <th>Tuesday</th>
              <th>Wednesday</th>
              <th>Thursday</th>
              <th>Friday</th>
            </tr>
          </thead>
          <tbody>
            {timetable.map((slot, index) => (
              <tr key={index}>
                <td style={{ fontWeight: '500' }}>{slot.time}</td>
                <td>{slot.monday}</td>
                <td>{slot.tuesday}</td>
                <td>{slot.wednesday}</td>
                <td>{slot.thursday}</td>
                <td>{slot.friday}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )

  const renderAssignments = () => (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h3>My Assignments</h3>
        <div>
          <span className="badge badge-warning" style={{ marginRight: '10px' }}>
            Pending: {assignments.filter(a => a.status === 'pending').length}
          </span>
          <span className="badge badge-info">
            Total: {assignments.length}
          </span>
        </div>
      </div>

      <div className="card">
        <table className="table">
          <thead>
            <tr>
              <th>Assignment</th>
              <th>Subject</th>
              <th>Due Date</th>
              <th>Status</th>
              <th>Marks</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {assignments.map((assignment) => (
              <tr key={assignment.id}>
                <td>{assignment.title}</td>
                <td>{assignment.subject}</td>
                <td>{assignment.dueDate}</td>
                <td>
                  <span className={`badge ${
                    assignment.status === 'pending' ? 'badge-warning' :
                    assignment.status === 'submitted' ? 'badge-info' :
                    'badge-success'
                  }`}>
                    {assignment.status === 'pending' && <Clock size={12} style={{ marginRight: '4px' }} />}
                    {assignment.status === 'submitted' && <Upload size={12} style={{ marginRight: '4px' }} />}
                    {assignment.status === 'graded' && <CheckCircle size={12} style={{ marginRight: '4px' }} />}
                    {assignment.status}
                  </span>
                </td>
                <td>
                  {assignment.marks ? `${assignment.marks}/100` : '-'}
                </td>
                <td>
                  {assignment.status === 'pending' && (
                    <button className="btn btn-primary">
                      <Upload size={14} />
                      Submit
                    </button>
                  )}
                  {assignment.status === 'graded' && (
                    <button className="btn btn-secondary">
                      <Download size={14} />
                      Download
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )

  const renderExams = () => (
    <div>
      <div className="grid grid-2" style={{ marginBottom: '30px' }}>
        <div className="card">
          <h3 style={{ marginBottom: '20px' }}>Upcoming Exams</h3>
          <table className="table">
            <thead>
              <tr>
                <th>Subject</th>
                <th>Date</th>
                <th>Time</th>
                <th>Venue</th>
              </tr>
            </thead>
            <tbody>
              {examSchedule.map((exam) => (
                <tr key={exam.id}>
                  <td>{exam.subject}</td>
                  <td>{exam.date}</td>
                  <td>{exam.time}</td>
                  <td>{exam.venue}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="card">
          <h3 style={{ marginBottom: '20px' }}>Recent Results</h3>
          {examResults.map((result, index) => (
            <div key={index} style={{ marginBottom: '20px', padding: '15px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
              <h4 style={{ marginBottom: '10px' }}>{result.exam}</h4>
              <div className="grid grid-2" style={{ gap: '10px', marginBottom: '10px' }}>
                <div>Math: {result.math}</div>
                <div>Physics: {result.physics}</div>
                <div>Chemistry: {result.chemistry}</div>
                <div>English: {result.english}</div>
                <div>Computer: {result.computer}</div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <strong>Total: {result.total}/500</strong>
                <span className="badge badge-success">{result.percentage}%</span>
              </div>
              <button className="btn btn-secondary" style={{ marginTop: '10px' }}>
                <Download size={14} />
                Download Report Card
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  const renderAttendance = () => (
    <div>
      <div className="grid grid-2" style={{ marginBottom: '30px' }}>
        <div className="card">
          <h3 style={{ marginBottom: '20px' }}>Monthly Attendance</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={attendanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="present" fill="#28a745" name="Present" />
              <Bar dataKey="absent" fill="#dc3545" name="Absent" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="card">
          <h3 style={{ marginBottom: '20px' }}>Attendance Summary</h3>
          <div style={{ textAlign: 'center', marginBottom: '20px' }}>
            <div style={{ fontSize: '3rem', fontWeight: 'bold', color: '#28a745' }}>
              {studentData.attendance}%
            </div>
            <p style={{ color: '#666' }}>Overall Attendance</p>
          </div>
          
          <div style={{ marginBottom: '15px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
              <span>Present Days</span>
              <span>106/110</span>
            </div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: '96%' }}></div>
            </div>
          </div>

          <div className="alert alert-warning">
            <AlertCircle size={16} style={{ marginRight: '8px' }} />
            Minimum 75% attendance required for exam eligibility
          </div>
        </div>
      </div>
    </div>
  )

  const renderFees = () => (
    <div>
      <div className="grid grid-2" style={{ marginBottom: '30px' }}>
        <div className="card">
          <h3 style={{ marginBottom: '20px' }}>Fee Summary</h3>
          <div style={{ marginBottom: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
              <span>Total Fees:</span>
              <strong>₹{studentData.totalFees.toLocaleString()}</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
              <span>Paid:</span>
              <span style={{ color: '#28a745' }}>₹{studentData.paidFees.toLocaleString()}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
              <span>Pending:</span>
              <span style={{ color: '#dc3545' }}>₹{studentData.pendingFees.toLocaleString()}</span>
            </div>
            
            <div className="progress-bar" style={{ marginBottom: '15px' }}>
              <div 
                className="progress-fill" 
                style={{ width: `${(studentData.paidFees / studentData.totalFees) * 100}%` }}
              ></div>
            </div>
            
            <p style={{ fontSize: '12px', color: '#666', textAlign: 'center' }}>
              {((studentData.paidFees / studentData.totalFees) * 100).toFixed(1)}% paid
            </p>
          </div>

          <button className="btn btn-primary" style={{ width: '100%', marginBottom: '10px' }}>
            <DollarSign size={16} />
            Pay Now - ₹{studentData.pendingFees.toLocaleString()}
          </button>
          
          <div style={{ textAlign: 'center' }}>
            <small style={{ color: '#666' }}>Next due date: January 30, 2025</small>
          </div>
        </div>

        <div className="card">
          <h3 style={{ marginBottom: '20px' }}>Payment History</h3>
          <div style={{ maxHeight: '300px', overflowY: 'auto' }}>
            <div style={{ padding: '10px 0', borderBottom: '1px solid #eee' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <strong>First Installment</strong>
                  <p style={{ fontSize: '12px', color: '#666', margin: '2px 0' }}>Paid on: Dec 15, 2024</p>
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
            
            <div style={{ padding: '10px 0', borderBottom: '1px solid #eee' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <strong>Second Installment</strong>
                  <p style={{ fontSize: '12px', color: '#666', margin: '2px 0' }}>Paid on: Nov 15, 2024</p>
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
  )

  return (
    <div className="container">
      <div style={{ marginBottom: '30px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <div style={{ 
            width: '60px', 
            height: '60px', 
            backgroundColor: '#007bff', 
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white'
          }}>
            <User size={30} />
          </div>
          <div>
            <h1>Welcome, {studentData.name}</h1>
            <p style={{ color: '#666' }}>Roll Number: {studentData.rollNumber} | Class: {studentData.class}</p>
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
          className={`nav-tab ${activeTab === 'timetable' ? 'active' : ''}`}
          onClick={() => setActiveTab('timetable')}
        >
          <Calendar size={16} style={{ marginRight: '5px' }} />
          Timetable
        </button>
        <button 
          className={`nav-tab ${activeTab === 'assignments' ? 'active' : ''}`}
          onClick={() => setActiveTab('assignments')}
        >
          <FileText size={16} style={{ marginRight: '5px' }} />
          Assignments
        </button>
        <button 
          className={`nav-tab ${activeTab === 'exams' ? 'active' : ''}`}
          onClick={() => setActiveTab('exams')}
        >
          <BookOpen size={16} style={{ marginRight: '5px' }} />
          Exams
        </button>
        <button 
          className={`nav-tab ${activeTab === 'attendance' ? 'active' : ''}`}
          onClick={() => setActiveTab('attendance')}
        >
          <Users size={16} style={{ marginRight: '5px' }} />
          Attendance
        </button>
        <button 
          className={`nav-tab ${activeTab === 'fees' ? 'active' : ''}`}
          onClick={() => setActiveTab('fees')}
        >
          <DollarSign size={16} style={{ marginRight: '5px' }} />
          Fees
        </button>
      </div>

      {activeTab === 'dashboard' && renderDashboard()}
      {activeTab === 'timetable' && renderTimetable()}
      {activeTab === 'assignments' && renderAssignments()}
      {activeTab === 'exams' && renderExams()}
      {activeTab === 'attendance' && renderAttendance()}
      {activeTab === 'fees' && renderFees()}
    </div>
  )
}

export default StudentPortal
