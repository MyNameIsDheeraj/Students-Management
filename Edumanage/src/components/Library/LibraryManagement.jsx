import React, { useState } from 'react'
import { Book, User, Upload, Download } from 'lucide-react'
import CatalogTab from './submodules/CatalogTab'
import BorrowReturnTab from './submodules/BorrowReturnTab'
import DigitalLibraryTab from './submodules/DigitalLibraryTab'
import ReportsTab from './submodules/ReportsTab'
import LibraryModal from './submodules/LibraryModal'

const LibraryManagement = () => {
  const [activeTab, setActiveTab] = useState('catalog')
  const [showModal, setShowModal] = useState(false)
  const [modalType, setModalType] = useState('')
  const [selectedItem, setSelectedItem] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')

  const books = [
    {
      id: 1,
      title: 'Introduction to Physics',
      author: 'Dr. John Smith',
      isbn: '978-0123456789',
      category: 'Science',
      publisher: 'Academic Press',
      year: 2023,
      copies: 5,
      available: 3,
      location: 'Section A, Shelf 12',
      status: 'Available'
    },
    {
      id: 2,
      title: 'Advanced Mathematics',
      author: 'Prof. Sarah Johnson',
      isbn: '978-0987654321',
      category: 'Mathematics',
      publisher: 'Math Publications',
      year: 2022,
      copies: 8,
      available: 5,
      location: 'Section B, Shelf 5',
      status: 'Available'
    },
    {
      id: 3,
      title: 'World History',
      author: 'Dr. Michael Brown',
      isbn: '978-0456789123',
      category: 'History',
      publisher: 'History Books Ltd',
      year: 2021,
      copies: 6,
      available: 0,
      location: 'Section C, Shelf 8',
      status: 'Out of Stock'
    }
  ]

  const borrowedBooks = [
    {
      id: 1,
      bookId: 1,
      bookTitle: 'Introduction to Physics',
      studentName: 'John Doe',
      rollNumber: 'SCH2025-001',
      issueDate: '2025-01-10',
      dueDate: '2025-01-24',
      status: 'Borrowed',
      fine: 0
    },
    {
      id: 2,
      bookId: 2,
      bookTitle: 'Advanced Mathematics',
      studentName: 'Sarah Wilson',
      rollNumber: 'SCH2025-002',
      issueDate: '2025-01-05',
      dueDate: '2025-01-19',
      status: 'Overdue',
      fine: 25
    },
    {
      id: 3,
      bookId: 1,
      bookTitle: 'Introduction to Physics',
      studentName: 'Michael Brown',
      rollNumber: 'SCH2025-003',
      issueDate: '2024-12-20',
      dueDate: '2025-01-03',
      status: 'Returned',
      fine: 0
    }
  ]

  const digitalResources = [
    {
      id: 1,
      title: 'Physics Fundamentals - Video Lectures',
      type: 'Video',
      subject: 'Physics',
      class: '11-12',
      size: '2.5 GB',
      uploadDate: '2024-12-15',
      downloads: 45,
      status: 'Active'
    },
    {
      id: 2,
      title: 'Mathematics Reference Guide',
      type: 'PDF',
      subject: 'Mathematics',
      class: '9-12',
      size: '15 MB',
      uploadDate: '2024-12-10',
      downloads: 78,
      status: 'Active'
    },
    {
      id: 3,
      title: 'English Literature Collection',
      type: 'eBook',
      subject: 'English',
      class: '10-12',
      size: '120 MB',
      uploadDate: '2024-12-05',
      downloads: 32,
      status: 'Active'
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

  const getStatusBadge = (status) => {
    const badges = {
      'Available': 'badge-success',
      'Out of Stock': 'badge-danger',
      'Borrowed': 'badge-info',
      'Overdue': 'badge-warning',
      'Returned': 'badge-success',
      'Active': 'badge-success'
    }
    return badges[status] || 'badge-secondary'
  }

  const calculateDaysOverdue = (dueDate) => {
    const today = new Date()
    const due = new Date(dueDate)
    const diffTime = today - due
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return diffDays > 0 ? diffDays : 0
  }

  return (
    <div className="container">
      <div style={{ marginBottom: '30px' }}>
        <h1>Library Management</h1>
        <p style={{ color: '#666' }}>Manage books, digital resources, and library operations</p>
      </div>

      <div className="nav-tabs">
        <button 
          className={`nav-tab ${activeTab === 'catalog' ? 'active' : ''}`}
          onClick={() => setActiveTab('catalog')}
        >
          <Book size={16} style={{ marginRight: '5px' }} />
          Book Catalog
        </button>
        <button 
          className={`nav-tab ${activeTab === 'borrow' ? 'active' : ''}`}
          onClick={() => setActiveTab('borrow')}
        >
          <User size={16} style={{ marginRight: '5px' }} />
          Borrow/Return
        </button>
        <button 
          className={`nav-tab ${activeTab === 'digital' ? 'active' : ''}`}
          onClick={() => setActiveTab('digital')}
        >
          <Upload size={16} style={{ marginRight: '5px' }} />
          Digital Library
        </button>
        <button 
          className={`nav-tab ${activeTab === 'reports' ? 'active' : ''}`}
          onClick={() => setActiveTab('reports')}
        >
          <Download size={16} style={{ marginRight: '5px' }} />
          Reports
        </button>
      </div>

      {activeTab === 'catalog' && (
        <CatalogTab 
          books={books}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          openModal={openModal}
          getStatusBadge={getStatusBadge}
        />
      )}
      {activeTab === 'borrow' && (
        <BorrowReturnTab 
          borrowedBooks={borrowedBooks}
          openModal={openModal}
          getStatusBadge={getStatusBadge}
          calculateDaysOverdue={calculateDaysOverdue}
        />
      )}
      {activeTab === 'digital' && (
        <DigitalLibraryTab 
          digitalResources={digitalResources}
          openModal={openModal}
          getStatusBadge={getStatusBadge}
        />
      )}
      {activeTab === 'reports' && (
        <ReportsTab 
          books={books}
          borrowedBooks={borrowedBooks}
        />
      )}

      <LibraryModal 
        showModal={showModal}
        modalType={modalType}
        selectedItem={selectedItem}
        closeModal={closeModal}
        getStatusBadge={getStatusBadge}
        calculateDaysOverdue={calculateDaysOverdue}
      />
    </div>
  )
}

export default LibraryManagement
