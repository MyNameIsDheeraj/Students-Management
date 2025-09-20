// Search index for the application
const searchIndex = [
  {
    id: 'dashboard',
    title: 'Dashboard',
    description: 'Main dashboard with overview of all activities',
    path: '/dashboard',
    keywords: ['home', 'overview', 'main', 'dashboard']
  },
  {
    id: 'students',
    title: 'Students',
    description: 'Manage student profiles and information',
    path: '/students',
    keywords: ['student', 'profile', 'information', 'manage', 'list']
  },
  {
    id: 'student-portal',
    title: 'Student Portal',
    description: 'Student portal for accessing personal information',
    path: '/student-portal',
    keywords: ['student', 'portal', 'personal', 'access']
  },
  {
    id: 'teachers',
    title: 'Teachers',
    description: 'Manage teacher profiles and information',
    path: '/teachers',
    keywords: ['teacher', 'profile', 'information', 'manage', 'list']
  },
  {
    id: 'parents',
    title: 'Parents',
    description: 'Parent portal for accessing child information',
    path: '/parents',
    keywords: ['parent', 'portal', 'child', 'access']
  },
  {
    id: 'admin',
    title: 'Admin Panel',
    description: 'Administrative panel for system management',
    path: '/admin',
    keywords: ['admin', 'panel', 'system', 'management']
  },
  {
    id: 'assignments',
    title: 'Assignments',
    description: 'Manage and track student assignments',
    path: '/assignments',
    keywords: ['assignment', 'task', 'homework', 'manage', 'track']
  },
  {
    id: 'attendance',
    title: 'Attendance',
    description: 'Track and manage student attendance',
    path: '/attendance',
    keywords: ['attendance', 'presence', 'track', 'manage']
  },
  {
    id: 'courses',
    title: 'Courses',
    description: 'Manage course information and curriculum',
    path: '/courses',
    keywords: ['course', 'curriculum', 'subject', 'manage']
  },
  {
    id: 'exams',
    title: 'Exams',
    description: 'Manage exam schedules and results',
    path: '/exams',
    keywords: ['exam', 'test', 'schedule', 'result', 'manage']
  },
  {
    id: 'library',
    title: 'Library',
    description: 'Library management system',
    path: '/library',
    keywords: ['library', 'book', 'resource', 'manage']
  },
  {
    id: 'communication',
    title: 'Communication',
    description: 'Communication tools and messaging',
    path: '/communication',
    keywords: ['communication', 'message', 'chat', 'contact']
  },
  {
    id: 'reports',
    title: 'Reports',
    description: 'Generate and view system reports',
    path: '/reports',
    keywords: ['report', 'generate', 'view', 'analytics']
  },
  {
    id: 'finance',
    title: 'Finance',
    description: 'Financial management and fee tracking',
    path: '/finance',
    keywords: ['finance', 'fee', 'payment', 'manage', 'money']
  }
];

export const search = (query) => {
  if (!query || query.trim() === '') {
    return [];
  }

  const normalizedQuery = query.toLowerCase().trim();
  const results = [];

  searchIndex.forEach(item => {
    // Check if query matches title, description, or any keywords
    const matchesTitle = item.title.toLowerCase().includes(normalizedQuery);
    const matchesDescription = item.description.toLowerCase().includes(normalizedQuery);
    const matchesKeywords = item.keywords.some(keyword => keyword.includes(normalizedQuery));
    
    if (matchesTitle || matchesDescription || matchesKeywords) {
      results.push(item);
    }
  });

  return results;
};

export default searchIndex;