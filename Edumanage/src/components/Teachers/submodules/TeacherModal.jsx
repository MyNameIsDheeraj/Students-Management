import React from 'react';
import { User, BookOpen, DollarSign } from 'lucide-react';

const TeacherModal = ({ showModal, modalType, selectedTeacher, teachers, closeModal }) => {
  if (!showModal) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h3>
            {modalType === 'add' && 'Add New Teacher'}
            {modalType === 'edit' && 'Edit Teacher Profile'}
            {modalType === 'view' && 'Teacher Details'}
            {modalType === 'assign' && 'Assign Subject/Class'}
          </h3>
          <button className="close-btn" onClick={closeModal}>×</button>
        </div>
        
        {modalType === 'view' && selectedTeacher && (
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
              <h3>{selectedTeacher.name}</h3>
              <p style={{ color: '#666' }}>ID: {selectedTeacher.employeeId}</p>
              <p style={{ color: '#666' }}>{selectedTeacher.designation}</p>
            </div>

            <div className="grid grid-2" style={{ gap: '15px' }}>
              <div><strong>Phone:</strong> {selectedTeacher.phone}</div>
              <div><strong>Email:</strong> {selectedTeacher.email}</div>
              <div><strong>Joined:</strong> {selectedTeacher.dateOfJoining}</div>
              <div><strong>Experience:</strong> {selectedTeacher.experience}</div>
            </div>

            <div style={{ marginTop: '15px' }}>
              <strong>Address:</strong>
              <p style={{ marginTop: '5px' }}>{selectedTeacher.address}</p>
            </div>

            <div style={{ marginTop: '15px' }}>
              <strong>Qualifications:</strong>
              <div style={{ marginTop: '8px', display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                {selectedTeacher.qualifications.map((qual, index) => (
                  <span key={index} className="badge badge-info">
                    {qual}
                  </span>
                ))}
              </div>
            </div>

            <div style={{ marginTop: '15px' }}>
              <strong>Subjects:</strong>
              <div style={{ marginTop: '8px', display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                {selectedTeacher.subjects.map((subject, index) => (
                  <span key={index} className="badge badge-success">
                    {subject}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {(modalType === 'add' || modalType === 'edit') && (
          <form>
            <div className="grid grid-2" style={{ gap: '15px' }}>
              <div className="form-group">
                <label className="form-label">Full Name</label>
                <input type="text" className="form-control" defaultValue={selectedTeacher?.name} />
              </div>
              <div className="form-group">
                <label className="form-label">Employee ID</label>
                <input type="text" className="form-control" defaultValue={selectedTeacher?.employeeId} />
              </div>
              <div className="form-group">
                <label className="form-label">Designation</label>
                <input type="text" className="form-control" defaultValue={selectedTeacher?.designation} />
              </div>
              <div className="form-group">
                <label className="form-label">Date of Joining</label>
                <input type="date" className="form-control" defaultValue={selectedTeacher?.dateOfJoining} />
              </div>
              <div className="form-group">
                <label className="form-label">Phone</label>
                <input type="tel" className="form-control" defaultValue={selectedTeacher?.phone} />
              </div>
              <div className="form-group">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" defaultValue={selectedTeacher?.email} />
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">Address</label>
              <textarea className="form-control" rows="3" defaultValue={selectedTeacher?.address}></textarea>
            </div>
            <div className="form-group">
              <label className="form-label">Qualifications (comma separated)</label>
              <input type="text" className="form-control" defaultValue={selectedTeacher?.qualifications?.join(', ')} />
            </div>
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
              <button type="button" className="btn btn-secondary" onClick={closeModal}>
                Cancel
              </button>
              <button type="submit" className="btn btn-primary">
                {modalType === 'add' ? 'Add Teacher' : 'Save Changes'}
              </button>
            </div>
          </form>
        )}

        {modalType === 'assign' && (
          <form>
            <div className="form-group">
              <label className="form-label">Select Teacher</label>
              <select className="form-control">
                <option value="">Choose a teacher...</option>
                {teachers.map(teacher => (
                  <option key={teacher.id} value={teacher.id}>
                    {teacher.name} - {teacher.designation}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Subject</label>
              <select className="form-control">
                <option value="">Select subject...</option>
                <option value="mathematics">Mathematics</option>
                <option value="physics">Physics</option>
                <option value="chemistry">Chemistry</option>
                <option value="english">English</option>
                <option value="computer">Computer Science</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Classes (hold Ctrl to select multiple)</label>
              <select className="form-control" multiple>
                <option value="8A">8A</option>
                <option value="8B">8B</option>
                <option value="9A">9A</option>
                <option value="9B">9B</option>
                <option value="10A">10A</option>
                <option value="10B">10B</option>
                <option value="11A">11A</option>
                <option value="11B">11B</option>
              </select>
            </div>
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
              <button type="button" className="btn btn-secondary" onClick={closeModal}>
                Cancel
              </button>
              <button type="submit" className="btn btn-primary">
                Assign
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default TeacherModal;