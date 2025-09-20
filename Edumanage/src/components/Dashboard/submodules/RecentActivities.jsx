import React from 'react';
import { Bell } from 'lucide-react';

const RecentActivities = ({ recentActivities }) => {
  return (
    <div className="card" style={{ 
      borderRadius: 'var(--border-radius-lg)',
      border: '1px solid var(--border-color)',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
      padding: '24px'
    }}>
      <h3 style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1.25rem', fontWeight: '600' }}>
        <Bell size={20} />
        Recent Activities
      </h3>
      <div style={{ maxHeight: '250px', overflowY: 'auto' }}>
        {recentActivities.map((activity) => (
          <div key={activity.id} style={{ 
            padding: '16px 0', 
            borderBottom: '1px solid var(--border-color)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start'
          }}>
            <div>
              <p style={{ fontSize: '14px', marginBottom: '6px', color: 'var(--text-primary)', fontWeight: '500' }}>{activity.message}</p>
              <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>{activity.time}</span>
            </div>
            <div style={{ 
              width: '8px', 
              height: '8px', 
              borderRadius: '50%', 
              backgroundColor: 'var(--primary)',
              flexShrink: 0,
              marginTop: '6px'
            }}></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivities;