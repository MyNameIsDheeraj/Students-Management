import React from 'react';
import { Calendar, Clock, BookOpen, Plus, Edit, Trash2, Download, CheckCircle } from 'lucide-react';

const ScheduleTab = ({ exams, openModal, setActiveTab }) => {
  const getStatusBadge = (status) => {
    const badges = {
      'Scheduled': 'badge-warning',
      'Ongoing': 'badge-info',
      'Completed': 'badge-success',
      'Cancelled': 'badge-danger'
    }
    return badges[status] || 'badge-secondary'
  }

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h3>Exam Schedule</h3>
        <button className="btn btn-primary" onClick={() => openModal('create')}>
          <Plus size={16} />
          Schedule Exam
        </button>
      </div>

      <div className="grid grid-1">
        {exams.map((exam) => (
          <div key={exam.id} className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '15px' }}>
              <div>
                <h4>{exam.name}</h4>
                <p style={{ color: '#666', marginBottom: '5px' }}>
                  {exam.subject} - {exam.class} | {exam.type}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginTop: '10px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <Calendar size={16} color="#666" />
                    <span style={{ fontSize: '14px' }}>{exam.date}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <Clock size={16} color="#666" />
                    <span style={{ fontSize: '14px' }}>{exam.time}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <BookOpen size={16} color="#666" />
                    <span style={{ fontSize: '14px' }}>{exam.venue}</span>
                  </div>
                </div>
              </div>
              <span className={`badge ${getStatusBadge(exam.status)}`}>
                {exam.status}
              </span>
            </div>

            <div className="grid grid-4" style={{ gap: '15px', marginBottom: '15px' }}>
              <div>
                <strong style={{ fontSize: '12px', color: '#666' }}>MAX MARKS</strong>
                <div style={{ fontSize: '16px', fontWeight: 'bold' }}>{exam.maxMarks}</div>
              </div>
              <div>
                <strong style={{ fontSize: '12px', color: '#666' }}>DURATION</strong>
                <div style={{ fontSize: '16px', fontWeight: 'bold' }}>{exam.duration}</div>
              </div>
              <div>
                <strong style={{ fontSize: '12px', color: '#666' }}>STUDENTS</strong>
                <div style={{ fontSize: '16px', fontWeight: 'bold' }}>{exam.totalStudents}</div>
              </div>
              <div>
                <strong style={{ fontSize: '12px', color: '#666' }}>SUBMISSIONS</strong>
                <div style={{ fontSize: '16px', fontWeight: 'bold' }}>
                  {exam.submittedAnswers}/{exam.totalStudents}
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '10px' }}>
              <button 
                className="btn btn-primary"
                onClick={() => openModal('edit', exam)}
              >
                <Edit size={16} />
                Edit
              </button>
              {exam.status === 'Completed' && (
                <button 
                  className="btn btn-success"
                  onClick={() => setActiveTab('grades')}
                >
                  <CheckCircle size={16} />
                  View Results
                </button>
              )}
              <button className="btn btn-secondary">
                <Download size={16} />
                Export
              </button>
              <button className="btn btn-danger">
                <Trash2 size={16} />
                Cancel
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScheduleTab;