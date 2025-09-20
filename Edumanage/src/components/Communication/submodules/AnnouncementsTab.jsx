import React from 'react';
import { Bell, Plus, Edit, Users, Trash2 } from 'lucide-react';

const AnnouncementsTab = ({ announcements, openModal, getStatusBadge }) => {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h3>Announcements</h3>
        <button className="btn btn-primary" onClick={() => openModal('createAnnouncement')}>
          <Plus size={16} />
          Create Announcement
        </button>
      </div>

      <div className="grid grid-1">
        {announcements.map((announcement) => (
          <div key={announcement.id} className="card" style={{ 
            borderLeft: announcement.urgent ? '4px solid #dc3545' : '4px solid transparent'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '15px' }}>
              <div>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  {announcement.title}
                  {announcement.urgent && (
                    <span className="badge badge-danger">URGENT</span>
                  )}
                </h4>
                <p style={{ color: '#666', marginBottom: '5px' }}>
                  To: {announcement.targetAudience} | By: {announcement.createdBy}
                </p>
                <p style={{ color: '#666', fontSize: '14px' }}>
                  Published: {announcement.createdDate}
                </p>
              </div>
              <span className={`badge ${getStatusBadge(announcement.status)}`}>
                {announcement.status}
              </span>
            </div>

            <div style={{ marginBottom: '15px' }}>
              <p style={{ fontSize: '14px', lineHeight: '1.5' }}>{announcement.message}</p>
            </div>

            {announcement.attachments.length > 0 && (
              <div style={{ marginBottom: '15px' }}>
                <strong style={{ fontSize: '14px' }}>Attachments:</strong>
                <div style={{ marginTop: '8px', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {announcement.attachments.map((file, index) => (
                    <span key={index} className="badge badge-info">
                      {file}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div style={{ display: 'flex', gap: '10px' }}>
              <button 
                className="btn btn-primary"
                onClick={() => openModal('editAnnouncement', announcement)}
              >
                <Edit size={16} />
                Edit
              </button>
              <button className="btn btn-secondary">
                <Users size={16} />
                View Recipients
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

export default AnnouncementsTab;