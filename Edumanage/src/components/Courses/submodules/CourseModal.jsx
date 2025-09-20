import React from 'react';
import { BookOpen, FileText, User, Edit, Trash2, Plus } from 'lucide-react';

const CourseModal = ({ showModal, modalType, selectedItem, subjects, closeModal }) => {
  if (!showModal) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h3>
            {modalType === 'createCourse' && 'Create New Course'}
            {modalType === 'editCourse' && 'Edit Course'}
            {modalType === 'viewCourse' && 'Course Details'}
            {modalType === 'createSubject' && 'Add New Subject'}
            {modalType === 'editSubject' && 'Edit Subject'}
            {modalType === 'uploadSyllabus' && 'Upload Syllabus'}
          </h3>
          <button className="close-btn" onClick={closeModal}>×</button>
        </div>
        
        {modalType === 'viewCourse' && selectedItem && (
          <div>
            <h4>{selectedItem.name}</h4>
            <div className="grid grid-2" style={{ gap: '15px', marginBottom: '15px' }}>
              <div><strong>Duration:</strong> {selectedItem.duration}</div>
              <div><strong>Academic Year:</strong> {selectedItem.academicYear}</div>
              <div><strong>Total Students:</strong> {selectedItem.totalStudents}</div>
              <div><strong>Total Subjects:</strong> {selectedItem.subjects.length}</div>
            </div>
            <div style={{ marginBottom: '15px' }}>
              <strong>Description:</strong>
              <p style={{ marginTop: '8px', padding: '10px', backgroundColor: '#f8f9fa', borderRadius: '4px' }}>
                {selectedItem.description}
              </p>
            </div>
            <div>
              <strong>Subjects:</strong>
              <div style={{ marginTop: '8px', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {selectedItem.subjects.map((subject, index) => (
                  <span key={index} className="badge badge-info">
                    {subject}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {(modalType === 'createCourse' || modalType === 'editCourse') && (
          <form>
            <div className="grid grid-2" style={{ gap: '15px' }}>
              <div className="form-group">
                <label className="form-label">Course Name</label>
                <input type="text" className="form-control" defaultValue={selectedItem?.name} />
              </div>
              <div className="form-group">
                <label className="form-label">Duration</label>
                <select className="form-control" defaultValue={selectedItem?.duration}>
                  <option value="1 year">1 Year</option>
                  <option value="2 years">2 Years</option>
                  <option value="3 years">3 Years</option>
                  <option value="4 years">4 Years</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Academic Year</label>
                <input type="text" className="form-control" defaultValue={selectedItem?.academicYear} />
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">Description</label>
              <textarea className="form-control" rows="3" defaultValue={selectedItem?.description}></textarea>
            </div>
            <div className="form-group">
              <label className="form-label">Subjects (comma separated)</label>
              <input type="text" className="form-control" defaultValue={selectedItem?.subjects?.join(', ')} />
            </div>
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
              <button type="button" className="btn btn-secondary" onClick={closeModal}>
                Cancel
              </button>
              <button type="submit" className="btn btn-primary">
                {modalType === 'createCourse' ? 'Create Course' : 'Save Changes'}
              </button>
            </div>
          </form>
        )}

        {(modalType === 'createSubject' || modalType === 'editSubject') && (
          <form>
            <div className="grid grid-2" style={{ gap: '15px' }}>
              <div className="form-group">
                <label className="form-label">Subject Name</label>
                <input type="text" className="form-control" defaultValue={selectedItem?.name} />
              </div>
              <div className="form-group">
                <label className="form-label">Subject Code</label>
                <input type="text" className="form-control" defaultValue={selectedItem?.code} />
              </div>
              <div className="form-group">
                <label className="form-label">Credits</label>
                <input type="number" className="form-control" defaultValue={selectedItem?.credits} />
              </div>
              <div className="form-group">
                <label className="form-label">Grade Level</label>
                <input type="text" className="form-control" defaultValue={selectedItem?.gradeLevel} placeholder="e.g., 9-12" />
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">Description</label>
              <textarea className="form-control" rows="3" defaultValue={selectedItem?.description}></textarea>
            </div>
            <div className="form-group">
              <label className="form-label">Assign Teacher</label>
              <select className="form-control" defaultValue={selectedItem?.teacher}>
                <option value="">Select teacher...</option>
                <option value="Dr. Sarah Johnson">Dr. Sarah Johnson</option>
                <option value="Mr. David Wilson">Mr. David Wilson</option>
                <option value="Ms. Emily Brown">Ms. Emily Brown</option>
              </select>
            </div>
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
              <button type="button" className="btn btn-secondary" onClick={closeModal}>
                Cancel
              </button>
              <button type="submit" className="btn btn-primary">
                {modalType === 'createSubject' ? 'Add Subject' : 'Save Changes'}
              </button>
            </div>
          </form>
        )}

        {modalType === 'uploadSyllabus' && (
          <form>
            <div className="grid grid-2" style={{ gap: '15px' }}>
              <div className="form-group">
                <label className="form-label">Select Subject</label>
                <select className="form-control">
                  <option value="">Choose subject...</option>
                  {subjects.map(subject => (
                    <option key={subject.id} value={subject.id}>
                      {subject.name} ({subject.code})
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Select Class</label>
                <select className="form-control">
                  <option value="">Choose class...</option>
                  <option value="8A">8A</option>
                  <option value="8B">8B</option>
                  <option value="9A">9A</option>
                  <option value="9B">9B</option>
                  <option value="10A">10A</option>
                  <option value="10B">10B</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">Upload Syllabus Document</label>
              <input type="file" className="form-control" accept=".pdf,.doc,.docx" />
              <small style={{ color: '#666' }}>Supported formats: PDF, DOC, DOCX</small>
            </div>
            <div className="form-group">
              <label className="form-label">Chapters/Topics (one per line)</label>
              <textarea 
                className="form-control" 
                rows="6" 
                placeholder="Enter each chapter or topic on a new line"
              ></textarea>
            </div>
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
              <button type="button" className="btn btn-secondary" onClick={closeModal}>
                Cancel
              </button>
              <button type="submit" className="btn btn-primary">
                Upload Syllabus
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default CourseModal;