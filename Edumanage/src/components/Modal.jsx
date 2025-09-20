import React from 'react'
import { X } from 'lucide-react'

const Modal = ({ 
  isOpen, 
  onClose, 
  title, 
  children, 
  actions,
  size = 'md' // sm, md, lg, xl
}) => {
  if (!isOpen) return null

  const getWidthStyle = () => {
    switch (size) {
      case 'sm': return { maxWidth: '400px' }
      case 'lg': return { maxWidth: '800px' }
      case 'xl': return { maxWidth: '1000px' }
      default: return { maxWidth: '600px' }
    }
  }

  return (
    <div 
      className="modal" 
      onClick={onClose}
      style={{ 
        animation: 'fadeIn 0.2s ease'
      }}
    >
      <div 
        className="modal-content" 
        onClick={(e) => e.stopPropagation()}
        style={getWidthStyle()}
      >
        <div className="modal-header">
          <h3 style={{ 
            margin: 0, 
            fontSize: '1.25rem', 
            fontWeight: '600',
            color: 'var(--text-primary)'
          }}>
            {title}
          </h3>
          <button 
            className="close-btn" 
            onClick={onClose}
            aria-label="Close"
          >
            <X size={20} />
          </button>
        </div>
        <div style={{ marginBottom: '24px' }}>
          {children}
        </div>
        {actions && (
          <div style={{ 
            display: 'flex', 
            justifyContent: 'flex-end', 
            gap: '12px',
            borderTop: '1px solid var(--border-color)',
            paddingTop: '20px'
          }}>
            {actions}
          </div>
        )}
      </div>
    </div>
  )
}

export default Modal