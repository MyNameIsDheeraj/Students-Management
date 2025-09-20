import React from 'react';
import { Upload, Eye, Download, Edit, Trash2 } from 'lucide-react';

const DigitalLibraryTab = ({ digitalResources, openModal, getStatusBadge }) => {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h3>Digital Library</h3>
        <button className="btn btn-primary" onClick={() => openModal('uploadDigital')}>
          <Upload size={16} />
          Upload Resource
        </button>
      </div>

      <div className="grid grid-1">
        {digitalResources.map((resource) => (
          <div key={resource.id} className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '15px' }}>
              <div>
                <h4>{resource.title}</h4>
                <div style={{ display: 'flex', gap: '20px', marginBottom: '10px' }}>
                  <span style={{ fontSize: '14px' }}><strong>Type:</strong> {resource.type}</span>
                  <span style={{ fontSize: '14px' }}><strong>Subject:</strong> {resource.subject}</span>
                  <span style={{ fontSize: '14px' }}><strong>Class:</strong> {resource.class}</span>
                </div>
                <div style={{ display: 'flex', gap: '20px', marginBottom: '10px' }}>
                  <span style={{ fontSize: '14px' }}><strong>Size:</strong> {resource.size}</span>
                  <span style={{ fontSize: '14px' }}><strong>Uploaded:</strong> {resource.uploadDate}</span>
                  <span style={{ fontSize: '14px' }}><strong>Downloads:</strong> {resource.downloads}</span>
                </div>
              </div>
              <span className={`badge ${getStatusBadge(resource.status)}`}>
                {resource.status}
              </span>
            </div>

            <div style={{ display: 'flex', gap: '10px' }}>
              <button className="btn btn-primary">
                <Eye size={16} />
                Preview
              </button>
              <button className="btn btn-success">
                <Download size={16} />
                Download
              </button>
              <button className="btn btn-secondary">
                <Edit size={16} />
                Edit
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

export default DigitalLibraryTab;