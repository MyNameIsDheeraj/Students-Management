import React, { useState } from 'react'
import { BarChart3, Download, Filter, TrendingUp, Users, DollarSign, BookOpen, Calendar } from 'lucide-react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts'

const Reports = () => {
  const [activeTab, setActiveTab] = useState('student')
  const [selectedFilters, setSelectedFilters] = useState({
    class: '',
    subject: '',
    dateRange: '',
    term: ''
  })

  const studentPerformanceData = [
    { class: '8A', avgGPA: 8.2, students: 30, attendance: 94 },
    { class: '8B', avgGPA: 7.8, students: 28, attendance: 91 },
    { class: '9A', avgGPA: 8.5, students: 32, attendance: 96 },
    { class: '9B', avgGPA: 8.1, students: 29, attendance: 93 },
    { class: '10A', avgGPA: 8.7, students: 35, attendance: 95 },
    { class: '10B', avgGPA: 8.3, students: 33, attendance: 92 }
  ]

  const subjectPerformanceData = [
    { subject: 'Mathematics', avgMarks: 85, passRate: 92, students: 180 },
    { subject: 'Physics', avgMarks: 78, passRate: 88, students: 120 },
    { subject: 'Chemistry', avgMarks: 82, passRate: 90, students: 120 },
    { subject: 'English', avgMarks: 88, passRate: 95, students: 200 },
    { subject: 'Computer Science', avgMarks: 91, passRate: 97, students: 80 }
  ]

  const attendanceTrendData = [
    { month: 'Sep', attendance: 94 },
    { month: 'Oct', attendance: 96 },
    { month: 'Nov', attendance: 91 },
    { month: 'Dec', attendance: 89 },
    { month: 'Jan', attendance: 93 }
  ]

  const teacherPerformanceData = [
    { teacher: 'Dr. Sarah Johnson', subject: 'Mathematics', avgClassGPA: 8.7, attendance: 96, studentFeedback: 4.8 },
    { teacher: 'Mr. David Wilson', subject: 'Physics', avgClassGPA: 8.2, attendance: 94, studentFeedback: 4.6 },
    { teacher: 'Ms. Emily Brown', subject: 'English', avgClassGPA: 8.9, attendance: 98, studentFeedback: 4.9 },
    { teacher: 'Dr. Michael Chen', subject: 'Chemistry', avgClassGPA: 8.4, attendance: 95, studentFeedback: 4.7 }
  ]

  const feeCollectionData = [
    { month: 'Sep', collected: 450000, pending: 50000 },
    { month: 'Oct', collected: 480000, pending: 45000 },
    { month: 'Nov', collected: 470000, pending: 55000 },
    { month: 'Dec', collected: 490000, pending: 40000 },
    { month: 'Jan', collected: 485000, pending: 42000 }
  ]

  const enrollmentData = [
    { grade: 'Grade 8', enrolled: 58, capacity: 70 },
    { grade: 'Grade 9', enrolled: 61, capacity: 70 },
    { grade: 'Grade 10', enrolled: 68, capacity: 70 },
    { grade: 'Grade 11', enrolled: 45, capacity: 60 },
    { grade: 'Grade 12', enrolled: 38, capacity: 60 }
  ]

  const genderDistribution = [
    { name: 'Male', value: 52, color: '#007bff' },
    { name: 'Female', value: 48, color: '#e83e8c' }
  ]

  const renderStudentReports = () => (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h3>Student Performance Reports</h3>
        <div style={{ display: 'flex', gap: '10px' }}>
          <select 
            className="form-control" 
            style={{ width: '120px' }}
            value={selectedFilters.class}
            onChange={(e) => setSelectedFilters({...selectedFilters, class: e.target.value})}
          >
            <option value="">All Classes</option>
            <option value="8A">8A</option>
            <option value="8B">8B</option>
            <option value="9A">9A</option>
            <option value="9B">9B</option>
            <option value="10A">10A</option>
            <option value="10B">10B</option>
          </select>
          <select 
            className="form-control" 
            style={{ width: '120px' }}
            value={selectedFilters.term}
            onChange={(e) => setSelectedFilters({...selectedFilters, term: e.target.value})}
          >
            <option value="">All Terms</option>
            <option value="mid-term">Mid-term</option>
            <option value="final">Final</option>
            <option value="unit-test">Unit Test</option>
          </select>
          <button className="btn btn-primary">
            <Download size={16} />
            Export Report
          </button>
        </div>
      </div>

      <div className="grid grid-2" style={{ marginBottom: '30px' }}>
        <div className="card">
          <h4>Class-wise Performance</h4>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={studentPerformanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="class" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="avgGPA" fill="#007bff" name="Average GPA" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="card">
          <h4>Attendance Trend</h4>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={attendanceTrendData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="attendance" stroke="#28a745" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="card">
        <h4>Detailed Performance Analysis</h4>
        <table className="table">
          <thead>
            <tr>
              <th>Class</th>
              <th>Total Students</th>
              <th>Average GPA</th>
              <th>Attendance %</th>
              <th>Top Performer</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {studentPerformanceData.map((classData, index) => (
              <tr key={index}>
                <td><strong>{classData.class}</strong></td>
                <td>{classData.students}</td>
                <td>
                  <span style={{ 
                    color: classData.avgGPA >= 8.5 ? '#28a745' : classData.avgGPA >= 8.0 ? '#ffc107' : '#dc3545',
                    fontWeight: 'bold'
                  }}>
                    {classData.avgGPA}
                  </span>
                </td>
                <td>
                  <span style={{ 
                    color: classData.attendance >= 95 ? '#28a745' : classData.attendance >= 90 ? '#ffc107' : '#dc3545'
                  }}>
                    {classData.attendance}%
                  </span>
                </td>
                <td>John Doe (9.2 GPA)</td>
                <td>
                  <button className="btn btn-secondary" style={{ marginRight: '5px' }}>
                    <BarChart3 size={14} />
                    Details
                  </button>
                  <button className="btn btn-primary">
                    <Download size={14} />
                    Export
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )

  const renderTeacherReports = () => (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h3>Teacher Performance Reports</h3>
        <div style={{ display: 'flex', gap: '10px' }}>
          <select className="form-control" style={{ width: '150px' }}>
            <option value="">All Subjects</option>
            <option value="mathematics">Mathematics</option>
            <option value="physics">Physics</option>
            <option value="chemistry">Chemistry</option>
            <option value="english">English</option>
          </select>
          <button className="btn btn-primary">
            <Download size={16} />
            Export Report
          </button>
        </div>
      </div>

      <div className="grid grid-2" style={{ marginBottom: '30px' }}>
        <div className="card">
          <h4>Subject-wise Performance</h4>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={subjectPerformanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="subject" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="avgMarks" fill="#17a2b8" name="Average Marks" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="card">
          <h4>Pass Rate by Subject</h4>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={subjectPerformanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="subject" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="passRate" fill="#28a745" name="Pass Rate %" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="card">
        <h4>Teacher Performance Summary</h4>
        <table className="table">
          <thead>
            <tr>
              <th>Teacher</th>
              <th>Subject</th>
              <th>Class Avg GPA</th>
              <th>Attendance %</th>
              <th>Student Feedback</th>
              <th>Performance Rating</th>
            </tr>
          </thead>
          <tbody>
            {teacherPerformanceData.map((teacher, index) => (
              <tr key={index}>
                <td><strong>{teacher.teacher}</strong></td>
                <td>{teacher.subject}</td>
                <td>
                  <span style={{ 
                    color: teacher.avgClassGPA >= 8.5 ? '#28a745' : teacher.avgClassGPA >= 8.0 ? '#ffc107' : '#dc3545',
                    fontWeight: 'bold'
                  }}>
                    {teacher.avgClassGPA}
                  </span>
                </td>
                <td>{teacher.attendance}%</td>
                <td>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <span>{teacher.studentFeedback}/5.0</span>
                    <div style={{ display: 'flex' }}>
                      {[...Array(5)].map((_, i) => (
                        <span key={i} style={{ 
                          color: i < Math.floor(teacher.studentFeedback) ? '#ffc107' : '#e9ecef' 
                        }}>
                          ★
                        </span>
                      ))}
                    </div>
                  </div>
                </td>
                <td>
                  <span className={`badge ${
                    teacher.studentFeedback >= 4.5 ? 'badge-success' : 
                    teacher.studentFeedback >= 4.0 ? 'badge-warning' : 'badge-danger'
                  }`}>
                    {teacher.studentFeedback >= 4.5 ? 'Excellent' : 
                     teacher.studentFeedback >= 4.0 ? 'Good' : 'Needs Improvement'}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )

  const renderFinancialReports = () => (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h3>Financial Reports</h3>
        <div style={{ display: 'flex', gap: '10px' }}>
          <input type="date" className="form-control" style={{ width: '150px' }} />
          <input type="date" className="form-control" style={{ width: '150px' }} />
          <button className="btn btn-primary">
            <Download size={16} />
            Export Report
          </button>
        </div>
      </div>

      <div className="grid grid-4" style={{ marginBottom: '30px' }}>
        <div className="stats-card">
          <div className="stats-number">₹24.2L</div>
          <div className="stats-label">Total Collection</div>
        </div>
        <div className="stats-card" style={{ background: 'linear-gradient(135deg, #28a745 0%, #20c997 100%)' }}>
          <div className="stats-number">₹22.0L</div>
          <div className="stats-label">Fees Collected</div>
        </div>
        <div className="stats-card" style={{ background: 'linear-gradient(135deg, #ffc107 0%, #fd7e14 100%)' }}>
          <div className="stats-number">₹2.2L</div>
          <div className="stats-label">Pending Fees</div>
        </div>
        <div className="stats-card" style={{ background: 'linear-gradient(135deg, #dc3545 0%, #e83e8c 100%)' }}>
          <div className="stats-number">9.1%</div>
          <div className="stats-label">Default Rate</div>
        </div>
      </div>

      <div className="grid grid-2" style={{ marginBottom: '30px' }}>
        <div className="card">
          <h4>Monthly Fee Collection</h4>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={feeCollectionData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="collected" fill="#28a745" name="Collected" />
              <Bar dataKey="pending" fill="#dc3545" name="Pending" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="card">
          <h4>Collection Trend</h4>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={feeCollectionData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="collected" stroke="#007bff" strokeWidth={2} name="Collected" />
              <Line type="monotone" dataKey="pending" stroke="#dc3545" strokeWidth={2} name="Pending" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="card">
        <h4>Class-wise Fee Collection Status</h4>
        <table className="table">
          <thead>
            <tr>
              <th>Class</th>
              <th>Total Students</th>
              <th>Total Fees</th>
              <th>Collected</th>
              <th>Pending</th>
              <th>Collection %</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>8A</strong></td>
              <td>30</td>
              <td>₹15,00,000</td>
              <td>₹13,50,000</td>
              <td>₹1,50,000</td>
              <td>90%</td>
              <td><span className="badge badge-success">Good</span></td>
            </tr>
            <tr>
              <td><strong>8B</strong></td>
              <td>28</td>
              <td>₹14,00,000</td>
              <td>₹12,60,000</td>
              <td>₹1,40,000</td>
              <td>90%</td>
              <td><span className="badge badge-success">Good</span></td>
            </tr>
            <tr>
              <td><strong>9A</strong></td>
              <td>32</td>
              <td>₹16,00,000</td>
              <td>₹14,40,000</td>
              <td>₹1,60,000</td>
              <td>90%</td>
              <td><span className="badge badge-success">Good</span></td>
            </tr>
            <tr>
              <td><strong>10A</strong></td>
              <td>35</td>
              <td>₹17,50,000</td>
              <td>₹15,75,000</td>
              <td>₹1,75,000</td>
              <td>90%</td>
              <td><span className="badge badge-success">Good</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )

  const renderEnrollmentReports = () => (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h3>Enrollment Statistics</h3>
        <div style={{ display: 'flex', gap: '10px' }}>
          <select className="form-control" style={{ width: '150px' }}>
            <option value="">Academic Year</option>
            <option value="2024-25">2024-25</option>
            <option value="2023-24">2023-24</option>
            <option value="2022-23">2022-23</option>
          </select>
          <button className="btn btn-primary">
            <Download size={16} />
            Export Report
          </button>
        </div>
      </div>

      <div className="grid grid-4" style={{ marginBottom: '30px' }}>
        <div className="stats-card">
          <div className="stats-number">270</div>
          <div className="stats-label">Total Students</div>
        </div>
        <div className="stats-card" style={{ background: 'linear-gradient(135deg, #28a745 0%, #20c997 100%)' }}>
          <div className="stats-number">25</div>
          <div className="stats-label">New Admissions</div>
        </div>
        <div className="stats-card" style={{ background: 'linear-gradient(135deg, #ffc107 0%, #fd7e14 100%)' }}>
          <div className="stats-number">8</div>
          <div className="stats-label">Transfers Out</div>
        </div>
        <div className="stats-card" style={{ background: 'linear-gradient(135deg, #17a2b8 0%, #6f42c1 100%)' }}>
          <div className="stats-number">82%</div>
          <div className="stats-label">Capacity Utilization</div>
        </div>
      </div>

      <div className="grid grid-2" style={{ marginBottom: '30px' }}>
        <div className="card">
          <h4>Grade-wise Enrollment</h4>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={enrollmentData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="grade" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="enrolled" fill="#007bff" name="Enrolled" />
              <Bar dataKey="capacity" fill="#e9ecef" name="Capacity" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="card">
          <h4>Gender Distribution</h4>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={genderDistribution}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={120}
                dataKey="value"
              >
                {genderDistribution.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div style={{ textAlign: 'center', marginTop: '10px' }}>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
              {genderDistribution.map((item, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <div style={{ 
                    width: '12px', 
                    height: '12px', 
                    backgroundColor: item.color, 
                    borderRadius: '50%' 
                  }}></div>
                  <span style={{ fontSize: '12px' }}>{item.name}: {item.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <h4>Enrollment Trends & Analysis</h4>
        <table className="table">
          <thead>
            <tr>
              <th>Grade</th>
              <th>Capacity</th>
              <th>Enrolled</th>
              <th>Available Seats</th>
              <th>Utilization %</th>
              <th>Waiting List</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {enrollmentData.map((grade, index) => {
              const utilization = Math.round((grade.enrolled / grade.capacity) * 100)
              return (
                <tr key={index}>
                  <td><strong>{grade.grade}</strong></td>
                  <td>{grade.capacity}</td>
                  <td>{grade.enrolled}</td>
                  <td>{grade.capacity - grade.enrolled}</td>
                  <td>
                    <span style={{ 
                      color: utilization >= 90 ? '#dc3545' : utilization >= 80 ? '#ffc107' : '#28a745',
                      fontWeight: 'bold'
                    }}>
                      {utilization}%
                    </span>
                  </td>
                  <td>{utilization >= 100 ? Math.floor(Math.random() * 10) : 0}</td>
                  <td>
                    <span className={`badge ${
                      utilization >= 95 ? 'badge-danger' : 
                      utilization >= 85 ? 'badge-warning' : 'badge-success'
                    }`}>
                      {utilization >= 95 ? 'Full' : utilization >= 85 ? 'High' : 'Available'}
                    </span>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )

  const renderCustomReports = () => (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h3>Custom Report Generator</h3>
        <button className="btn btn-success">
          <Plus size={16} />
          Save Report Template
        </button>
      </div>

      <div className="card" style={{ marginBottom: '30px' }}>
        <h4>Build Custom Report</h4>
        <div className="grid grid-3" style={{ gap: '20px', marginBottom: '20px' }}>
          <div className="form-group">
            <label className="form-label">Report Type</label>
            <select className="form-control">
              <option value="">Select report type...</option>
              <option value="student">Student Data</option>
              <option value="teacher">Teacher Data</option>
              <option value="financial">Financial Data</option>
              <option value="attendance">Attendance Data</option>
              <option value="exam">Exam Results</option>
            </select>
          </div>
          <div className="form-group">
            <label className="form-label">Date Range</label>
            <select className="form-control">
              <option value="">Select range...</option>
              <option value="current-month">Current Month</option>
              <option value="current-term">Current Term</option>
              <option value="current-year">Current Academic Year</option>
              <option value="custom">Custom Range</option>
            </select>
          </div>
          <div className="form-group">
            <label className="form-label">Format</label>
            <select className="form-control">
              <option value="pdf">PDF</option>
              <option value="excel">Excel</option>
              <option value="csv">CSV</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">Filters</label>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <select className="form-control" style={{ width: '150px' }}>
              <option value="">All Classes</option>
              <option value="8A">8A</option>
              <option value="8B">8B</option>
              <option value="9A">9A</option>
              <option value="9B">9B</option>
              <option value="10A">10A</option>
              <option value="10B">10B</option>
            </select>
            <select className="form-control" style={{ width: '150px' }}>
              <option value="">All Subjects</option>
              <option value="mathematics">Mathematics</option>
              <option value="physics">Physics</option>
              <option value="chemistry">Chemistry</option>
              <option value="english">English</option>
            </select>
            <select className="form-control" style={{ width: '150px' }}>
              <option value="">All Teachers</option>
              <option value="sarah-johnson">Dr. Sarah Johnson</option>
              <option value="david-wilson">Mr. David Wilson</option>
              <option value="emily-brown">Ms. Emily Brown</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">Include Fields</label>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px', marginTop: '10px' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <input type="checkbox" defaultChecked />
              Student Names
            </label>
            <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <input type="checkbox" defaultChecked />
              Roll Numbers
            </label>
            <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <input type="checkbox" defaultChecked />
              Grades/Marks
            </label>
            <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <input type="checkbox" />
              Attendance %
            </label>
            <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <input type="checkbox" />
              Parent Contact
            </label>
            <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <input type="checkbox" />
              Fee Status
            </label>
            <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <input type="checkbox" />
              Teacher Comments
            </label>
            <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <input type="checkbox" />
              Exam Dates
            </label>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
          <button className="btn btn-secondary">
            Preview Report
          </button>
          <button className="btn btn-primary">
            <Download size={16} />
            Generate Report
          </button>
        </div>
      </div>

      <div className="card">
        <h4>Saved Report Templates</h4>
        <table className="table">
          <thead>
            <tr>
              <th>Template Name</th>
              <th>Type</th>
              <th>Created Date</th>
              <th>Last Used</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Monthly Performance Report</strong></td>
              <td>Student Performance</td>
              <td>2025-01-15</td>
              <td>2025-01-20</td>
              <td>
                <button className="btn btn-primary" style={{ marginRight: '5px' }}>
                  <Download size={14} />
                  Generate
                </button>
                <button className="btn btn-secondary" style={{ marginRight: '5px' }}>
                  <Edit size={14} />
                  Edit
                </button>
                <button className="btn btn-danger">
                  <Trash2 size={14} />
                  Delete
                </button>
              </td>
            </tr>
            <tr>
              <td><strong>Fee Collection Summary</strong></td>
              <td>Financial</td>
              <td>2025-01-10</td>
              <td>2025-01-18</td>
              <td>
                <button className="btn btn-primary" style={{ marginRight: '5px' }}>
                  <Download size={14} />
                  Generate
                </button>
                <button className="btn btn-secondary" style={{ marginRight: '5px' }}>
                  <Edit size={14} />
                  Edit
                </button>
                <button className="btn btn-danger">
                  <Trash2 size={14} />
                  Delete
                </button>
              </td>
            </tr>
            <tr>
              <td><strong>Teacher Performance Review</strong></td>
              <td>Teacher Analytics</td>
              <td>2025-01-05</td>
              <td>2025-01-15</td>
              <td>
                <button className="btn btn-primary" style={{ marginRight: '5px' }}>
                  <Download size={14} />
                  Generate
                </button>
                <button className="btn btn-secondary" style={{ marginRight: '5px' }}>
                  <Edit size={14} />
                  Edit
                </button>
                <button className="btn btn-danger">
                  <Trash2 size={14} />
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )

  return (
    <div className="container">
      <div style={{ marginBottom: '30px' }}>
        <h1>Reports & Analytics</h1>
        <p style={{ color: '#666' }}>Comprehensive reporting and data analysis for informed decision making</p>
      </div>

      <div className="nav-tabs">
        <button 
          className={`nav-tab ${activeTab === 'student' ? 'active' : ''}`}
          onClick={() => setActiveTab('student')}
        >
          <Users size={16} style={{ marginRight: '5px' }} />
          Student Reports
        </button>
        <button 
          className={`nav-tab ${activeTab === 'teacher' ? 'active' : ''}`}
          onClick={() => setActiveTab('teacher')}
        >
          <BookOpen size={16} style={{ marginRight: '5px' }} />
          Teacher Reports
        </button>
        <button 
          className={`nav-tab ${activeTab === 'financial' ? 'active' : ''}`}
          onClick={() => setActiveTab('financial')}
        >
          <DollarSign size={16} style={{ marginRight: '5px' }} />
          Financial Reports
        </button>
        <button 
          className={`nav-tab ${activeTab === 'enrollment' ? 'active' : ''}`}
          onClick={() => setActiveTab('enrollment')}
        >
          <TrendingUp size={16} style={{ marginRight: '5px' }} />
          Enrollment Stats
        </button>
        <button 
          className={`nav-tab ${activeTab === 'custom' ? 'active' : ''}`}
          onClick={() => setActiveTab('custom')}
        >
          <Filter size={16} style={{ marginRight: '5px' }} />
          Custom Reports
        </button>
      </div>

      {activeTab === 'student' && renderStudentReports()}
      {activeTab === 'teacher' && renderTeacherReports()}
      {activeTab === 'financial' && renderFinancialReports()}
      {activeTab === 'enrollment' && renderEnrollmentReports()}
      {activeTab === 'custom' && renderCustomReports()}
    </div>
  )
}

export default Reports
