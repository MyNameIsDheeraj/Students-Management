import React from 'react';
import { Users, CheckCircle, XCircle, Clock } from 'lucide-react';

const MarkAttendance = ({ 
  classes, 
  selectedClass, 
  setSelectedClass, 
  selectedDate, 
  setSelectedDate, 
  students, 
  handleStatusChange, 
  handleMarkAll 
}) => {
  const getStatusColor = (status) => {
    const colors = {
      present: '#28a745',
      absent: '#dc3545',
      late: '#ffc107',
      excused: '#17a2b8'
    }
    return colors[status] || '#6c757d'
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case 'present':
        return <CheckCircle size={16} />
      case 'absent':
        return <XCircle size={16} />
      case 'late':
        return <Clock size={16} />
      case 'excused':
        return <CheckCircle size={16} />
      default:
        return <XCircle size={16} />
    }
  }

  return (
    <div>
      <div className="card" style={{ marginBottom: '20px' }}>
        <div className="grid grid-3" style={{ gap: '15px', alignItems: 'end' }}>
          <div className="form-group">
            <label className="form-label">Select Class</label>
            <select 
              className="form-control"
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value)}
            >
              {classes.map(cls => (
                <option key={cls} value={cls}>{cls}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label className="form-label">Select Date</label>
            <input 
              type="date" 
              className="form-control"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
            />
          </div>
          <div>
            <button className="btn btn-primary">
              Load Attendance
            </button>
          </div>
        </div>
      </div>

      <div className="card">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <h3>Mark Attendance - Class {selectedClass}</h3>
          <div style={{ display: 'flex', gap: '10px' }}>
            <button 
              className="btn btn-success"
              onClick={() => handleMarkAll('present')}
            >
              Mark All Present
            </button>
            <button 
              className="btn btn-danger"
              onClick={() => handleMarkAll('absent')}
            >
              Mark All Absent
            </button>
          </div>
        </div>

        <div className="grid grid-1">
          {students.map((student) => (
            <div key={student.id} style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              padding: '15px',
              border: '1px solid #eee',
              borderRadius: '8px',
              marginBottom: '10px',
              backgroundColor: student.status === 'present' ? '#f8fff8' : 
                             student.status === 'absent' ? '#fff8f8' : 
                             student.status === 'late' ? '#fffbf0' : '#f0f8ff'
            }}>
              <div>
                <h4 style={{ marginBottom: '5px' }}>{student.name}</h4>
                <p style={{ color: '#666', marginBottom: '0' }}>Roll No: {student.rollNumber}</p>
              </div>
              
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <span style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '5px',
                  color: getStatusColor(student.status),
                  fontWeight: '500'
                }}>
                  {getStatusIcon(student.status)}
                  {student.status.charAt(0).toUpperCase() + student.status.slice(1)}
                </span>
                
                <div style={{ display: 'flex', gap: '5px' }}>
                  <button 
                    className={`btn ${student.status === 'present' ? 'btn-success' : 'btn-secondary'}`}
                    onClick={() => handleStatusChange(student.id, 'present')}
                    style={{ padding: '5px 10px', fontSize: '12px' }}
                  >
                    Present
                  </button>
                  <button 
                    className={`btn ${student.status === 'absent' ? 'btn-danger' : 'btn-secondary'}`}
                    onClick={() => handleStatusChange(student.id, 'absent')}
                    style={{ padding: '5px 10px', fontSize: '12px' }}
                  >
                    Absent
                  </button>
                  <button 
                    className={`btn ${student.status === 'late' ? 'btn-warning' : 'btn-secondary'}`}
                    onClick={() => handleStatusChange(student.id, 'late')}
                    style={{ padding: '5px 10px', fontSize: '12px' }}
                  >
                    Late
                  </button>
                  <button 
                    className={`btn ${student.status === 'excused' ? 'btn-info' : 'btn-secondary'}`}
                    onClick={() => handleStatusChange(student.id, 'excused')}
                    style={{ padding: '5px 10px', fontSize: '12px' }}
                  >
                    Excused
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', marginTop: '20px' }}>
          <button className="btn btn-secondary">
            Save as Draft
          </button>
          <button className="btn btn-primary">
            Submit Attendance
          </button>
        </div>
      </div>
    </div>
  );
};

export default MarkAttendance;