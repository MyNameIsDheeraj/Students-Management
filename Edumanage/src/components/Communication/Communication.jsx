import React, { useState } from 'react'
import { MessageSquare, Bell, Calendar, Send, Plus, Edit, Trash2, Users, Mail, Smartphone } from 'lucide-react'
import AnnouncementsTab from './submodules/AnnouncementsTab'
import MessagesTab from './submodules/MessagesTab'
import EventsTab from './submodules/EventsTab'
import NotificationsTab from './submodules/NotificationsTab'
import CommunicationModal from './submodules/CommunicationModal'

const Communication = () => {
  const [activeTab, setActiveTab] = useState('announcements')
  const [showModal, setShowModal] = useState(false)
  const [modalType, setModalType] = useState('')
  const [selectedItem, setSelectedItem] = useState(null)

  const announcements = [
    {
      id: 1,
      title: 'Parent-Teacher Meeting Scheduled',
      message: 'Dear parents, we are pleased to announce that the Parent-Teacher Meeting for this term will be held on January 28, 2025. Please mark your calendars.',
      targetAudience: 'All Parents',
      createdBy: 'Principal',
      createdDate: '2025-01-20',
      status: 'Published',
      urgent: false,
      attachments: ['ptm_schedule.pdf']
    },
    {
      id: 2,
      title: 'Science Fair 2025',
      message: 'Students of grades 9-12 are invited to participate in the annual Science Fair. Registration deadline is February 1, 2025.',
      targetAudience: 'Students (9-12)',
      createdBy: 'Science Department',
      createdDate: '2025-01-18',
      status: 'Published',
      urgent: false,
      attachments: ['science_fair_guidelines.pdf']
    },
    {
      id: 3,
      title: 'Emergency: School Closure',
      message: 'Due to severe weather conditions, the school will remain closed tomorrow (January 21, 2025). All classes are suspended.',
      targetAudience: 'All School',
      createdBy: 'Administration',
      createdDate: '2025-01-20',
      status: 'Published',
      urgent: true,
      attachments: []
    }
  ]

  const messages = [
    {
      id: 1,
      from: 'John Doe (Parent)',
      to: 'Ms. Sarah Johnson (Math Teacher)',
      subject: 'Question about homework assignment',
      message: 'Hello Ms. Johnson, I wanted to ask about the algebra assignment given yesterday. My child is having difficulty with problem #5.',
      timestamp: '2025-01-20 10:30 AM',
      status: 'Unread',
      thread: []
    },
    {
      id: 2,
      from: 'Dr. Principal',
      to: 'All Teachers',
      subject: 'Staff Meeting Tomorrow',
      message: 'Please attend the mandatory staff meeting tomorrow at 3:00 PM in the conference room.',
      timestamp: '2025-01-19 02:15 PM',
      status: 'Read',
      thread: []
    }
  ]

  const events = [
    {
      id: 1,
      title: 'Parent-Teacher Meeting',
      description: 'Individual meetings with teachers to discuss student progress',
      date: '2025-01-28',
      time: '9:00 AM - 5:00 PM',
      venue: 'School Campus',
      type: 'Meeting',
      targetAudience: 'Parents & Teachers',
      organizer: 'Administration'
    },
    {
      id: 2,
      title: 'Science Fair',
      description: 'Annual science exhibition showcasing student projects',
      date: '2025-02-05',
      time: '10:00 AM - 4:00 PM',
      venue: 'School Auditorium',
      type: 'Event',
      targetAudience: 'All School',
      organizer: 'Science Department'
    },
    {
      id: 3,
      title: 'Final Examinations Begin',
      description: 'Final examinations for all classes',
      date: '2025-02-10',
      time: '9:00 AM onwards',
      venue: 'Examination Halls',
      type: 'Exam',
      targetAudience: 'All Students',
      organizer: 'Examination Committee'
    }
  ]

  const notifications = [
    {
      id: 1,
      title: 'Assignment Due Reminder',
      message: 'Mathematics assignment is due tomorrow',
      recipients: ['Students - Class 10A'],
      channels: ['Email', 'SMS'],
      scheduledTime: '2025-01-21 08:00 AM',
      status: 'Scheduled'
    },
    {
      id: 2,
      title: 'Fee Payment Reminder',
      message: 'Next installment due on January 30, 2025',
      recipients: ['All Parents'],
      channels: ['Email', 'Push Notification'],
      scheduledTime: '2025-01-25 10:00 AM',
      status: 'Scheduled'
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
      'Published': 'badge-success',
      'Draft': 'badge-warning',
      'Scheduled': 'badge-info',
      'Read': 'badge-success',
      'Unread': 'badge-warning'
    }
    return badges[status] || 'badge-secondary'
  }

  const getEventTypeBadge = (type) => {
    const badges = {
      'Meeting': 'badge-warning',
      'Event': 'badge-info',
      'Exam': 'badge-danger',
      'Holiday': 'badge-success'
    }
    return badges[type] || 'badge-secondary'
  }

  return (
    <div className="container">
      <div style={{ marginBottom: '30px' }}>
        <h1>Communication Center</h1>
        <p style={{ color: '#666' }}>Manage announcements, messages, events, and notifications</p>
      </div>

      <div className="nav-tabs">
        <button 
          className={`nav-tab ${activeTab === 'announcements' ? 'active' : ''}`}
          onClick={() => setActiveTab('announcements')}
        >
          <Bell size={16} style={{ marginRight: '5px' }} />
          Announcements
        </button>
        <button 
          className={`nav-tab ${activeTab === 'messages' ? 'active' : ''}`}
          onClick={() => setActiveTab('messages')}
        >
          <MessageSquare size={16} style={{ marginRight: '5px' }} />
          Messages
        </button>
        <button 
          className={`nav-tab ${activeTab === 'events' ? 'active' : ''}`}
          onClick={() => setActiveTab('events')}
        >
          <Calendar size={16} style={{ marginRight: '5px' }} />
          Events
        </button>
        <button 
          className={`nav-tab ${activeTab === 'notifications' ? 'active' : ''}`}
          onClick={() => setActiveTab('notifications')}
        >
          <Smartphone size={16} style={{ marginRight: '5px' }} />
          Notifications
        </button>
      </div>

      {activeTab === 'announcements' && (
        <AnnouncementsTab 
          announcements={announcements}
          openModal={openModal}
          getStatusBadge={getStatusBadge}
        />
      )}
      {activeTab === 'messages' && (
        <MessagesTab 
          messages={messages}
          openModal={openModal}
          getStatusBadge={getStatusBadge}
        />
      )}
      {activeTab === 'events' && (
        <EventsTab 
          events={events}
          openModal={openModal}
          getEventTypeBadge={getEventTypeBadge}
        />
      )}
      {activeTab === 'notifications' && (
        <NotificationsTab 
          notifications={notifications}
          openModal={openModal}
          getStatusBadge={getStatusBadge}
        />
      )}

      <CommunicationModal 
        showModal={showModal}
        modalType={modalType}
        selectedItem={selectedItem}
        closeModal={closeModal}
        getStatusBadge={getStatusBadge}
        getEventTypeBadge={getEventTypeBadge}
      />
    </div>
  )
}

export default Communication
