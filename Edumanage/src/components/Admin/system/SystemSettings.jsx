import React from 'react';
import { Settings } from 'lucide-react';

const SystemSettings = ({ settings, setSettings }) => {
  const handleAcademicSettings = (e) => {
    e.preventDefault();
    setSettings({
      ...settings,
      academicYear: e.target.academicYear.value,
      currentTerm: e.target.currentTerm.value,
      gradingScheme: e.target.gradingScheme.value,
      attendanceThreshold: e.target.attendanceThreshold.value
    });
    alert('Academic settings saved (demo only)');
  };

  const handleSchoolInfo = (e) => {
    e.preventDefault();
    setSettings({
      ...settings,
      schoolName: e.target.schoolName.value,
      schoolAddress: e.target.schoolAddress.value,
      contactEmail: e.target.contactEmail.value,
      contactPhone: e.target.contactPhone.value
    });
    alert('School info saved (demo only)');
  };

  const handleNotifSettings = () => {
    alert('Notification settings saved (demo only)');
  };

  const handleNotifChange = (type, key) => {
    setSettings({
      ...settings,
      [type]: {
        ...settings[type],
        [key]: !settings[type][key]
      }
    });
  };

  return (
    <div>
      <h3 style={{ marginBottom: '20px' }}>System Settings</h3>
      <div className="grid grid-2">
        <div className="card">
          <h4>Academic Configuration</h4>
          <form onSubmit={handleAcademicSettings}>
            <div className="form-group">
              <label className="form-label">Academic Year</label>
              <input type="text" name="academicYear" className="form-control" defaultValue={settings.academicYear} />
            </div>
            <div className="form-group">
              <label className="form-label">Current Term</label>
              <select name="currentTerm" className="form-control" defaultValue={settings.currentTerm}>
                <option value="First Term">First Term</option>
                <option value="Second Term">Second Term</option>
                <option value="Third Term">Third Term</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Grading Scheme</label>
              <select name="gradingScheme" className="form-control" defaultValue={settings.gradingScheme}>
                <option value="A-F Scale">A-F Scale</option>
                <option value="Percentage">Percentage</option>
                <option value="GPA">GPA (4.0 Scale)</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Minimum Attendance (%)</label>
              <input type="number" name="attendanceThreshold" className="form-control" defaultValue={settings.attendanceThreshold} />
            </div>
            <button type="submit" className="btn btn-primary">Save Academic Settings</button>
          </form>
        </div>
        <div className="card">
          <h4>School Information</h4>
          <form onSubmit={handleSchoolInfo}>
            <div className="form-group">
              <label className="form-label">School Name</label>
              <input type="text" name="schoolName" className="form-control" defaultValue={settings.schoolName} />
            </div>
            <div className="form-group">
              <label className="form-label">Address</label>
              <textarea name="schoolAddress" className="form-control" rows="3" defaultValue={settings.schoolAddress}></textarea>
            </div>
            <div className="form-group">
              <label className="form-label">Contact Email</label>
              <input type="email" name="contactEmail" className="form-control" defaultValue={settings.contactEmail} />
            </div>
            <div className="form-group">
              <label className="form-label">Contact Phone</label>
              <input type="tel" name="contactPhone" className="form-control" defaultValue={settings.contactPhone} />
            </div>
            <button type="submit" className="btn btn-primary">Save School Info</button>
          </form>
        </div>
      </div>
      <div className="card" style={{ marginTop: '20px' }}>
        <h4>Notification Settings</h4>
        <div className="grid grid-2" style={{ gap: '20px' }}>
          <div>
            <h5>Email Notifications</h5>
            <div style={{ marginBottom: '10px' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <input type="checkbox" checked={settings.emailNotifications.attendance} onChange={() => handleNotifChange('emailNotifications', 'attendance')} />
                Send attendance alerts to parents
              </label>
            </div>
            <div style={{ marginBottom: '10px' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <input type="checkbox" checked={settings.emailNotifications.grades} onChange={() => handleNotifChange('emailNotifications', 'grades')} />
                Send grade notifications
              </label>
            </div>
            <div style={{ marginBottom: '10px' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <input type="checkbox" checked={settings.emailNotifications.fees} onChange={() => handleNotifChange('emailNotifications', 'fees')} />
                Send fee payment reminders
              </label>
            </div>
          </div>
          <div>
            <h5>SMS Notifications</h5>
            <div style={{ marginBottom: '10px' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <input type="checkbox" checked={settings.smsNotifications.exams} onChange={() => handleNotifChange('smsNotifications', 'exams')} />
                Send exam schedule updates
              </label>
            </div>
            <div style={{ marginBottom: '10px' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <input type="checkbox" checked={settings.smsNotifications.emergency} onChange={() => handleNotifChange('smsNotifications', 'emergency')} />
                Send emergency alerts
              </label>
            </div>
            <div style={{ marginBottom: '10px' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <input type="checkbox" checked={settings.smsNotifications.holidays} onChange={() => handleNotifChange('smsNotifications', 'holidays')} />
                Send holiday notifications
              </label>
            </div>
          </div>
        </div>
        <button className="btn btn-primary" style={{ marginTop: '15px' }} onClick={handleNotifSettings}>
          Save Notification Settings
        </button>
      </div>
    </div>
  );
};

export default SystemSettings;