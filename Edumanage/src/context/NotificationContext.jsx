import React, { createContext, useContext, useState, useEffect } from 'react';

const NotificationContext = createContext();

export const useNotifications = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error('useNotifications must be used within a NotificationProvider');
  }
  return context;
};

export const NotificationProvider = ({ children, userRole }) => {
  const [notifications, setNotifications] = useState([]);

  // Sample notifications with different permission levels
  const sampleNotifications = [
    {
      id: 1,
      title: 'New Assignment Posted',
      message: 'Mathematics assignment due tomorrow',
      timestamp: new Date(Date.now() - 3600000), // 1 hour ago
      read: false,
      permissionLevel: ['admin', 'student', 'teacher'],
      icon: 'assignment'
    },
    {
      id: 2,
      title: 'Parent-Teacher Meeting',
      message: 'Meeting scheduled for next Monday',
      timestamp: new Date(Date.now() - 86400000), // 1 day ago
      read: false,
      permissionLevel: ['admin', 'teacher', 'parent'],
      icon: 'meeting'
    },
    {
      id: 3,
      title: 'System Maintenance',
      message: 'Scheduled maintenance this weekend',
      timestamp: new Date(Date.now() - 172800000), // 2 days ago
      read: true,
      permissionLevel: ['admin', 'student', 'teacher', 'parent'],
      icon: 'maintenance'
    },
    {
      id: 4,
      title: 'Grade Updated',
      message: 'Your latest test results are available',
      timestamp: new Date(Date.now() - 259200000), // 3 days ago
      read: false,
      permissionLevel: ['student'],
      icon: 'grade'
    },
    {
      id: 5,
      title: 'New Student Enrolled',
      message: 'John Doe has been enrolled in your class',
      timestamp: new Date(Date.now() - 432000000), // 5 days ago
      read: true,
      permissionLevel: ['admin', 'teacher'],
      icon: 'student'
    },
    {
      id: 6,
      title: 'Fee Payment Due',
      message: 'Monthly fee payment is due soon',
      timestamp: new Date(Date.now() - 518400000), // 6 days ago
      read: false,
      permissionLevel: ['parent'],
      icon: 'payment'
    }
  ];

  // Filter notifications based on user role
  const getFilteredNotifications = (role) => {
    return sampleNotifications.filter(notification => 
      notification.permissionLevel.includes(role)
    );
  };

  // Initialize notifications based on user role
  useEffect(() => {
    if (userRole) {
      setNotifications(getFilteredNotifications(userRole));
    }
  }, [userRole]);

  const markAsRead = (id) => {
    setNotifications(notifications.map(notification => 
      notification.id === id ? { ...notification, read: true } : notification
    ));
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map(notification => 
      ({ ...notification, read: true })
    ));
  };

  const addNotification = (notification) => {
    setNotifications(prev => [...prev, notification]);
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  const value = {
    notifications,
    unreadCount,
    markAsRead,
    markAllAsRead,
    addNotification
  };

  return (
    <NotificationContext.Provider value={value}>
      {children}
    </NotificationContext.Provider>
  );
};