import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import { Bell } from 'lucide-react';

const AttendanceChart = ({ attendanceData }) => {
  return (
    <div className="card" style={{ 
      borderRadius: 'var(--border-radius-lg)',
      border: '1px solid var(--border-color)',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
      padding: '24px'
    }}>
      <h3 style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1.25rem', fontWeight: '600' }}>
        <Bell size={20} />
        Overall Attendance
      </h3>
      <ResponsiveContainer width="100%" height={200}>
        <PieChart>
          <Pie
            data={attendanceData}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={90}
            dataKey="value"
            paddingAngle={2}
          >
            {attendanceData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'var(--background-card)', 
              borderColor: 'var(--border-color)',
              color: 'var(--text-primary)',
              borderRadius: 'var(--border-radius)',
              boxShadow: 'var(--shadow)'
            }} 
          />
        </PieChart>
      </ResponsiveContainer>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '24px' }}>
          {attendanceData.map((item, index) => (
            <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ 
                width: '14px', 
                height: '14px', 
                backgroundColor: item.color, 
                borderRadius: '50%' 
              }}></div>
              <span style={{ fontSize: '14px', color: 'var(--text-secondary)', fontWeight: '500' }}>{item.name}: {item.value}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AttendanceChart;