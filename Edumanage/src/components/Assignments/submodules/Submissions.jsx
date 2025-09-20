import React from 'react';
import { Download, CheckCircle } from 'lucide-react';

const Submissions = ({ assignments, submissions, userRole, openModal }) => {
  const getSubmissionStatusBadge = (status) => {
    const badges = {
      submitted: 'badge-info',
      graded: 'badge-success',
      late: 'badge-warning',
      pending: 'badge-danger'
    }
    return badges[status] || 'badge-secondary'
  }

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h3>Assignment Submissions</h3>
        <div>
          <select className="form-control" style={{ width: '200px', display: 'inline-block' }}>
            <option value="">Filter by assignment...</option>
            {assignments.map(assignment => (
              <option key={assignment.id} value={assignment.id}>
                {assignment.title}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="card">
        <table className="table">
          <thead>
            <tr>
              <th>Student</th>
              <th>Assignment</th>
              <th>Submitted Date</th>
              <th>Files</th>
              <th>Status</th>
              <th>Marks</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {submissions.map((submission) => {
              const assignment = assignments.find(a => a.id === submission.assignmentId)
              return (
                <tr key={submission.id}>
                  <td>
                    <div>
                      <strong>{submission.studentName}</strong>
                      <br />
                      <small style={{ color: '#666' }}>{submission.rollNumber}</small>
                    </div>
                  </td>
                  <td>{assignment?.title}</td>
                  <td>{submission.submittedDate}</td>
                  <td>
                    {submission.files.map((file, index) => (
                      <div key={index} style={{ marginBottom: '2px' }}>
                        <button className="btn btn-secondary" style={{ fontSize: '10px', padding: '2px 6px' }}>
                          <Download size={10} />
                          {file}
                        </button>
                      </div>
                    ))}
                  </td>
                  <td>
                    <span className={`badge ${getSubmissionStatusBadge(submission.status)}`}>
                      {submission.status}
                    </span>
                  </td>
                  <td>
                    {submission.marks !== null ? `${submission.marks}/${assignment?.maxMarks}` : '-'}
                  </td>
                  <td>
                    {submission.status === 'submitted' && userRole === 'teacher' && (
                      <button 
                        className="btn btn-primary"
                        onClick={() => openModal('grade', submission)}
                      >
                        Grade
                      </button>
                    )}
                    {submission.status === 'graded' && (
                      <button 
                        className="btn btn-secondary"
                        onClick={() => openModal('viewGrade', submission)}
                      >
                        View
                      </button>
                    )}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Submissions;