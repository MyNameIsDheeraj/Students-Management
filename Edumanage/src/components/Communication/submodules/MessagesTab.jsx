import React from 'react';
import { MessageSquare, Send, Edit, Trash2, Users } from 'lucide-react';

const MessagesTab = ({ messages, openModal, getStatusBadge }) => {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h3>Messages</h3>
        <button className="btn btn-primary" onClick={() => openModal('composeMessage')}>
          <Send size={16} />
          Compose Message
        </button>
      </div>

      <div className="card">
        <table className="table">
          <thead>
            <tr>
              <th>From</th>
              <th>To</th>
              <th>Subject</th>
              <th>Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {messages.map((message) => (
              <tr key={message.id} style={{ 
                backgroundColor: message.status === 'Unread' ? '#f8f9ff' : 'transparent'
              }}>
                <td>
                  <strong style={{ fontWeight: message.status === 'Unread' ? 'bold' : 'normal' }}>
                    {message.from}
                  </strong>
                </td>
                <td>{message.to}</td>
                <td>
                  <div style={{ fontWeight: message.status === 'Unread' ? 'bold' : 'normal' }}>
                    {message.subject}
                  </div>
                  <div style={{ fontSize: '12px', color: '#666', marginTop: '2px' }}>
                    {message.message.substring(0, 50)}...
                  </div>
                </td>
                <td>{message.timestamp}</td>
                <td>
                  <span className={`badge ${getStatusBadge(message.status)}`}>
                    {message.status}
                  </span>
                </td>
                <td>
                  <button 
                    className="btn btn-primary"
                    onClick={() => openModal('viewMessage', message)}
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MessagesTab;