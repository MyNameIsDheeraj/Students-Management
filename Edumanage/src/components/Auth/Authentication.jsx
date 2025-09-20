import React, { useState } from 'react'
import { User, Lock, Eye, EyeOff } from 'lucide-react'

const Authentication = ({ onLogin }) => {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    role: 'admin'
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real application, you would validate credentials here
    // For now, we'll just call onLogin with the selected role
    onLogin(formData.role)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      // background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    }}>
      <div className="card" style={{ width: '400px', textAlign: 'center' }}>
        <div style={{ marginBottom: '30px' }}>
          <h1 style={{ color: '#333', marginBottom: '10px' }}>EduManage</h1>
          <p style={{ color: '#666' }}>Student Management System</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label" style={{marginTop: '20px'}}>Role</label>
            <select 
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="form-control"
            >
              <option value="admin">Administrator</option>
              <option value="teacher">Teacher</option>
              <option value="student">Student</option>
              <option value="parent">Parent</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">Username/Email</label>
            <div style={{ position: 'relative' }}>
              <User 
                size={20} 
                style={{ 
                  position: 'absolute', 
                  left: '12px', 
                  top: '50%', 
                  transform: 'translateY(-50%)',
                  color: '#666'
                }} 
              />
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="form-control"
                style={{ paddingLeft: '45px' }}
                placeholder="Enter your username or email"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Password</label>
            <div style={{ position: 'relative' }}>
              <Lock 
                size={20} 
                style={{ 
                  position: 'absolute', 
                  left: '12px', 
                  top: '50%', 
                  transform: 'translateY(-50%)',
                  color: '#666'
                }} 
              />
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="form-control"
                style={{ paddingLeft: '45px', paddingRight: '45px' }}
                placeholder="Enter your password"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: 'absolute',
                  right: '12px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: '#666'
                }}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
            <input type="checkbox" id="remember" style={{ marginRight: '8px' }} />
            <label htmlFor="remember" style={{ fontSize: '14px', color: '#666' }}>
              Remember me
            </label>
          </div>

          <button type="submit" className="btn btn-primary" style={{ width: '100%', marginBottom: '15px' }}>
            Sign In
          </button>

          <div style={{ textAlign: 'center' }}>
            <a href="#" style={{ color: '#007bff', textDecoration: 'none', fontSize: '14px' }}>
              Forgot Password?
            </a>
          </div>
        </form>

        <div style={{ marginTop: '30px', padding: '15px', backgroundColor: '#f8f9fa', borderRadius: '4px' }}>
          <p style={{ fontSize: '12px', color: '#666', marginBottom: '10px' }}>Demo Credentials:</p>
          <p style={{ fontSize: '12px', color: '#666' }}>
            Username: demo | Password: demo123
          </p>
        </div>
      </div>
    </div>
  )
}

export default Authentication
