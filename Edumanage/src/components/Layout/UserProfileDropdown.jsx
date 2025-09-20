import React, { useState, useRef, useEffect } from 'react';
import { User, Settings, LogOut, Edit, Eye, EyeOff, BookOpen, Clipboard, Calendar, Users, BarChart2, MessageSquare, FileText } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const UserProfileDropdown = ({ userRole, onLogout }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showFullDetails, setShowFullDetails] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // User data based on role
  const getUserData = () => {
    switch (userRole) {
      case 'admin':
        return {
          name: 'John Admin',
          email: 'admin@edumanage.edu',
          role: 'Administrator',
          joinDate: '2020-01-15',
          lastLogin: '2023-06-15 09:30',
          permissions: [
            'Full system access',
            'User management',
            'Data analytics',
            'System configuration'
          ]
        };
      case 'student':
        return {
          name: 'John Student',
          email: 'student@edumanage.edu',
          role: 'Student',
          studentId: 'STU-2023-001',
          grade: '10th Grade',
          section: 'A',
          guardian: 'Michael Parent',
          joinDate: '2022-08-15',
          lastLogin: '2023-06-15 08:45',
          permissions: [
            'View own profile',
            'View grades',
            'View assignments',
            'Submit assignments'
          ]
        };
      case 'teacher':
        return {
          name: 'John Teacher',
          email: 'teacher@edumanage.edu',
          role: 'Teacher',
          employeeId: 'EMP-2020-001',
          subject: 'Mathematics',
          classes: ['10A', '11B', '12C'],
          joinDate: '2020-08-15',
          lastLogin: '2023-06-15 08:30',
          permissions: [
            'Manage class rosters',
            'Post assignments',
            'Grade submissions',
            'View student profiles'
          ]
        };
      case 'parent':
        return {
          name: 'John Parent',
          email: 'parent@edumanage.edu',
          role: 'Parent',
          student: 'John Student',
          relation: 'Father',
          joinDate: '2022-08-15',
          lastLogin: '2023-06-15 08:15',
          permissions: [
            'View child\'s grades',
            'View attendance',
            'View assignments',
            'Communicate with teachers'
          ]
        };
      default:
        return {
          name: 'User',
          email: 'user@edumanage.edu',
          role: 'User',
          joinDate: '2023-01-01',
          permissions: ['Basic access']
        };
    }
  };

  const userData = getUserData();

  // Handle navigation to different pages
  const handleNavigation = (path) => {
    navigate(path);
    setIsOpen(false);
  };

  // Handle action clicks based on role
  const handleActionClick = (action) => {
    switch (userRole) {
      case 'admin':
        switch (action) {
          case 'User Management':
            handleNavigation('/admin');
            break;
          case 'System Settings':
            handleNavigation('/admin');
            break;
          case 'Audit Logs':
            // For demo purposes, we'll navigate to reports
            handleNavigation('/reports');
            break;
          default:
            break;
        }
        break;
      case 'student':
        switch (action) {
          case 'View Grades':
            handleNavigation('/student-portal');
            break;
          case 'My Assignments':
            handleNavigation('/assignments');
            break;
          case 'Class Schedule':
            // For demo purposes, we'll navigate to dashboard
            handleNavigation('/');
            break;
          default:
            break;
        }
        break;
      case 'teacher':
        switch (action) {
          case 'Class Rosters':
            handleNavigation('/teachers');
            break;
          case 'Grade Books':
            handleNavigation('/teachers');
            break;
          case 'Lesson Plans':
            // For demo purposes, we'll navigate to courses
            handleNavigation('/courses');
            break;
          default:
            break;
        }
        break;
      case 'parent':
        switch (action) {
          case 'Child\'s Grades':
            handleNavigation('/parents');
            break;
          case 'Attendance Report':
            handleNavigation('/parents');
            break;
          case 'Communication':
            handleNavigation('/communication');
            break;
          default:
            break;
        }
        break;
      default:
        break;
    }
  };

  // Role-based actions
  const getRoleActions = () => {
    switch (userRole) {
      case 'admin':
        return [
          { label: 'User Management', icon: <Users size={16} />, action: 'User Management' },
          { label: 'System Settings', icon: <Settings size={16} />, action: 'System Settings' },
          { label: 'Audit Logs', icon: <FileText size={16} />, action: 'Audit Logs' }
        ];
      case 'student':
        return [
          { label: 'View Grades', icon: <BarChart2 size={16} />, action: 'View Grades' },
          { label: 'My Assignments', icon: <Clipboard size={16} />, action: 'My Assignments' },
          { label: 'Class Schedule', icon: <Calendar size={16} />, action: 'Class Schedule' }
        ];
      case 'teacher':
        return [
          { label: 'Class Rosters', icon: <Users size={16} />, action: 'Class Rosters' },
          { label: 'Grade Books', icon: <BarChart2 size={16} />, action: 'Grade Books' },
          { label: 'Lesson Plans', icon: <BookOpen size={16} />, action: 'Lesson Plans' }
        ];
      case 'parent':
        return [
          { label: 'Child\'s Grades', icon: <BarChart2 size={16} />, action: 'Child\'s Grades' },
          { label: 'Attendance Report', icon: <Clipboard size={16} />, action: 'Attendance Report' },
          { label: 'Communication', icon: <MessageSquare size={16} />, action: 'Communication' }
        ];
      default:
        return [];
    }
  };

  const roleActions = getRoleActions();

  // Handle edit profile
  const handleEditProfile = () => {
    navigate('/profile');
    setIsOpen(false);
  };

  // Handle logout with navigation to login page
  const handleLogout = () => {
    // Navigate to login page first
    navigate('/')
    // Then call the logout function
    onLogout()
    setIsOpen(false)
  };

  return (
    <div className="user-profile-dropdown" ref={dropdownRef}>
      <div 
        className="user-profile-trigger"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="user-avatar">
          <User size={18} />
        </div>
        <div className="user-info">
          <div className="user-name">{userData.name}</div>
          <div className="user-role">{userData.role}</div>
        </div>
      </div>

      {isOpen && (
        <div className="user-profile-panel">
          <div className="user-profile-header">
            <div className="user-avatar-large">
              <User size={32} />
            </div>
            <div className="user-profile-info">
              <h3>{userData.name}</h3>
              <p>{userData.email}</p>
              <span className="user-role-badge">{userData.role}</span>
            </div>
          </div>

          <div className="user-profile-details">
            <div className="detail-item">
              <span className="detail-label">Role:</span>
              <span className="detail-value">{userData.role}</span>
            </div>
            
            {userData.studentId && (
              <div className="detail-item">
                <span className="detail-label">Student ID:</span>
                <span className="detail-value">{userData.studentId}</span>
              </div>
            )}
            
            {userData.employeeId && (
              <div className="detail-item">
                <span className="detail-label">Employee ID:</span>
                <span className="detail-value">{userData.employeeId}</span>
              </div>
            )}
            
            {userData.grade && (
              <div className="detail-item">
                <span className="detail-label">Grade:</span>
                <span className="detail-value">{userData.grade}</span>
              </div>
            )}
            
            {userData.section && (
              <div className="detail-item">
                <span className="detail-label">Section:</span>
                <span className="detail-value">{userData.section}</span>
              </div>
            )}
            
            {userData.subject && (
              <div className="detail-item">
                <span className="detail-label">Subject:</span>
                <span className="detail-value">{userData.subject}</span>
              </div>
            )}
            
            {userData.classes && (
              <div className="detail-item">
                <span className="detail-label">Classes:</span>
                <span className="detail-value">{userData.classes.join(', ')}</span>
              </div>
            )}
            
            {userData.student && (
              <div className="detail-item">
                <span className="detail-label">Student:</span>
                <span className="detail-value">{userData.student}</span>
              </div>
            )}
            
            {userData.guardian && (
              <div className="detail-item">
                <span className="detail-label">Guardian:</span>
                <span className="detail-value">{showFullDetails ? userData.guardian : '••••••••'}</span>
                <button 
                  className="toggle-details"
                  onClick={() => setShowFullDetails(!showFullDetails)}
                >
                  {showFullDetails ? <EyeOff size={14} /> : <Eye size={14} />}
                </button>
              </div>
            )}
            
            <div className="detail-item">
              <span className="detail-label">Joined:</span>
              <span className="detail-value">{userData.joinDate}</span>
            </div>
            
            <div className="detail-item">
              <span className="detail-label">Last Login:</span>
              <span className="detail-value">{userData.lastLogin}</span>
            </div>
          </div>

          <div className="user-permissions">
            <h4>Permissions</h4>
            <ul>
              {userData.permissions.map((permission, index) => (
                <li key={index}>{permission}</li>
              ))}
            </ul>
          </div>

          {roleActions.length > 0 && (
            <div className="user-actions">
              <h4>Quick Actions</h4>
              <div className="actions-grid">
                {roleActions.map((action, index) => (
                  <button 
                    key={index} 
                    className="action-button"
                    onClick={() => handleActionClick(action.action)}
                  >
                    {action.icon}
                    <span>{action.label}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="user-profile-footer">
            <button className="profile-action-button" onClick={handleEditProfile}>
              <Edit size={16} />
              <span>Edit Profile</span>
            </button>
            <button className="profile-action-button logout" onClick={handleLogout}>
              <LogOut size={16} />
              <span>Logout</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfileDropdown;