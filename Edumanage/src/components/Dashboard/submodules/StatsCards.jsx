import React from 'react';

const StatsCards = ({ stats }) => {
  return (
    <div className="grid grid-4" style={{ marginBottom: '30px', gap: '24px' }}>
      {stats.map((stat, index) => {
        const Icon = stat.icon
        return (
          <div key={index} className="card" style={{ 
            borderRadius: 'var(--border-radius-lg)',
            border: '1px solid var(--border-color)',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
            transition: 'all 0.3s ease',
            padding: '24px',
            background: 'var(--background-card)'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '14px', marginBottom: '8px', fontWeight: '500' }}>{stat.title}</p>
                <h2 style={{ color: stat.color, marginBottom: '8px', fontSize: '2rem', fontWeight: '700' }}>{stat.value}</h2>
                {stat.change && (
                  <span style={{ 
                    color: stat.change.startsWith('+') ? 'var(--success)' : 'var(--danger)',
                    fontSize: '13px',
                    fontWeight: '500',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}>
                    {stat.change} from last month
                  </span>
                )}
              </div>
              <div style={{ 
                background: stat.color + '15', 
                padding: '14px', 
                borderRadius: 'var(--border-radius-lg)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Icon size={28} color={stat.color} />
              </div>
            </div>
          </div>
        )
      })}
    </div>
  );
};

export default StatsCards;