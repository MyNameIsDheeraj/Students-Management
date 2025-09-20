import React from 'react';

const CreateAssignment = ({ setActiveTab }) => {
  return (
    <div className="card">
      <h3 style={{ marginBottom: '20px' }}>Create New Assignment</h3>
      <form>
        <div className="grid grid-2" style={{ gap: '15px' }}>
          <div className="form-group">
            <label className="form-label">Assignment Title</label>
            <input type="text" className="form-control" placeholder="Enter assignment title" />
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
            <label className="form-label">Class</label>
            <select className="form-control">
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
            <label className="form-label">Due Date</label>
            <input type="date" className="form-control" />
          </div>
          <div className="form-group">
            <label className="form-label">Maximum Marks</label>
            <input type="number" className="form-control" placeholder="Enter maximum marks" />
          </div>
          <div className="form-group">
            <label className="form-label">Status</label>
            <select className="form-control">
              <option value="draft">Draft</option>
              <option value="active">Active</option>
            </select>
          </div>
        </div>
        <div className="form-group">
          <label className="form-label">Description</label>
          <textarea className="form-control" rows="4" placeholder="Enter assignment description and instructions"></textarea>
        </div>
        <div className="form-group">
          <label className="form-label">Attach Files (Optional)</label>
          <input type="file" className="form-control" multiple accept=".pdf,.doc,.docx,.ppt,.pptx" />
          <small style={{ color: '#666' }}>Supported formats: PDF, DOC, DOCX, PPT, PPTX</small>
        </div>
        <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
          <button type="button" className="btn btn-secondary" onClick={() => setActiveTab('list')}>
            Cancel
          </button>
          <button type="submit" className="btn btn-primary">
            Create Assignment
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateAssignment;