import React, { useState } from 'react'
import { User, BookOpen, FileText, Heart, Plus } from 'lucide-react'
import ProfileTab from './submodules/ProfileTab'
import AcademicTab from './submodules/AcademicTab'
import DocumentsTab from './submodules/DocumentsTab'
import HealthTab from './submodules/HealthTab'
import AdmissionsTab from './submodules/AdmissionsTab'
import StudentModal from './submodules/StudentModal'

const StudentProfile = () => {
  const [activeTab, setActiveTab] = useState('profile')
  const [showModal, setShowModal] = useState(false)
  const [modalType, setModalType] = useState('')
  const [selectedStudent, setSelectedStudent] = useState(null)

  const students = [
    {
      id: 1,
      name: 'John Doe',
      rollNumber: 'SCH2025-001',
      class: '10A',
      age: 15,
      dateOfBirth: '2009-05-15',
      gender: 'Male',
      phone: '+91 9876543210',
      parentPhone: '+91 9876543211',
      email: 'john.doe@email.com',
      address: '123 Main Street, City, State - 123456',
      subjects: ['Mathematics', 'Physics', 'Chemistry', 'English', 'Computer Science'],
      academicYear: '2024-25',
      bloodGroup: 'O+',
      allergies: 'None',
      medicalConditions: 'None',
      emergencyContact: '+91 9876543212',
      documents: [
        { name: 'Admission Form', type: 'PDF', status: 'Uploaded' },
        { name: 'Birth Certificate', type: 'PDF', status: 'Uploaded' },
        { name: 'Previous School Certificate', type: 'PDF', status: 'Pending' },
        { name: 'ID Proof', type: 'PDF', status: 'Uploaded' }
      ]
    },
    {
      id: 2,
      name: 'Sarah Wilson',
      rollNumber: 'SCH2025-002',
      class: '9B',
      age: 14,
      dateOfBirth: '2010-08-22',
      gender: 'Female',
      phone: '+91 9876543213',
      parentPhone: '+91 9876543214',
      email: 'sarah.wilson@email.com',
      address: '456 Oak Avenue, City, State - 123457',
      subjects: ['Mathematics', 'Biology', 'Chemistry', 'English', 'History'],
      academicYear: '2024-25',
      bloodGroup: 'A+',
      allergies: 'Peanuts',
      medicalConditions: 'Asthma',
      emergencyContact: '+91 9876543215'
    }
  ]

  const admissionRequests = [
    {
      id: 1,
      name: 'Michael Brown',
      class: '11A',
      dateSubmitted: '2025-01-15',
      status: 'Pending',
      documents: ['Admission Form', 'Birth Certificate', 'Previous School Certificate']
    },
    {
      id: 2,
      name: 'Emma Davis',
      class: '10B',
      dateSubmitted: '2025-01-14',
      status: 'Pending',
      documents: ['Admission Form', 'Birth Certificate']
    }
  ]

  const openModal = (type, student = null) => {
    setModalType(type)
    setSelectedStudent(student)
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
    setSelectedStudent(null)
    setModalType('')
  }

  const handleApproval = (requestId, action) => {
    console.log(`${action} admission request ${requestId}`)
    // Handle approval/rejection logic
  }

  return (
    <div className="container">
      <div style={{ marginBottom: '30px' }}>
        <h1>Student Management</h1>
        <p style={{ color: '#666' }}>Manage student profiles, admissions, and academic information</p>
      </div>

      <div className="nav-tabs">
        <button 
          className={`nav-tab ${activeTab === 'profile' ? 'active' : ''}`}
          onClick={() => setActiveTab('profile')}
        >
          <User size={16} style={{ marginRight: '5px' }} />
          Profiles
        </button>
        <button 
          className={`nav-tab ${activeTab === 'academic' ? 'active' : ''}`}
          onClick={() => setActiveTab('academic')}
        >
          <BookOpen size={16} style={{ marginRight: '5px' }} />
          Academic Info
        </button>
        <button 
          className={`nav-tab ${activeTab === 'documents' ? 'active' : ''}`}
          onClick={() => setActiveTab('documents')}
        >
          <FileText size={16} style={{ marginRight: '5px' }} />
          Documents
        </button>
        <button 
          className={`nav-tab ${activeTab === 'health' ? 'active' : ''}`}
          onClick={() => setActiveTab('health')}
        >
          <Heart size={16} style={{ marginRight: '5px' }} />
          Health Records
        </button>
        <button 
          className={`nav-tab ${activeTab === 'admissions' ? 'active' : ''}`}
          onClick={() => setActiveTab('admissions')}
        >
          <Plus size={16} style={{ marginRight: '5px' }} />
          Admissions
        </button>
      </div>

      {activeTab === 'profile' && <ProfileTab students={students} openModal={openModal} />}
      {activeTab === 'academic' && <AcademicTab students={students} openModal={openModal} />}
      {activeTab === 'documents' && <DocumentsTab students={students} openModal={openModal} />}
      {activeTab === 'health' && <HealthTab students={students} />}
      {activeTab === 'admissions' && <AdmissionsTab admissionRequests={admissionRequests} handleApproval={handleApproval} />}

      <StudentModal 
        showModal={showModal}
        modalType={modalType}
        selectedStudent={selectedStudent}
        students={students}
        closeModal={closeModal}
      />
    </div>
  )
}

export default StudentProfile
