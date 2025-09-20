import React, { useState } from 'react'
import { FileText, Plus, CheckCircle } from 'lucide-react'
import AssignmentsList from './submodules/AssignmentsList'
import Submissions from './submodules/Submissions'
import CreateAssignment from './submodules/CreateAssignment'
import AssignmentModal from './submodules/AssignmentModal'

const AssignmentManagement = ({ userRole }) => {
  const [activeTab, setActiveTab] = useState('list')
  const [showModal, setShowModal] = useState(false)
  const [modalType, setModalType] = useState('')
  const [selectedAssignment, setSelectedAssignment] = useState(null)

  const assignments = [
    {
      id: 1,
      title: 'Algebra Problem Set',
      subject: 'Mathematics',
      class: '10A',
      teacher: 'Dr. Sarah Johnson',
      description: 'Solve the given algebraic equations and show all working steps.',
      dueDate: '2025-01-25',
      maxMarks: 100,
      attachments: ['algebra_problems.pdf'],
      status: 'active',
      submissions: 28,
      totalStudents: 35,
      createdDate: '2025-01-15'
    },
    {
      id: 2,
      title: 'Physics Lab Report',
      subject: 'Physics',
      class: '10A',
      teacher: 'Mr. David Wilson',
      description: 'Write a detailed report on the pendulum experiment conducted in class.',
      dueDate: '2025-01-22',
      maxMarks: 50,
      attachments: ['lab_guidelines.pdf', 'report_template.docx'],
      status: 'active',
      submissions: 32,
      totalStudents: 35,
      createdDate: '2025-01-10'
    },
    {
      id: 3,
      title: 'Essay on Climate Change',
      subject: 'English',
      class: '9A',
      teacher: 'Ms. Emily Brown',
      description: 'Write a 500-word essay on the impact of climate change on our environment.',
      dueDate: '2025-01-20',
      maxMarks: 75,
      attachments: [],
      status: 'completed',
      submissions: 30,
      totalStudents: 30,
      createdDate: '2025-01-05'
    }
  ]

  const submissions = [
    {
      id: 1,
      assignmentId: 1,
      studentName: 'John Doe',
      rollNumber: 'SCH2025-001',
      submittedDate: '2025-01-20 10:30 AM',
      files: ['john_algebra_solutions.pdf'],
      status: 'submitted',
      marks: null,
      feedback: ''
    },
    {
      id: 2,
      assignmentId: 1,
      studentName: 'Sarah Wilson',
      rollNumber: 'SCH2025-002',
      submittedDate: '2025-01-19 02:15 PM',
      files: ['sarah_algebra_work.pdf'],
      status: 'graded',
      marks: 85,
      feedback: 'Good work! Minor errors in question 3.'
    },
    {
      id: 3,
      assignmentId: 2,
      studentName: 'Michael Brown',
      rollNumber: 'SCH2025-003',
      submittedDate: '2025-01-18 11:45 AM',
      files: ['physics_lab_report.pdf'],
      status: 'graded',
      marks: 42,
      feedback: 'Well structured report. Include more analysis next time.'
    }
  ]

  const openModal = (type, assignment = null) => {
    setModalType(type)
    setSelectedAssignment(assignment)
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
    setSelectedAssignment(null)
    setModalType('')
  }

  return (
    <div className="container">
      <div style={{ marginBottom: '30px' }}>
        <h1>Assignment Management</h1>
        <p style={{ color: '#666' }}>Create, manage, and grade assignments</p>
      </div>

      <div className="nav-tabs">
        <button 
          className={`nav-tab ${activeTab === 'list' ? 'active' : ''}`}
          onClick={() => setActiveTab('list')}
        >
          <FileText size={16} style={{ marginRight: '5px' }} />
          All Assignments
        </button>
        {(userRole === 'admin' || userRole === 'teacher') && (
          <>
            <button 
              className={`nav-tab ${activeTab === 'create' ? 'active' : ''}`}
              onClick={() => setActiveTab('create')}
            >
              <Plus size={16} style={{ marginRight: '5px' }} />
              Create Assignment
            </button>
            <button 
              className={`nav-tab ${activeTab === 'submissions' ? 'active' : ''}`}
              onClick={() => setActiveTab('submissions')}
            >
              <CheckCircle size={16} style={{ marginRight: '5px' }} />
              Submissions
            </button>
          </>
        )}
      </div>

      {activeTab === 'list' && (
        <AssignmentsList 
          assignments={assignments}
          userRole={userRole}
          openModal={openModal}
          setActiveTab={setActiveTab}
        />
      )}
      {activeTab === 'create' && (
        <CreateAssignment 
          setActiveTab={setActiveTab}
        />
      )}
      {activeTab === 'submissions' && (
        <Submissions 
          assignments={assignments}
          submissions={submissions}
          userRole={userRole}
          openModal={openModal}
        />
      )}

      <AssignmentModal 
        showModal={showModal}
        modalType={modalType}
        selectedAssignment={selectedAssignment}
        assignments={assignments}
        closeModal={closeModal}
      />
    </div>
  )
}

export default AssignmentManagement
