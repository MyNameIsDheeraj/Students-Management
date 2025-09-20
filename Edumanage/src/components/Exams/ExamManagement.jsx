import React, { useState } from 'react'
import { Calendar, CheckCircle, Download } from 'lucide-react'
import ScheduleTab from './submodules/ScheduleTab'
import GradesTab from './submodules/GradesTab'
import ReportCardsTab from './submodules/ReportCardsTab'
import ExamModal from './submodules/ExamModal'

const ExamManagement = () => {
  const [activeTab, setActiveTab] = useState('schedule')
  const [showModal, setShowModal] = useState(false)
  const [modalType, setModalType] = useState('')
  const [selectedExam, setSelectedExam] = useState(null)

  const exams = [
    {
      id: 1,
      name: 'Mid-term Examination',
      type: 'Mid-term',
      subject: 'Mathematics',
      class: '10A',
      date: '2025-02-05',
      time: '9:00 AM - 12:00 PM',
      venue: 'Room 101',
      maxMarks: 100,
      duration: '3 hours',
      status: 'Scheduled',
      totalStudents: 35,
      submittedAnswers: 0
    },
    {
      id: 2,
      name: 'Physics Unit Test',
      type: 'Unit Test',
      subject: 'Physics',
      class: '11A',
      date: '2025-02-07',
      time: '10:00 AM - 11:30 AM',
      venue: 'Room 102',
      maxMarks: 50,
      duration: '1.5 hours',
      status: 'Scheduled',
      totalStudents: 30,
      submittedAnswers: 0
    },
    {
      id: 3,
      name: 'English Literature Test',
      type: 'Unit Test',
      subject: 'English',
      class: '9A',
      date: '2025-01-18',
      time: '2:00 PM - 3:30 PM',
      venue: 'Room 103',
      maxMarks: 75,
      duration: '1.5 hours',
      status: 'Completed',
      totalStudents: 28,
      submittedAnswers: 28
    }
  ]

  const grades = [
    {
      id: 1,
      examId: 3,
      examName: 'English Literature Test',
      studentName: 'John Doe',
      rollNumber: 'SCH2025-001',
      marksObtained: 68,
      maxMarks: 75,
      percentage: 90.7,
      grade: 'A',
      remarks: 'Excellent understanding of themes'
    },
    {
      id: 2,
      examId: 3,
      examName: 'English Literature Test',
      studentName: 'Sarah Wilson',
      rollNumber: 'SCH2025-002',
      marksObtained: 58,
      maxMarks: 75,
      percentage: 77.3,
      grade: 'B+',
      remarks: 'Good analysis, needs improvement in essay structure'
    },
    {
      id: 3,
      examId: 3,
      examName: 'English Literature Test',
      studentName: 'Michael Brown',
      rollNumber: 'SCH2025-003',
      marksObtained: 45,
      maxMarks: 75,
      percentage: 60.0,
      grade: 'C',
      remarks: 'Average performance, focus on reading comprehension'
    }
  ]

  const reportCards = [
    {
      id: 1,
      studentName: 'John Doe',
      rollNumber: 'SCH2025-001',
      class: '10A',
      term: 'Mid-term 2024',
      subjects: [
        { name: 'Mathematics', marks: 92, maxMarks: 100, grade: 'A+' },
        { name: 'Physics', marks: 88, maxMarks: 100, grade: 'A' },
        { name: 'Chemistry', marks: 85, maxMarks: 100, grade: 'A' },
        { name: 'English', marks: 90, maxMarks: 100, grade: 'A+' },
        { name: 'Computer Science', marks: 95, maxMarks: 100, grade: 'A+' }
      ],
      totalMarks: 450,
      maxTotalMarks: 500,
      percentage: 90.0,
      overallGrade: 'A+',
      rank: 2,
      attendance: 96
    }
  ]

  const openModal = (type, exam = null) => {
    setModalType(type)
    setSelectedExam(exam)
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
    setSelectedExam(null)
    setModalType('')
  }

  const getStatusBadge = (status) => {
    const badges = {
      'Scheduled': 'badge-warning',
      'Ongoing': 'badge-info',
      'Completed': 'badge-success',
      'Cancelled': 'badge-danger'
    }
    return badges[status] || 'badge-secondary'
  }

  const getGradeColor = (grade) => {
    const colors = {
      'A+': '#28a745',
      'A': '#28a745',
      'B+': '#17a2b8',
      'B': '#17a2b8',
      'C+': '#ffc107',
      'C': '#ffc107',
      'D': '#fd7e14',
      'F': '#dc3545'
    }
    return colors[grade] || '#6c757d'
  }

  return (
    <div className="container">
      <div style={{ marginBottom: '30px' }}>
        <h1>Examination Management</h1>
        <p style={{ color: '#666' }}>Schedule exams, manage results, and generate report cards</p>
      </div>

      <div className="nav-tabs">
        <button 
          className={`nav-tab ${activeTab === 'schedule' ? 'active' : ''}`}
          onClick={() => setActiveTab('schedule')}
        >
          <Calendar size={16} style={{ marginRight: '5px' }} />
          Exam Schedule
        </button>
        <button 
          className={`nav-tab ${activeTab === 'grades' ? 'active' : ''}`}
          onClick={() => setActiveTab('grades')}
        >
          <CheckCircle size={16} style={{ marginRight: '5px' }} />
          Results & Grades
        </button>
        <button 
          className={`nav-tab ${activeTab === 'reports' ? 'active' : ''}`}
          onClick={() => setActiveTab('reports')}
        >
          <Download size={16} style={{ marginRight: '5px' }} />
          Report Cards
        </button>
      </div>

      {activeTab === 'schedule' && (
        <ScheduleTab 
          exams={exams}
          openModal={openModal}
          setActiveTab={setActiveTab}
        />
      )}
      {activeTab === 'grades' && (
        <GradesTab 
          exams={exams}
          grades={grades}
          openModal={openModal}
        />
      )}
      {activeTab === 'reports' && (
        <ReportCardsTab 
          reportCards={reportCards}
        />
      )}

      <ExamModal 
        showModal={showModal}
        modalType={modalType}
        selectedExam={selectedExam}
        exams={exams}
        closeModal={closeModal}
      />
    </div>
  )
}

export default ExamManagement
