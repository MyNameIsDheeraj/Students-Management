import React from 'react';
import { Calendar, Clock, BookOpen, Plus, Edit, Trash2, Download, Upload, CheckCircle, AlertCircle } from 'lucide-react';

const ExamModal = ({ showModal, modalType, selectedExam, exams, closeModal }) => {
  if (!showModal) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h3>
            {modalType === 'create' && 'Schedule New Exam'}
            {modalType === 'edit' && 'Edit Exam'}
            {modalType === 'uploadMarks' && 'Upload Exam Marks'}
          </h3>
          <button className="close-btn" onClick={closeModal}>×</button>
        </div>
        
        {(modalType === 'create' || modalType === 'edit') && (
          <form>
            <div className="grid grid-2" style={{ gap: '15px' }}>
              <div className="form-group">
                <label className="form-label">Exam Name</label>
                <input type="text" className="form-control" defaultValue={selectedExam?.name} />
              </div>
              <div className="form-group">
                <label className="form-label">Exam Type</label>
                <select className="form-control" defaultValue={selectedExam?.type}>
                  <option value="">Select type...</option>
                  <option value="Mid-term">Mid-term</option>
                  <option value="Final">Final</option>
                  <option value="Unit Test">Unit Test</option>
                  <option value="Quiz">Quiz</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Subject</label>
                <select className="form-control" defaultValue={selectedExam?.subject}>
                  <option value="">Select subject...</option>
                  <option value="Mathematics">Mathematics</option>
                  <option value="Physics">Physics</option>
                  <option value="Chemistry">Chemistry</option>
                  <option value="English">English</option>
                  <option value="Computer Science">Computer Science</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Class</label>
                <select className="form-control" defaultValue={selectedExam?.class}>
                  <option value="">Select class...</option>
                  <option value="8A">8A</option>
                  <option value="8B">8B</option>
                  <option value="9A">9A</option>
                  <option value="9B">9B</option>
                  <option value="10A">10A</option>
                  <option value="10B">10B</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Exam Date</label>
                <input type="date" className="form-control" defaultValue={selectedExam?.date} />
              </div>
              <div className="form-group">
                <label className="form-label">Start Time</label>
                <input type="time" className="form-control" />
              </div>
              <div className="form-group">
                <label className="form-label">Duration (hours)</label>
                <input type="number" className="form-control" step="0.5" placeholder="e.g., 2.5" />
              </div>
              <div className="form-group">
                <label className="form-label">Venue</label>
                <input type="text" className="form-control" defaultValue={selectedExam?.venue} />
              </div>
              <div className="form-group">
                <label className="form-label">Maximum Marks</label>
                <input type="number" className="form-control" defaultValue={selectedExam?.maxMarks} />
              </div>
              <div className="form-group">
                <label className="form-label">Passing Marks</label>
                <input type="number" className="form-control" />
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">Instructions (Optional)</label>
              <textarea className="form-control" rows="3" placeholder="Special instructions for students"></textarea>
            </div>
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
              <button type="button" className="btn btn-secondary" onClick={closeModal}>
                Cancel
              </button>
              <button type="submit" className="btn btn-primary">
                {modalType === 'create' ? 'Schedule Exam' : 'Save Changes'}
              </button>
            </div>
          </form>
        )}

        {modalType === 'uploadMarks' && (
          <form>
            <div className="form-group">
              <label className="form-label">Select Exam</label>
              <select className="form-control">
                <option value="">Choose exam...</option>
                {exams.filter(exam => exam.status === 'Completed').map(exam => (
                  <option key={exam.id} value={exam.id}>
                    {exam.name} - {exam.class} ({exam.date})
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Upload Method</label>
              <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <input type="radio" name="uploadMethod" value="file" defaultChecked />
                  Upload CSV/Excel file
                </label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <input type="radio" name="uploadMethod" value="manual" />
                  Enter marks manually
                </label>
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">Upload File</label>
              <input type="file" className="form-control" accept=".csv,.xlsx,.xls" />
              <small style={{ color: '#666' }}>
                Download template: <a href="#" style={{ color: '#007bff' }}>marks_template.csv</a>
              </small>
            </div>
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
              <button type="button" className="btn btn-secondary" onClick={closeModal}>
                Cancel
              </button>
              <button type="submit" className="btn btn-primary">
                Upload Marks
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default ExamModal;