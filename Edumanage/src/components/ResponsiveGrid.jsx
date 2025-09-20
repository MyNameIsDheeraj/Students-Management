import React from 'react'

const ResponsiveGrid = ({ children, minColumnWidth = 300, gap = 24 }) => {
  return (
    <div 
      style={{
        display: 'grid',
        gap: `${gap}px`,
        gridTemplateColumns: `repeat(auto-fit, minmax(${minColumnWidth}px, 1fr))`,
        width: '100%'
      }}
    >
      {children}
    </div>
  )
}

export default ResponsiveGrid