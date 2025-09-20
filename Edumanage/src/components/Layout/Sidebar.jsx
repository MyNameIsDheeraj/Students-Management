import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { 
  Home, Users, GraduationCap, UserCheck, Shield, 
  FileText, Calendar, BookOpen, School, Library, 
  MessageSquare, BarChart3, DollarSign, Settings 
} from 'lucide-react'

const Sidebar = ({ userRole, isOpen, onClose }) => {
  const location = useLocation()

  // Get the dashboard path based on user role
  const getDashboardPath = () => {
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
        return '/'
    }
  }

  const menuItems = {
    admin: [
      { path: '/admin', icon: Home, label: 'Dashboard' },
      { path: '/students', icon: Users, label: 'Students' },
      { path: '/teachers', icon: GraduationCap, label: 'Teachers' },
      { path: '/courses', icon: School, label: 'Courses' },
      { path: '/assignments', icon: FileText, label: 'Assignments' },
      { path: '/attendance', icon: UserCheck, label: 'Attendance' },
      { path: '/exams', icon: BookOpen, label: 'Exams' },
      { path: '/library', icon: Library, label: 'Library' },
      { path: '/communication', icon: MessageSquare, label: 'Communication' },
      { path: '/reports', icon: BarChart3, label: 'Reports' },
      { path: '/finance', icon: DollarSign, label: 'Finance' },
    ],
    teacher: [
      { path: '/teachers', icon: Home, label: 'Dashboard' },
      { path: '/students', icon: Users, label: 'My Students' },
      { path: '/assignments', icon: FileText, label: 'Assignments' },
      { path: '/attendance', icon: UserCheck, label: 'Attendance' },
      { path: '/exams', icon: BookOpen, label: 'Exams' },
      { path: '/communication', icon: MessageSquare, label: 'Communication' }
    ],
    student: [
      { path: '/student-portal', icon: Home, label: 'My Portal' },
      { path: '/assignments', icon: FileText, label: 'Assignments' },
      { path: '/library', icon: Library, label: 'Library' },
      { path: '/communication', icon: MessageSquare, label: 'Messages' }
    ],
    parent: [
      { path: '/parents', icon: Home, label: 'Parent Portal' },
      { path: '/communication', icon: MessageSquare, label: 'Messages' },
      { path: '/finance', icon: DollarSign, label: 'Fees' }
    ]
  }

  const items = menuItems[userRole] || menuItems.admin
  const dashboardPath = getDashboardPath()

  return (
    <>
      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <Link 
            to={dashboardPath}
            onClick={onClose}
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '12px',
              marginBottom: '16px',
              textDecoration: 'none'
            }}
          >
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '12px',
              backgroundColor: 'var(--primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontWeight: 'bold',
              fontSize: '18px'
            }}>
              E
            </div>
            <div>
              <h2 style={{ 
                fontSize: '20px', 
                fontWeight: '700', 
                margin: 0,
                color: 'var(--text-primary)'
              }}>EduManage</h2>
              <p style={{ 
                fontSize: '12px', 
                margin: 0,
                color: 'var(--text-secondary)'
              }}>{userRole.charAt(0).toUpperCase() + userRole.slice(1)} Portal</p>
            </div>
          </Link>
        </div>
        <nav className="sidebar-nav">
          {items.map((item) => {
            const Icon = item.icon
            // Check if this is the dashboard item or if the current path matches
            const isActive = location.pathname === item.path || 
                            (item.path === dashboardPath && location.pathname === dashboardPath)
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`sidebar-nav-item ${isActive ? 'active' : ''}`}
                onClick={onClose}
                style={{
                  margin: '4px 12px',
                  borderRadius: 'var(--border-radius)',
                  paddingLeft: '16px',
                  transition: 'all 0.2s ease'
                }}
              >
                <Icon size={20} />
                <span style={{ 
                  marginLeft: '12px',
                  fontWeight: isActive ? '600' : '500'
                }}>{item.label}</span>
              </Link>
            )
          })}
        </nav>
      </aside>
      {isOpen && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 99,
            display: 'block'
          }}
          onClick={onClose}
        />
      )}
    </>
  )
}

export default Sidebar
