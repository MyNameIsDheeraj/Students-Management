import React from 'react';
import { Bell, MessageSquare, Calendar, Send, Plus, Edit, Trash2, Users, Mail, Smartphone } from 'lucide-react';

const CommunicationModal = ({ 
  showModal, 
  modalType, 
  selectedItem, 
  subjects, 
  closeModal,
  handleAddUser,
  handleEditUser,
  handlePermSave,
  handleNotifSettings,
  handleNotifChange,
  handleImport,
  handleExport,
  handleBackup,
  handleRestore,
  handleBackupDownload,
  handleBackupRestore
}) => {
  if (!showModal) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h3>
            {modalType === 'createAnnouncement' && 'Create Announcement'}
            {modalType === 'editAnnouncement' && 'Edit Announcement'}
            {modalType === 'composeMessage' && 'Compose Message'}
            {modalType === 'viewMessage' && 'View Message'}
            {modalType === 'createEvent' && 'Add Event'}
            {modalType === 'editEvent' && 'Edit Event'}
            {modalType === 'createNotification' && 'Schedule Notification'}
          </h3>
          <button className="close-btn" onClick={closeModal}>×</button>
        </div>
        
        {(modalType === 'createAnnouncement' || modalType === 'editAnnouncement') && (
          <form>
            <div className="form-group">
              <label className="form-label">Announcement Title</label>
              <input type="text" className="form-control" defaultValue={selectedItem?.title} />
            </div>
            <div className="form-group">
              <label className="form-label">Target Audience</label>
              <select className="form-control" defaultValue={selectedItem?.targetAudience}>
                <option value="">Select audience...</option>
                <option value="All School">All School</option>
                <option value="All Parents">All Parents</option>
                <option value="All Students">All Students</option>
                <option value="All Teachers">All Teachers</option>
                <option value="Students (9-12)">Students (9-12)</option>
                <option value="Class 10A">Class 10A</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Message</label>
              <textarea className="form-control" rows="5" defaultValue={selectedItem?.message}></textarea>
            </div>
            <div className="form-group">
              <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <input type="checkbox" defaultChecked={selectedItem?.urgent} />
                Mark as urgent
              </label>
            </div>
            <div className="form-group">
              <label className="form-label">Attach Files (Optional)</label>
              <input type="file" className="form-control" multiple />
              <small style={{ color: '#666' }}>Supported formats: PDF, DOC, DOCX</small>
            </div>
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
              <button type="button" className="btn btn-secondary" onClick={closeModal}>
                Save as Draft
              </button>
              <button type="submit" className="btn btn-primary">
                Publish Announcement
              </button>
            </div>
          </form>
        )}

        {modalType === 'composeMessage' && (
          <form>
            <div className="form-group">
              <label className="form-label">To</label>
              <select className="form-control">
                <option value="">Select recipient...</option>
                <option value="all-teachers">All Teachers</option>
                <option value="all-parents">All Parents</option>
                <option value="class-10a-parents">Class 10A Parents</option>
                <option value="individual">Individual User</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Subject</label>
              <input type="text" className="form-control" placeholder="Enter message subject" />
            </div>
            <div className="form-group">
              <label className="form-label">Message</label>
              <textarea className="form-control" rows="6" placeholder="Type your message here..."></textarea>
            </div>
            <div className="form-group">
              <label className="form-label">Attach Files (Optional)</label>
              <input type="file" className="form-control" multiple />
              <small style={{ color: '#666' }}>Supported formats: PDF, DOC, DOCX, JPG, PNG</small>
            </div>
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
              <button type="button" className="btn btn-secondary" onClick={closeModal}>
                Save as Draft
              </button>
              <button type="submit" className="btn btn-primary">
                <Send size={16} />
                Send Message
              </button>
            </div>
          </form>
        )}

        {modalType === 'viewMessage' && selectedItem && (
          <div>
            <div style={{ marginBottom: '20px', padding: '15px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                <strong>From:</strong> {selectedItem.from}
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                <strong>To:</strong> {selectedItem.to}
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                <strong>Subject:</strong> {selectedItem.subject}
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <strong>Date:</strong> {selectedItem.timestamp}
              </div>
            </div>
            <div style={{ marginBottom: '20px', padding: '15px', border: '1px solid #eee', borderRadius: '8px' }}>
              <p>{selectedItem.message}</p>
            </div>
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
              <button className="btn btn-secondary" onClick={closeModal}>
                Close
              </button>
              <button className="btn btn-primary">
                <Send size={16} />
                Reply
              </button>
            </div>
          </div>
        )}

        {(modalType === 'createEvent' || modalType === 'editEvent') && (
          <form>
            <div className="grid grid-2" style={{ gap: '15px' }}>
              <div className="form-group">
                <label className="form-label">Event Title</label>
                <input type="text" className="form-control" defaultValue={selectedItem?.title} />
              </div>
              <div className="form-group">
                <label className="form-label">Event Type</label>
                <select className="form-control" defaultValue={selectedItem?.type}>
                  <option value="">Select type...</option>
                  <option value="Meeting">Meeting</option>
                  <option value="Event">Event</option>
                  <option value="Exam">Exam</option>
                  <option value="Holiday">Holiday</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Date</label>
                <input type="date" className="form-control" defaultValue={selectedItem?.date} />
              </div>
              <div className="form-group">
                <label className="form-label">Time</label>
                <input type="text" className="form-control" defaultValue={selectedItem?.time} placeholder="e.g., 9:00 AM - 5:00 PM" />
              </div>
              <div className="form-group">
                <label className="form-label">Venue</label>
                <input type="text" className="form-control" defaultValue={selectedItem?.venue} />
              </div>
              <div className="form-group">
                <label className="form-label">Target Audience</label>
                <select className="form-control" defaultValue={selectedItem?.targetAudience}>
                  <option value="">Select audience...</option>
                  <option value="All School">All School</option>
                  <option value="Parents & Teachers">Parents & Teachers</option>
                  <option value="All Students">All Students</option>
                  <option value="All Teachers">All Teachers</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">Description</label>
              <textarea className="form-control" rows="4" defaultValue={selectedItem?.description}></textarea>
            </div>
            <div className="form-group">
              <label className="form-label">Organizer</label>
              <input type="text" className="form-control" defaultValue={selectedItem?.organizer} />
            </div>
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
              <button type="button" className="btn btn-secondary" onClick={closeModal}>
                Cancel
              </button>
              <button type="submit" className="btn btn-primary">
                {modalType === 'createEvent' ? 'Add Event' : 'Save Changes'}
              </button>
            </div>
          </form>
        )}

        {modalType === 'createNotification' && (
          <form>
            <div className="form-group">
              <label className="form-label">Notification Title</label>
              <input type="text" className="form-control" placeholder="Enter notification title" />
            </div>
            <div className="form-group">
              <label className="form-label">Message</label>
              <textarea className="form-control" rows="3" placeholder="Enter notification message"></textarea>
            </div>
            <div className="form-group">
              <label className="form-label">Recipients</label>
              <select className="form-control" multiple>
                <option value="all-parents">All Parents</option>
                <option value="all-students">All Students</option>
                <option value="all-teachers">All Teachers</option>
                <option value="class-10a">Class 10A</option>
                <option value="class-10b">Class 10B</option>
              </select>
              <small style={{ color: '#666' }}>Hold Ctrl to select multiple</small>
            </div>
            <div className="form-group">
              <label className="form-label">Notification Channels</label>
              <div style={{ display: 'flex', gap: '15px', marginTop: '8px' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <input type="checkbox" />
                  <Mail size={16} />
                  Email
                </label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <input type="checkbox" />
                  <Smartphone size={16} />
                  SMS
                </label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <input type="checkbox" />
                  <Bell size={16} />
                  Push Notification
                </label>
              </div>
            </div>
            <div className="grid grid-2" style={{ gap: '15px' }}>
              <div className="form-group">
                <label className="form-label">Schedule Date</label>
                <input type="date" className="form-control" />
              </div>
              <div className="form-group">
                <label className="form-label">Schedule Time</label>
                <input type="time" className="form-control" />
              </div>
            </div>
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
              <button type="button" className="btn btn-secondary" onClick={closeModal}>
                Cancel
              </button>
              <button type="submit" className="btn btn-primary">
                Schedule Notification
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default CommunicationModal;