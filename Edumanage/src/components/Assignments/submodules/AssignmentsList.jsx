import React from 'react';
import { Calendar, FileText, Upload, Clock, Eye, Edit, Trash2, CheckCircle, Plus } from 'lucide-react';

const AssignmentsList = ({ assignments, userRole, openModal, setActiveTab }) => {
  const getStatusBadge = (status) => {
    const badges = {
      active: 'badge-warning',
      completed: 'badge-success',
      overdue: 'badge-danger',
      draft: 'badge-secondary'
    }
    return badges[status] || 'badge-secondary'
  }

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h3>Assignments</h3>
        {(userRole === 'admin' || userRole === 'teacher') && (
          <button className="btn btn-primary" onClick={() => openModal('create')}>
            <Plus size={16} />
            Create Assignment
          </button>
        )}
      </div>

      <div className="grid grid-1">
        {assignments.map((assignment) => (
          <div key={assignment.id} className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '15px' }}>
              <div>
                <h4 style={{ marginBottom: '5px' }}>{assignment.title}</h4>
                <p style={{ color: '#666', marginBottom: '5px' }}>
                  {assignment.subject} - {assignment.class} | {assignment.teacher}
                </p>
                <p style={{ color: '#666', fontSize: '14px' }}>{assignment.description}</p>
              </div>
              <span className={`badge ${getStatusBadge(assignment.status)}`}>
                {assignment.status}
              </span>
            </div>

            <div className="grid grid-4" style={{ gap: '15px', marginBottom: '15px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Calendar size={16} color="#666" />
                <span style={{ fontSize: '14px' }}>Due: {assignment.dueDate}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <FileText size={16} color="#666" />
                <span style={{ fontSize: '14px' }}>Max: {assignment.maxMarks} marks</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Upload size={16} color="#666" />
                <span style={{ fontSize: '14px' }}>
                  Submissions: {assignment.submissions}/{assignment.totalStudents}
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Clock size={16} color="#666" />
                <span style={{ fontSize: '14px' }}>Created: {assignment.createdDate}</span>
              </div>
            </div>

            {assignment.attachments.length > 0 && (
              <div style={{ marginBottom: '15px' }}>
                <strong style={{ fontSize: '14px' }}>Attachments:</strong>
                <div style={{ marginTop: '5px', display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                  {assignment.attachments.map((file, index) => (
                    <span key={index} className="badge badge-info">
                      {file}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div style={{ display: 'flex', gap: '10px' }}>
              <button 
                className="btn btn-secondary"
                onClick={() => openModal('view', assignment)}
              >
                <Eye size={16} />
                View Details
              </button>
              {userRole === 'teacher' && (
                <>
                  <button 
                    className="btn btn-primary"
                    onClick={() => setActiveTab('submissions')}
                  >
                    <CheckCircle size={16} />
                    Grade ({assignment.submissions})
                  </button>
                  <button 
                    className="btn btn-warning"
                    onClick={() => openModal('edit', assignment)}
                  >
                    <Edit size={16} />
                    Edit
                  </button>
                </>
              )}
              {userRole === 'student' && assignment.status === 'active' && (
                <button 
                  className="btn btn-success"
                  onClick={() => openModal('submit', assignment)}
                >
                  <Upload size={16} />
                  Submit
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AssignmentsList;