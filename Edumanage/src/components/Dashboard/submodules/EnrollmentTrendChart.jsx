import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const EnrollmentTrendChart = ({ enrollmentData }) => {
  return (
    <div className="card" style={{ 
      borderRadius: 'var(--border-radius-lg)',
      border: '1px solid var(--border-color)',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
      padding: '24px'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <h3 style={{ fontSize: '1.25rem', fontWeight: '600', margin: 0 }}>Student Enrollment Trend</h3>
        <div style={{ 
          fontSize: '12px', 
          padding: '4px 10px', 
          backgroundColor: 'var(--primary)15', 
          color: 'var(--primary)', 
          borderRadius: '20px',
          fontWeight: '500'
        }}>
          Last 6 months
        </div>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={enrollmentData}>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" vertical={false} />
          <XAxis 
            dataKey="month" 
            stroke="var(--text-secondary)" 
            axisLine={false}
            tickLine={false}
          />
          <YAxis 
            stroke="var(--text-secondary)" 
            axisLine={false}
            tickLine={false}
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'var(--background-card)', 
              borderColor: 'var(--border-color)',
              color: 'var(--text-primary)',
              borderRadius: 'var(--border-radius)',
              boxShadow: 'var(--shadow)'
            }} 
          />
          <Line 
            type="monotone" 
            dataKey="students" 
            stroke="var(--primary)" 
            strokeWidth={3} 
            dot={{ 
              stroke: 'var(--primary)', 
              strokeWidth: 3, 
              r: 5,
              fill: 'var(--background-card)'
            }} 
            activeDot={{ 
              r: 7, 
              stroke: 'var(--primary)',
              fill: 'var(--background-card)'
            }} 
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default EnrollmentTrendChart;