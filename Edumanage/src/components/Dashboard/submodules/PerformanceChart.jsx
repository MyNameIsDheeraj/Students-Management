import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const PerformanceChart = ({ performanceData }) => {
  return (
    <div className="card" style={{ 
      borderRadius: 'var(--border-radius-lg)',
      border: '1px solid var(--border-color)',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
      padding: '24px'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <h3 style={{ fontSize: '1.25rem', fontWeight: '600', margin: 0 }}>Subject-wise Performance</h3>
        <div style={{ 
          fontSize: '12px', 
          padding: '4px 10px', 
          backgroundColor: 'var(--success)15', 
          color: 'var(--success)', 
          borderRadius: '20px',
          fontWeight: '500'
        }}>
          Average Scores
        </div>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={performanceData}>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" vertical={false} />
          <XAxis 
            dataKey="subject" 
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
          <Bar 
            dataKey="average" 
            fill="var(--success)" 
            radius={[4, 4, 0, 0]} 
            barSize={30}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PerformanceChart;