import React, { useState } from 'react'
import { BookOpen, FileText, Calendar, User } from 'lucide-react'
import CoursesTab from './submodules/CoursesTab'
import SubjectsTab from './submodules/SubjectsTab'
import SyllabusTab from './submodules/SyllabusTab'
import TimetableTab from './submodules/TimetableTab'
import CourseModal from './submodules/CourseModal'

const CourseManagement = () => {
  const [activeTab, setActiveTab] = useState('courses')
  const [showModal, setShowModal] = useState(false)
  const [modalType, setModalType] = useState('')
  const [selectedItem, setSelectedItem] = useState(null)

  const courses = [
    {
      id: 1,
      name: 'High School Science',
      duration: '2 years',
      academicYear: '2024-25',
      subjects: ['Physics', 'Chemistry', 'Biology', 'Mathematics'],
      totalStudents: 120,
      description: 'Comprehensive science program for grades 11-12'
    },
    {
      id: 2,
      name: 'Elementary Mathematics',
      duration: '1 year',
      academicYear: '2024-25',
      subjects: ['Basic Math', 'Algebra', 'Geometry'],
      totalStudents: 85,
      description: 'Foundation mathematics for elementary students'
    }
  ]

  const subjects = [
    {
      id: 1,
      name: 'Physics',
      code: 'PHY101',
      credits: 4,
      gradeLevel: '11-12',
      teacher: 'Mr. David Wilson',
      description: 'Introduction to classical and modern physics'
    },
    {
      id: 2,
      name: 'Mathematics',
      code: 'MATH101',
      credits: 5,
      gradeLevel: '10-12',
      teacher: 'Dr. Sarah Johnson',
      description: 'Advanced mathematics including calculus and algebra'
    },
    {
      id: 3,
      name: 'English Literature',
      code: 'ENG101',
      credits: 3,
      gradeLevel: '9-12',
      teacher: 'Ms. Emily Brown',
      description: 'Study of classic and contemporary literature'
    }
  ]

  const syllabi = [
    {
      id: 1,
      subjectId: 1,
      subjectName: 'Physics',
      class: '11A',
      chapters: [
        'Mechanics',
        'Thermodynamics',
        'Waves and Oscillations',
        'Electricity and Magnetism'
      ],
      uploadDate: '2024-08-15',
      status: 'Active'
    },
    {
      id: 2,
      subjectId: 2,
      subjectName: 'Mathematics',
      class: '10A',
      chapters: [
        'Algebra',
        'Geometry',
        'Trigonometry',
        'Statistics'
      ],
      uploadDate: '2024-08-10',
      status: 'Active'
    }
  ]

  const timetable = [
    { time: '9:00-9:45', monday: 'Math (10A)', tuesday: 'Physics (11A)', wednesday: 'Chemistry (11B)', thursday: 'English (9A)', friday: 'Computer (10B)' },
    { time: '10:00-10:45', monday: 'Physics (11A)', tuesday: 'Math (10A)', wednesday: 'English (9A)', thursday: 'Chemistry (11B)', friday: 'Physics (11A)' },
    { time: '11:00-11:45', monday: 'Chemistry (11B)', tuesday: 'English (9A)', wednesday: 'Math (10A)', thursday: 'Computer (10B)', friday: 'Math (10A)' },
    { time: '12:00-12:45', monday: 'English (9A)', tuesday: 'Computer (10B)', wednesday: 'Physics (11A)', thursday: 'Math (10A)', friday: 'Chemistry (11B)' },
    { time: '1:45-2:30', monday: 'Computer (10B)', tuesday: 'Chemistry (11B)', wednesday: 'Computer (10B)', thursday: 'Physics (11A)', friday: 'English (9A)' }
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
        <h1>Course & Class Management</h1>
        <p style={{ color: '#666' }}>Manage courses, subjects, syllabi, and class schedules</p>
      </div>

      <div className="nav-tabs">
        <button 
          className={`nav-tab ${activeTab === 'courses' ? 'active' : ''}`}
          onClick={() => setActiveTab('courses')}
        >
          <BookOpen size={16} style={{ marginRight: '5px' }} />
          Courses
        </button>
        <button 
          className={`nav-tab ${activeTab === 'subjects' ? 'active' : ''}`}
          onClick={() => setActiveTab('subjects')}
        >
          <FileText size={16} style={{ marginRight: '5px' }} />
          Subjects
        </button>
        <button 
          className={`nav-tab ${activeTab === 'syllabus' ? 'active' : ''}`}
          onClick={() => setActiveTab('syllabus')}
        >
          <FileText size={16} style={{ marginRight: '5px' }} />
          Syllabus
        </button>
        <button 
          className={`nav-tab ${activeTab === 'timetable' ? 'active' : ''}`}
          onClick={() => setActiveTab('timetable')}
        >
          <Calendar size={16} style={{ marginRight: '5px' }} />
          Timetable
        </button>
      </div>

      {activeTab === 'courses' && (
        <CoursesTab 
          courses={courses}
          openModal={openModal}
        />
      )}
      {activeTab === 'subjects' && (
        <SubjectsTab 
          subjects={subjects}
          openModal={openModal}
        />
      )}
      {activeTab === 'syllabus' && (
        <SyllabusTab 
          syllabi={syllabi}
          openModal={openModal}
        />
      )}
      {activeTab === 'timetable' && (
        <TimetableTab 
          timetable={timetable}
        />
      )}

      <CourseModal 
        showModal={showModal}
        modalType={modalType}
        selectedItem={selectedItem}
        subjects={subjects}
        closeModal={closeModal}
      />
    </div>
  )
}

export default CourseManagement
