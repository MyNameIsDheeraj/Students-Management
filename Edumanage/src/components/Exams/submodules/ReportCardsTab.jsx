import React from 'react';
import { Download, Edit } from 'lucide-react';

const ReportCardsTab = ({ reportCards }) => {
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
        <h3>Report Cards</h3>
        <div style={{ display: 'flex', gap: '10px' }}>
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
            <option value="">All Terms</option>
            <option value="mid-term">Mid-term</option>
            <option value="final">Final</option>
            <option value="unit-test">Unit Test</option>
          </select>
          <button className="btn btn-primary">
            <Download size={16} />
            Generate All
          </button>
        </div>
      </div>

      {reportCards.map((report) => (
        <div key={report.id} className="card" style={{ marginBottom: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <div>
              <h4>{report.studentName}</h4>
              <p style={{ color: '#666' }}>
                Roll No: {report.rollNumber} | Class: {report.class} | {report.term}
              </p>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: getGradeColor(report.overallGrade) }}>
                {report.overallGrade}
              </div>
              <div style={{ fontSize: '14px', color: '#666' }}>
                Rank: {report.rank} | {report.percentage}%
              </div>
            </div>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <h5>Subject-wise Performance</h5>
            <table className="table">
              <thead>
                <tr>
                  <th>Subject</th>
                  <th>Marks Obtained</th>
                  <th>Max Marks</th>
                  <th>Percentage</th>
                  <th>Grade</th>
                </tr>
              </thead>
              <tbody>
                {report.subjects.map((subject, index) => (
                  <tr key={index}>
                    <td>{subject.name}</td>
                    <td>{subject.marks}</td>
                    <td>{subject.maxMarks}</td>
                    <td>{((subject.marks / subject.maxMarks) * 100).toFixed(1)}%</td>
                    <td>
                      <span 
                        className="badge"
                        style={{ 
                          backgroundColor: getGradeColor(subject.grade),
                          color: 'white'
                        }}
                      >
                        {subject.grade}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid grid-3" style={{ gap: '20px', marginBottom: '20px' }}>
            <div style={{ textAlign: 'center', padding: '15px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
              <div style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#007bff' }}>
                {report.totalMarks}/{report.maxTotalMarks}
              </div>
              <div style={{ fontSize: '12px', color: '#666' }}>Total Marks</div>
            </div>
            <div style={{ textAlign: 'center', padding: '15px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
              <div style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#28a745' }}>
                {report.percentage}%
              </div>
              <div style={{ fontSize: '12px', color: '#666' }}>Percentage</div>
            </div>
            <div style={{ textAlign: 'center', padding: '15px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
              <div style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#17a2b8' }}>
                {report.attendance}%
              </div>
              <div style={{ fontSize: '12px', color: '#666' }}>Attendance</div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '10px' }}>
            <button className="btn btn-primary">
              <Download size={16} />
              Download PDF
            </button>
            <button className="btn btn-secondary">
              <Edit size={16} />
              Edit Remarks
            </button>
            <button className="btn btn-info">
              Email to Parent
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReportCardsTab;