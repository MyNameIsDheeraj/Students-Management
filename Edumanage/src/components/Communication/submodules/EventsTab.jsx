import React from 'react';
import { Calendar, Plus, Edit, Bell, Trash2 } from 'lucide-react';

const EventsTab = ({ events, openModal, getEventTypeBadge }) => {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h3>Events Calendar</h3>
        <button className="btn btn-primary" onClick={() => openModal('createEvent')}>
          <Plus size={16} />
          Add Event
        </button>
      </div>

      <div className="grid grid-1">
        {events.map((event) => (
          <div key={event.id} className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '15px' }}>
              <div>
                <h4>{event.title}</h4>
                <p style={{ color: '#666', marginBottom: '10px' }}>{event.description}</p>
                <div style={{ display: 'flex', gap: '20px', marginBottom: '10px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <Calendar size={16} color="#666" />
                    <span style={{ fontSize: '14px' }}>{event.date}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <span style={{ fontSize: '14px' }}>{event.time}</span>
                  </div>
                  <div style={{ fontSize: '14px' }}>
                    <strong>Venue:</strong> {event.venue}
                  </div>
                </div>
                <div style={{ fontSize: '14px', color: '#666' }}>
                  <strong>Organizer:</strong> {event.organizer} | <strong>For:</strong> {event.targetAudience}
                </div>
              </div>
              <span className={`badge ${getEventTypeBadge(event.type)}`}>
                {event.type}
              </span>
            </div>

            <div style={{ display: 'flex', gap: '10px' }}>
              <button 
                className="btn btn-primary"
                onClick={() => openModal('editEvent', event)}
              >
                <Edit size={16} />
                Edit
              </button>
              <button className="btn btn-secondary">
                <Bell size={16} />
                Send Reminder
              </button>
              <button className="btn btn-danger">
                <Trash2 size={16} />
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsTab;