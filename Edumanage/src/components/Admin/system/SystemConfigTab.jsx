import React from 'react';
import { Settings, Shield, Database, Mail, Smartphone, Bell } from 'lucide-react';

const SystemConfigTab = ({ systemSettings, openModal }) => {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h3>System Configuration</h3>
        <button className="btn btn-primary" onClick={() => openModal('configureSystem')}>
          <Settings size={16} />
          Configure System
        </button>
      </div>

      <div className="grid grid-2" style={{ marginBottom: '30px' }}>
        <div className="card">
          <h4 style={{ marginBottom: '20px' }}>
            <Shield size={20} style={{ marginRight: '8px', verticalAlign: 'middle' }} />
            Security Settings
          </h4>
          <div style={{ marginBottom: '15px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
              <span>Two-Factor Authentication</span>
              <label style={{ position: 'relative', display: 'inline-block', width: '50px', height: '24px' }}>
                <input type="checkbox" style={{ opacity: 0, width: 0, height: 0 }} defaultChecked={systemSettings.security.twoFactorAuth} />
                <span className="slider round"></span>
              </label>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
              <span>Session Timeout (minutes)</span>
              <input type="number" className="form-control" style={{ width: '80px' }} defaultValue={systemSettings.security.sessionTimeout} min="1" max="120" />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
              <span>Password Complexity</span>
              <select className="form-control" style={{ width: '150px' }} defaultValue={systemSettings.security.passwordComplexity}>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
                <option value="very-high">Very High</option>
              </select>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span>Max Login Attempts</span>
              <input type="number" className="form-control" style={{ width: '80px' }} defaultValue={systemSettings.security.loginAttempts} min="1" max="10" />
            </div>
          </div>
          <button className="btn btn-primary" style={{ width: '100%' }}>
            <Shield size={16} />
            Save Security Settings
          </button>
        </div>

        <div className="card">
          <h4 style={{ marginBottom: '20px' }}>
            <Database size={20} style={{ marginRight: '8px', verticalAlign: 'middle' }} />
            Database Management
          </h4>
          <div style={{ marginBottom: '15px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
              <span>Auto Backup</span>
              <label style={{ position: 'relative', display: 'inline-block', width: '50px', height: '24px' }}>
                <input type="checkbox" style={{ opacity: 0, width: 0, height: 0 }} defaultChecked={systemSettings.database.autoBackup} />
                <span className="slider round"></span>
              </label>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
              <span>Backup Frequency</span>
              <select className="form-control" style={{ width: '120px' }} defaultValue={systemSettings.database.backupFrequency}>
                <option value="daily">Daily</option>
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
              </select>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
              <span>Retention Period (days)</span>
              <input type="number" className="form-control" style={{ width: '80px' }} defaultValue={systemSettings.database.retentionPeriod} min="1" max="365" />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span>Compression</span>
              <label style={{ position: 'relative', display: 'inline-block', width: '50px', height: '24px' }}>
                <input type="checkbox" style={{ opacity: 0, width: 0, height: 0 }} defaultChecked={systemSettings.database.compression} />
                <span className="slider round"></span>
              </label>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '10px' }}>
            <button className="btn btn-primary" style={{ flex: 1 }}>
              <Database size={16} />
              Manual Backup
            </button>
            <button className="btn btn-secondary" style={{ flex: 1 }}>
              <Database size={16} />
              Restore
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-2" style={{ marginBottom: '30px' }}>
        <div className="card">
          <h4 style={{ marginBottom: '20px' }}>
            <Mail size={20} style={{ marginRight: '8px', verticalAlign: 'middle' }} />
            Email Configuration
          </h4>
          <div style={{ marginBottom: '15px' }}>
            <div className="form-group">
              <label className="form-label">SMTP Server</label>
              <input type="text" className="form-control" defaultValue={systemSettings.email.smtpServer} />
            </div>
            <div className="form-group">
              <label className="form-label">Port</label>
              <input type="number" className="form-control" defaultValue={systemSettings.email.port} />
            </div>
            <div className="form-group">
              <label className="form-label">Username</label>
              <input type="text" className="form-control" defaultValue={systemSettings.email.username} />
            </div>
            <div className="form-group">
              <label className="form-label">Password</label>
              <input type="password" className="form-control" defaultValue={systemSettings.email.password} />
            </div>
            <div className="form-group">
              <label className="form-label">From Email</label>
              <input type="email" className="form-control" defaultValue={systemSettings.email.fromEmail} />
            </div>
          </div>
          <button className="btn btn-primary" style={{ width: '100%' }}>
            <Mail size={16} />
            Save Email Settings
          </button>
        </div>

        <div className="card">
          <h4 style={{ marginBottom: '20px' }}>
            <Smartphone size={20} style={{ marginRight: '8px', verticalAlign: 'middle' }} />
            SMS Configuration
          </h4>
          <div style={{ marginBottom: '15px' }}>
            <div className="form-group">
              <label className="form-label">API Provider</label>
              <select className="form-control" defaultValue={systemSettings.sms.provider}>
                <option value="twilio">Twilio</option>
                <option value="nexmo">Nexmo</option>
                <option value="plivo">Plivo</option>
                <option value="custom">Custom API</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">API Key</label>
              <input type="text" className="form-control" defaultValue={systemSettings.sms.apiKey} />
            </div>
            <div className="form-group">
              <label className="form-label">Sender ID</label>
              <input type="text" className="form-control" defaultValue={systemSettings.sms.senderId} />
            </div>
            <div className="form-group">
              <label className="form-label">Template ID</label>
              <input type="text" className="form-control" defaultValue={systemSettings.sms.templateId} />
            </div>
            <div className="form-group">
              <label className="form-label">Country Code</label>
              <input type="text" className="form-control" defaultValue={systemSettings.sms.countryCode} />
            </div>
          </div>
          <button className="btn btn-primary" style={{ width: '100%' }}>
            <Smartphone size={16} />
            Save SMS Settings
          </button>
        </div>
      </div>

      <div className="card">
        <h4 style={{ marginBottom: '20px' }}>
          <Bell size={20} style={{ marginRight: '8px', verticalAlign: 'middle' }} />
          Notification Settings
        </h4>
        <div className="grid grid-2" style={{ gap: '20px', marginBottom: '15px' }}>
          <div>
            <h5>Email Notifications</h5>
            <div style={{ marginBottom: '10px' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <input type="checkbox" defaultChecked={systemSettings.notifications.email.attendance} />
                Attendance alerts to parents
              </label>
            </div>
            <div style={{ marginBottom: '10px' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <input type="checkbox" defaultChecked={systemSettings.notifications.email.grades} />
                Grade notifications
              </label>
            </div>
            <div style={{ marginBottom: '10px' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <input type="checkbox" defaultChecked={systemSettings.notifications.email.fees} />
                Fee payment reminders
              </label>
            </div>
            <div style={{ marginBottom: '10px' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <input type="checkbox" defaultChecked={systemSettings.notifications.email.exams} />
                Exam schedule updates
              </label>
            </div>
          </div>
          <div>
            <h5>SMS Notifications</h5>
            <div style={{ marginBottom: '10px' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <input type="checkbox" defaultChecked={systemSettings.notifications.sms.emergency} />
                Emergency alerts
              </label>
            </div>
            <div style={{ marginBottom: '10px' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <input type="checkbox" defaultChecked={systemSettings.notifications.sms.holidays} />
                Holiday notifications
              </label>
            </div>
            <div style={{ marginBottom: '10px' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <input type="checkbox" defaultChecked={systemSettings.notifications.sms.events} />
                Event reminders
              </label>
            </div>
            <div style={{ marginBottom: '10px' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <input type="checkbox" defaultChecked={systemSettings.notifications.sms.assignments} />
                Assignment deadlines
              </label>
            </div>
          </div>
        </div>
        <button className="btn btn-primary" style={{ marginTop: '15px' }}>
          <Bell size={16} />
          Save Notification Settings
        </button>
      </div>
    </div>
  );
};

export default SystemConfigTab;