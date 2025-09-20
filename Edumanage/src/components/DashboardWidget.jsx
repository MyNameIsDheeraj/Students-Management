import React from 'react'
import { MoreHorizontal } from 'lucide-react'

const DashboardWidget = ({ 
  title, 
  children, 
  actions,
  headerActions,
  className = ''
}) => {
  return (
    <div className={`card ${className}`} style={{ 
      borderRadius: 'var(--border-radius-lg)',
      border: '1px solid var(--border-color)',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
      padding: '24px',
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        marginBottom: '20px' 
      }}>
        <h3 style={{ 
          fontSize: '1.1rem', 
          fontWeight: '600', 
          margin: 0,
          color: 'var(--text-primary)'
        }}>
          {title}
        </h3>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          {headerActions}
          {actions && (
            <button className="btn btn-outline btn-sm" style={{ padding: '6px' }}>
              <MoreHorizontal size={16} />
            </button>
          )}
        </div>
      </div>
      <div style={{ flexGrow: 1 }}>
        {children}
      </div>
    </div>
  )
}

export default DashboardWidget