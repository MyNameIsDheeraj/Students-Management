import React from 'react'
import { Users, GraduationCap, BookOpen, DollarSign, TrendingUp, Calendar, Bell, Award } from 'lucide-react'
import StatsCards from './submodules/StatsCards'
import EnrollmentTrendChart from './submodules/EnrollmentTrendChart'
import PerformanceChart from './submodules/PerformanceChart'
import AttendanceChart from './submodules/AttendanceChart'
import RecentActivities from './submodules/RecentActivities'
import UpcomingEvents from './submodules/UpcomingEvents'

const Dashboard = ({ userRole }) => {
  const enrollmentData = [
    { month: 'Jan', students: 450 },
    { month: 'Feb', students: 465 },
    { month: 'Mar', students: 480 },
    { month: 'Apr', students: 495 },
    { month: 'May', students: 510 },
    { month: 'Jun', students: 525 }
  ]

  const performanceData = [
    { subject: 'Math', average: 85 },
    { subject: 'Science', average: 78 },
    { subject: 'English', average: 82 },
    { subject: 'History', average: 75 },
    { subject: 'Geography', average: 80 }
  ]

  const attendanceData = [
    { name: 'Present', value: 92, color: 'var(--success)' },
    { name: 'Absent', value: 8, color: 'var(--danger)' }
  ]

  const recentActivities = [
    { id: 1, type: 'admission', message: 'New student John Doe admitted to Class 10A', time: '2 hours ago' },
    { id: 2, type: 'exam', message: 'Mid-term exam results published for Class 9', time: '4 hours ago' },
    { id: 3, type: 'fee', message: 'Fee payment received from Sarah Wilson', time: '6 hours ago' },
    { id: 4, type: 'assignment', message: 'New assignment posted for Mathematics Class 11', time: '1 day ago' }
  ]

  const upcomingEvents = [
    { id: 1, title: 'Parent-Teacher Meeting', date: '2025-01-25', type: 'meeting' },
    { id: 2, title: 'Science Fair', date: '2025-01-28', type: 'event' },
    { id: 3, title: 'Final Exams Begin', date: '2025-02-01', type: 'exam' },
    { id: 4, title: 'Winter Break', date: '2025-02-15', type: 'holiday' }
  ]

  const getStatsForRole = () => {
    switch (userRole) {
      case 'admin':
        return [
          { title: 'Total Students', value: '1,245', icon: Users, color: 'var(--primary)', change: '+5.2%' },
          { title: 'Total Teachers', value: '87', icon: GraduationCap, color: 'var(--success)', change: '+2.1%' },
          { title: 'Active Courses', value: '24', icon: BookOpen, color: 'var(--warning)', change: '+1.5%' },
          { title: 'Revenue', value: '₹12.5L', icon: DollarSign, color: 'var(--info)', change: '+8.3%' }
        ]
      case 'teacher':
        return [
          { title: 'My Students', value: '156', icon: Users, color: 'var(--primary)' },
          { title: 'My Classes', value: '8', icon: BookOpen, color: 'var(--success)' },
          { title: 'Assignments', value: '23', icon: Award, color: 'var(--warning)' },
          { title: 'Avg Attendance', value: '94%', icon: TrendingUp, color: 'var(--info)' }
        ]
      case 'student':
        return [
          { title: 'My GPA', value: '8.7', icon: Award, color: 'var(--primary)' },
          { title: 'Attendance', value: '96%', icon: TrendingUp, color: 'var(--success)' },
          { title: 'Assignments', value: '12', icon: BookOpen, color: 'var(--warning)' },
          { title: 'Pending Fees', value: '₹5,000', icon: DollarSign, color: 'var(--danger)' }
        ]
      default:
        return []
    }
  }

  const stats = getStatsForRole()

  return (
    <div className="container">
      <div style={{ marginBottom: '30px' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '8px' }}>
          {userRole === 'admin' ? 'Admin Dashboard' : 
           userRole === 'teacher' ? 'Teacher Dashboard' : 
           userRole === 'student' ? 'Student Dashboard' : 'Dashboard'}
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}>
          Welcome back! Here's what's happening today.
        </p>
      </div>

      <StatsCards stats={stats} />

      {userRole === 'admin' && (
        <div className="grid grid-2" style={{ marginBottom: '30px', gap: '24px' }}>
          <EnrollmentTrendChart enrollmentData={enrollmentData} />
          <PerformanceChart performanceData={performanceData} />
        </div>
      )}

      <div className="grid grid-3" style={{ gap: '24px' }}>
        <AttendanceChart attendanceData={attendanceData} />
        <RecentActivities recentActivities={recentActivities} />
        <UpcomingEvents upcomingEvents={upcomingEvents} />
      </div>
    </div>
  )
}

export default Dashboard
