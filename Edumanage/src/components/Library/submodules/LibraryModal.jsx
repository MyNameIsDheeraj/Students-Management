import React from 'react';
import { Book, User, Calendar, Download, Upload, Eye, Edit, Trash2, AlertCircle } from 'lucide-react';

const LibraryModal = ({ showModal, modalType, selectedItem, closeModal, getStatusBadge, calculateDaysOverdue }) => {
  if (!showModal) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h3>
            {modalType === 'addBook' && 'Add New Book'}
            {modalType === 'editBook' && 'Edit Book'}
            {modalType === 'viewBook' && 'Book Details'}
            {modalType === 'issueBook' && 'Issue Book'}
            {modalType === 'returnBook' && 'Return Book'}
            {modalType === 'uploadDigital' && 'Upload Digital Resource'}
            {modalType === 'quickReturn' && 'Quick Return'}
          </h3>
          <button className="close-btn" onClick={closeModal}>×</button>
        </div>
        
        {modalType === 'viewBook' && selectedItem && (
          <div>
            <h4>{selectedItem.title}</h4>
            <div className="grid grid-2" style={{ gap: '15px', marginBottom: '15px' }}>
              <div><strong>Author:</strong> {selectedItem.author}</div>
              <div><strong>ISBN:</strong> {selectedItem.isbn}</div>
              <div><strong>Category:</strong> {selectedItem.category}</div>
              <div><strong>Publisher:</strong> {selectedItem.publisher}</div>
              <div><strong>Year:</strong> {selectedItem.year}</div>
              <div><strong>Location:</strong> {selectedItem.location}</div>
              <div><strong>Total Copies:</strong> {selectedItem.copies}</div>
              <div><strong>Available:</strong> {selectedItem.available}</div>
            </div>
            <div>
              <strong>Status:</strong>
              <span className={`badge ${getStatusBadge(selectedItem.status)}`} style={{ marginLeft: '8px' }}>
                {selectedItem.status}
              </span>
            </div>
          </div>
        )}

        {(modalType === 'addBook' || modalType === 'editBook') && (
          <form>
            <div className="grid grid-2" style={{ gap: '15px' }}>
              <div className="form-group">
                <label className="form-label">Book Title</label>
                <input type="text" className="form-control" defaultValue={selectedItem?.title} />
              </div>
              <div className="form-group">
                <label className="form-label">Author</label>
                <input type="text" className="form-control" defaultValue={selectedItem?.author} />
              </div>
              <div className="form-group">
                <label className="form-label">ISBN</label>
                <input type="text" className="form-control" defaultValue={selectedItem?.isbn} />
              </div>
              <div className="form-group">
                <label className="form-label">Category</label>
                <select className="form-control" defaultValue={selectedItem?.category}>
                  <option value="">Select category...</option>
                  <option value="Science">Science</option>
                  <option value="Mathematics">Mathematics</option>
                  <option value="History">History</option>
                  <option value="Literature">Literature</option>
                  <option value="Computer Science">Computer Science</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Publisher</label>
                <input type="text" className="form-control" defaultValue={selectedItem?.publisher} />
              </div>
              <div className="form-group">
                <label className="form-label">Publication Year</label>
                <input type="number" className="form-control" defaultValue={selectedItem?.year} />
              </div>
              <div className="form-group">
                <label className="form-label">Number of Copies</label>
                <input type="number" className="form-control" defaultValue={selectedItem?.copies} />
              </div>
              <div className="form-group">
                <label className="form-label">Location</label>
                <input type="text" className="form-control" defaultValue={selectedItem?.location} placeholder="e.g., Section A, Shelf 12" />
              </div>
            </div>
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
              <button type="button" className="btn btn-secondary" onClick={closeModal}>
                Cancel
              </button>
              <button type="submit" className="btn btn-primary">
                {modalType === 'addBook' ? 'Add Book' : 'Save Changes'}
              </button>
            </div>
          </form>
        )}

        {modalType === 'issueBook' && (
          <form>
            <div style={{ marginBottom: '20px' }}>
              <h4>{selectedItem?.title}</h4>
              <p style={{ color: '#666' }}>Available copies: {selectedItem?.available}</p>
            </div>
            <div className="form-group">
              <label className="form-label">Student Roll Number</label>
              <input type="text" className="form-control" placeholder="Enter student roll number" />
            </div>
            <div className="form-group">
              <label className="form-label">Issue Date</label>
              <input type="date" className="form-control" defaultValue={new Date().toISOString().split('T')[0]} />
            </div>
            <div className="form-group">
              <label className="form-label">Due Date</label>
              <input type="date" className="form-control" />
            </div>
            <div className="form-group">
              <label className="form-label">Notes (Optional)</label>
              <textarea className="form-control" rows="2" placeholder="Any special notes"></textarea>
            </div>
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
              <button type="button" className="btn btn-secondary" onClick={closeModal}>
                Cancel
              </button>
              <button type="submit" className="btn btn-primary">
                Issue Book
              </button>
            </div>
          </form>
        )}

        {modalType === 'returnBook' && (
          <form>
            <div style={{ marginBottom: '20px' }}>
              <h4>Return Book</h4>
              <p><strong>Book:</strong> {selectedItem?.bookTitle}</p>
              <p><strong>Student:</strong> {selectedItem?.studentName} ({selectedItem?.rollNumber})</p>
              <p><strong>Issue Date:</strong> {selectedItem?.issueDate}</p>
              <p><strong>Due Date:</strong> {selectedItem?.dueDate}</p>
              {selectedItem?.status === 'Overdue' && (
                <div className="alert alert-warning">
                  <AlertCircle size={16} style={{ marginRight: '8px' }} />
                  <strong>Overdue:</strong> {calculateDaysOverdue(selectedItem?.dueDate)} days
                </div>
              )}
            </div>
            <div className="form-group">
              <label className="form-label">Return Date</label>
              <input type="date" className="form-control" defaultValue={new Date().toISOString().split('T')[0]} />
            </div>
            <div className="form-group">
              <label className="form-label">Book Condition</label>
              <select className="form-control">
                <option value="good">Good</option>
                <option value="fair">Fair</option>
                <option value="damaged">Damaged</option>
                <option value="lost">Lost</option>
              </select>
            </div>
            {selectedItem?.fine > 0 && (
              <div className="form-group">
                <label className="form-label">Fine Amount</label>
                <input type="number" className="form-control" defaultValue={selectedItem?.fine} />
              </div>
            )}
            <div className="form-group">
              <label className="form-label">Notes (Optional)</label>
              <textarea className="form-control" rows="2" placeholder="Any notes about the return"></textarea>
            </div>
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
              <button type="button" className="btn btn-secondary" onClick={closeModal}>
                Cancel
              </button>
              <button type="submit" className="btn btn-primary">
                Process Return
              </button>
            </div>
          </form>
        )}

        {modalType === 'uploadDigital' && (
          <form>
            <div className="grid grid-2" style={{ gap: '15px' }}>
              <div className="form-group">
                <label className="form-label">Resource Title</label>
                <input type="text" className="form-control" placeholder="Enter resource title" />
              </div>
              <div className="form-group">
                <label className="form-label">Resource Type</label>
                <select className="form-control">
                  <option value="">Select type...</option>
                  <option value="PDF">PDF Document</option>
                  <option value="Video">Video</option>
                  <option value="eBook">eBook</option>
                  <option value="Audio">Audio</option>
                  <option value="Presentation">Presentation</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Subject</label>
                <select className="form-control">
                  <option value="">Select subject...</option>
                  <option value="Mathematics">Mathematics</option>
                  <option value="Physics">Physics</option>
                  <option value="Chemistry">Chemistry</option>
                  <option value="English">English</option>
                  <option value="History">History</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Class/Grade</label>
                <input type="text" className="form-control" placeholder="e.g., 9-12" />
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">Upload File</label>
              <input type="file" className="form-control" accept=".pdf,.mp4,.epub,.mp3,.ppt,.pptx" />
              <small style={{ color: '#666' }}>Supported formats: PDF, MP4, EPUB, MP3, PPT, PPTX</small>
            </div>
            <div className="form-group">
              <label className="form-label">Description</label>
              <textarea className="form-control" rows="3" placeholder="Brief description of the resource"></textarea>
            </div>
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
              <button type="button" className="btn btn-secondary" onClick={closeModal}>
                Cancel
              </button>
              <button type="submit" className="btn btn-primary">
                Upload Resource
              </button>
            </div>
          </form>
        )}

        {modalType === 'quickReturn' && (
          <form>
            <div className="form-group">
              <label className="form-label">Scan Book Barcode or Enter Book ID</label>
              <input type="text" className="form-control" placeholder="Scan or enter book identifier" />
            </div>
            <div className="form-group">
              <label className="form-label">Student Roll Number</label>
              <input type="text" className="form-control" placeholder="Enter student roll number" />
            </div>
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
              <button type="button" className="btn btn-secondary" onClick={closeModal}>
                Cancel
              </button>
              <button type="submit" className="btn btn-primary">
                Process Return
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default LibraryModal;