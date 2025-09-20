import React from 'react'
import { User, Mail, Phone, MapPin, Calendar } from 'lucide-react'

const UserProfileCard = ({ user }) => {
  return (
    <div className="card" style={{ 
      textAlign: 'center',
      padding: '32px 24px'
    }}>
      <div style={{
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        backgroundColor: 'var(--primary)15',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 auto 20px',
        border: '3px solid var(--primary)',
        color: 'var(--primary)'
      }}>
        <User size={48} />
      </div>
      <h2 style={{ 
        fontSize: '1.5rem', 
        fontWeight: '700', 
        margin: '0 0 8px',
        color: 'var(--text-primary)'
      }}>
        {user.name}
      </h2>
      <p style={{ 
        color: 'var(--text-secondary)', 
        margin: '0 0 20px',
        fontSize: '14px'
      }}>
        {user.role}
      </p>
      
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '12px',
        textAlign: 'left'
      }}>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '12px'
        }}>
          <Mail size={18} color="var(--text-secondary)" />
          <span style={{ fontSize: '14px' }}>{user.email}</span>
        </div>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '12px'
        }}>
          <Phone size={18} color="var(--text-secondary)" />
          <span style={{ fontSize: '14px' }}>{user.phone}</span>
        </div>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '12px'
        }}>
          <MapPin size={18} color="var(--text-secondary)" />
          <span style={{ fontSize: '14px' }}>{user.address}</span>
        </div>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '12px'
        }}>
          <Calendar size={18} color="var(--text-secondary)" />
          <span style={{ fontSize: '14px' }}>Joined {user.joinDate}</span>
        </div>
      </div>
      
      <div style={{ 
        display: 'flex', 
        gap: '12px', 
        marginTop: '24px',
        justifyContent: 'center'
      }}>
        <button className="btn btn-primary" style={{ minWidth: '120px' }}>
          Edit Profile
        </button>
        <button className="btn btn-outline" style={{ minWidth: '120px' }}>
          Message
        </button>
      </div>
    </div>
  )
}

export default UserProfileCard