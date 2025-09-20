import React from 'react';
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SearchSuggestions = ({ suggestions, onNavigate, query }) => {
  const navigate = useNavigate();

  const handleSuggestionClick = (path) => {
    navigate(path);
    if (onNavigate) onNavigate();
  };

  if (!query || suggestions.length === 0) {
    return null;
  }

  return (
    <div className="search-suggestions">
      <div className="suggestions-list">
        {suggestions.map((suggestion) => (
          <div
            key={suggestion.id}
            className="suggestion-item"
            onClick={() => handleSuggestionClick(suggestion.path)}
          >
            <Search size={16} />
            <div className="suggestion-content">
              <div className="suggestion-title">{suggestion.title}</div>
              <div className="suggestion-description">{suggestion.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchSuggestions;