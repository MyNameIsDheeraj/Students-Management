import React from 'react';
import { Calendar } from 'lucide-react';

const UpcomingEvents = ({ upcomingEvents }) => {
  return (
    <div className="card" style={{ 
      borderRadius: 'var(--border-radius-lg)',
      border: '1px solid var(--border-color)',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
      padding: '24px'
    }}>
      <h3 style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1.25rem', fontWeight: '600' }}>
        <Calendar size={20} />
        Upcoming Events
      </h3>
      <div style={{ maxHeight: '250px', overflowY: 'auto' }}>
        {upcomingEvents.map((event) => (
          <div key={event.id} style={{ 
            padding: '16px 0', 
            borderBottom: '1px solid var(--border-color)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <div>
              <p style={{ fontSize: '14px', fontWeight: '500', marginBottom: '6px', color: 'var(--text-primary)' }}>
                {event.title}
              </p>
              <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>{event.date}</span>
            </div>
            <span className={`badge badge-${
              event.type === 'exam' ? 'danger' : 
              event.type === 'meeting' ? 'warning' : 
              event.type === 'holiday' ? 'success' : 'info'
            }`} style={{ 
              fontSize: '11px',
              fontWeight: '600',
              padding: '4px 10px'
            }}>
              {event.type}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;