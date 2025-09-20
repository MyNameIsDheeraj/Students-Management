import React from 'react';
import { FileText, Plus, Calendar, Clock, CheckCircle, Upload, Download, Edit, Trash2, Eye } from 'lucide-react';

const AssignmentModal = ({ showModal, modalType, selectedAssignment, assignments, closeModal }) => {
  if (!showModal) return null;

  const getStatusBadge = (status) => {
    const badges = {
      active: 'badge-warning',
      completed: 'badge-success',
      overdue: 'badge-danger',
      draft: 'badge-secondary'
    }
    return badges[status] || 'badge-secondary'
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h3>
            {modalType === 'create' && 'Create Assignment'}
            {modalType === 'edit' && 'Edit Assignment'}
            {modalType === 'view' && 'Assignment Details'}
            {modalType === 'submit' && 'Submit Assignment'}
            {modalType === 'grade' && 'Grade Submission'}
            {modalType === 'viewGrade' && 'View Grade & Feedback'}
          </h3>
          <button className="close-btn" onClick={closeModal}>×</button>
        </div>
        
        {modalType === 'view' && selectedAssignment && (
          <div>
            <h4>{selectedAssignment.title}</h4>
            <div className="grid grid-2" style={{ gap: '15px', marginBottom: '15px' }}>
              <div><strong>Subject:</strong> {selectedAssignment.subject}</div>
              <div><strong>Class:</strong> {selectedAssignment.class}</div>
              <div><strong>Teacher:</strong> {selectedAssignment.teacher}</div>
              <div><strong>Due Date:</strong> {selectedAssignment.dueDate}</div>
              <div><strong>Max Marks:</strong> {selectedAssignment.maxMarks}</div>
              <div><strong>Status:</strong> 
                <span className={`badge ${getStatusBadge(selectedAssignment.status)}`} style={{ marginLeft: '8px' }}>
                  {selectedAssignment.status}
                </span>
              </div>
            </div>
            <div style={{ marginBottom: '15px' }}>
              <strong>Description:</strong>
              <p style={{ marginTop: '8px', padding: '10px', backgroundColor: '#f8f9fa', borderRadius: '4px' }}>
                {selectedAssignment.description}
              </p>
            </div>
            {selectedAssignment.attachments.length > 0 && (
              <div>
                <strong>Attachments:</strong>
                <div style={{ marginTop: '8px', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {selectedAssignment.attachments.map((file, index) => (
                    <button key={index} className="btn btn-secondary">
                      <Download size={14} />
                      {file}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {modalType === 'submit' && (
          <form>
            <div style={{ marginBottom: '20px' }}>
              <h4>{selectedAssignment?.title}</h4>
              <p style={{ color: '#666' }}>Due: {selectedAssignment?.dueDate}</p>
            </div>
            <div className="form-group">
              <label className="form-label">Upload Files</label>
              <input type="file" className="form-control" multiple accept=".pdf,.doc,.docx,.jpg,.png" />
              <small style={{ color: '#666' }}>Supported formats: PDF, DOC, DOCX, JPG, PNG</small>
            </div>
            <div className="form-group">
              <label className="form-label">Additional Comments (Optional)</label>
              <textarea className="form-control" rows="3" placeholder="Any additional comments or notes"></textarea>
            </div>
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
              <button type="button" className="btn btn-secondary" onClick={closeModal}>
                Cancel
              </button>
              <button type="submit" className="btn btn-primary">
                Submit Assignment
              </button>
            </div>
          </form>
        )}

        {modalType === 'grade' && (
          <form>
            <div style={{ marginBottom: '20px' }}>
              <h4>Grade Submission</h4>
              <p><strong>Student:</strong> {selectedAssignment?.studentName}</p>
              <p><strong>Assignment:</strong> {assignments.find(a => a.id === selectedAssignment?.assignmentId)?.title}</p>
            </div>
            <div className="form-group">
              <label className="form-label">Marks Obtained</label>
              <input 
                type="number" 
                className="form-control" 
                placeholder={`Enter marks (Max: ${assignments.find(a => a.id === selectedAssignment?.assignmentId)?.maxMarks})`}
                max={assignments.find(a => a.id === selectedAssignment?.assignmentId)?.maxMarks}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Feedback</label>
              <textarea className="form-control" rows="4" placeholder="Provide feedback to the student"></textarea>
            </div>
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
              <button type="button" className="btn btn-secondary" onClick={closeModal}>
                Cancel
              </button>
              <button type="submit" className="btn btn-primary">
                Save Grade
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default AssignmentModal;