import React from 'react';
import { MessageSquare, Download } from 'lucide-react';

const MessagesTab = ({ messages }) => {
  return (
    <div className="card">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h3>Messages from Teachers</h3>
        <button className="btn btn-primary">
          <MessageSquare size={16} />
          Compose Message
        </button>
      </div>
      
      <div style={{ maxHeight: '500px', overflowY: 'auto' }}>
        {messages.map((message) => (
          <div key={message.id} style={{ 
            padding: '15px 0', 
            borderBottom: '1px solid #eee',
            backgroundColor: message.unread ? '#f8f9ff' : 'transparent'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
              <div>
                <h4 style={{ fontSize: '16px', marginBottom: '5px', fontWeight: message.unread ? 'bold' : 'normal' }}>
                  {message.subject}
                </h4>
                <p style={{ fontSize: '14px', color: '#666', marginBottom: '5px' }}>
                  From: {message.from}
                </p>
              </div>
              <div style={{ textAlign: 'right' }}>
                <span style={{ fontSize: '12px', color: '#999' }}>{message.time}</span>
                {message.unread && (
                  <div style={{ 
                    width: '8px', 
                    height: '8px', 
                    backgroundColor: '#007bff', 
                    borderRadius: '50%',
                    marginTop: '5px',
                    marginLeft: 'auto'
                  }}></div>
                )}
              </div>
            </div>
            <p style={{ fontSize: '14px', color: '#333', marginBottom: '10px' }}>
              {message.message}
            </p>
            <div style={{ display: 'flex', gap: '10px' }}>
              <button className="btn btn-primary" style={{ fontSize: '12px', padding: '6px 12px' }}>
                Reply
              </button>
              <button className="btn btn-secondary" style={{ fontSize: '12px', padding: '6px 12px' }}>
                Mark as Read
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MessagesTab;