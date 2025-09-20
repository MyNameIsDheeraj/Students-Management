import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Sidebar from './components/Layout/Sidebar'
import Header from './components/Layout/Header'
import Dashboard from './components/Dashboard/Dashboard'
import StudentProfile from './components/Students/StudentProfile'
import StudentPortal from './components/Students/StudentPortal'
import TeacherManagement from './components/Teachers/TeacherManagement'
import ParentPortal from './components/Parents/ParentPortal'
import AdminPanel from './components/Admin/AdminPanel'
import Authentication from './components/Auth/Authentication'
import AssignmentManagement from './components/Assignments/AssignmentManagement'
import AttendanceManagement from './components/Attendance/AttendanceManagement'
import CourseManagement from './components/Courses/CourseManagement'
import ExamManagement from './components/Exams/ExamManagement'
import LibraryManagement from './components/Library/LibraryManagement'
import Communication from './components/Communication/Communication'
import Reports from './components/Reports/Reports'
import FeeManagement from './components/Finance/FeeManagement'
import UserProfilePage from './components/UserProfile/UserProfilePage'
import { SearchProvider } from './context/SearchContext'
import { NotificationProvider } from './context/NotificationContext'
import { UserProfileProvider } from './context/UserProfileContext'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [userRole, setUserRole] = useState('admin')
  const [sidebarOpen, setSidebarOpen] = useState(false)
  
  // Close sidebar when window is resized to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setSidebarOpen(false)
      }
    }
    
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Close sidebar when clicking outside of it on mobile
  useEffect(() => {
    const handleClickOutside = (event) => {
      const sidebar = document.querySelector('.sidebar')
      const menuButton = document.querySelector('.btn.btn-outline') // The hamburger menu button
      
      if (sidebarOpen && 
          sidebar && 
          !sidebar.contains(event.target) && 
          menuButton && 
          !menuButton.contains(event.target)) {
        setSidebarOpen(false)
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [sidebarOpen])

  // Redirect to appropriate dashboard based on user role
  const getDefaultDashboard = () => {
    switch (userRole) {
      case 'admin':
        return '/admin'
      case 'student':
        return '/student-portal'
      case 'teacher':
        return '/teachers'
      case 'parent':
        return '/parents'
      default:
        return '/dashboard'
    }
  }

  return (
    <SearchProvider>
      <NotificationProvider userRole={userRole}>
        <UserProfileProvider userRole={userRole}>
          <Router>
            <div className="app">
              {isAuthenticated && (
                <Sidebar 
                  userRole={userRole} 
                  isOpen={sidebarOpen}
                  onClose={() => setSidebarOpen(false)}
                />
              )}
              <div className={isAuthenticated ? "main-content" : ""}>
                {isAuthenticated && (
                  <Header 
                    onMenuClick={() => setSidebarOpen(!sidebarOpen)}
                    onLogout={() => setIsAuthenticated(false)}
                    userRole={userRole}
                  />
                )}
                <Routes>
                  <Route 
                    path="/" 
                    element={isAuthenticated ? <Navigate to={getDefaultDashboard()} replace /> : <Authentication onLogin={(role) => {
                      setIsAuthenticated(true)
                      setUserRole(role)
                    }} />} 
                  />
                  {isAuthenticated ? (
                    <>
                      <Route path="/dashboard" element={<Dashboard userRole={userRole} />} />
                      <Route path="/students" element={<StudentProfile />} />
                      <Route path="/student-portal" element={<StudentPortal />} />
                      <Route path="/teachers" element={<TeacherManagement />} />
                      <Route path="/parents" element={<ParentPortal />} />
                      <Route path="/admin" element={<AdminPanel />} />
                      <Route path="/assignments" element={<AssignmentManagement userRole={userRole} />} />
                      <Route path="/attendance" element={<AttendanceManagement />} />
                      <Route path="/courses" element={<CourseManagement />} />
                      <Route path="/exams" element={<ExamManagement />} />
                      <Route path="/library" element={<LibraryManagement />} />
                      <Route path="/communication" element={<Communication />} />
                      <Route path="/reports" element={<Reports />} />
                      <Route path="/finance" element={<FeeManagement />} />
                      <Route path="/profile" element={<UserProfilePage userRole={userRole} />} />
                    </>
                  ) : (
                    <Route path="*" element={<Navigate to="/" replace />} />
                  )}
                </Routes>
              </div>
            </div>
          </Router>
        </UserProfileProvider>
      </NotificationProvider>
    </SearchProvider>
  )
}

export default App
