import React from 'react';
import { CheckCircle, Upload, Download, Edit } from 'lucide-react';

const GradesTab = ({ exams, grades, openModal }) => {
  const getGradeColor = (grade) => {
    const colors = {
      'A+': '#28a745',
      'A': '#28a745',
      'B+': '#17a2b8',
      'B': '#17a2b8',
      'C+': '#ffc107',
      'C': '#ffc107',
      'D': '#fd7e14',
      'F': '#dc3545'
    }
    return colors[grade] || '#6c757d'
  }

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h3>Exam Results & Grading</h3>
        <div style={{ display: 'flex', gap: '10px' }}>
          <select className="form-control" style={{ width: '200px' }}>
            <option value="">Filter by exam...</option>
            {exams.filter(exam => exam.status === 'Completed').map(exam => (
              <option key={exam.id} value={exam.id}>
                {exam.name} - {exam.class}
              </option>
            ))}
          </select>
          <button className="btn btn-primary" onClick={() => openModal('uploadMarks')}>
            <Upload size={16} />
            Upload Marks
          </button>
        </div>
      </div>

      <div className="card">
        <table className="table">
          <thead>
            <tr>
              <th>Student</th>
              <th>Exam</th>
              <th>Marks Obtained</th>
              <th>Percentage</th>
              <th>Grade</th>
              <th>Remarks</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {grades.map((grade) => (
              <tr key={grade.id}>
                <td>
                  <div>
                    <strong>{grade.studentName}</strong>
                    <br />
                    <small style={{ color: '#666' }}>{grade.rollNumber}</small>
                  </div>
                </td>
                <td>{grade.examName}</td>
                <td>
                  <strong>{grade.marksObtained}/{grade.maxMarks}</strong>
                </td>
                <td>{grade.percentage}%</td>
                <td>
                  <span 
                    className="badge"
                    style={{ 
                      backgroundColor: getGradeColor(grade.grade),
                      color: 'white'
                    }}
                  >
                    {grade.grade}
                  </span>
                </td>
                <td style={{ maxWidth: '200px', fontSize: '12px' }}>
                  {grade.remarks}
                </td>
                <td>
                  <button className="btn btn-secondary" style={{ marginRight: '5px' }}>
                    <Edit size={14} />
                    Edit
                  </button>
                  <button className="btn btn-primary">
                    <Download size={14} />
                    Report
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GradesTab;