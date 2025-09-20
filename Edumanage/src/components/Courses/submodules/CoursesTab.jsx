import React from 'react';
import { BookOpen, Plus, Edit, Trash2, Users } from 'lucide-react';

const CoursesTab = ({ courses, openModal }) => {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h3>Course Management</h3>
        <button className="btn btn-primary" onClick={() => openModal('createCourse')}>
          <Plus size={16} />
          Create Course
        </button>
      </div>

      <div className="grid grid-2">
        {courses.map((course) => (
          <div key={course.id} className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '15px' }}>
              <div>
                <h4>{course.name}</h4>
                <p style={{ color: '#666', marginBottom: '5px' }}>Duration: {course.duration}</p>
                <p style={{ color: '#666' }}>Academic Year: {course.academicYear}</p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Users size={16} color="#666" />
                <span style={{ fontSize: '14px' }}>{course.totalStudents} students</span>
              </div>
            </div>

            <div style={{ marginBottom: '15px' }}>
              <p style={{ fontSize: '14px', color: '#666' }}>{course.description}</p>
            </div>

            <div style={{ marginBottom: '15px' }}>
              <strong style={{ fontSize: '14px' }}>Subjects:</strong>
              <div style={{ marginTop: '8px', display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                {course.subjects.map((subject, index) => (
                  <span key={index} className="badge badge-info">
                    {subject}
                  </span>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', gap: '10px' }}>
              <button 
                className="btn btn-primary"
                onClick={() => openModal('editCourse', course)}
              >
                <Edit size={16} />
                Edit
              </button>
              <button 
                className="btn btn-secondary"
                onClick={() => openModal('viewCourse', course)}
              >
                <BookOpen size={16} />
                View Details
              </button>
              <button className="btn btn-danger">
                <Trash2 size={16} />
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesTab;