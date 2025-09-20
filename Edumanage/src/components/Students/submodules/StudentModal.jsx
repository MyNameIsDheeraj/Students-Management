import React from 'react';
import { User, BookOpen, FileText } from 'lucide-react';

const StudentModal = ({ showModal, modalType, selectedStudent, students, closeModal }) => {
  if (!showModal) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h3>
            {modalType === 'edit' && 'Edit Student Profile'}
            {modalType === 'view' && 'Student Details'}
            {modalType === 'academic' && 'Assign Subjects'}
            {modalType === 'upload' && 'Upload Document'}
          </h3>
          <button className="close-btn" onClick={closeModal}>×</button>
        </div>
        
        {modalType === 'view' && selectedStudent && (
          <div>
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
              <div style={{ 
                width: '100px', 
                height: '100px', 
                backgroundColor: '#f0f0f0', 
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 15px'
              }}>
                <User size={50} color="#666" />
              </div>
              <h3>{selectedStudent.name}</h3>
              <p style={{ color: '#666' }}>ID: {selectedStudent.rollNumber}</p>
            </div>

            <div className="grid grid-2" style={{ gap: '15px' }}>
              <div>
                <strong>Class:</strong> {selectedStudent.class}
              </div>
              <div>
                <strong>Age:</strong> {selectedStudent.age}
              </div>
              <div>
                <strong>Date of Birth:</strong> {selectedStudent.dateOfBirth}
              </div>
              <div>
                <strong>Gender:</strong> {selectedStudent.gender}
              </div>
              <div>
                <strong>Phone:</strong> {selectedStudent.phone}
              </div>
              <div>
                <strong>Email:</strong> {selectedStudent.email}
              </div>
            </div>

            <div style={{ marginTop: '15px' }}>
              <strong>Address:</strong>
              <p style={{ marginTop: '5px' }}>{selectedStudent.address}</p>
            </div>

            <div style={{ marginTop: '15px' }}>
              <strong>Subjects:</strong>
              <div style={{ marginTop: '8px', display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                {selectedStudent.subjects.map((subject, index) => (
                  <span key={index} className="badge badge-info">
                    {subject}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {modalType === 'edit' && (
          <form>
            <div className="grid grid-2" style={{ gap: '15px' }}>
              <div className="form-group">
                <label className="form-label">Full Name</label>
                <input type="text" className="form-control" defaultValue={selectedStudent?.name} />
              </div>
              <div className="form-group">
                <label className="form-label">Roll Number</label>
                <input type="text" className="form-control" defaultValue={selectedStudent?.rollNumber} />
              </div>
              <div className="form-group">
                <label className="form-label">Class</label>
                <select className="form-control" defaultValue={selectedStudent?.class}>
                  <option value="9A">9A</option>
                  <option value="9B">9B</option>
                  <option value="10A">10A</option>
                  <option value="10B">10B</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Date of Birth</label>
                <input type="date" className="form-control" defaultValue={selectedStudent?.dateOfBirth} />
              </div>
              <div className="form-group">
                <label className="form-label">Phone</label>
                <input type="tel" className="form-control" defaultValue={selectedStudent?.phone} />
              </div>
              <div className="form-group">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" defaultValue={selectedStudent?.email} />
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">Address</label>
              <textarea className="form-control" rows="3" defaultValue={selectedStudent?.address}></textarea>
            </div>
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
              <button type="button" className="btn btn-secondary" onClick={closeModal}>
                Cancel
              </button>
              <button type="submit" className="btn btn-primary">
                Save Changes
              </button>
            </div>
          </form>
        )}

        {modalType === 'upload' && (
          <form>
            <div className="form-group">
              <label className="form-label">Select Student</label>
              <select className="form-control">
                <option value="">Choose a student...</option>
                {students.map(student => (
                  <option key={student.id} value={student.id}>
                    {student.name} - {student.rollNumber}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Document Type</label>
              <select className="form-control">
                <option value="">Select document type...</option>
                <option value="admission">Admission Form</option>
                <option value="birth">Birth Certificate</option>
                <option value="previous">Previous School Certificate</option>
                <option value="id">ID Proof</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Upload File</label>
              <input type="file" className="form-control" accept=".pdf,.jpg,.jpeg,.png" />
              <small style={{ color: '#666' }}>Supported formats: PDF, JPG, PNG (Max 5MB)</small>
            </div>
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
              <button type="button" className="btn btn-secondary" onClick={closeModal}>
                Cancel
              </button>
              <button type="submit" className="btn btn-primary">
                Upload Document
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default StudentModal;