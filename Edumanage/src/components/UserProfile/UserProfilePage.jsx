import React, { useState } from 'react';
import { User, Mail, Phone, Calendar, MapPin, GraduationCap, Briefcase, Edit, Save, X, Eye, EyeOff } from 'lucide-react';
import { useUserProfile } from '../../context/UserProfileContext';

const UserProfilePage = ({ userRole }) => {
  const { profileData, userSpecificData, updateProfileData } = useUserProfile();
  const [isEditing, setIsEditing] = useState(false);
  const [showSensitiveInfo, setShowSensitiveInfo] = useState(false);
  const [localProfileData, setLocalProfileData] = useState(profileData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLocalProfileData({
      ...localProfileData,
      [name]: value
    });
  };

  const handleSave = () => {
    // Update context data
    updateProfileData(localProfileData);
    setIsEditing(false);
    // Show success message
    alert('Profile updated successfully!');
  };

  const handleCancel = () => {
    // Reset to original data
    setLocalProfileData(profileData);
    setIsEditing(false);
  };

  return (
    <div className="container">
      <div className="card">
        <div className="profile-header">
          <div className="profile-avatar">
            <User size={48} />
          </div>
          <div className="profile-basic-info">
            <h1>{localProfileData.firstName} {localProfileData.lastName}</h1>
            <p className="profile-role">{userSpecificData.role}</p>
            <div className="profile-actions">
              {isEditing ? (
                <>
                  <button className="btn btn-primary" onClick={handleSave}>
                    <Save size={16} />
                    Save Changes
                  </button>
                  <button className="btn btn-outline" onClick={handleCancel}>
                    <X size={16} />
                    Cancel
                  </button>
                </>
              ) : (
                <button className="btn btn-secondary" onClick={() => setIsEditing(true)}>
                  <Edit size={16} />
                  Edit Profile
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="profile-content">
          <div className="profile-section">
            <h2>Personal Information</h2>
            <div className="profile-grid">
              <div className="profile-field">
                <label>First Name</label>
                {isEditing ? (
                  <input
                    type="text"
                    name="firstName"
                    value={localProfileData.firstName}
                    onChange={handleInputChange}
                    className="form-control"
                  />
                ) : (
                  <p>{localProfileData.firstName}</p>
                )}
              </div>

              <div className="profile-field">
                <label>Last Name</label>
                {isEditing ? (
                  <input
                    type="text"
                    name="lastName"
                    value={localProfileData.lastName}
                    onChange={handleInputChange}
                    className="form-control"
                  />
                ) : (
                  <p>{localProfileData.lastName}</p>
                )}
              </div>

              <div className="profile-field">
                <label>Email</label>
                {isEditing ? (
                  <input
                    type="email"
                    name="email"
                    value={localProfileData.email}
                    onChange={handleInputChange}
                    className="form-control"
                  />
                ) : (
                  <p>{localProfileData.email}</p>
                )}
              </div>

              <div className="profile-field">
                <label>Phone</label>
                {isEditing ? (
                  <input
                    type="tel"
                    name="phone"
                    value={localProfileData.phone}
                    onChange={handleInputChange}
                    className="form-control"
                  />
                ) : (
                  <p>{localProfileData.phone}</p>
                )}
              </div>

              <div className="profile-field">
                <label>Date of Birth</label>
                {isEditing ? (
                  <input
                    type="date"
                    name="dateOfBirth"
                    value={localProfileData.dateOfBirth}
                    onChange={handleInputChange}
                    className="form-control"
                  />
                ) : (
                  <p>{localProfileData.dateOfBirth}</p>
                )}
              </div>

              <div className="profile-field">
                <label>Address</label>
                {isEditing ? (
                  <input
                    type="text"
                    name="address"
                    value={localProfileData.address}
                    onChange={handleInputChange}
                    className="form-control"
                  />
                ) : (
                  <p>{localProfileData.address}</p>
                )}
              </div>

              <div className="profile-field">
                <label>Emergency Contact</label>
                <div className="sensitive-info">
                  {isEditing ? (
                    <input
                      type="text"
                      name="emergencyContact"
                      value={localProfileData.emergencyContact}
                      onChange={handleInputChange}
                      className="form-control"
                    />
                  ) : (
                    <>
                      <p>{showSensitiveInfo ? localProfileData.emergencyContact : '••••••••••••••••••'}</p>
                      <button 
                        className="toggle-sensitive"
                        onClick={() => setShowSensitiveInfo(!showSensitiveInfo)}
                      >
                        {showSensitiveInfo ? <EyeOff size={16} /> : <Eye size={16} />}
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="profile-section">
            <h2>Role-Specific Information</h2>
            <div className="profile-grid">
              <div className="profile-field">
                <label>Role</label>
                <p>{userSpecificData.role}</p>
              </div>

              {userSpecificData.studentId && (
                <div className="profile-field">
                  <label>Student ID</label>
                  <p>{userSpecificData.studentId}</p>
                </div>
              )}

              {userSpecificData.employeeId && (
                <div className="profile-field">
                  <label>Employee ID</label>
                  <p>{userSpecificData.employeeId}</p>
                </div>
              )}

              {userSpecificData.grade && (
                <div className="profile-field">
                  <label>Grade</label>
                  <p>{userSpecificData.grade}</p>
                </div>
              )}

              {userSpecificData.section && (
                <div className="profile-field">
                  <label>Section</label>
                  <p>{userSpecificData.section}</p>
                </div>
              )}

              {userSpecificData.subject && (
                <div className="profile-field">
                  <label>Subject</label>
                  <p>{userSpecificData.subject}</p>
                </div>
              )}

              {userSpecificData.classes && (
                <div className="profile-field">
                  <label>Classes</label>
                  <p>{userSpecificData.classes.join(', ')}</p>
                </div>
              )}

              {userSpecificData.qualification && (
                <div className="profile-field">
                  <label>Qualification</label>
                  <p>{userSpecificData.qualification}</p>
                </div>
              )}

              {userSpecificData.student && (
                <div className="profile-field">
                  <label>Student</label>
                  <p>{userSpecificData.student}</p>
                </div>
              )}

              {userSpecificData.relation && (
                <div className="profile-field">
                  <label>Relation</label>
                  <p>{userSpecificData.relation}</p>
                </div>
              )}

              {userSpecificData.occupation && (
                <div className="profile-field">
                  <label>Occupation</label>
                  <p>{userSpecificData.occupation}</p>
                </div>
              )}

              {userSpecificData.department && (
                <div className="profile-field">
                  <label>Department</label>
                  <p>{userSpecificData.department}</p>
                </div>
              )}

              {userSpecificData.hireDate && (
                <div className="profile-field">
                  <label>Hire Date</label>
                  <p>{userSpecificData.hireDate}</p>
                </div>
              )}

              {userSpecificData.enrollmentDate && (
                <div className="profile-field">
                  <label>Enrollment Date</label>
                  <p>{userSpecificData.enrollmentDate}</p>
                </div>
              )}

              {userSpecificData.guardian && (
                <div className="profile-field">
                  <label>Guardian</label>
                  <div className="sensitive-info">
                    <p>{showSensitiveInfo ? userSpecificData.guardian : '••••••••'}</p>
                    <button 
                      className="toggle-sensitive"
                      onClick={() => setShowSensitiveInfo(!showSensitiveInfo)}
                    >
                      {showSensitiveInfo ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="profile-section">
            <h2>Account Settings</h2>
            <div className="profile-grid">
              <div className="profile-field">
                <label>Password</label>
                <button className="btn btn-outline">
                  Change Password
                </button>
              </div>

              <div className="profile-field">
                <label>Two-Factor Authentication</label>
                <div className="toggle-switch">
                  <input type="checkbox" id="2fa" />
                  <label htmlFor="2fa" className="switch-label"></label>
                  <span>Enabled</span>
                </div>
              </div>

              <div className="profile-field">
                <label>Notification Preferences</label>
                <button className="btn btn-outline">
                  Manage Notifications
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfilePage;