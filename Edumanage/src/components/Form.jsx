import React from 'react'

const FormField = ({ 
  label, 
  type = 'text', 
  name, 
  value, 
  onChange, 
  error, 
  placeholder,
  required = false,
  options,
  ...props 
}) => {
  const handleChange = (e) => {
    onChange(name, e.target.value)
  }

  return (
    <div className="form-group" style={{ width: '100%' }}>
      {label && (
        <label className="form-label">
          {label}
          {required && <span style={{ color: 'var(--danger)' }}> *</span>}
        </label>
      )}
      
      {type === 'select' ? (
        <select
          className={`form-control ${error ? 'error' : ''}`}
          value={value}
          onChange={handleChange}
          {...props}
        >
          {options?.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : type === 'textarea' ? (
        <textarea
          className={`form-control ${error ? 'error' : ''}`}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          {...props}
          style={{ minHeight: '100px', ...props.style }}
        />
      ) : (
        <input
          type={type}
          className={`form-control ${error ? 'error' : ''}`}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          {...props}
        />
      )}
      
      {error && (
        <div style={{ 
          color: 'var(--danger)', 
          fontSize: '12px', 
          marginTop: '4px' 
        }}>
          {error}
        </div>
      )}
    </div>
  )
}

const Form = ({ children, onSubmit, className = '', style = {} }) => {
  return (
    <form 
      onSubmit={onSubmit} 
      className={className}
      style={{ 
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        ...style
      }}
    >
      {children}
    </form>
  )
}

Form.Field = FormField

export default Form