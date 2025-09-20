import React from 'react';
import { Book, Search, Plus, User, Eye, Edit, Trash2 } from 'lucide-react';

const CatalogTab = ({ books, searchTerm, setSearchTerm, openModal, getStatusBadge }) => {
  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h3>Book Catalog</h3>
        <div style={{ display: 'flex', gap: '10px' }}>
          <div style={{ position: 'relative' }}>
            <Search size={20} style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: '#666' }} />
            <input
              type="text"
              placeholder="Search books..."
              className="form-control"
              style={{ paddingLeft: '40px', width: '250px' }}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button className="btn btn-primary" onClick={() => openModal('addBook')}>
            <Plus size={16} />
            Add Book
          </button>
        </div>
      </div>

      <div className="grid grid-1">
        {filteredBooks.map((book) => (
          <div key={book.id} className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '15px' }}>
              <div style={{ flex: 1 }}>
                <h4>{book.title}</h4>
                <p style={{ color: '#666', marginBottom: '5px' }}>by {book.author}</p>
                <div style={{ display: 'flex', gap: '20px', marginBottom: '10px' }}>
                  <span style={{ fontSize: '14px' }}><strong>ISBN:</strong> {book.isbn}</span>
                  <span style={{ fontSize: '14px' }}><strong>Category:</strong> {book.category}</span>
                  <span style={{ fontSize: '14px' }}><strong>Year:</strong> {book.year}</span>
                </div>
                <div style={{ display: 'flex', gap: '20px', marginBottom: '10px' }}>
                  <span style={{ fontSize: '14px' }}><strong>Publisher:</strong> {book.publisher}</span>
                  <span style={{ fontSize: '14px' }}><strong>Location:</strong> {book.location}</span>
                </div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <span className={`badge ${getStatusBadge(book.status)}`} style={{ marginBottom: '10px' }}>
                  {book.status}
                </span>
                <div style={{ fontSize: '14px', color: '#666' }}>
                  Available: {book.available}/{book.copies}
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '10px' }}>
              <button 
                className="btn btn-primary"
                onClick={() => openModal('issueBook', book)}
                disabled={book.available === 0}
              >
                <User size={16} />
                Issue Book
              </button>
              <button 
                className="btn btn-secondary"
                onClick={() => openModal('viewBook', book)}
              >
                <Eye size={16} />
                View Details
              </button>
              <button 
                className="btn btn-warning"
                onClick={() => openModal('editBook', book)}
              >
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

export default CatalogTab;