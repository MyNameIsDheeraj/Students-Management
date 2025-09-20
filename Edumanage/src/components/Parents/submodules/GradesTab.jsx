import React from 'react';
import { BookOpen, Download } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const GradesTab = ({ examResults, performanceData }) => {
  return (
    <div>
      <div className="card" style={{ marginBottom: '30px' }}>
        <h3 style={{ marginBottom: '20px' }}>Recent Exam Results</h3>
        {examResults.map((result, index) => (
          <div key={index} style={{ 
            marginBottom: '20px', 
            padding: '20px', 
            backgroundColor: '#f8f9fa', 
            borderRadius: '8px',
            border: '1px solid #e9ecef'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
              <h4>{result.exam}</h4>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#007bff' }}>
                  {result.percentage}%
                </div>
                <small style={{ color: '#666' }}>{result.total}/500</small>
              </div>
            </div>
            
            <div className="grid grid-3" style={{ gap: '15px', marginBottom: '15px' }}>
              <div style={{ textAlign: 'center', padding: '10px', backgroundColor: 'white', borderRadius: '4px' }}>
                <div style={{ fontWeight: 'bold', color: '#007bff' }}>{result.math}</div>
                <small>Mathematics</small>
              </div>
              <div style={{ textAlign: 'center', padding: '10px', backgroundColor: 'white', borderRadius: '4px' }}>
                <div style={{ fontWeight: 'bold', color: '#007bff' }}>{result.physics}</div>
                <small>Physics</small>
              </div>
              <div style={{ textAlign: 'center', padding: '10px', backgroundColor: 'white', borderRadius: '4px' }}>
                <div style={{ fontWeight: 'bold', color: '#007bff' }}>{result.chemistry}</div>
                <small>Chemistry</small>
              </div>
              <div style={{ textAlign: 'center', padding: '10px', backgroundColor: 'white', borderRadius: '4px' }}>
                <div style={{ fontWeight: 'bold', color: '#007bff' }}>{result.english}</div>
                <small>English</small>
              </div>
              <div style={{ textAlign: 'center', padding: '10px', backgroundColor: 'white', borderRadius: '4px' }}>
                <div style={{ fontWeight: 'bold', color: '#007bff' }}>{result.computer}</div>
                <small>Computer</small>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '10px' }}>
              <button className="btn btn-primary">
                <Download size={14} />
                Download Report Card
              </button>
              <button className="btn btn-secondary">
                View Detailed Analysis
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="card">
        <h3 style={{ marginBottom: '20px' }}>Performance Trend</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={performanceData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis domain={[7, 10]} />
            <Tooltip />
            <Line type="monotone" dataKey="gpa" stroke="#007bff" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default GradesTab;