import React, { useState } from 'react'
import { User, BookOpen, Clock, DollarSign, Award } from 'lucide-react'
import ProfilesTab from './submodules/ProfilesTab'
import AssignmentsTab from './submodules/AssignmentsTab'
import AttendanceTab from './submodules/AttendanceTab'
import PayrollTab from './submodules/PayrollTab'
import PerformanceTab from './submodules/PerformanceTab'
import TeacherModal from './submodules/TeacherModal'

const TeacherManagement = () => {
  const [activeTab, setActiveTab] = useState('profiles')
  const [showModal, setShowModal] = useState(false)
  const [modalType, setModalType] = useState('')
  const [selectedTeacher, setSelectedTeacher] = useState(null)

  const teachers = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      employeeId: 'TCH2025-001',
      designation: 'Senior Mathematics Teacher',
      dateOfJoining: '2020-01-15',
      phone: '+91 9876543210',
      email: 'sarah.johnson@school.edu',
      address: '123 Teacher Colony, City',
      qualifications: ['M.Sc Mathematics', 'B.Ed', 'Ph.D Mathematics'],
      experience: '8 years',
      subjects: ['Mathematics', 'Statistics'],
      classes: ['10A', '10B', '11A'],
      salary: 75000,
      attendance: 96,
      performance: 4.8
    },
    {
      id: 2,
      name: 'Mr. David Wilson',
      employeeId: 'TCH2025-002',
      designation: 'Physics Teacher',
      dateOfJoining: '2019-08-20',
      phone: '+91 9876543211',
      email: 'david.wilson@school.edu',
      address: '456 Faculty Street, City',
      qualifications: ['M.Sc Physics', 'B.Ed'],
      experience: '6 years',
      subjects: ['Physics'],
      classes: ['9A', '9B', '10A'],
      salary: 65000,
      attendance: 94,
      performance: 4.6
    },
    {
      id: 3,
      name: 'Ms. Emily Brown',
      employeeId: 'TCH2025-003',
      designation: 'English Teacher',
      dateOfJoining: '2021-03-10',
      phone: '+91 9876543212',
      email: 'emily.brown@school.edu',
      address: '789 Education Avenue, City',
      qualifications: ['M.A English Literature', 'B.Ed'],
      experience: '4 years',
      subjects: ['English', 'Literature'],
      classes: ['8A', '8B', '9A'],
      salary: 55000,
      attendance: 98,
      performance: 4.9
    }
  ]

  const leaveRequests = [
    { id: 1, teacherId: 1, teacherName: 'Dr. Sarah Johnson', type: 'Sick Leave', startDate: '2025-01-25', endDate: '2025-01-26', reason: 'Fever and cold', status: 'Pending' },
    { id: 2, teacherId: 2, teacherName: 'Mr. David Wilson', type: 'Personal Leave', startDate: '2025-01-30', endDate: '2025-01-30', reason: 'Family function', status: 'Approved' },
    { id: 3, teacherId: 3, teacherName: 'Ms. Emily Brown', type: 'Casual Leave', startDate: '2025-02-05', endDate: '2025-02-07', reason: 'Personal work', status: 'Pending' }
  ]

  const openModal = (type, teacher = null) => {
    setModalType(type)
    setSelectedTeacher(teacher)
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
    setSelectedTeacher(null)
    setModalType('')
  }

  const handleLeaveAction = (requestId, action) => {
    console.log(`${action} leave request ${requestId}`)
  }

  return (
    <div className="container">
      <div style={{ marginBottom: '30px' }}>
        <h1>Teacher Management</h1>
        <p style={{ color: '#666' }}>Manage teacher profiles, assignments, attendance, and performance</p>
      </div>

      <div className="nav-tabs">
        <button 
          className={`nav-tab ${activeTab === 'profiles' ? 'active' : ''}`}
          onClick={() => setActiveTab('profiles')}
        >
          <User size={16} style={{ marginRight: '5px' }} />
          Profiles
        </button>
        <button 
          className={`nav-tab ${activeTab === 'assignments' ? 'active' : ''}`}
          onClick={() => setActiveTab('assignments')}
        >
          <BookOpen size={16} style={{ marginRight: '5px' }} />
          Assignments
        </button>
        <button 
          className={`nav-tab ${activeTab === 'attendance' ? 'active' : ''}`}
          onClick={() => setActiveTab('attendance')}
        >
          <Clock size={16} style={{ marginRight: '5px' }} />
          Attendance
        </button>
        <button 
          className={`nav-tab ${activeTab === 'payroll' ? 'active' : ''}`}
          onClick={() => setActiveTab('payroll')}
        >
          <DollarSign size={16} style={{ marginRight: '5px' }} />
          Payroll
        </button>
        <button 
          className={`nav-tab ${activeTab === 'performance' ? 'active' : ''}`}
          onClick={() => setActiveTab('performance')}
        >
          <Award size={16} style={{ marginRight: '5px' }} />
          Performance
        </button>
      </div>

      {activeTab === 'profiles' && <ProfilesTab teachers={teachers} openModal={openModal} />}
      {activeTab === 'assignments' && <AssignmentsTab teachers={teachers} openModal={openModal} />}
      {activeTab === 'attendance' && <AttendanceTab teachers={teachers} leaveRequests={leaveRequests} handleLeaveAction={handleLeaveAction} />}
      {activeTab === 'payroll' && <PayrollTab teachers={teachers} />}
      {activeTab === 'performance' && <PerformanceTab teachers={teachers} />}

      <TeacherModal 
        showModal={showModal}
        modalType={modalType}
        selectedTeacher={selectedTeacher}
        teachers={teachers}
        closeModal={closeModal}
      />
    </div>
  )
}

export default TeacherManagement
