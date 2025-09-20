import React, { useState, useEffect, useRef } from 'react'
import { Search, Bell, Menu, LogOut } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import ThemeSwitcher from '../ThemeSwitcher'
import useMediaQuery from '../../hooks/useMediaQuery'
import { search } from '../../utils/search'
import SearchSuggestions from './SearchSuggestions'
import NotificationDropdown from './NotificationDropdown'
import UserProfileDropdown from './UserProfileDropdown'

const Header = ({ onMenuClick, onLogout, userRole }) => {
  const [searchFocused, setSearchFocused] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const navigate = useNavigate()
  const searchInputRef = useRef(null)
  const isMobile = useMediaQuery('(max-width: 768px)')
  
  // Handle search input changes
  useEffect(() => {
    if (searchQuery.trim() !== '') {
      const results = search(searchQuery)
      setSearchResults(results)
    } else {
      setSearchResults([])
    }
  }, [searchQuery])
  
  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        searchInputRef.current?.focus()
      }
    }
    
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])
  
  const handleSearchSubmit = (e) => {
    e.preventDefault()
    if (searchResults.length > 0) {
      navigate(searchResults[0].path)
      setSearchQuery('')
      setSearchResults([])
      setSearchFocused(false)
    }
  }
  
  const handleSuggestionNavigate = () => {
    setSearchQuery('')
    setSearchResults([])
    setSearchFocused(false)
  }
  
  // Handle logout with navigation to login page
  const handleLogout = () => {
    // Navigate to login page first
    navigate('/')
    // Then call the logout function
    onLogout()
  }
  
  return (
    <header className="header">
      <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
        {isMobile && (
          <button 
            className="btn btn-outline"
            onClick={onMenuClick}
            style={{ 
              padding: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: 'none',
              backgroundColor: 'transparent',
              cursor: 'pointer'
            }}
            aria-label="Toggle menu"
          >
            <Menu size={20} />
          </button>
        )}
        <div 
          className="search-bar"
          style={{ 
            transition: 'all 0.3s ease',
            boxShadow: searchFocused ? '0 0 0 3px rgba(59, 130, 246, 0.2)' : 'none',
            position: 'relative'
          }}
        >
          <form onSubmit={handleSearchSubmit} style={{ display: 'flex', alignItems: 'center' }}>
            <Search size={20} />
            <input 
              ref={searchInputRef}
              type="text" 
              placeholder={isMobile ? "Search..." : "Search students, teachers, courses... (Ctrl+K)"} 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setSearchFocused(true)}
              onBlur={() => {
                // Delay to allow click on suggestions
                setTimeout(() => setSearchFocused(false), 150)
              }}
              style={{ 
                width: isMobile ? '120px' : '300px',
                transition: 'width 0.3s ease'
              }}
            />
          </form>
          
          {searchFocused && (
            <SearchSuggestions 
              suggestions={searchResults} 
              onNavigate={handleSuggestionNavigate}
              query={searchQuery}
            />
          )}
        </div>
      </div>
      
      <div className="user-menu">
        <ThemeSwitcher />
        <NotificationDropdown userRole={userRole} />
        <UserProfileDropdown userRole={userRole} onLogout={handleLogout} />
      </div>
    </header>
  )
}

export default Header
