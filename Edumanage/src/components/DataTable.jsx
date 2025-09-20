import React, { useState } from 'react'
import { Search, Filter, ChevronDown, ChevronUp, MoreHorizontal } from 'lucide-react'

const DataTable = ({ 
  title, 
  columns, 
  data, 
  actions,
  searchable = true,
  filterable = true 
}) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' })
  const [filters, setFilters] = useState({})

  const handleSort = (key) => {
    let direction = 'asc'
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc'
    }
    setSortConfig({ key, direction })
  }

  const filteredData = data.filter(item => {
    // Apply search filter
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase()
      const matchesSearch = Object.values(item).some(value => 
        value.toString().toLowerCase().includes(searchLower)
      )
      if (!matchesSearch) return false
    }
    
    // Apply column filters
    for (const [key, value] of Object.entries(filters)) {
      if (value && item[key] !== value) return false
    }
    
    return true
  })

  const sortedData = [...filteredData].sort((a, b) => {
    if (!sortConfig.key) return 0
    const aValue = a[sortConfig.key]
    const bValue = b[sortConfig.key]
    
    if (aValue < bValue) {
      return sortConfig.direction === 'asc' ? -1 : 1
    }
    if (aValue > bValue) {
      return sortConfig.direction === 'asc' ? 1 : -1
    }
    return 0
  })

  // Get unique values for each filterable column
  const getUniqueValues = (key) => {
    return [...new Set(data.map(item => item[key]))]
  }

  return (
    <div className="card" style={{ padding: '0' }}>
      <div style={{ 
        padding: '24px 24px 16px',
        borderBottom: '1px solid var(--border-color)'
      }}>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          marginBottom: '20px',
          flexWrap: 'wrap',
          gap: '16px'
        }}>
          <h3 style={{ 
            fontSize: '1.25rem', 
            fontWeight: '600', 
            margin: 0,
            color: 'var(--text-primary)',
            flex: '1',
            minWidth: '200px'
          }}>
            {title}
          </h3>
          <div style={{ 
            display: 'flex', 
            gap: '12px',
            flexWrap: 'wrap'
          }}>
            {searchable && (
              <div className="search-bar" style={{ 
                width: '240px', 
                margin: 0,
                minWidth: '180px'
              }}>
                <Search size={18} />
                <input 
                  type="text" 
                  placeholder="Search..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  style={{ fontSize: '14px' }}
                />
              </div>
            )}
            {filterable && (
              <button className="btn btn-outline" style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '8px' 
              }}>
                <Filter size={16} />
                <span style={{ whiteSpace: 'nowrap' }}>Filters</span>
              </button>
            )}
            <button className="btn btn-primary">
              Add New
            </button>
          </div>
        </div>
        
        {filterable && Object.keys(filters).length > 0 && (
          <div style={{ 
            display: 'flex', 
            gap: '12px', 
            marginBottom: '16px',
            flexWrap: 'wrap'
          }}>
            {Object.entries(filters).map(([key, value]) => (
              value && (
                <div key={key} style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '6px',
                  background: 'var(--background-secondary)',
                  padding: '6px 12px',
                  borderRadius: '20px',
                  fontSize: '12px'
                }}>
                  <span>{columns.find(col => col.key === key)?.label}: {value}</span>
                  <button 
                    onClick={() => setFilters(prev => ({ ...prev, [key]: '' }))}
                    style={{ 
                      background: 'none', 
                      border: 'none', 
                      color: 'var(--text-secondary)',
                      cursor: 'pointer',
                      padding: '2px'
                    }}
                  >
                    ×
                  </button>
                </div>
              )
            ))}
          </div>
        )}
      </div>
      
      <div style={{ overflowX: 'auto' }}>
        <table className="table" style={{ margin: 0, minWidth: '600px' }}>
          <thead>
            <tr>
              {columns.map(column => (
                <th 
                  key={column.key}
                  onClick={() => column.sortable !== false && handleSort(column.key)}
                  style={{ 
                    cursor: column.sortable !== false ? 'pointer' : 'default',
                    userSelect: column.sortable !== false ? 'none' : 'auto',
                    position: 'relative',
                    whiteSpace: 'nowrap'
                  }}
                >
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: column.align === 'right' ? 'flex-end' : 'flex-start',
                    gap: '8px'
                  }}>
                    <span>{column.label}</span>
                    {column.sortable !== false && sortConfig.key === column.key && (
                      sortConfig.direction === 'asc' ? 
                        <ChevronUp size={16} /> : 
                        <ChevronDown size={16} />
                    )}
                  </div>
                </th>
              ))}
              {actions && <th style={{ textAlign: 'right', whiteSpace: 'nowrap' }}>Actions</th>}
            </tr>
          </thead>
          <tbody>
            {sortedData.map((item, index) => (
              <tr key={index}>
                {columns.map(column => (
                  <td 
                    key={column.key}
                    style={{ 
                      textAlign: column.align || 'left',
                      fontWeight: column.bold ? '500' : 'normal',
                      whiteSpace: column.nowrap ? 'nowrap' : 'normal',
                      maxWidth: column.maxWidth || 'none',
                      overflow: column.maxWidth ? 'hidden' : 'visible',
                      textOverflow: column.maxWidth ? 'ellipsis' : 'clip'
                    }}
                  >
                    {column.render ? column.render(item[column.key], item) : item[column.key]}
                  </td>
                ))}
                {actions && (
                  <td style={{ textAlign: 'right' }}>
                    <button className="btn btn-outline btn-sm">
                      <MoreHorizontal size={16} />
                    </button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {sortedData.length === 0 && (
        <div style={{ 
          textAlign: 'center', 
          padding: '40px 20px',
          color: 'var(--text-secondary)'
        }}>
          <p>No data found</p>
        </div>
      )}
    </div>
  )
}

export default DataTable