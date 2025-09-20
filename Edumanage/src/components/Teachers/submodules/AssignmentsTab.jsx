import React from 'react';
import { BookOpen, Edit, Trash2, Plus } from 'lucide-react';

const AssignmentsTab = ({ teachers, openModal }) => {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h3>Subject & Class Assignments</h3>
        <button className="btn btn-primary" onClick={() => openModal('assign')}>
          <Plus size={16} />
          New Assignment
        </button>
      </div>

      <div className="card">
        <table className="table">
          <thead>
            <tr>
              <th>Teacher</th>
              <th>Subject</th>
              <th>Classes</th>
              <th>Total Students</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {teachers.map((teacher) => (
              teacher.subjects.map((subject, index) => (
                <tr key={`${teacher.id}-${index}`}>
                  <td>{teacher.name}</td>
                  <td>{subject}</td>
                  <td>
                    {teacher.classes.map((cls, i) => (
                      <span key={i} className="badge badge-info" style={{ marginRight: '5px' }}>
                        {cls}
                      </span>
                    ))}
                  </td>
                  <td>{teacher.classes.length * 35}</td>
                  <td>
                    <button className="btn btn-secondary" style={{ marginRight: '5px' }}>
                      <Edit size={14} />
                    </button>
                    <button className="btn btn-danger">
                      <Trash2 size={14} />
                    </button>
                  </td>
                </tr>
              ))
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AssignmentsTab;