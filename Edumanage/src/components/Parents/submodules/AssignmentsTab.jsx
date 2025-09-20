import React from 'react';
import { TrendingUp, Clock, CheckCircle } from 'lucide-react';

const AssignmentsTab = ({ assignments }) => {
  return (
    <div className="card">
      <h3 style={{ marginBottom: '20px' }}>Assignments Status</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Assignment</th>
            <th>Subject</th>
            <th>Due Date</th>
            <th>Status</th>
            <th>Marks</th>
          </tr>
        </thead>
        <tbody>
          {assignments.map((assignment) => (
            <tr key={assignment.id}>
              <td>{assignment.title}</td>
              <td>{assignment.subject}</td>
              <td>{assignment.dueDate}</td>
              <td>
                <span className={`badge ${
                  assignment.status === 'pending' ? 'badge-warning' :
                  assignment.status === 'submitted' ? 'badge-info' :
                  'badge-success'
                }`}>
                  {assignment.status === 'pending' && <Clock size={12} style={{ marginRight: '4px' }} />}
                  {assignment.status === 'submitted' && <TrendingUp size={12} style={{ marginRight: '4px' }} />}
                  {assignment.status === 'graded' && <CheckCircle size={12} style={{ marginRight: '4px' }} />}
                  {assignment.status}
                </span>
              </td>
              <td>
                {assignment.marks ? `${assignment.marks}/100` : '-'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AssignmentsTab;