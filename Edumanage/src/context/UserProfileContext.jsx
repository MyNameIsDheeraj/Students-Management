import React, { createContext, useContext, useState, useEffect } from 'react';

const UserProfileContext = createContext();

export const useUserProfile = () => {
  const context = useContext(UserProfileContext);
  if (!context) {
    throw new Error('useUserProfile must be used within a UserProfileProvider');
  }
  return context;
};

export const UserProfileProvider = ({ children, userRole }) => {
  const [profileData, setProfileData] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    address: '123 Main St, City, State 12345',
    dateOfBirth: '1990-01-01',
    emergencyContact: 'Jane Doe - +1 (555) 987-6543'
  });

  // User-specific data based on role
  const getUserSpecificData = () => {
    switch (userRole) {
      case 'admin':
        return {
          role: 'Administrator',
          department: 'IT Department',
          employeeId: 'EMP-2020-001',
          hireDate: '2020-01-15'
        };
      case 'student':
        return {
          role: 'Student',
          studentId: 'STU-2023-001',
          grade: '10th Grade',
          section: 'A',
          guardian: 'Michael Parent',
          enrollmentDate: '2022-08-15'
        };
      case 'teacher':
        return {
          role: 'Teacher',
          employeeId: 'EMP-2020-001',
          subject: 'Mathematics',
          classes: ['10A', '11B', '12C'],
          qualification: 'M.Sc. Mathematics'
        };
      case 'parent':
        return {
          role: 'Parent',
          student: 'John Student',
          relation: 'Father',
          occupation: 'Software Engineer'
        };
      default:
        return {
          role: 'User'
        };
    }
  };

  const userSpecificData = getUserSpecificData();

  const updateProfileData = (newData) => {
    setProfileData(prevData => ({
      ...prevData,
      ...newData
    }));
  };

  const value = {
    profileData,
    userSpecificData,
    updateProfileData
  };

  return (
    <UserProfileContext.Provider value={value}>
      {children}
    </UserProfileContext.Provider>
  );
};